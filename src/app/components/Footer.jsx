import Link from "next/link";
import { TITULAR } from "@/datos/titular";

/* Previstas pero sin página todavía: Sectores, Proceso y Blog. No se
   enseñan hasta que existan; cuando estén, se añade aquí una línea por
   cada una (p. ej. { href: "/blog", label: "Blog" }). */
const CON_PAGINA = [
  { href: "/crm", label: "CRM" },
  { href: "/desarrollo", label: "Desarrollo" },
  { href: "/automatizaciones", label: "Automatizaciones" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
];

/* Accesibles desde todas las páginas, como pide la LSSI. */
const LEGALES = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

export default function Footer() {
  const anio = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="brand" style={{ margin: 0, fontSize: "1.25rem" }}>
              synora<i>.</i>
            </span>
            <span className="eyebrow">CRM · Desarrollo · Automatizaciones</span>
            {/* Quien duda busca el correo aquí. Sale cuando esté en titular.js. */}
            {TITULAR.email && (
              <a className="foot-correo" href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a>
            )}
          </div>
          <div className="links">
            {CON_PAGINA.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="foot-legal">
          <span>
            © {anio} {TITULAR.razonSocial || TITULAR.nombreComercial}
          </span>
          <nav aria-label="Textos legales">
            {LEGALES.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
