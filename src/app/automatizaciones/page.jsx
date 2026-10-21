import Link from "next/link";
import Carrusel from "../components/Carrusel";
import Reveal from "../components/Reveal";
import { meta, ldServicio } from "../../datos/seo";
import JsonLd from "../components/JsonLd";
import Faq from "../components/Faq";
import { FAQ_AUTOMATIZACIONES } from "../../datos/faq";
import { A_MEDIDA } from "../../datos/precios";

const DESDE = A_MEDIDA.find((x) => x.nombre === "Automatización a medida")?.precio;

export const metadata = meta({
  titulo: "Automatización de procesos para empresas",
  descripcion: "Conectamos WhatsApp, correo, calendarios, tu programa de gestión, el TPV y la facturación para que los datos dejen de pasar por tus manos. Sin cambiar de sistema.",
  ruta: "/automatizaciones",
});

const PROBLEMAS = [
  ["Copiar y pegar", "Los mismos datos de un sitio a otro, cada día."],
  ["Mensajes que duermen", "Un cliente escribe y nadie lo ve hasta mañana."],
  ["Informes a mano", "El cierre del mes se hace a mano y tarda una tarde."],
  ["Depender de la memoria", "Alguien tiene que acordarse. Y algún día no se acuerda."],
];

const FRENTES = [
  ["Captación y respuesta", "Los mensajes que entran se responden, se clasifican y se asignan solos. A cualquier hora."],
  ["Seguimiento comercial", "Recordatorios, avisos y siguientes pasos que salen sin que nadie los dispare."],
  ["Tareas internas", "Altas, bajas, documentos, notificaciones al equipo. Lo repetitivo deja de ser tuyo."],
  ["Informes", "Los números se recogen solos y llegan donde tienen que llegar."],
  ["Sincronización entre sistemas", "Un dato se introduce una vez. Aparece en todos lados."],
];

const CONECTORES = [
  "WhatsApp", "Correo", "Calendarios", "Programas de gestión (ERP)", "Facturación",
  "TPV", "Hojas de cálculo", "Bases de datos", "Conexiones a medida",
];

/* Antes de empezar. El plazo es orientativo (aprobado por Josep, 20/10);
   el proceso completo vive en la portada (#pasos). */
const ANTES = [
  ["Plazo", "Días o semanas, no meses", "Un flujo sencillo, unos días; si hay que tocar varios sistemas, unas semanas. La fecha exacta te la damos por escrito antes de empezar."],
  ["De tu parte", "Un acceso y una persona", "Acceso a las herramientas que conectamos y alguien que conozca el proceso por dentro."],
  ["Parada", "Ninguna", "Se monta en paralelo a lo que ya usas. No hay día de corte."],
  ["Después", "Las primeras semanas", "Lo vigilamos funcionando y lo ajustamos. Y si quieres, lo seguimos cuidando con el mantenimiento."],
];

const ENTRADAS = [
  ["WhatsApp", 20, 41],
  ["Email", 80, 101],
  ["Formularios", 140, 161],
  ["TPV", 200, 221],
];

const SALIDAS = [
  ["Tu gestión", 20, 41],
  ["Tu agenda", 110, 131],
  ["Tu equipo", 200, 221],
];

