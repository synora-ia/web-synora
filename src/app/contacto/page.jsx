import FormContacto from "../components/FormContacto";
import Reveal from "../components/Reveal";
import { Email } from "../components/Legal";
import { meta } from "../../datos/seo";

export const metadata = meta({
  titulo: "Contacto: media hora gratis para tu caso",
  descripcion: "Escríbenos y buscamos media hora para hablar de tu negocio. Gratis y sin compromiso: te decimos qué haría falta y qué no.",
  ruta: "/contacto",
});

/* Lo que pasa después. Primero la charla, gratis; la auditoría de pago es
   el paso siguiente solo si hace falta (decidido por Josep, 20/10).
   Nada de plazos de respuesta que nadie ha confirmado. */
const DESPUES = [
  ["01", "Lo leemos nosotros", "Una persona, no un bot. Con lo que nos cuentes ya sabemos por dónde empezar."],
  ["02", "Te escribimos", "Para buscar media hora que te venga bien."],
  ["03", "Media hora, gratis", "Miramos tu caso y te decimos qué haría falta y qué no. Sin compromiso."],
  ["04", "Si hace falta, auditoría", "Cuando hay que mirar tu operativa a fondo: desde 200 €, y se descuenta si seguimos."],
];

export default function Contacto() {
  return (
    <Reveal>
      <section className="legal-hero">
        <div className="wrap hero-copy">
          <span className="eyebrow rv">Contacto</span>
          <h1 className="sheen rv">Hablemos</h1>
          <p className="lead rv">
            Escríbenos y buscamos media hora para hablar de tu negocio. Es
            gratis y sin compromiso.
          </p>
        </div>
      </section>

      <section className="flush">
        <div className="wrap contacto">
          <div className="contacto-form rv">
            <FormContacto />
          </div>
          <aside className="contacto-lado rv">
            <h2 className="eyebrow">Qué pasa después</h2>
            <ol className="contacto-pasos">
              {DESPUES.map(([n, titulo, texto]) => (
                <li key={n} className="step">
                  <span className="n">PASO {n}</span>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </li>
              ))}
            </ol>
            <p className="contacto-correo">
              ¿Prefieres el correo? Escríbenos a <Email />.
            </p>
          </aside>
        </div>
      </section>
    </Reveal>
  );
}
