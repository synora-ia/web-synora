/* RECEPCIÓN DEL FORMULARIO DE CONTACTO
   ─────────────────────────────────────────────────────────────────────────
   El navegador manda aquí el formulario; el servidor lo valida y lo reenvía
   al webhook de n8n. Así la URL del webhook no queda a la vista de nadie en
   el código público (en synora.es iba escrita a pelo en el navegador).

   Configuración (en .env.local, o en las variables del alojamiento):
     CONTACTO_WEBHOOK_URL     obligatoria. Sin ella el formulario responde
                              «sin conectar» y NO se pierde nada en silencio.
     CONTACTO_WEBHOOK_SECRETO opcional. Se manda en la cabecera
                              X-Synora-Secreto para que n8n compruebe que
                              la petición viene de la web.

   Se reenvían los mismos campos que el formulario de synora.es (nombre,
   apellidos, telefono, email, consulta), así que el workflow de n8n que ya
   existe sirve sin tocarlo. Lo nuevo (empresa, interés) va además dentro de
   `consulta`, para que tampoco se pierda si el workflow solo lee ese campo.

   Antispam sin cookies ni servicios de terceros (un reCAPTCHA de Google
   obligaría a poner aviso de cookies): un campo trampa que una persona no
   ve y un tiempo mínimo entre que se abre el formulario y se envía. Ese
   tiempo lo mide el propio navegador (`ms`): antes se mandaba la hora a la
   que se abrió y se restaba de la del servidor, y con el reloj del móvil
   adelantado el mensaje se tiraba en silencio diciendo «gracias».

   No se guarda nada aquí ni se escribe en los registros del servidor ningún
   dato personal. */

const MAX = { nombre: 80, apellidos: 120, email: 160, telefono: 30, empresa: 120, consulta: 4000 };
const INTERESES = ["CRM", "Web o app", "Automatizaciones", "Auditoría", "Aún no lo sé"];
const TIEMPO_MINIMO_MS = 3000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const limpia = (v, max) => String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
const json = (cuerpo, status = 200) => Response.json(cuerpo, { status });

export async function POST(req) {
  let d;
  try {
    d = await req.json();
  } catch {
    return json({ ok: false, error: "formato" }, 400);
  }

  /* Bots: si rellenan el campo trampa o envían en menos de 3 s, se les
     responde «ok» igual (para no darles pistas) y no se reenvía nada. */
  const ms = Number(d.ms);
  if (limpia(d.web, 200) || !(ms >= TIEMPO_MINIMO_MS)) {
    return json({ ok: true });
  }

  const f = {
    nombre: limpia(d.nombre, MAX.nombre),
    apellidos: limpia(d.apellidos, MAX.apellidos),
    email: limpia(d.email, MAX.email).toLowerCase(),
    telefono: limpia(d.telefono, MAX.telefono),
    empresa: limpia(d.empresa, MAX.empresa),
    consulta: String(d.consulta ?? "").trim().slice(0, MAX.consulta),
    interes: (Array.isArray(d.interes) ? d.interes : []).filter((i) => INTERESES.includes(i)),
  };

  const errores = {};
  if (!f.nombre) errores.nombre = "Dinos cómo te llamas.";
  if (!EMAIL.test(f.email)) errores.email = "Revisa el correo: así no nos llega.";
  if (f.consulta.length < 10) errores.consulta = "Cuéntanos un poco más (al menos una frase).";
  if (Object.keys(errores).length) return json({ ok: false, errores }, 422);

  const url = process.env.CONTACTO_WEBHOOK_URL;
  if (!url) return json({ ok: false, error: "sin-conectar" }, 503);

  const extra = [
    f.interes.length && `Le interesa: ${f.interes.join(", ")}`,
    f.empresa && `Empresa: ${f.empresa}`,
  ].filter(Boolean);
  const consulta = extra.length ? `${f.consulta}\n\n— ${extra.join(" · ")}` : f.consulta;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACTO_WEBHOOK_SECRETO && { "X-Synora-Secreto": process.env.CONTACTO_WEBHOOK_SECRETO }),
      },
      body: JSON.stringify({
        nombre: f.nombre,
        apellidos: f.apellidos,
        telefono: f.telefono,
        email: f.email,
        consulta,
        empresa: f.empresa,
        interes: f.interes,
        origen: "web · /contacto",
        fecha: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return json({ ok: false, error: "destino" }, 502);
  } catch {
    return json({ ok: false, error: "destino" }, 502);
  }

  return json({ ok: true });
}
