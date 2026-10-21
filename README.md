# Synora · Aurora (Next.js)

La maqueta `synora-rediseno/01-aurora/index.html` convertida en una web
Next.js 16 de verdad. Mismo diseño, mismas fuentes y mismo texto.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # comprueba que todo compila antes de publicar
```

## Estructura

```
src/
├── datos/
│   ├── titular.js            ← DATOS LEGALES DE LA EMPRESA (rellenar)
│   ├── precios.js            ← TODOS LOS PRECIOS (planes, módulos, proyectos, preguntas)
│   └── seo.js                títulos, descripciones y datos estructurados
└── app/
    ├── layout.jsx            fuentes, tema, nav y pie comunes
    ├── globals.css           tokens y clases de toda la web
    ├── page.jsx              /                  Inicio
    ├── crm/                  /crm               (con la demo de la esfera)
    ├── desarrollo/           /desarrollo
    ├── automatizaciones/     /automatizaciones
    ├── precios/              /precios
    ├── contacto/             /contacto
    ├── api/contacto/         recibe el formulario y lo reenvía a n8n
    ├── aviso-legal/ · privacidad/ · cookies/
    ├── not-found.jsx         404
    ├── opengraph-image.jsx · sitemap.js · robots.js
    └── components/           Nav, Footer, Carrusel, Reveal, FormContacto,
                              Plegable y Pregunta (desplegables animados),
                              AgenteDemo + esfera/ (copia del CRM: no se edita
                              aquí, se recopia entera), Legal, Atmos…
```

## Fidelidad a la maqueta

Comparado con la maqueta abierta al lado, al mismo tamaño: **333 de 336
propiedades calculadas idénticas** (tipografía, tamaños, pesos, interletrado,
rellenos, rejillas y dimensiones de cada bloque). Las 3 diferencias son el
arreglo de contraste de `--t3`, intencionado.

## Qué ha cambiado respecto a la maqueta  · marcado `[FIX]` en el código

| Cambio | Por qué |
|---|---|
| `<meta viewport>` | No existía: en móvil la página se pintaba a 981 px y ninguna media query funcionaba |
| Nav a 375 px | «Automatizaciones» se salía de la pantalla y no se podía pulsar. Ahora el carril se desliza, con fundido en los bordes, y centra el enlace activo |
| `--t3` | 3,4:1 en oscuro y 2,8:1 en claro, por debajo del mínimo AA (4,5:1). Ahora 4,85:1 y 4,6:1 |
| Hero sin esperar a JS | En Next el observador llega con la hidratación: el titular quedaba invisible hasta entonces. Ahora entra con CSS en el primer pintado |
| Sin JS, todo visible | Las animaciones de entrada solo ocultan algo si hay JavaScript |
| Tema recordado | La elección se guarda y se aplica antes de pintar: sin fogonazo blanco |
| Rutas reales | El `data-go` que escondía `div`s ahora son 4 URLs con título y SEO propios, y el botón atrás funciona |
| Fuentes autoalojadas | `next/font` en vez de Google Fonts: no se envía la IP del visitante a Google y no hay salto de texto. Fuera DM Mono 500 e Instrument Sans normal, que no usaba nadie |
| Salto al contenido | Enlace oculto para teclado |
| 404, sitemap, robots | No existían |
| Pie | «Dirección A · Aurora» era una etiqueta interna de la maqueta; ahora enlaza los textos legales |

## Legal

Los tres textos siguen la LSSI-CE, el RGPD, la LOPDGDD y la Guía de cookies
de la AEPD, y describen **lo que esta web hace hoy**: sin cookies, sin
analítica y un formulario de contacto (con su información de protección de
datos junto al botón).

**Antes de publicar** hay que rellenar `src/datos/titular.js`. Mientras falte
un dato, la web enseña una marca ámbar «Pendiente» en su lugar.

**No hay aviso de cookies, y es a propósito**: no hay nada que consentir. El
único dato que se guarda (`aurora-theme`, si pulsas el botón de tema) es una
preferencia elegida por el usuario y está exceptuada. Si se añade analítica,
un píxel, un vídeo incrustado o un chat de terceros:

1. hace falta un aviso **previo** con «Rechazar» tan visible como «Aceptar»;
2. hay que actualizar `/cookies` y el apartado 2 y 4 de `/privacidad`.

**Formulario de contacto**: lo recibe `src/app/api/contacto/route.js` y lo
reenvía al webhook de n8n de `CONTACTO_WEBHOOK_URL` (ver `.env.example`). Sin
esa variable no se envía nada y el visitante ve un aviso con el correo.

Los textos son una base sólida, no asesoramiento jurídico: conviene que los
revise la gestoría o un abogado cuando estén los datos reales.

## SEO y rendimiento

- **Títulos, descripciones y tarjeta para compartir**: todas las páginas usan
  `meta()` de `src/datos/seo.js`. La imagen que sale en WhatsApp/LinkedIn la
  genera `src/app/opengraph-image.jsx` al compilar.
- **Datos estructurados**: `Organization` + `WebSite` en la home; `Service` +
  `BreadcrumbList` en CRM, Desarrollo y Automatizaciones. Los datos legales
  (razón social, NIF, dirección, correo) entran solos al rellenar `titular.js`.
- **CSS dentro del HTML** (`experimental.inlineCss` en `next.config.mjs`).
  Medido con Lighthouse en móvil y la red frenada de verdad (4G lenta,
  procesador ×4), el LCP bajó de 2,7–3,0 s a 2,0–2,5 s: había dos hojas de
  estilo que bloqueaban el pintado.
- **Para asistentes de IA**: `/llms.txt` (resumen en texto, generado desde
  `precios.js` y `faq.js`), preguntas frecuentes con FAQPage en CRM, Desarrollo,
  Automatizaciones y Precios, y los planes y precios como `Offer` en los datos
  estructurados. Todo el contenido sale en el HTML, sin depender de JavaScript.
- **`.rv-ya`**: lo que va justo después del hero entra por CSS, sin esperar
  al JavaScript.
- Google retiró en mayo de 2026 los resultados enriquecidos de FAQ: una
  sección de preguntas sigue sirviendo para el visitante y para que te citen
  los asistentes de IA, pero no da «desplegables» en Google.

## Pendiente

- Rellenar `src/datos/titular.js` (y con él, el correo del pie y de Contacto).
  Ahí van también `telefono` y `redes` (Instagram, LinkedIn, Google Business):
  salen solos en los datos estructurados y en `/llms.txt`.
- Poner `CONTACTO_WEBHOOK_URL` en el alojamiento (el n8n de producción).
- **Precios** (`src/datos/precios.js`): sin confirmar el plan Solo (59 € y su
  puesta en marcha), la automatización desde 250 € y las cuotas aparte
  (chatbot por su cuenta y mantenimientos). Confirmar también que van sin IVA
  (`NOTA_IVA`).
- Portada: decidir la comparativa «Sin/Con Synora» (repite «Un lunes») y los
  sectores (sin enlace; solo inmobiliarias y clínicas tienen ejemplo de precio).
- Sustituye a synora.es sin redirecciones (decidido: la web actual no tiene
  tráfico). Tras publicar: alta en Google Search Console y enviar el sitemap.
- «El código es tuyo» y «sin permanencia»: que los contratos digan lo mismo.
