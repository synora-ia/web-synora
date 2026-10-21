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

  /* Opcionales, pero ayudan a que Google y las IA reconozcan a Synora como
     empresa real: salen en los datos estructurados en cuanto se rellenan. */
  telefono: "+34 634 27 72 10", // el mismo que la ficha de Google Business
  redes: [], //         enlaces completos: Instagram, LinkedIn, ficha de Google Business…

  /* Obligatorio si es sociedad inscrita en el Registro Mercantil. */
  registro: null, //    p. ej. "Registro Mercantil de Valencia, Tomo 1234, Folio 56, Hoja V-78901"

  /* Para la política de privacidad ─────────────────────────────────── */
  alojamiento: null, // proveedor donde se aloja la web, p. ej. "Vercel Inc."
  alojamientoPais: null, // p. ej. "Estados Unidos (adherido al Data Privacy Framework UE-EE. UU.)"
};

/* Derivados del teléfono: el enlace para llamar y el de WhatsApp (el número
   tiene WhatsApp; si algún día deja de tenerlo, pon WHATSAPP a null). */
const DIGITOS = TITULAR.telefono?.replace(/\D/g, "");
export const TEL = DIGITOS ? `tel:+${DIGITOS}` : null;
export const WHATSAPP = DIGITOS ? `https://wa.me/${DIGITOS}` : null;
/* Para enseñarlo: sin el prefijo +34, que en España sobra. */
export const TELEFONO_CORTO = TITULAR.telefono?.replace(/^\+34\s*/, "") ?? null;

/* Cambia esta fecha cada vez que se toque cualquiera de los tres textos. */
export const ACTUALIZADO = "21 de octubre de 2026";
