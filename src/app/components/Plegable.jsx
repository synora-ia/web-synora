"use client";

import { useEffect, useRef } from "react";
import { abreAnimado } from "./abreAnimado";

/* Un <details> que se abre solo si se llega con su ancla (/precios#modulos):
   quien pulsa «Ver todos los módulos» en /crm los encuentra desplegados, y
   quien entra a Precios sin más los ve plegados. Al abrir y cerrar se anima
   (ver abreAnimado). Sin JavaScript funciona igual, solo que de golpe. */
export default function Plegable({ id, resumen, className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const abre = () => {
      if (window.location.hash === `#${id}` && ref.current) ref.current.open = true;
    };
    abre();
    window.addEventListener("hashchange", abre);
    return () => window.removeEventListener("hashchange", abre);
  }, [id]);

  return (
    <details id={id} ref={ref} className={`plegable ${className}`.trim()}>
      <summary onClick={(e) => abreAnimado(e, ".plegable-dentro")}>
        {resumen}
        <svg className="plegable-flecha" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3.5 6l4.5 4.5L12.5 6" />
        </svg>
      </summary>
      <div className="plegable-dentro">{children}</div>
    </details>
  );
}
