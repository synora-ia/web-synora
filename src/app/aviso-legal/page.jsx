import Link from "next/link";
import LegalPage, { Dato, Titular, Email } from "../components/Legal";
import { TITULAR } from "../../datos/titular";
import { meta } from "../../datos/seo";

export const metadata = meta({
  titulo: "Aviso legal",
  descripcion: "Datos identificativos del titular de synora.es y condiciones de uso del sitio web.",
  ruta: "/aviso-legal",
});

export default function AvisoLegal() {
  return (
    <LegalPage
      actual="/aviso-legal"
      titulo="Aviso legal"
      entradilla="Quién está detrás de esta web y en qué condiciones puedes usarla."
    >
      <div>
        <h2>1. Quiénes somos</h2>
        {/* La cita a la LSSI solo cuando los datos que exige están todos
            (titular.js); mientras, una entrada neutra. */}
        <p>
          {TITULAR.razonSocial && TITULAR.nif && TITULAR.domicilio
            ? "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), estos son los datos del titular de este sitio web:"
            : "Estos son los datos del titular de este sitio web:"}
        </p>
        {/* Solo las filas que ya tienen dato (titular.js). */}
        <dl className="ficha">
          {[
            ["Titular", "razonSocial"],
            ["Nombre comercial", "nombreComercial"],
            ["NIF", "nif"],
            ["Domicilio", "domicilio"],
            ["Correo", "email"],
            ["Teléfono", "telefono"],
            ["Datos registrales", "registro"],
          ]
            .filter(([, campo]) => TITULAR[campo])
            .map(([rotulo, campo]) => (
              <div key={campo} style={{ display: "contents" }}>
                <dt>{rotulo}</dt>
                <dd>{campo === "email" ? <Email /> : <Dato campo={campo} />}</dd>
              </div>
            ))}
        </dl>
      </div>

      <div>
        <h2>2. Para qué sirve esta web</h2>
        <p>
          Esta web presenta los servicios de <Titular />: desarrollo de CRM a
          medida, desarrollo web y de aplicaciones, y automatización de
          procesos para empresas. Su uso es gratuito y no exige registro.
        </p>
        <p>
          Al navegar por ella aceptas estas condiciones. Si contratas alguno de
          los servicios, se regirá además por las condiciones particulares que
          firmemos en cada caso.
        </p>
      </div>

      <div>
        <h2>3. Uso correcto</h2>
        <p>Te comprometes a usar la web de forma lícita y, en particular, a no:</p>
        <ul>
          <li>intentar acceder a zonas restringidas o a sistemas que no te correspondan;</li>
          <li>introducir virus, código malicioso o cualquier cosa que pueda dañar la web o a otros usuarios;</li>
          <li>copiar o reutilizar sus contenidos con fines comerciales sin nuestro permiso.</li>
        </ul>
      </div>

      <div>
        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Los textos, el diseño, el código, los logotipos y la marca «Synora»
          son de <Titular /> o se usan con permiso de sus titulares. Puedes
          enlazar a cualquier página de la web y citarla, pero no reproducir,
          distribuir ni transformar sus contenidos sin autorización expresa.
        </p>
      </div>

      <div>
        <h2>5. Responsabilidad</h2>
        <p>
          Cuidamos que la información sea correcta y esté al día, pero puede
          contener errores o quedarse desactualizada. Los contenidos son
          informativos: no constituyen una oferta vinculante, y el alcance y el
          precio de cada servicio se fijan siempre por escrito antes de
          contratarlo.
        </p>
        <p>
          No respondemos de interrupciones del servicio ajenas a nuestro
          control ni del contenido de webs de terceros a las que enlacemos.
          Si detectas un enlace a un contenido ilícito, escríbenos a{" "}
          <Email /> y lo retiraremos.
        </p>
      </div>

      <div>
        <h2>6. Tus datos</h2>
        <p>
          Cómo tratamos tus datos personales está explicado en la{" "}
          <Link href="/privacidad">política de privacidad</Link>, y lo que se
          guarda en tu navegador, en la <Link href="/cookies">política de cookies</Link>.
        </p>
      </div>

      <div>
        <h2>7. Legislación aplicable</h2>
        <p>
          Este aviso se rige por la legislación española. Para cualquier
          conflicto, si eres consumidor serán competentes los juzgados de tu
          domicilio; en los demás casos, los del domicilio del titular.
        </p>
      </div>
    </LegalPage>
  );
}
