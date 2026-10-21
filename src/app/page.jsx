import Link from "next/link";
import Carrusel from "./components/Carrusel";
import Reveal from "./components/Reveal";
import { meta, ldEmpresa } from "../datos/seo";
import JsonLd from "./components/JsonLd";

export const metadata = meta({
  titulo: "CRM, páginas web y automatizaciones para pymes · Synora",
  descripcion: "CRM para pymes a medida, diseño de páginas web y apps, y automatización de WhatsApp y procesos con IA. Para que tu negocio funcione sin que estés encima.",
  ruta: "/",
  absoluto: true,
});

function Flecha() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PILARES = [
  {
    href: "/crm",
    tick: "01 — CRM",
    titulo: "Un CRM que se monta por piezas",
    texto:
      "Más de quince módulos para captar, vender y organizarte. Empiezas por lo que necesitas y añades cuando toque.",
    cta: "Ver el CRM",
    destacado: true,
  },
  {
    href: "/desarrollo",
    tick: "02 — Desarrollo",
    titulo: "Lo montamos y lo gestionas tú",
    texto:
      "Página web, tienda online, app móvil y área privada, con panel de gestión si quieres cambiarlas tú.",
    cta: "Ver desarrollo",
  },
  {
    href: "/automatizaciones",
    tick: "03 — Automatizaciones",
    titulo: "Sin cambiar ninguna de tus herramientas",
    texto:
      "Conectamos WhatsApp, correo, calendarios, tu programa de gestión, el TPV y la facturación. Y lo que haga falta a medida.",
    cta: "Ver automatizaciones",
  },
];

const COMPARATIVA = [
  ["Contactos", "Respondes cuando puedes. El que no espera, se va.", "Respuesta en segundos, a cualquier hora."],
  ["Agenda", "Llamadas, WhatsApps y huecos que se pierden.", "Citas confirmadas solas. Menos huecos perdidos."],
  ["Seguimiento", "El que se enfría, se pierde.", "Seguimiento automático a cada interesado."],
  ["Datos", "Excel, correo, papel y la cabeza de alguien.", "Un panel. Todo. En tiempo real."],
  ["Crecer", "Más volumen, más gente.", "Más volumen, el mismo equipo."],
];

/* Un día cualquiera, con lo que hacen los planes que más se contratan
   (Esencial y Crecimiento). Sustituye a la demo del asistente, que es de
   Pro y ahora vive en /crm. Nada de cifras que no se puedan cumplir. */
const LUNES = [
  ["08:05", "Recordatorio enviado", "Tu cliente de las 10:00 recibe el aviso de su cita sin que nadie lo mande.", "Esencial"],
  ["13:20", "Contacto nuevo, ya atendido", "Alguien escribe desde tu web: entra solo en el CRM y recibe respuesta al momento.", "Esencial"],
  ["17:30", "Nadie se enfría", "Un interesado lleva tres días sin noticias y el seguimiento le escribe por ti.", "Crecimiento"],
  ["23:40", "WhatsApp a deshora", "Te preguntan cuando ya has cerrado. El chatbot responde y deja la cita apuntada.", "Crecimiento"],
];

/* El proceso de todo el sitio vive aquí (#pasos); Automatizaciones enlaza
   a esta sección. Primero la charla gratis; la auditoría, solo si hace falta. */
const PASOS = [
  ["PASO 01", "Vemos dónde pierdes tiempo", "Media hora gratis: nos cuentas cómo trabajas y te decimos qué haría falta."],
  ["PASO 02", "Te enseñamos cómo quedará", "Paso a paso y con el precio por escrito, antes de tocar nada."],
  ["PASO 03", "Lo conectamos con lo que ya usas", "Se monta en paralelo, sin parar tu negocio."],
  ["PASO 04", "Lo ponemos en marcha", "Formamos a tu equipo y lo ajustamos durante las primeras semanas."],
];

const SECTORES = [
  ["Inmobiliarias", "Captación 24/7 y tasación con IA."],
  ["Clínicas", "Dentales, de fisio o estética: agenda, recordatorios y pacientes que vuelven."],
  ["Asesorías y gestorías", "Clientes, documentos y plazos en un solo sitio."],
  ["Restaurantes", "Menos reservas perdidas y ficha de cliente."],
];

