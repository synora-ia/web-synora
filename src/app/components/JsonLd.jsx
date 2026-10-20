/* Pinta un bloque de datos estructurados. El < se escapa para que ningún
   texto pueda cerrar la etiqueta <script> antes de tiempo. */
export default function JsonLd({ datos }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, "\\u003c") }}
    />
  );
}
