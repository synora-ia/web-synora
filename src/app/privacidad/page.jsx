import Link from "next/link";
import LegalPage, { Dato, Email } from "../components/Legal";
import { meta } from "../../datos/seo";

export const metadata = meta({
  titulo: "Política de privacidad",
  descripcion: "Qué datos personales tratamos en synora.es, para qué, durante cuánto tiempo y cómo ejercer tus derechos.",
  ruta: "/privacidad",
});

/* Escrita para lo que esta web hace DE VERDAD hoy: un formulario de
   contacto (/contacto), sin analítica ni cookies de terceros. Si se añade
   cualquiera de esas cosas, hay que volver aquí y ampliar los apartados 2 y 4. */
export default function Privacidad() {
  return (
    <LegalPage
      actual="/privacidad"
      titulo="Política de privacidad"
      entradilla="Qué datos tuyos tratamos, para qué y qué puedes hacer con ellos. Sin letra pequeña."
    >
      <div>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          El responsable de tus datos es{" "}
          <Dato campo="razonSocial" etiqueta="razón social" />, con NIF{" "}
          <Dato campo="nif" etiqueta="NIF" /> y domicilio en{" "}
          <Dato campo="domicilio" etiqueta="domicilio" />. Para cualquier
          cuestión sobre privacidad puedes escribirnos a <Email />.
        </p>
      </div>

      <div>
        <h2>2. Qué datos tratamos y para qué</h2>

        <h3>Si solo navegas por la web</h3>
        <p>
          No te pedimos ningún dato, no usamos herramientas de analítica y no
          instalamos cookies de seguimiento. Lo único que se registra es lo
          que cualquier servidor anota para funcionar y protegerse de ataques:
          tu dirección IP, la fecha y la página que pides.
        </p>
        <ul>
          <li><strong>Finalidad:</strong> que la web funcione y sea segura.</li>
          <li><strong>Base jurídica:</strong> nuestro interés legítimo en mantener el servicio disponible y seguro (art. 6.1.f del RGPD).</li>
          <li><strong>Conservación:</strong> el tiempo que el proveedor de alojamiento guarde sus registros técnicos, normalmente unos días o semanas.</li>
        </ul>

        <h3>Si nos escribes</h3>
        <p>
          Cuando nos contactas por correo o con el{" "}
          <Link href="/contacto">formulario de contacto</Link>, tratamos los
          datos que tú nos das —nombre y correo, y si quieres apellidos,
          teléfono, empresa y lo que nos cuentes— para responderte. Solo el
          nombre, el correo y el mensaje son obligatorios.
        </p>
        <ul>
          <li><strong>Finalidad:</strong> contestarte y, si lo pides, prepararte una propuesta.</li>
          <li><strong>Base jurídica:</strong> aplicar medidas precontractuales a petición tuya (art. 6.1.b del RGPD).</li>
          <li><strong>Conservación:</strong> mientras dure la conversación y, si no llega a haber contrato, como máximo un año después del último contacto.</li>
        </ul>

        <h3>Si eres cliente</h3>
        <ul>
          <li><strong>Finalidad:</strong> prestarte el servicio contratado, facturarlo y cumplir nuestras obligaciones contables y fiscales.</li>
          <li><strong>Base jurídica:</strong> la ejecución del contrato (art. 6.1.b) y el cumplimiento de obligaciones legales (art. 6.1.c).</li>
          <li><strong>Conservación:</strong> mientras dure la relación y, después, los plazos que exige la ley: seis años para la documentación contable (art. 30 del Código de Comercio) y cuatro para la fiscal.</li>
        </ul>

        <h3>Comunicaciones comerciales</h3>
        <p>
          Solo te enviaremos novedades o información comercial si nos has dado
          tu consentimiento expreso para ello (art. 6.1.a del RGPD y art. 21 de
          la LSSI-CE), y podrás retirarlo cuando quieras con un clic en el
          propio correo o escribiéndonos.
        </p>
      </div>

      <div>
        <h2>3. Qué no hacemos con tus datos</h2>
        <ul>
          <li>No los vendemos ni los cedemos a terceros para que te hagan publicidad.</li>
          <li>No tomamos decisiones automatizadas que te afecten ni elaboramos perfiles.</li>
          <li>No pedimos más datos de los que hacen falta para lo que nos has pedido.</li>
        </ul>
      </div>

      <div>
        <h2>4. Quién más puede ver tus datos</h2>
        <p>
          Solo se comunican a terceros cuando una ley lo exige (por ejemplo,
          a la Agencia Tributaria). Además, como cualquier empresa, nos
          apoyamos en proveedores que tratan datos <strong>por cuenta nuestra
          y siguiendo nuestras instrucciones</strong> (encargados del
          tratamiento), con contrato que les obliga a protegerlos:
        </p>
        <ul>
          <li><strong>Alojamiento de la web:</strong> <Dato campo="alojamiento" etiqueta="proveedor de alojamiento" />.</li>
          <li><strong>Correo electrónico</strong> y las herramientas con las que recibimos y gestionamos los mensajes del formulario (nuestro CRM y la herramienta de automatización que se los entrega).</li>
        </ul>
        <p>
          <strong>Transferencias internacionales:</strong> el alojamiento se
          presta desde <Dato campo="alojamientoPais" etiqueta="país del alojamiento" />.
          Cuando un proveedor está fuera del Espacio Económico Europeo, solo
          trabajamos con los que ofrecen las garantías del RGPD: una decisión
          de adecuación de la Comisión Europea (como el Marco de Privacidad de
          Datos UE-EE. UU.) o cláusulas contractuales tipo.
        </p>
      </div>

      <div>
        <h2>5. Tus derechos</h2>
        <p>En cualquier momento puedes pedirnos:</p>
        <ul>
          <li><strong>Acceso:</strong> saber qué datos tuyos tenemos.</li>
          <li><strong>Rectificación:</strong> corregir los que estén mal.</li>
          <li><strong>Supresión:</strong> que los borremos cuando ya no hagan falta.</li>
          <li><strong>Oposición</strong> y <strong>limitación</strong> del tratamiento.</li>
          <li><strong>Portabilidad:</strong> recibirlos en un formato que puedas llevarte.</li>
          <li><strong>Retirar el consentimiento</strong> que nos hayas dado, sin que afecte a lo hecho antes.</li>
        </ul>
        <p>
          Escríbenos a <Email /> indicando qué derecho quieres ejercer.
          Te contestaremos en el plazo de un mes. Si crees que no hemos
          atendido bien tu petición, puedes reclamar ante la Agencia Española
          de Protección de Datos en{" "}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>.
        </p>
      </div>

      <div>
        <h2>6. Menores</h2>
        <p>
          Nuestros servicios se dirigen a empresas y profesionales. Si tienes
          menos de 14 años, no nos envíes datos personales (art. 7 de la Ley
          Orgánica 3/2018, LOPDGDD).
        </p>
      </div>

      <div>
        <h2>7. Seguridad</h2>
        <p>
          La web se sirve siempre cifrada (HTTPS) y aplicamos medidas técnicas
          y organizativas para evitar la pérdida, el uso indebido o el acceso
          no autorizado a tus datos.
        </p>
      </div>

      <div>
        <h2>8. Cambios</h2>
        <p>
          Si cambiamos cómo tratamos los datos —por ejemplo, si incorporamos
          una herramienta de analítica— actualizaremos esta página y la fecha
          de abajo. Lo que se guarda en tu navegador está
          en la <Link href="/cookies">política de cookies</Link>.
        </p>
      </div>
    </LegalPage>
  );
}
