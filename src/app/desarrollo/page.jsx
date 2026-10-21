import Link from "next/link";
import Reveal from "../components/Reveal";
import { meta, ldServicio } from "../../datos/seo";
import JsonLd from "../components/JsonLd";
import Faq from "../components/Faq";
import { FAQ_DESARROLLO } from "../../datos/faq";
import { SIN_CRM } from "../../datos/precios";

const MANTENIMIENTO = SIN_CRM.find(([n]) => n === "Mantenimiento de web o app")?.[2];

export const metadata = meta({
  titulo: "Diseño de páginas web, tiendas online y apps",
  descripcion: "Diseño de páginas web a medida desde 600 €, tiendas online y apps para Android e iOS sin pasar por las tiendas. Rápidas, listas para Google y el código es tuyo.",
  ruta: "/desarrollo",
});

const QUE_MONTAMOS = [
  {
    nombre: "Webs y sistemas",
    tick: "A medida",
    texto: (
      <>
        Tu web no es un folleto: es la puerta de entrada a tu negocio. Rápida,
        fácil de encontrar en Google y hecha para captar. Si quieres cambiarla tú sin llamar a
        nadie, le añadimos su panel de gestión; y si usas nuestro CRM, tus
        inmuebles o productos se publican solos en ella.
      </>
    ),
  },
  {
    nombre: "Tiendas online",
    tick: "Tienda",
    texto: (
      <>
        Con su catálogo, pagos y pedidos. Y, si hace falta, conectada a tu
        stock, tus envíos o tu facturación: sin apuntar las cosas dos veces.
      </>
    ),
  },
  {
    nombre: "Aplicaciones móviles",
    tick: "Android · iOS",
    texto: (
      <>
        Una sola app para Android e iOS que se instala desde el navegador en un
        momento, sin pasar por App Store ni Google Play. Dos caminos según lo
        que necesites: <strong>app para tus clientes</strong> —reservas,
        pedidos, fidelización, seguimiento— o <strong>app para tu equipo</strong>{" "}
        —operativa en campo, partes de trabajo, control interno.
      </>
    ),
  },
  {
    nombre: "Portales y áreas privadas",
    tick: "Acceso restringido",
    texto: (
      <>
        Zonas privadas para clientes, proveedores o empleados. Cada uno ve lo
        suyo y nada más.
      </>
    ),
  },
];

const COMPROMISOS = [
  ["01", "Rápido de verdad", "Medimos la velocidad antes de entregar y te enseñamos el resultado. Lo que carga lento no vende."],
  ["02", "Fácil de encontrar", "Preparado para Google desde el primer día, no como parche al final."],
  ["03", "El código es tuyo", "Te lo entregamos. No te quedas atado a nosotros."],
  ["04", "Lo cuidamos después", `Si quieres, nos ocupamos del mantenimiento: ${MANTENIMIENTO}.`],
];

export default function Desarrollo() {
  return (
    <Reveal>
      <JsonLd datos={ldServicio({ nombre: "Desarrollo web y de aplicaciones", tipo: "Desarrollo de software a medida", descripcion: "Webs a medida, tiendas online, aplicaciones web instalables para Android e iOS y áreas privadas, conectadas a la operativa del negocio.", ruta: "/desarrollo", desde: [["Web a medida", 600], ["Tienda online", 800], ["App para Android e iOS (PWA)", 800]] })} />
      <section className="hero">
        <div className="wrap hero-copy">
          <span className="eyebrow rv">Diseño de páginas web, tiendas y apps</span>
          <h1 className="sheen rv">
            No hacemos páginas.
            <br />
            <em className="glow-txt">Montamos sistemas</em>.
          </h1>
          <p className="lead rv">
            Páginas web, tiendas online y aplicaciones móviles. Todo conectado
            a tu negocio, no como piezas sueltas.
          </p>
          <div className="cta-row rv">
            <Link className="btn" href="/contacto?motivo=desarrollo">
              Cuéntanos qué necesitas montar
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
              aria-label="Esquema: web, tienda y app comparten una base común conectada al CRM"
            >
              <rect x="90" y="24" width="188" height="52" rx="12" className="dbox" />
              <text x="112" y="55" className="dt">Web</text>
              <rect x="356" y="24" width="188" height="52" rx="12" className="dbox" />
              <text x="378" y="55" className="dt">Tienda online</text>
              <rect x="622" y="24" width="188" height="52" rx="12" className="dbox" />
              <text x="644" y="55" className="dt">App iOS · Android</text>
              <path className="dl-a" d="M184 76 L184 112 M450 76 L450 112 M716 76 L716 112" />
              <rect x="90" y="112" width="720" height="62" rx="14" className="dbox-h" />
              <text x="116" y="140" className="dt" style={{ fontSize: 14 }}>
                Una base común
              </text>
              <text x="116" y="159" className="ds">
                DATOS · USUARIOS · PANEL (OPCIONAL)
              </text>
              <path className="dl-a" d="M450 174 L450 202" />
              <rect x="356" y="202" width="188" height="44" rx="12" className="dbox" />
              <text x="378" y="222" className="dt" style={{ fontSize: 11 }}>
                CRM Synora
              </text>
              <text x="378" y="238" className="ds">
                OPCIONAL, PERO ENCAJA
              </text>
            </svg>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Qué montamos</span>
            <h2 className="sheen">Qué podemos montarte</h2>
          </div>
          <div className="rows rv">
            {QUE_MONTAMOS.map((q) => (
              <div className="rrow" key={q.nombre}>
                <div>
                  <h3>{q.nombre}</h3>
                  <span className="tick">{q.tick}</span>
                </div>
                <div>
                  <p>{q.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Cómo lo hacemos</span>
            <h2 className="sheen">Lo que te prometemos</h2>
          </div>
          <div className="steps rv">
            {COMPROMISOS.map(([n, titulo, texto]) => (
              <div className="step" key={n}>
                <span className="n">{n}</span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq titulo="Preguntas sobre webs y apps" preguntas={FAQ_DESARROLLO} />

      <section>
        <div className="wrap rv">
          <div className="bigcta">
            <span className="eyebrow">Media hora gratis</span>
            <h2 className="sheen">
              ¿Tienes claro qué quieres montar?
              <br />¿O solo el problema?
            </h2>
            <p className="lead">
              Sirven las dos. Cuéntanoslo y te decimos qué haría falta.
            </p>
            <Link className="btn" href="/contacto?motivo=desarrollo">
              Contar mi proyecto
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
