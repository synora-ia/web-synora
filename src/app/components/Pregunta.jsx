"use client";

import { abreAnimado } from "./abreAnimado";

/* Una pregunta de la FAQ: <details> nativo que se abre y cierra animado,
   igual que el desplegable de módulos. */
export default function Pregunta({ pregunta, children }) {
  return (
    <details>
      <summary onClick={(e) => abreAnimado(e, "p")}>
        {pregunta}
        {/* «+» que gira a «×» al abrir (ver .faq-icono). */}
        <svg className="faq-icono" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="11.5" />
          <path d="M12 7.5v9M7.5 12h9" />
        </svg>
      </summary>
      <p>{children}</p>
    </details>
  );
}
