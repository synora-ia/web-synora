import Link from "next/link";
import Carrusel from "../components/Carrusel";
import Plegable from "../components/Plegable";
import Pregunta from "../components/Pregunta";
import Reveal from "../components/Reveal";
import JsonLd from "../components/JsonLd";
import { meta } from "../../datos/seo";
import {
  PLANES, PLAN_SOLO, USUARIO_EXTRA, MODULOS, A_MEDIDA, SIN_CRM, EJEMPLOS, FAQ_PRECIOS, NOTA_IVA,
} from "../../datos/precios";

export const metadata = meta({
  titulo: "Precios de CRM a medida, automatizaciones y webs",
  descripcion:
    "Planes de CRM desde 59 €/mes, módulos sueltos desde 15 €/mes y proyectos de web, app o automatización con precio cerrado. Sin pagar lo que no usas.",
  ruta: "/precios",
});

/* Las preguntas de la página, también como datos estructurados: Google ya
   no las enseña desplegadas, pero los asistentes de IA las leen. */
const ldFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_PRECIOS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const usuarios = (n) => (n === 1 ? "1 usuario" : `Hasta ${n} usuarios`);
/* Con punto también en 4 cifras (2.126 €), como el resto de precios. */
const eur = (n) => `${n.toLocaleString("es-ES", { useGrouping: "always" })} €`;

