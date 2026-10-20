"use client";

import { Children, useEffect, useRef, useState } from "react";

/* CARRUSEL PARA MÓVIL
   En escritorio no hace nada: pinta la rejilla de siempre (`clase`, p. ej.
   "pillars" o "grid g3"). Por debajo de 600px la misma rejilla pasa a fila
   deslizable con imán (scroll-snap, todo CSS): cada tarjeta ocupa el 82%
   para que asome la siguiente y se entienda que hay más. Los puntos de
   debajo dicen en cuál estás; son solo indicación, se desliza con el dedo.

   `rv`: se aplica la animación de entrada al conjunto, como en el resto.
   `inicio`: en móvil, la tarjeta en la que arranca (p. ej. el plan
   destacado de precios). En escritorio no hace nada. */
export default function Carrusel({ clase, rv = true, inicio = 0, children }) {
  const fila = useRef(null);
  const total = Children.count(children);
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const el = fila.current;
    if (!el) return;
    /* Solo si de verdad desliza (móvil): se coloca en la tarjeta pedida sin
       mover la página, y con el imán la deja bien encuadrada. */
    if (inicio > 0 && el.scrollWidth > el.clientWidth) {
      const t = el.children[inicio];
      if (t) {
        el.scrollLeft = t.offsetLeft - el.firstElementChild.offsetLeft;
        setActual(inicio);
      }
    }
    const alMover = () => {
      const primera = el.firstElementChild;
      if (!primera) return;
      const paso = primera.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0);
      setActual(Math.min(total - 1, Math.max(0, Math.round(el.scrollLeft / paso))));
    };
    el.addEventListener("scroll", alMover, { passive: true });
    return () => el.removeEventListener("scroll", alMover);
  }, [total, inicio]);

  return (
    <div className={`carrusel-caja${rv ? " rv" : ""}`}>
      <div className={`${clase} carrusel`} ref={fila}>
        {children}
      </div>
      <div className="carrusel-puntos" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <i key={i} className={i === actual ? "on" : undefined} />
        ))}
      </div>
    </div>
  );
}
