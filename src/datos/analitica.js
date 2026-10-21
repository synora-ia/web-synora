/* ANALÍTICA Y VERIFICACIONES · único sitio donde se rellenan
   Mientras GA_ID valga null, la web no instala ninguna cookie: no hay aviso,
   no se carga Google Analytics y las políticas dicen «ninguna cookie».
   En cuanto se pone el ID, aparece el aviso de cookies (Aceptar y Rechazar
   al mismo nivel), Analytics se carga SOLO si se acepta, el pie enseña
   «Configurar cookies» y /cookies y /privacidad explican Google Analytics. */

/* ID de medición de Google Analytics 4: Administrar → Flujos de datos →
   la web → «ID de medición», con forma "G-XXXXXXXXXX".
   Al ponerlo, cambia también ACTUALIZADO en titular.js: las políticas cambian. */
export const GA_ID = null;

/* Códigos de verificación de propiedad (solo el código, sin la etiqueta):
   Google Search Console → «Etiqueta HTML» → el valor de content="…"
   Bing Webmaster Tools  → «Metaetiqueta HTML» → el valor de content="…" */
export const VERIFICACION = {
  google: null,
  bing: null,
};

/* Dónde se guarda la elección del aviso (localStorage del visitante). */
export const CLAVE_COOKIES = "synora-cookies";