export default function Automatizaciones() {
  return (
    <Reveal>
      <JsonLd datos={ldServicio({ nombre: "Automatización de procesos", tipo: "Automatización e integración de sistemas", descripcion: "Integración de WhatsApp, correo, calendarios, ERP, TPV y facturación para automatizar la captación, el seguimiento, las tareas internas y los informes.", ruta: "/automatizaciones", desde: [["Automatización a medida", 250]] })} />
      <section className="hero">
        <div className="wrap hero-copy">
          <span className="eyebrow rv">Automatización de procesos para pymes</span>
          <h1 className="sheen rv">
            Tus herramientas ya existen.
            <br />
            <em className="glow-txt">Solo no se hablan</em>.
          </h1>
          <p className="lead rv">
            Conectamos lo que ya usas para que los datos dejen de pasar por tus
            manos. Sin cambiar de sistema, y <span className="nw">{DESDE}</span> por
            automatización.
          </p>
          <div className="cta-row rv">
            <Link className="btn" href="/contacto?motivo=automatizaciones">
              Cuéntanos tu proceso
            </Link>
          </div>
        </div>
      </section>

      {/* En móvil se oculta: lo que cuenta el esquema ya está en el texto de
          debajo, y así la página queda más limpia y corta. */}
      <section className="flush ocultar-movil">
        <div className="wrap rv rv-ya">
          <div className="diagram">
            <svg
              viewBox="0 0 900 250"
              width="100%"
              role="img"
              aria-label="Esquema: entradas dispersas pasan por un flujo automático y llegan a tus sistemas"
            >
              {ENTRADAS.map(([nombre, y, ty]) => (
                <g key={nombre}>
                  <rect x="24" y={y} width="150" height="42" rx="11" className="dbox" />
                  <text x="42" y={ty + 5} className="dt" style={{ fontSize: 11 }}>
                    {nombre}
                  </text>
                  <path className="dl-a" d={`M174 ${y + 21} C260 ${y + 21} 280 131 366 131`} />
                </g>
              ))}

              <rect x="366" y="100" width="168" height="62" rx="14" className="dbox-h" />
              <text x="392" y="128" className="dt" style={{ fontSize: 13 }}>
                Flujo automático
              </text>
              <text x="392" y="146" className="ds">
                SIN MANOS
              </text>

              {SALIDAS.map(([nombre, y, ty]) => (
                <g key={nombre}>
                  <path className="dl-a" d={`M534 131 C620 131 640 ${y + 21} 726 ${y + 21}`} />
                  <rect x="726" y={y} width="150" height="42" rx="11" className="dbox" />
                  <text x="744" y={ty + 5} className="dt" style={{ fontSize: 11 }}>
                    {nombre}
                  </text>
                </g>
              ))}

              <circle cx="366" cy="131" r="3.5" fill="var(--d-node)" />
              <circle cx="534" cy="131" r="3.5" fill="var(--d-node)" />
            </svg>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">El problema</span>
            <h2 className="sheen">
              Si algo de esto te suena,
              <br />se puede automatizar
            </h2>
          </div>
          <Carrusel clase="grid g4">
            {PROBLEMAS.map(([titulo, texto]) => (
              <div className="card" key={titulo}>
                <h3>{titulo}</h3>
                <p className="dim">{texto}</p>
              </div>
            ))}
          </Carrusel>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Qué automatizamos</span>
            <h2 className="sheen">Cinco frentes donde se va el tiempo</h2>
          </div>
          <div className="rows rv">
            {FRENTES.map(([titulo, texto]) => (
              <div className="rrow" key={titulo}>
                <div>
                  <h3>{titulo}</h3>
                </div>
                <div>
                  <p>{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Con qué conectamos</span>
            <h2 className="sheen">Nos adaptamos a lo que ya usas</h2>
          </div>
          <div className="chips rv">
            {CONECTORES.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
          <p className="dim center rv">
            ¿No está en la lista? Pregúntanos: casi siempre se puede, y si no,
            te lo decimos.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Antes de empezar</span>
            <h2 className="sheen">Cuánto tarda y qué necesitamos de ti</h2>
          </div>
          <div className="rows rv">
            {ANTES.map(([etiqueta, titulo, texto]) => (
              <div className="rrow" key={etiqueta}>
                <div>
                  <span className="tick">{etiqueta}</span>
                  <h3>{titulo}</h3>
                </div>
                <div>
                  <p>{texto}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="dim center rv">
            <Link className="ilink" href="/#pasos">El proceso completo, paso a paso</Link>
          </p>
        </div>
      </section>

      <Faq titulo="Preguntas sobre automatizaciones" preguntas={FAQ_AUTOMATIZACIONES} />

      <section>
        <div className="wrap rv">
          <div className="bigcta">
            <span className="eyebrow">Media hora gratis</span>
            <h2 className="sheen">Dinos qué haces a mano cada semana</h2>
            <p className="lead">
              Con eso ya podemos decirte qué se puede quitar de en medio. Cada
              automatización, <span className="nw">{DESDE}</span>; el precio
              exacto, por escrito antes de empezar.
            </p>
            <div className="cta-row">
              <Link className="btn" href="/contacto?motivo=automatizaciones">
                Contar mi proceso
              </Link>
              <Link className="btn ghost" href="/precios#a-medida">
                Ver precios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
