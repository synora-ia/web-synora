"use client";

import { useEffect, useState } from "react";

/* Igual que la maqueta: sigue al sistema hasta que el visitante elige.
   La diferencia es que ahora la elección se recuerda (localStorage) y el
   script en línea del layout la aplica antes de pintar. */
export default function ThemeToggle() {
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);

  function alternar() {
    const root = document.documentElement;
    let actual = root.getAttribute("data-theme");
    if (!actual) {
      actual = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }
    const siguiente = actual === "light" ? "dark" : "light";
    root.setAttribute("data-theme", siguiente);
    try {
      localStorage.setItem("aurora-theme", siguiente);
    } catch {
      /* navegación privada o almacenamiento bloqueado: el tema sigue
         funcionando, solo que no se recuerda entre visitas. */
    }
  }

  return (
    <button
      type="button"
      className="theme"
      onClick={alternar}
      aria-label="Cambiar entre tema claro y oscuro"
      title="Cambiar tema"
      /* Hasta que hidrata no se sabe qué tema hay; se deja pulsable pero
         sin anunciar un estado que podría ser el contrario. */
      aria-disabled={montado ? undefined : "true"}
    >
      <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
        <circle
          cx="10"
          cy="10"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <path d="M10 2a8 8 0 010 16z" fill="currentColor" />
      </svg>
    </button>
  );
}
