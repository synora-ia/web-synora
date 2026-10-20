"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

/* Sin «Inicio»: el logo ya lleva a la portada. */
const LINKS = [
  { href: "/crm", label: "CRM" },
  { href: "/desarrollo", label: "Desarrollo" },
  { href: "/automatizaciones", label: "Automatizaciones" },
  { href: "/precios", label: "Precios" },
];

export default function Nav() {
  const pathname = usePathname();
  const carril = useRef(null);

  /* En móvil los enlaces no caben y se deslizan. Al llegar a una página se
     centra el enlace activo dentro del carril, para que quien entra directo
     en /automatizaciones vea dónde está. Se mueve solo el carril, nunca la
     página. */
  useEffect(() => {
    const links = carril.current;
    const activo = links?.querySelector('[aria-current="page"]');
    if (!links || !activo || links.scrollWidth <= links.clientWidth) return;
    const lr = links.getBoundingClientRect();
    const ar = activo.getBoundingClientRect();
    links.scrollLeft += ar.left - lr.left - (lr.width - ar.width) / 2;
  }, [pathname]);

  return (
    <div className="navwrap">
      <nav className="nav" aria-label="Principal">
        <Link href="/" className="brand">
          synora<i>.</i>
        </Link>
        <div className="links" ref={carril}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              /* En la maqueta esto lo marcaba el propio script al cambiar de
                 «página». Aquí sale de la ruta real, así que también acierta
                 al entrar directo por URL o al darle a atrás. */
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <span className="sep" aria-hidden="true" />
        <ThemeToggle />
        {/* Contactar, siempre a un toque. */}
        <Link
          href="/contacto"
          className="nav-cta"
          aria-current={pathname === "/contacto" ? "page" : undefined}
        >
          Hablemos
        </Link>
      </nav>
    </div>
  );
}
