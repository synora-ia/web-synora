"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Esfera, Asistente } from "./esfera/esfera-core";
import "./esfera/esfera.css";

/* LA ESFERA, EN DIRECTO
   La misma esfera del CRM, sin IA detrás: un guion le manda los mismos
   eventos que le manda el asistente de verdad (pensar, buscar, editar, pedir
   permiso, responder), y ella reacciona igual que dentro del CRM.

   Solo corre cuando la sección se ve y se puede pausar (WCAG 2.2.2). Quien
   pide menos movimiento ve la conversación entera, quieta. */

const GUION = [
  { yo: "¿Qué tal el día?" },
  { piensa: 900 },
  { tool: { id: "resumen", action: "buscar", label: "Resumen", text: "Lo de hoy" }, ms: 1500, fin: "Listo" },
  { ag: "Te han escrito **3 clientes nuevos** desde ayer, y uno sigue sin respuesta desde las 9:40. Hoy tienes **4 citas**; la primera, a las 10:30 con Marta." },
  { espera: 3000 },

  { yo: "Pasa la de Marta a mañana, a la misma hora." },
  { piensa: 800 },
  { tool: { id: "prepara", action: "editar", label: "Preparar cambio", text: "Cita de las 10:30" }, ms: 1100, callado: true },
  { propuesta: { titulo: "Mover cita · Marta", corto: "Mover cita", antes: "Hoy, 10:30", despues: "Mañana, 10:30" } },
  { tool: { id: "mueve", action: "editar", label: "Mover cita", text: "A mañana" }, ms: 900, fin: "Movida" },
  { ag: "**Hecho.** La cita con Marta queda para mañana a las 10:30." },
  { espera: 3000 },

  { yo: "Acuérdate de que los viernes salgo a las tres." },
  { piensa: 700 },
  { tool: { id: "memoria", action: "crear", label: "Recordar", text: "Viernes, hasta las 15:00" }, ms: 1000, fin: "Apuntado" },
  { ag: "Apuntado. Los viernes no te propondré nada después de las 15:00." },
  { espera: 4500 },
];

/* La conversación completa, tal como queda al acabar el guion. */
const ENTERA = GUION.flatMap((p) =>
  p.yo ? [{ quien: "yo", texto: p.yo }]
  : p.ag ? [{ quien: "ag", texto: p.ag }]
  : p.propuesta ? [{ quien: "prop", ...p.propuesta, hecha: true }]
  : []
);

