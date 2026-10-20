/* SEO COMÚN
   Cada página llama a meta() con su título, descripción y ruta, y recibe
   todo lo que Google y las redes necesitan, igual en todas:
     · <title> y description
     · canonical (para que Google no cuente dos veces la misma página)
     · Open Graph y tarjeta de Twitter/X: lo que pinta WhatsApp, LinkedIn o
       Telegram al compartir el enlace. La imagen la pone opengraph-image.jsx.

   Títulos: lo que la gente escribe en Google primero, la marca al final, y
   por debajo de ~60 caracteres para que no se corten. Descripciones: entre
   ~120 y 160, con una razón para pulsar. */
import { TITULAR } from "./titular";

export const SITIO = {
  url: "https://synora.es",
  nombre: "Synora",
  locale: "es_ES",
};

export function meta({ titulo, descripcion, ruta, absoluto = false }) {
  const tituloCompleto = absoluto ? titulo : `${titulo} · ${SITIO.nombre}`;
  return {
    title: absoluto ? { absolute: titulo } : titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      title: tituloCompleto,
      description: descripcion,
      url: `${SITIO.url}${ruta === "/" ? "" : ruta}`,
      siteName: SITIO.nombre,
      locale: SITIO.locale,
      type: "website",
      /* Explícita: si una página define sus propios datos de compartir,
         Next deja de heredarle la imagen de app/opengraph-image.jsx. */
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Synora — Tu negocio no necesita trabajar más, necesita trabajar solo." }],
    },
    twitter: { card: "summary_large_image", title: tituloCompleto, description: descripcion, images: ["/opengraph-image"] },
  };
}

/* Datos estructurados (JSON-LD). Google recomienda los de la empresa en la
   home; los datos legales entran solos en cuanto se rellenen en titular.js. */
const ORG_ID = `${SITIO.url}/#empresa`;

export function ldEmpresa() {
  const org = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: TITULAR.nombreComercial,
    url: SITIO.url,
    logo: `${SITIO.url}/logo.png`,
    description:
      "Montamos el CRM a medida, la web o app y las automatizaciones que hacen que una pyme funcione sin estar encima.",
    areaServed: { "@type": "Country", name: "España" },
    knowsAbout: ["CRM a medida", "Automatización de procesos", "Desarrollo web", "Aplicaciones móviles"],
  };
  if (TITULAR.razonSocial) org.legalName = TITULAR.razonSocial;
  if (TITULAR.nif) org.vatID = TITULAR.nif;
  if (TITULAR.email) org.email = TITULAR.email;
  if (TITULAR.domicilio) org.address = { "@type": "PostalAddress", streetAddress: TITULAR.domicilio, addressCountry: "ES" };
  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      { "@type": "WebSite", "@id": `${SITIO.url}/#web`, url: SITIO.url, name: SITIO.nombre, inLanguage: "es-ES", publisher: { "@id": ORG_ID } },
    ],
  };
}

export function ldServicio({ nombre, tipo, descripcion, ruta }) {
  const url = `${SITIO.url}${ruta}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#servicio`,
        name: nombre,
        serviceType: tipo,
        description: descripcion,
        url,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "España" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITIO.url },
          { "@type": "ListItem", position: 2, name: nombre, item: url },
        ],
      },
    ],
  };
}
