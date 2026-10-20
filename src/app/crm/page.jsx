import Link from "next/link";
import Carrusel from "../components/Carrusel";
import Reveal from "../components/Reveal";
import { meta, ldServicio } from "../../datos/seo";
import JsonLd from "../components/JsonLd";
import AgenteDemo from "../components/AgenteDemo";
import { MODULOS } from "../../datos/precios";

/* Precio del asistente sacado del catálogo: si cambia allí, cambia aquí. */
const PRECIO_ASISTENTE = MODULOS.flatMap((g) => g.items).find(([n]) => n === "Asistente interno con IA")?.[2];

export const metadata = meta({
  titulo: "CRM a medida y modular para pymes",
  descripcion: "Un CRM que se adapta a tu empresa: más de 15 módulos para captar, convertir y gestionar clientes. Empiezas por lo que necesitas. Primera conversación gratis.",
  ruta: "/crm",
});

const PROBLEMAS = [
  ["Campos que nadie rellena", "Te obliga a trabajar como lo hizo alguien en otro país, para otro negocio."],
  ["Funciones que pagas y no usas", "Y las tres que de verdad necesitas, no están."],
  ["El equipo lo esquiva", "Si estorba en vez de ayudar, deja de usarse en dos meses."],
];

const CAPACIDADES = [
  {
    nombre: "Captar",
    texto: "Que ningún contacto se quede sin respuesta.",
    modulos: ["Chatbot de WhatsApp", "Chatbot en tu web", "Respuesta inmediata a contactos nuevos"],
  },
  {
    nombre: "Convertir",
    texto: "Que el interesado no se enfríe por el camino.",
    modulos: ["Embudo de ventas", "Seguimiento con IA", "Recordatorios automáticos", "Cruce de clientes y producto"],
  },
  {
    nombre: "Gestionar",
    texto: "Que todo esté en un sitio y lo vea quien tiene que verlo.",
    modulos: ["Asistente interno con IA", "Pasarela de publicación", "Transcripción de reuniones"],
  },
  {
    nombre: "Decidir",
    texto: "Que sepas qué está pasando antes de que pase.",
    modulos: ["Analíticas en tiempo real", "Aviso de clientes en riesgo"],
  },
  {
    nombre: "Tu sector",
    cuenta: "Específicos",
    texto: "Módulos que solo tienen sentido en un sector. Por ahora, inmobiliarias.",
    modulos: ["Tasación con IA", "Captador de particulares", "Pack Inmobiliaria", "Pack Inmobiliaria Pro"],
  },
];

const SECTORES = [
  ["Inmobiliarias", "Captación, tasación, embudo."],
  ["Clínicas", "Agenda, recordatorios, fidelización."],
  ["Gimnasios", "Bajas, altas, seguimiento."],
  ["Restaurantes", "Reservas, confirmación, ficha."],
];

const BARRAS = [36, 54, 43, 70, 61, 82, 96];

