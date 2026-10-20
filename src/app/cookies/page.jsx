import Link from "next/link";
import LegalPage, { Email } from "../components/Legal";
import { meta } from "../../datos/seo";

export const metadata = meta({
  titulo: "Política de cookies",
  descripcion: "Qué se guarda en tu navegador al visitar synora.es. Respuesta corta: ninguna cookie, y nada que te siga.",
  ruta: "/cookies",
});

/* Si algún día se añade analítica, un píxel, un vídeo incrustado o un chat
   de terceros, ESTA PÁGINA DEJA DE SER CIERTA y además hace falta un aviso
   de consentimiento previo (con «Rechazar» tan visible como «Aceptar»). */
export default function Cookies() {
  return (
    <LegalPage
      actual="/cookies"
      titulo="Política de cookies"
      entradilla="Qué se guarda en tu navegador al visitar esta web. Respuesta corta: casi nada, y nada que te siga."
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
        <p>
          <strong>Ninguna cookie.</strong> Ni propia ni de terceros: no hay
          analítica, ni publicidad, ni botones de redes sociales, ni nada que
          te rastree de una web a otra.
        </p>
        <p>Solo hay un dato, y únicamente si tú lo provocas:</p>
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
        </p>
      </div>

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

      <div>
        <h2>4. Cómo borrarlo</h2>
        <p>
          Puedes eliminar el dato de tema en cualquier momento borrando los
          datos de este sitio desde la configuración de tu navegador:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
        </ul>
        <p>
          La web seguirá funcionando igual; simplemente volverá a seguir el
          tema de tu sistema.
        </p>
      </div>

      <div>
        <h2>5. Cambios</h2>
        <p>
          Si en el futuro incorporamos cualquier cookie que requiera tu
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