function Check() {
  return (
    <svg className="plan-check" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="8.25" fill="none" stroke="currentColor" strokeOpacity=".35" />
      <path d="M5.6 9.2l2.2 2.2 4.6-4.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Precios() {
  return (
    <Reveal>
      <JsonLd datos={ldFaq} />

      <section className="hero precios-hero">
        <div className="wrap">
          <div className="palabra-cabeza">
            <span className="eyebrow rv">Sin sorpresas</span>
            <h1 className="sheen palabra-gigante rv">Precios</h1>
          </div>

          <Carrusel clase="planes" inicio={1} rv={false}>
            {PLANES.map((p) => (
              <article key={p.id} className={`plan rv${p.destacado ? " plan-dest" : ""}`}>
                <div className="plan-top">
                  <h2 className="plan-nombre">{p.nombre}</h2>
                  {p.destacado && <span className="plan-tag">Recomendado</span>}
                </div>
                <p className="plan-precio">
                  <b>{p.cuota} €</b>
                  <span>/mes</span>
                </p>
                <p className="plan-para">{p.para}</p>
                <p className="plan-puesta">
                  Puesta en marcha · <span className="nw">{p.puesta}</span>
                </p>
                <ul className="plan-lista">
                  {[usuarios(p.usuarios), ...p.incluye].map((i) => (
                    <li key={i}>
                      <Check />
                      {i}
                    </li>
                  ))}
                </ul>
                {p.ia && <p className="plan-ia">+ consumo de IA según uso, te lo estimamos antes de empezar</p>}
                <Link
                  className={`btn plan-cta${p.destacado ? "" : " ghost"}`}
                  href={`/contacto?motivo=crm&plan=${p.id}`}
                >
                  Empezar con {p.nombre}
                </Link>
              </article>
            ))}
          </Carrusel>

          {/* Quien trabaja solo no necesita la fila de tres: va aparte, en
              una franja, para no romper la composición de la cabecera. */}
          <div className="plan-solo rv">
            <div className="ps-txt">
              <b>¿Trabajas por tu cuenta?</b>
              <span>
                Plan {PLAN_SOLO.nombre}: {PLAN_SOLO.incluye}. {usuarios(PLAN_SOLO.usuarios)}, puesta en
                marcha <span className="nw">{PLAN_SOLO.puesta}</span>.
              </span>
            </div>
            <p className="ps-precio">
              <b>{PLAN_SOLO.cuota} €</b>
              <span>/mes</span>
            </p>
            <Link className="btn ghost" href={`/contacto?motivo=crm&plan=${PLAN_SOLO.id}`}>
              Empezar con {PLAN_SOLO.nombre}
            </Link>
          </div>

          <p className="planes-nota rv">
            {NOTA_IVA} Sin permanencia. Cada usuario más, {USUARIO_EXTRA} €/mes. ¿No sabes cuál
            encaja?{" "}
            <Link className="ilink" href="/contacto?motivo=crm">Te lo decimos en media hora, gratis</Link>.
          </p>
        </div>
      </section>

      <section id="ejemplos">
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Ejemplos orientativos</span>
            <h2 className="sheen">Lo que pagaría un negocio como el tuyo</h2>
            <p className="lead">
              Cuatro casos habituales, sumados pieza a pieza, sin IVA ni el
              consumo de IA. El tuyo te lo cerramos por escrito.
            </p>
          </div>
          <Carrusel clase="grid g4 ejemplos">
            {EJEMPLOS.map((e) => {
              const total = e.piezas.reduce((t, [, n]) => t + n, 0);
              return (
                <div className="card ejemplo" key={e.quien}>
                  <h3>{e.quien}</h3>
                  <p className="dim">{e.caso}</p>
                  <p className="ej-piezas">{e.piezas.map(([nombre]) => nombre).join(" + ")}</p>
                  <p className="ej-total">
                    <b>{eur(total)}</b>
                    <span>/mes</span>
                  </p>
                  {/* El formulario llega ya escrito con este ejemplo. */}
                  <Link className="btn ghost ej-cta" href={`/contacto?motivo=crm&ejemplo=${e.id}`}>
                    Quiero este
                  </Link>
                </div>
              );
            })}
          </Carrusel>
        </div>
      </section>

      <section id="a-medida">
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Webs, apps y automatizaciones</span>
            <h2 className="sheen">Lo que va aparte de la cuota</h2>
            <p className="lead">
              Con precio cerrado y por escrito antes de empezar.
            </p>
          </div>
          <Carrusel clase="grid g4">
            {A_MEDIDA.map((x) => (
              <div className="card medida" key={x.nombre}>
                <h3>{x.nombre}</h3>
                <p className="medida-precio">{x.precio}</p>
                <p className="dim">{x.texto}</p>
                {x.extra && <p className="medida-extra">{x.extra}</p>}
              </div>
            ))}
          </Carrusel>
          {/* El detalle para quien lo quiera: plegado, para no llenar la
              página de cifras. Se abre solo al llegar con /precios#modulos. */}
          <Plegable id="modulos" className="rv" resumen="Ver todos los módulos y cuotas, con su precio">
            <p className="dim">
              Los módulos se suman a cualquier plan. Los que ya van incluidos
              en el tuyo no se pagan dos veces.
            </p>
            <div className="rows">
              {MODULOS.map((g) => (
                <div className="rrow" key={g.grupo}>
                  <div>
                    <h3>{g.grupo}</h3>
                  </div>
                  <ul className="precio-lista">
                    {g.items.map(([nombre, texto, precio]) => (
                      <li key={nombre}>
                        <span className="pl-txt">
                          <b>{nombre}</b>
                          <span>{texto}</span>
                        </span>
                        <span className="pl-precio">{precio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="rrow">
                <div>
                  <h3>Cuotas aparte</h3>
                </div>
                <ul className="precio-lista">
                  {SIN_CRM.map(([nombre, texto, precio]) => (
                    <li key={nombre}>
                      <span className="pl-txt">
                        <b>{nombre}</b>
                        <span>{texto}</span>
                      </span>
                      <span className="pl-precio">{precio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Plegable>
        </div>
      </section>

      <section id="dudas">
        <div className="wrap stack">
          <div className="head center rv">
            <span className="eyebrow">Dudas</span>
            <h2 className="sheen">Preguntas sobre precios</h2>
          </div>
          <div className="faq rv">
            {FAQ_PRECIOS.map(([q, a]) => (
              <Pregunta key={q} pregunta={q}>{a}</Pregunta>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap rv">
          <div className="bigcta">
            <span className="eyebrow">Media hora gratis</span>
            <h2 className="sheen">¿Quieres un número cerrado?</h2>
            <p className="lead">
              Cuéntanos qué necesitas. En media hora, gratis, te decimos cuánto
              costaría tu caso, y después te lo pasamos por escrito.
            </p>
            <Link className="btn" href="/contacto?motivo=precio">
              Pedir mi precio
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