export default function Inicio() {
  return (
    <Reveal>
      <JsonLd datos={ldEmpresa()} />
      <section className="hero">
        <div className="wrap hero-copy">
          <span className="eyebrow rv">CRM · Desarrollo · Automatizaciones</span>
          <h1 className="sheen rv">
            Tu negocio no necesita trabajar más,
            <br />
            necesita <em className="glow-txt">trabajar solo</em>.
          </h1>
          <p className="lead rv">
            CRM propio, webs y automatizaciones para pymes: que ningún cliente
            se quede sin respuesta y lo repetitivo se haga solo.
          </p>
          <div className="cta-row rv">
            <Link className="btn" href="/contacto">
              Cuéntanos tu caso
            </Link>
            <Link className="btn ghost" href="/precios">
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      <section className="stance-sec">
        <div className="wrap">
          <div className="stance rv rv-ya">
            <span className="eyebrow">Quiénes somos</span>
            <p>
              <i>
                Somos una empresa pequeña de España y trabajamos al revés que
                casi todos: no te obligamos a cambiar de herramientas, empiezas
                por lo que necesitas y no te dejamos con un manual.
              </i>{" "}
              Lo montamos, lo dejamos en marcha y te enseñamos a usarlo.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Qué hacemos</span>
            <h2 className="sheen">
              Tres formas de quitarte
              <br />
              trabajo de encima
            </h2>
            <p className="lead">
              Puedes empezar por una. Al final acaban conectadas.
            </p>
          </div>
          <Carrusel clase="pillars">
            {PILARES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`card pillar${p.destacado ? " hero-pillar" : ""}`}
              >
                <span className="tick">{p.tick}</span>
                <h3>{p.titulo}</h3>
                <p className="dim">{p.texto}</p>
                <span className="go">
                  {p.cta} <Flecha />
                </span>
              </Link>
            ))}
          </Carrusel>
        </div>
      </section>

      {/* Cabecera a la izquierda y lista a la derecha: rompe la fila de
          secciones con la cabecera centrada. */}
      <section>
        <div className="wrap split">
          <div className="head rv">
            <span className="eyebrow">Un día cualquiera</span>
            <h2 className="sheen">Un lunes en tu negocio</h2>
            <p className="lead">
              Lo que pasa solo mientras tú atiendes a tus clientes.
            </p>
            <div className="cta-row">
              <Link className="btn ghost" href="/precios">
                Ver qué incluye cada plan
              </Link>
            </div>
          </div>
          <ol className="lunes rv">
            {LUNES.map(([hora, titulo, texto, plan]) => (
              <li key={hora}>
                <time className="lunes-hora">{hora}</time>
                <div className="lunes-txt">
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </div>
                <Link className="lunes-plan" href="/precios">En {plan}</Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Antes y después</span>
            <h2 className="sheen">Cómo cambia tu semana</h2>
          </div>
          <div className="compare rv">
            <div className="crow hd">
              <span />
              <span>Sin Synora</span>
              <span>Con Synora</span>
            </div>
            {COMPARATIVA.map(([clave, sin, con]) => (
              <div className="crow" key={clave}>
                <b>{clave}</b>
                <p className="no">{sin}</p>
                <p className="yes">{con}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pasos">
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="sheen">De la primera charla al primer lunes funcionando</h2>
          </div>
          <div className="steps rv">
            {PASOS.map(([n, titulo, texto]) => (
              <div className="step" key={n}>
                <span className="n">{n}</span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Sectores</span>
            <h2 className="sheen">Dónde se pierde el tiempo en cada sector</h2>
            <p className="lead">
              Cada negocio lo pierde en sitios distintos. Estos son los más
              habituales.
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
        {/* Cada pieza entra por su cuenta (y no el conjunto): así la tarjeta
            desenfoca la palabra desde el primer instante. */}
        <div className="wrap">
          {/* La palabra es decoración: el título de la sección es el h2. */}
          <div className="palabra-cabeza rv" aria-hidden="true">
            <p className="sheen palabra-gigante larga">Hablemos</p>
          </div>
          <div className="bigcta cristal rv">
            <span className="eyebrow">Media hora gratis</span>
            <h2 className="sheen">Cuéntanos qué te está robando el tiempo</h2>
            <p className="lead">
              Sin compromiso. Te decimos qué haría falta y qué no.
            </p>
            <p className="proof">
              El CRM es nuestro, no una plantilla de terceros. Por eso podemos
              montarte un módulo que no existe en ningún catálogo.
            </p>
            <Link className="btn" href="/contacto">
              Pedir mi media hora
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
