import Link from "next/link";
import LegalPage, { Email } from "../components/Legal";
import { meta } from "../../datos/seo";
import { GA_ID, CLAVE_COOKIES } from "../../datos/analitica";
import { BotonCookies } from "../components/Cookies";

/* Con GA_ID puesto, esta página explica Google Analytics; sin él, sigue
   diciendo (con verdad) que no hay ninguna cookie. */
const CON_GA = Boolean(GA_ID);

export const metadata = meta({
  titulo: "Política de cookies",
  descripcion: CON_GA
    ? "Qué se guarda en tu navegador al visitar synora.es: las cookies de Google Analytics, solo si las aceptas, y cómo cambiar de idea."
    : "Qué se guarda en tu navegador al visitar synora.es. Respuesta corta: ninguna cookie, y nada que te siga.",
  ruta: "/cookies",
});

/* Google Analytics ya está contemplado (CON_GA). Si se añade cualquier otra
   cosa de terceros —un píxel, un vídeo incrustado, un chat—, ESTA PÁGINA
   DEJA DE SER CIERTA y hay que ampliarla y pasarla por el aviso. */
export default function Cookies() {
  return (
    <LegalPage
      actual="/cookies"
      titulo="Política de cookies"
      entradilla={
        CON_GA
          ? "Qué se guarda en tu navegador al visitar esta web. Respuesta corta: lo justo para contar visitas, y solo si tú aceptas."
          : "Qué se guarda en tu navegador al visitar esta web. Respuesta corta: casi nada, y nada que te siga."
      }
    >
      <div>
        <h2>1. Qué son</h2>
        <p>
          Las cookies, y otras formas de almacenamiento como el{" "}
          <em>localStorage</em>, son pequeños datos que una web guarda en tu
          navegador para recordar algo entre una visita y otra. El artículo
          22.2 de la LSSI-CE las trata igual a todas: si no son estrictamente
          necesarias para lo que tú has pedido, hace falta tu consentimiento
          previo.
        </p>
      </div>

      <div>
        <h2>2. Qué usa esta web</h2>
        {CON_GA ? (
          <p>
            <strong>Solo las cookies de Google Analytics, y solo si las
            aceptas</strong> en el aviso que ves al entrar. Nos dicen cuántas
            personas visitan la web y qué páginas leen, de forma agregada. No
            hay publicidad, ni botones de redes sociales, ni nada que te
            rastree de una web a otra.
          </p>
        ) : (
          <>
            <p>
              <strong>Ninguna cookie.</strong> Ni propia ni de terceros: no hay
              analítica, ni publicidad, ni botones de redes sociales, ni nada que
              te rastree de una web a otra.
            </p>
            <p>Solo hay un dato, y únicamente si tú lo provocas:</p>
          </>
        )}
        <table className="ltable">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Para qué</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-l="Nombre"><code>aurora-theme</code></td>
              <td data-l="Tipo">Almacenamiento local, propio</td>
              <td data-l="Para qué">
                Recordar si has elegido tema claro u oscuro con el botón del
                menú. Solo se crea si lo pulsas.
              </td>
              <td data-l="Duración">Hasta que lo borres</td>
            </tr>
            {CON_GA && (
              <>
                <tr>
                  <td data-l="Nombre"><code>{CLAVE_COOKIES}</code></td>
                  <td data-l="Tipo">Almacenamiento local, propio</td>
                  <td data-l="Para qué">
                    Recordar si has aceptado o rechazado las cookies de
                    analítica, para no volver a preguntarte en cada página.
                  </td>
                  <td data-l="Duración">Hasta que lo borres</td>
                </tr>
                <tr>
                  <td data-l="Nombre"><code>_ga</code></td>
                  <td data-l="Tipo">Cookie de Google Analytics, analítica</td>
                  <td data-l="Para qué">
                    Distinguir visitantes con un identificador aleatorio para
                    contar visitas. Solo si aceptas.
                  </td>
                  <td data-l="Duración">2 años</td>
                </tr>
                <tr>
                  <td data-l="Nombre"><code>_ga_{GA_ID.replace(/^G-/, "")}</code></td>
                  <td data-l="Tipo">Cookie de Google Analytics, analítica</td>
                  <td data-l="Para qué">
                    Mantener el estado de la visita (páginas vistas en la
                    sesión). Solo si aceptas.
                  </td>
                  <td data-l="Duración">2 años</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <p style={{ marginTop: 16 }}>
          Es una preferencia de presentación que eliges tú mismo, así que está
          exceptuada del deber de consentimiento según la{" "}
          <a
            href="https://www.aepd.es/guias/guia-cookies.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guía sobre el uso de las cookies de la AEPD
          </a>
          . No contiene datos personales y nunca sale de tu navegador.
          {CON_GA && <> Lo mismo vale para el dato que recuerda tu elección sobre las cookies.</>}
        </p>
        {CON_GA && (
          <p>
            Las cookies de Google Analytics las gestiona Google Ireland
            Limited. Google puede tratar algunos datos en Estados Unidos, al
            amparo del Marco de Privacidad de Datos UE-EE. UU. Tienes más
            detalle en la <Link href="/privacidad">política de privacidad</Link>{" "}
            y en la{" "}
            <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">
              información de Google sobre privacidad
            </a>
            .
          </p>
        )}
      </div>

      {CON_GA ? (
      <div>
        <h2>3. Cómo aceptar, rechazar o cambiar de idea</h2>
        <p>
          La primera vez que entras te preguntamos con un aviso. Aceptar y
          rechazar cuestan lo mismo, y hasta que no aceptas no se carga
          Google Analytics ni se instala ninguna de sus cookies. Si rechazas,
          la web funciona exactamente igual.
        </p>
        <p>
          Puedes cambiar tu elección cuando quieras desde aquí:{" "}
          <BotonCookies className="ilink" /> (también está en el pie de todas
          las páginas). Si retiras el permiso, dejamos de medir y borramos las
          cookies de Analytics.
        </p>
        <p>
          Las tipografías van alojadas en nuestro propio servidor, en lugar de
          pedirse a Google Fonts, así que no registran tu visita.
        </p>
      </div>
      ) : (
      <div>
        <h2>3. Por qué no ves un aviso de cookies</h2>
        <p>
          Porque no hay nada que consentir. El aviso solo es obligatorio
          cuando una web instala cookies que no son necesarias, y esta no lo
          hace. Preferimos no interrumpirte con un banner que no aporta nada.
        </p>
        <p>
          Tampoco cargamos recursos de terceros que puedan registrar tu
          visita: las tipografías van alojadas en nuestro propio servidor, en
          lugar de pedirse a Google Fonts.
        </p>
      </div>
      )}

      <div>
        <h2>4. Cómo borrarlo</h2>
        <p>
          {CON_GA
            ? "Además de cambiar tu elección con el botón de arriba, puedes borrar las cookies y los datos de este sitio desde la configuración de tu navegador:"
            : "Puedes eliminar el dato de tema en cualquier momento borrando los datos de este sitio desde la configuración de tu navegador:"}
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
        </ul>
        <p>
          La web seguirá funcionando igual; simplemente volverá a seguir el
          tema de tu sistema{CON_GA && " y te preguntará otra vez por las cookies"}.
        </p>
      </div>

      <div>
        <h2>5. Cambios</h2>
        <p>
          Si en el futuro incorporamos {CON_GA ? "cualquier otra cookie" : "cualquier cookie"} que requiera tu
          consentimiento, te lo pediremos <strong>antes</strong> de instalarla,
          con la opción de rechazarla igual de fácil que de aceptarla, y
          actualizaremos esta página. Para cualquier duda, escríbenos a{" "}
          <Email />. El tratamiento de tus datos personales está en la{" "}
          <Link href="/privacidad">política de privacidad</Link>.
        </p>
      </div>
    </LegalPage>
  );
}
