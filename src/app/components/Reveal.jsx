"use client";

import { useEffect, useRef } from "react";

/* Equivalente a la función arm() de la maqueta.
   Envuelve una página entera y observa sus `.rv`. Como se vuelve a montar
   en cada ruta, la animación se rearma sola al navegar — que es lo que allí
   hacía el click del menú. */
export default function Reveal({ children }) {
  const raiz = useRef(null);

  useEffect(() => {
    const nodo = raiz.current;
    if (!nodo) return;

    /* El hero (y la cabecera de legales y contacto) entra por CSS en el
       primer pintado (ver globals.css);
       el observador solo se ocupa de lo que hay debajo. */
    const items = [...nodo.querySelectorAll(".rv")].filter(
      (el) => !el.closest(".hero, .legal-hero") && !el.classList.contains("rv-ya")
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el, i) => {
      el.classList.remove("in");
      el.style.transitionDelay = Math.min(i, 6) * 55 + "ms";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return <div ref={raiz}>{children}</div>;
}
