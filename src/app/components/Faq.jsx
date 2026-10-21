import JsonLd from "./JsonLd";
import Pregunta from "./Pregunta";

/* Sección de preguntas frecuentes con sus datos estructurados (FAQPage).
   Google ya no las enseña desplegadas, pero los asistentes de IA leen tanto
   el texto como los datos para responder y citar. */
export default function Faq({ titulo, preguntas, id = "dudas" }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <section id={id}>
      <JsonLd datos={ld} />
      <div className="wrap stack">
        <div className="head center rv">
          <span className="eyebrow">Dudas</span>
          <h2 className="sheen">{titulo}</h2>
        </div>
        <div className="faq rv">
          {preguntas.map(([q, a]) => (
            <Pregunta key={q} pregunta={q}>{a}</Pregunta>
          ))}
        </div>
      </div>
    </section>
  );
}
