import Link from "next/link";
import { Children, cloneElement, isValidElement } from "react";
import { TITULAR, ACTUALIZADO } from "@/datos/titular";
import Reveal from "./Reveal";

const PAGINAS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

/* Un dato del titular; si aún no está rellenado, nada (ver titular.js).
   Quien lo usa dentro de una frase debe comprobar antes que exista. */
export function Dato({ campo }) {
  const v = TITULAR[campo];
  return v ? <>{v}</> : null;
}

/* Nombre con el que el titular aparece en el texto: la razón social si
   existe, y si no, el nombre comercial. */
export function Titular() {
  return <>{TITULAR.razonSocial || TITULAR.nombreComercial}</>;
}

export function Email() {
  const e = TITULAR.email;
  if (!e) return null;
  return <a href={`mailto:${e}`}>{e}</a>;
}

/* Cada apartado del texto aparece al llegar a él, como el resto de la web:
   se le añade la clase .rv sin que cada página tenga que acordarse. */
const conRevelado = (hijos) =>
  Children.map(hijos, (h) =>
    isValidElement(h) ? cloneElement(h, { className: [h.props.className, "rv"].filter(Boolean).join(" ") }) : h
  );

/* Envoltorio común de las tres páginas: cabecera, navegación entre ellas
   y columna de lectura. */
export default function LegalPage({ actual, titulo, entradilla, children }) {
  return (
    <Reveal>
      <section className="legal-hero">
        <div className="wrap hero-copy">
          <span className="eyebrow rv">Legal</span>
          <h1 className="sheen rv">{titulo}</h1>
          {entradilla && <p className="lead rv">{entradilla}</p>}
          <nav className="legal-nav rv" aria-label="Textos legales">
            {PAGINAS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                aria-current={p.href === actual ? "page" : undefined}
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section className="legal-wrap">
        <div className="wrap">
          <article className="legal">
            {conRevelado(children)}
            <p className="meta rv">Última actualización · {ACTUALIZADO}</p>
          </article>
        </div>
      </section>
    </Reveal>
  );
}
