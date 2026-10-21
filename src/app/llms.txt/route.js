/* /llms.txt — resumen de Synora en texto plano para asistentes de IA
   (ChatGPT, Claude, Perplexity, Gemini…), siguiendo la propuesta llmstxt.org.
   Se genera desde los mismos datos que la web (precios.js, faq.js), así que
   si cambia un precio, cambia aquí también. Se construye al compilar. */
import { PLANES, PLAN_SOLO, USUARIO_EXTRA, A_MEDIDA, SIN_CRM, FAQ_PRECIOS, NOTA_IVA } from "../../datos/precios";
import { FAQ_CRM, FAQ_DESARROLLO, FAQ_AUTOMATIZACIONES } from "../../datos/faq";
import { SITIO } from "../../datos/seo";
import { TITULAR } from "../../datos/titular";

export const dynamic = "force-static";

const U = SITIO.url;
const preguntas = (lista) => lista.map(([q, a]) => `### ${q}\n\n${a}`).join("\n\n");

export function GET() {
  const planes = [...PLANES, PLAN_SOLO]
    .map((p) => `- **${p.nombre}** · ${p.cuota} €/mes · ${p.usuarios === 1 ? "1 usuario" : `hasta ${p.usuarios} usuarios`} · puesta en marcha ${p.puesta}. ${p.para}`)
    .join("\n");
  const proyectos = A_MEDIDA.map((x) => `- **${x.nombre}** · ${x.precio}. ${x.texto}${x.extra ? ` ${x.extra}` : ""}`).join("\n");
  const cuotas = SIN_CRM.map(([n, t, p]) => `- **${n}** · ${p}. ${t}.`).join("\n");
  const contacto = [TITULAR.email && `- Correo: ${TITULAR.email}`, TITULAR.telefono && `- Teléfono: ${TITULAR.telefono}`]
    .filter(Boolean).join("\n");

  const texto = `# Synora

> Synora es una empresa pequeña de España que monta, para pymes, un CRM propio a medida, webs, tiendas online y apps (PWA), y automatizaciones entre las herramientas que ya usan. El objetivo: que ningún cliente se quede sin respuesta y que lo repetitivo se haga solo. Trabaja en español, para negocios de toda España.

Lo que la distingue: el CRM es suyo (no una plantilla de terceros) y se monta por módulos; se conecta con lo que el cliente ya usa; los precios son públicos; no hay permanencia; el precio de cada proyecto se cierra por escrito antes de empezar; y el código de webs y apps es del cliente. Primero se hace una conversación de media hora gratis; la auditoría de procesos (desde 200 €, que se descuenta si se sigue adelante) es el paso siguiente solo si hace falta.

## Páginas

- [Inicio](${U}): qué hace Synora y cómo trabaja.
- [CRM a medida](${U}/crm): el CRM modular para pymes, con módulos por sector (también inmobiliarias).
- [Webs, tiendas y apps](${U}/desarrollo): desarrollo web a medida, tiendas online y apps PWA para Android e iOS.
- [Automatizaciones](${U}/automatizaciones): integración de WhatsApp, correo, calendarios, programas de gestión, TPV y facturación.
- [Precios](${U}/precios): todos los planes, módulos y proyectos con su precio.
- [Contacto](${U}/contacto): pedir la media hora gratis.

## Planes del CRM

${planes}

Cada usuario más: ${USUARIO_EXTRA} €/mes. Sin permanencia: se paga mes a mes. El consumo de IA (chatbots, asistente) va según uso y se estima antes de empezar. ${NOTA_IVA}

## Proyectos a medida

${proyectos}

## Cuotas aparte

${cuotas}

## Preguntas frecuentes

${preguntas(FAQ_CRM)}

${preguntas(FAQ_DESARROLLO)}

${preguntas(FAQ_AUTOMATIZACIONES)}

${preguntas(FAQ_PRECIOS)}

## Contacto

- Web: ${U}
- Formulario: ${U}/contacto
${contacto}
`;
  return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
