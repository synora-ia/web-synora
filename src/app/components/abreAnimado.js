/* ABRIR Y CERRAR UN <details> CON ANIMACIÓN
   El <details> nativo salta de golpe. Esto se pone en el onClick de su
   <summary>: mide la altura de antes y la de después y pasa de una a otra;
   lo de dentro (`selectorDentro`) aparece con un leve fundido. Si se pulsa
   otra vez a mitad, se da la vuelta desde donde está.
   Quien pide menos movimiento lo ve abrirse sin animación (no se toca el
   comportamiento nativo). Lo usan Plegable (módulos) y Pregunta (FAQ). */

const DURACION = 420;
const CURVA = "cubic-bezier(.2,.7,.3,1)";
const animaciones = new WeakMap();

export function abreAnimado(e, selectorDentro) {
  const d = e.currentTarget.parentElement;
  if (!d || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  e.preventDefault();

  const previa = animaciones.get(d);
  const desde = d.offsetHeight;
  const abriendo = !d.open || !!previa?.cerrando;
  previa?.cancel();

  if (abriendo) d.open = true;
  const bordes = d.offsetHeight - d.clientHeight;
  const hasta = abriendo ? d.scrollHeight + bordes : e.currentTarget.offsetHeight + bordes;
  d.style.overflow = "hidden";

  const a = d.animate({ height: [`${desde}px`, `${hasta}px`] }, { duration: DURACION, easing: CURVA });
  a.cerrando = !abriendo;
  const dentro = selectorDentro && d.querySelector(selectorDentro);
  if (abriendo && dentro) {
    dentro.animate(
      { opacity: [0, 1], transform: ["translateY(-6px)", "none"] },
      { duration: DURACION, easing: CURVA }
    );
  }
  animaciones.set(d, a);
  a.onfinish = () => {
    if (!abriendo) d.open = false;
    d.style.overflow = "";
    animaciones.delete(d);
  };
  a.oncancel = () => {
    d.style.overflow = "";
  };
}
