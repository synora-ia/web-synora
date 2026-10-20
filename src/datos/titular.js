/* ═══════════════════════════════════════════════════════════════════════════
   DATOS DEL TITULAR DE LA WEB
   Único sitio donde se rellenan. Los tres textos legales y el pie los leen
   de aquí. Mientras un campo valga null, la web enseña en su lugar una marca
   ámbar «Pendiente», bien visible: no se puede publicar sin darse cuenta.

   OJO: synora.es publica hoy NIF B00000000, «Calle de la Automatización, 1»
   y hola@synora.com. Son datos de relleno, no reales. No copiarlos aquí.
   ═══════════════════════════════════════════════════════════════════════════ */

export const TITULAR = {
  /* Nombre con el que se presenta la marca. */
  nombreComercial: "Synora",

  /* Obligatorios por la LSSI (art. 10) ─────────────────────────────── */
  razonSocial: null, // p. ej. "Synora Soluciones, S.L."  (o nombre y apellidos si eres autónomo)
  nif: null, //         p. ej. "B12345678"
  domicilio: null, //   dirección completa: calle, número, CP, municipio, provincia
  email: null, //       correo de contacto Y para ejercer derechos RGPD

  /* Obligatorio si es sociedad inscrita en el Registro Mercantil. */
  registro: null, //    p. ej. "Registro Mercantil de Valencia, Tomo 1234, Folio 56, Hoja V-78901"

  /* Para la política de privacidad ─────────────────────────────────── */
  alojamiento: null, // proveedor donde se aloja la web, p. ej. "Vercel Inc."
  alojamientoPais: null, // p. ej. "Estados Unidos (adherido al Data Privacy Framework UE-EE. UU.)"
};

/* Cambia esta fecha cada vez que se toque cualquiera de los tres textos. */
export const ACTUALIZADO = "15 de octubre de 2026";
