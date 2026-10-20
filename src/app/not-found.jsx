import Link from "next/link";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

const SECCIONES = [
  { href: "/crm", label: "CRM" },
  { href: "/desarrollo", label: "Desarrollo" },
  { href: "/automatizaciones", label: "Automatizaciones" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
];

/* El mismo recurso que Precios y el cierre de la portada: la cifra gigante
   detrás y la tarjeta translúcida tapándole la mitad de abajo. */
export default function NoEncontrada() {
  return (
    <section className="hero nf-hero">
      <div className="wrap">
        <div className="palabra-cabeza">
          <span className="eyebrow rv">Error 404</span>
          {/* Decoración: el título de la página es el h1 de la tarjeta. */}
          <p className="sheen palabra-gigante corta rv" aria-hidden="true">
            404
          </p>
        </div>
        <div className="bigcta cristal rv">
          <h1 className="sheen">Esta página no existe</h1>
          <p className="lead">
            Puede que el enlace esté mal o que la hayamos movido. Lo que buscas
            probablemente está en una de estas:
          </p>
          <nav className="chips" aria-label="Secciones">
            {SECCIONES.map((s) => (
              <Link key={s.href} className="chip" href={s.href}>
                {s.label}
              </Link>
            ))}
          </nav>
          <Link className="btn" href="/">
            Ir al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