export default function Crm() {
  return (
    <Reveal>
      <JsonLd datos={ldServicio({ nombre: "CRM a medida", tipo: "Desarrollo e implantación de CRM", descripcion: "CRM modular a medida para pymes: captar, convertir, gestionar y decidir, con módulos por sector.", ruta: "/crm" })} />
      <section className="hero">
        <div className="wrap hero-copy">
          <span className="eyebrow rv">01 — CRM</span>
          <h1 className="sheen rv">
            Un CRM que se adapta a tu empresa.
            <br />
            <em className="glow-txt">No al revés</em>.
          </h1>
          <p className="lead rv">
            Se monta con módulos. Contratas lo que tu negocio necesita hoy y
            añades lo demás cuando toque.
          </p>
          <div className="cta-row rv">
            <a className="btn" href="#modulos">
              Ver los módulos
            </a>
            <Link className="btn ghost" href="/precios">
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      <section className="flush">
        <div className="wrap rv rv-ya">
          <div className="dash">
            <div className="dtop">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="eyebrow" style={{ marginLeft: 10 }}>
                panel de ejemplo
              </span>
            </div>
            <div className="dbody">
              <div className="dside">
                <i className="act">Resumen</i>
                <i>Contactos</i>
                <i>Agenda</i>
                <i>Seguimiento</i>
                <i>Equipo</i>
                <i>Analíticas</i>
                <i>Módulos</i>
              </div>
              <div className="dmain">
                <div className="kpis">
                  <div className="kpi">
                    <span>Contactos hoy</span>
                    <b>34</b>
                  </div>
                  <div className="kpi">
                    <span>Por responder</span>
                    <b>2</b>
                  </div>
                  <div className="kpi">
                    <span>Citas</span>
                    <b>12</b>
                  </div>
                </div>
                <div className="bars" aria-hidden="true">
                  {BARRAS.map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <span className="eyebrow">Contactos nuevos · últimos 7 días</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">El problema</span>
            <h2 className="sheen">
              ¿Probaste un CRM?
              <br />Seguro que acabaste volviendo al Excel.
            </h2>
          </div>
          <Carrusel clase="grid g3">
            {PROBLEMAS.map(([titulo, texto]) => (
              <div className="card" key={titulo}>
                <h3>{titulo}</h3>
                <p className="dim">{texto}</p>
              </div>
            ))}
          </Carrusel>
          <p className="lead center rv">
            Nosotros lo montamos al revés: primero miramos cómo trabajas,
            después decidimos qué módulos entran.
          </p>
        </div>
      </section>

      <section id="modulos">
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Se monta a tu medida</span>
            <h2 className="sheen">
              Cinco capacidades.
              <br />
              Los módulos que quieras de cada una.
            </h2>
          </div>
          <div className="rows rv">
            {CAPACIDADES.map((c) => (
              <div className="rrow" key={c.nombre}>
                <div>
                  <h3>{c.nombre}</h3>
                  <span className="tick">{c.cuenta ?? `${c.modulos.length} módulos`}</span>
                </div>
                <div>
                  <p>{c.texto}</p>
                  <div className="tags">
                    {c.modulos.map((m) => (
                      <span className="tag" key={m}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-row center rv">
            <Link className="btn ghost" href="/precios#modulos">
              Ver todos los módulos con su precio
            </Link>
          </div>
        </div>
      </section>


      {/* La demo de la esfera vivía en la portada. Aquí, junto al resto del
          CRM, se dice claro que el asistente es de Pro o un módulo aparte. */}
      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Asistente interno</span>
            <h2 className="sheen">Un asistente dentro de tu CRM</h2>
            <p className="lead">
              Vive dentro del CRM y hace el trabajo por ti: consulta, apunta,
              organiza la agenda y pone al día las fichas. Eliges su carácter
              y decides qué puede tocar y qué no.
            </p>
            <p className="agente-plan">
              Incluido en el plan Pro, o como módulo en cualquier plan por{" "}
              <span className="nw">{PRECIO_ASISTENTE?.replace("+", "")}</span>.
            </p>
          </div>
          <div className="rv">
            <AgenteDemo />
          </div>
          <div className="cta-row agente-cta rv">
            <Link className="btn ghost" href="/contacto?motivo=asistente">
              Quiero uno en mi negocio
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Por sector</span>
            <h2 className="sheen">Cada sector usa unos módulos distintos</h2>
            <p className="lead">
              Los que mejor encajan en cada tipo de negocio.
            </p>
          </div>
          <Carrusel clase="sectors">
            {SECTORES.map(([titulo, texto]) => (
              <div className="card sector" key={titulo}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </Carrusel>
        </div>
      </section>

      <section>
        <div className="wrap rv">
          <div className="bigcta">
            <span className="eyebrow">¿Por dónde empiezo?</span>
            <h2 className="sheen">¿No sabes qué módulos necesitas?</h2>
            <p className="lead">
              Normal. Empezamos por media hora, gratis: nos cuentas cómo
              trabajas y te decimos qué módulos harían falta. Si hay que mirar
              más a fondo, la auditoría (desde 200 €) se descuenta si seguimos.
            </p>
            <div className="cta-row">
              <Link className="btn" href="/contacto?motivo=crm">
                Pedir mi media hora
              </Link>
              <Link className="btn ghost" href="/precios">
                Ver precios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