const esClaro = () => {
  const t = document.documentElement.dataset.theme;
  if (t) return t === "light";
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

/* **negrita** → <strong>, como en el CRM. */
function Texto({ children }) {
  return String(children)
    .split(/(\*\*[^*]+\*\*)/)
    .map((t, i) =>
      t.startsWith("**") ? <strong key={i}>{t.slice(2, -2)}</strong> : <Fragment key={i}>{t}</Fragment>
    );
}

const PARAR = Symbol("parar");

export default function AgenteDemo() {
  const raiz = useRef(null);
  const hueco = useRef(null);
  const registro = useRef(null);
  const ctl = useRef({ pausado: false, visible: false });
  const [msgs, setMsgs] = useState([]);
  const [limpiando, setLimpiando] = useState(false);
  const [estado, setEstado] = useState({ nombre: "En reposo", texto: "", tono: "#e6e8ee" });
  const [pausado, setPausado] = useState(false);
  const [quieta, setQuieta] = useState(false);

  useEffect(() => {
    const c = ctl.current;
    /* Cada montaje tiene su propia vida. Antes era una bandera compartida:
       si el componente se montaba dos veces (React lo hace en desarrollo, y
       puede pasar al volver atrás), el guion viejo se reactivaba junto al
       nuevo y escribían los dos a la vez: mensajes duplicados. */
    const vida = { viva: true };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setQuieta(reduce);

    const esfera = new Esfera(hueco.current, { mini: false, light: esClaro() });
    /* «No molestar»: sin sonidos ni vibración. En el CRM avisan de algo que
       te toca a ti; en una web que estás leyendo solo molestarían. */
    esfera.dnd = true;
    /* Su tarjeta de preguntas es un role="dialog" sin nombre (aviso de
       Lighthouse). En la web no se abre nunca, pero se le da nombre. */
    esfera.card?.setAttribute("aria-label", "Pregunta del asistente");
    const asis = new Asistente(esfera);

    /* Línea de estado bajo la esfera: en tamaño grande no pinta su etiqueta. */
    esfera.addEventListener("change", (e) => {
      const d = e.detail;
      /* Mientras responde, la esfera lleva en `text` la propia respuesta:
         ya se lee en la conversación, aquí solo sobraría. */
      const texto = d.state === "reply" ? "" : String(d.text || "").replace(/\*\*/g, "");
      setEstado({ nombre: d.state === "idle" ? "En reposo" : d.name, texto, tono: d.tone });
    });
    /* Tocarla saluda, como en el CRM. */
    esfera.addEventListener("tap", () => asis.emit("agent.greet"));

    /* Sigue al tema de la web. */
    const sincroniza = () => esfera.setLight(esClaro());
    const obs = new MutationObserver(sincroniza);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    mq.addEventListener("change", sincroniza);

    /* Solo avanza si la sección se ve y no está en pausa. */
    const io = new IntersectionObserver(([en]) => { c.visible = en.isIntersecting; }, { threshold: 0.35 });
    io.observe(raiz.current);

    const dormir = (ms) => new Promise((r) => setTimeout(r, ms));
    const espera = async (ms) => {
      let falta = ms;
      while (falta > 0) {
        if (!vida.viva) throw PARAR;
        if (c.pausado || !c.visible) { await dormir(120); continue; }
        const d = Math.min(50, falta);
        await dormir(d);
        falta -= d;
      }
    };
    const anade = (m) => setMsgs((xs) => [...xs, m]);
    const cambiaUltimo = (fn) => setMsgs((xs) => [...xs.slice(0, -1), fn(xs[xs.length - 1])]);

    /* Mientras «escribes», la esfera te lee mirando a tu mensaje.
       No se usa user.typing: asiente con cada pulsación, que en el CRM va
       con tu teclado pero aquí, al ritmo del guion, parecía que temblaba.
       Y su mirada de «te leo» apunta abajo, donde está el campo en el CRM;
       aquí se le dice dónde está el mensaje de verdad (a la derecha, o
       debajo en móvil). */
    const miraAlMensaje = () => {
      const tuyos = registro.current?.querySelectorAll(".ag-msg.yo");
      const ultimo = tuyos?.[tuyos.length - 1];
      if (!ultimo) return;
      const r = ultimo.getBoundingClientRect();
      esfera.mira({ x: r.right - 14, y: r.top + r.height / 2 }, 700);
    };

    async function escribeYo(texto) {
      anade({ quien: "yo", texto: "" });
      esfera.run("leer", { state: "hear", label: "Te leo", text: "" });
      for (let i = 1; i <= texto.length; i++) {
        cambiaUltimo((m) => ({ ...m, texto: texto.slice(0, i) }));
        miraAlMensaje();
        await espera(34);
      }
      await espera(350);
      esfera.finish("leer", null);
    }

    async function responde(texto) {
      anade({ quien: "ag", texto: "" });
      const palabras = texto.split(" ");
      for (let i = 1; i <= palabras.length; i++) {
        const parcial = palabras.slice(0, i).join(" ");
        cambiaUltimo((m) => ({ ...m, texto: parcial }));
        asis.emit("agent.text.delta", { text: palabras[i - 1] + " " });
        await espera(55);
      }
      asis.emit("agent.text.done");
    }

    async function propuesta(p) {
      anade({ quien: "prop", ...p, pulsado: false, hecha: false });
      esfera.run("pedir", { state: "need", label: "¿Lo hago?", text: p.corto });
      await espera(1900);
      cambiaUltimo((m) => ({ ...m, pulsado: true }));
      await espera(420);
      esfera.finish("pedir", null);
      cambiaUltimo((m) => ({ ...m, hecha: true }));
    }

    async function vuelta() {
      for (const p of GUION) {
        if (p.yo) await escribeYo(p.yo);
        else if (p.piensa) { asis.emit("agent.thinking", { now: true }); await espera(p.piensa); }
        else if (p.tool) {
          asis.emit("agent.tool.start", p.tool);
          await espera(p.ms);
          asis.emit("agent.tool.end", { id: p.tool.id, ok: true, text: p.fin, quiet: !!p.callado });
          if (!p.callado) await espera(500);
        }
        else if (p.propuesta) await propuesta(p.propuesta);
        else if (p.ag) await responde(p.ag);
        else if (p.espera) await espera(p.espera);
      }
      setLimpiando(true);
      await espera(450);
      asis.emit("reset");
      setMsgs([]);
      setLimpiando(false);
      await espera(900);
    }

    if (reduce) {
      setMsgs(ENTERA);
    } else {
      (async () => {
        try {
          await espera(700);
          while (vida.viva) await vuelta();
        } catch (e) {
          if (e !== PARAR) throw e;
        }
      })();
    }

    return () => {
      vida.viva = false;
      io.disconnect();
      obs.disconnect();
      mq.removeEventListener("change", sincroniza);
      asis.destroy();
      esfera.destroy();
    };
  }, []);

  function alternarPausa() {
    const siguiente = !ctl.current.pausado;
    ctl.current.pausado = siguiente;
    setPausado(siguiente);
  }

  return (
    <div className="agente" ref={raiz}>
      <div className="agente-escena">
        <div ref={hueco} className="agente-esfera" />
        <div className="agente-id">
          <span className="agente-estado" style={{ "--tono": estado.tono }}>
            <i aria-hidden="true" />
            <span className="txt">
              {estado.nombre}
              {estado.texto ? ` · ${estado.texto}` : ""}
            </span>
          </span>
        </div>
      </div>

      <div className="agente-chat">
        {!quieta && (
          <button
            type="button"
            className="agente-pausa"
            onClick={alternarPausa}
            aria-pressed={pausado}
            aria-label={pausado ? "Reanudar la demostración" : "Pausar la demostración"}
            title={pausado ? "Reanudar" : "Pausar"}
          >
            {pausado ? (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M4 2.5v9l7.5-4.5z" fill="currentColor" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M4 2.5v9M10 2.5v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            )}
          </button>
        )}
        <div
          ref={registro}
          className={`agente-log${limpiando ? " limpiando" : ""}`}
          role="log"
          aria-live="off"
          aria-label="Conversación de ejemplo con el agente"
        >
          {msgs.map((m, i) =>
            m.quien === "prop" ? (
              <div key={i} className={`ag-prop${m.hecha ? " hecha" : ""}`}>
                <span className="k">Propuesta · ¿Lo hago?</span>
                <b>{m.titulo}</b>
                <span className="cambio">
                  {m.antes} <span aria-hidden="true">→</span> {m.despues}
                </span>
                <span className="acts">
                  <span className={`si${m.pulsado ? " pulsado" : ""}`}>Sí, hazlo</span>
                  <span>No</span>
                </span>
              </div>
            ) : (
              <p key={i} className={`ag-msg ${m.quien}`}>
                <Texto>{m.texto || " "}</Texto>
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
