/* PREGUNTAS FRECUENTES POR PÁGINA
   Las enseñan CRM, Desarrollo y Automatizaciones (con sus datos estructurados
   FAQPage) y las lee /llms.txt. Son las preguntas tal como las haría un dueño
   de pyme, a Google o a un asistente de IA: que la respuesta esté aquí, escrita
   de una vez y con las cifras de precios.js, es lo que hace que nos citen.
   Solo respuestas que la web ya sostiene en otro sitio. */
import { PLANES, PLAN_SOLO, A_MEDIDA, SIN_CRM, USUARIO_EXTRA } from "./precios";

const plan = (id) => PLANES.find((p) => p.id === id);
const proyecto = (n) => A_MEDIDA.find((x) => x.nombre === n)?.precio;
const cuota = (n) => SIN_CRM.find(([x]) => x === n)?.[2];

export const FAQ_CRM = [
  ["¿Qué es un CRM y para qué le sirve a una pyme?",
    "Es el programa donde tienes a todos tus clientes en un mismo sitio: quién te ha escrito, qué le dijiste y qué toca hacer ahora. Un buen CRM para pymes, además, hace solo lo repetitivo: contesta al momento a cada contacto nuevo, manda los recordatorios de las citas y hace el seguimiento de quien se enfría."],
  ["¿En qué se diferencia el CRM de Synora de uno de suscripción?",
    "Es nuestro, no una plantilla de terceros. Se monta por módulos según cómo trabaja tu negocio, se conecta con las herramientas que ya usas y, si te falta algo que no existe en ningún catálogo, podemos crear ese módulo."],
  ["¿Cuánto cuesta el CRM de Synora?",
    `El plan Esencial cuesta ${plan("esencial").cuota} €/mes con ${plan("esencial").usuarios} usuarios; Crecimiento, ${plan("crecimiento").cuota} €/mes con ${plan("crecimiento").usuarios} usuarios y chatbot de WhatsApp; y Pro, ${plan("pro").cuota} €/mes con ${plan("pro").usuarios} usuarios y asistente con IA. Para quien trabaja solo, el plan ${PLAN_SOLO.nombre} cuesta ${PLAN_SOLO.cuota} €/mes. Cada usuario más, ${USUARIO_EXTRA} €/mes. Sin permanencia y sin IVA; la puesta en marcha se paga una vez y el consumo de IA va según uso.`],
  ["¿Puedo tener un CRM conectado a WhatsApp Business?",
    "Sí. El plan Crecimiento incluye un chatbot de WhatsApp que atiende a cualquier hora, responde con la información de tu negocio y deja apuntado cada contacto en el CRM; en los demás planes se puede añadir como módulo."],
  ["¿Sirve como CRM para mi sector?",
    "Sí: se monta por módulos según cómo trabaja cada negocio. Sirve para inmobiliarias, clínicas (dentales, de fisioterapia o estética), asesorías y gestorías, gimnasios o restaurantes, entre otros. Para inmobiliarias hay además módulos propios: tasación con IA, captador de propietarios particulares, cruce de clientes con inmuebles y publicación en la web y en portales."],
];

export const FAQ_DESARROLLO = [
  ["¿Cuánto cuesta una página web en España?",
    `En Synora, una página web a medida cuesta ${proyecto("Web a medida")}, y si quieres un panel de gestión para cambiar tú textos, fotos o blog, desde 300 € más. Una tienda online, ${proyecto("Tienda online")}. El precio exacto se cierra por escrito antes de empezar.`],
  ["¿Qué es una app PWA?",
    `Es una app que se instala desde el navegador, en Android y en iPhone, sin pasar por App Store ni Google Play. Sirve para tus clientes (reservas, pedidos, fidelización) o para tu equipo (partes de trabajo, operativa en la calle). En Synora cuestan ${proyecto("App para Android e iOS")}.`],
  ["¿El código de la web o la app es mío?",
    "Sí. Te entregamos el código: no te quedas atado a nosotros. Si quieres, la mantenemos nosotros."],
  ["¿Quién mantiene la web después de entregarla?",
    `Puedes llevarla tú o dejarla con nosotros: el mantenimiento de web o app (servidor, copias de seguridad, actualizaciones y pequeños cambios) cuesta ${cuota("Mantenimiento de web o app")}.`],
  ["¿La web se conecta con el CRM?",
    "Sí. Lo que entra por el formulario de tu web llega solo al CRM, y lo que das de alta en el CRM (inmuebles, productos…) se puede publicar solo en la web."],
];

export const FAQ_AUTOMATIZACIONES = [
  ["¿Se puede automatizar WhatsApp Business con IA?",
    "Sí. Un chatbot con IA atiende tu WhatsApp a cualquier hora con la información de tu negocio, responde las preguntas de siempre, apunta citas o reservas y deja cada conversación guardada para que la retomes tú cuando haga falta."],
  ["¿Se pueden enviar recordatorios de citas por WhatsApp?",
    "Sí. Cada cliente recibe el recordatorio de su cita el día antes, sin que nadie tenga que mandarlo, y si no puede venir contesta al mensaje y te enteras a tiempo."],
  ["¿Qué se puede automatizar en una pyme?",
    "Casi todo lo que se repite cada día: contestar a los contactos nuevos, mandar recordatorios de citas, hacer el seguimiento de presupuestos, pasar datos de un programa a otro sin copiar y pegar, avisar al equipo y preparar los informes."],
  ["¿Tengo que cambiar de programas para automatizar?",
    "No. Conectamos las herramientas que ya usas: WhatsApp, correo, calendarios, hojas de cálculo, tu programa de gestión, el TPV o la facturación. Tampoco hace falta usar nuestro CRM."],
  ["¿Cuánto cuesta automatizar un proceso?",
    `Cada automatización cuesta ${proyecto("Automatización a medida")}, con el precio exacto por escrito antes de empezar. Si quieres que la vigilemos y la arreglemos si otra herramienta cambia, el mantenimiento cuesta ${cuota("Mantenimiento de automatizaciones")}.`],
  ["¿Trabajáis con n8n?",
    "Sí. Montamos buena parte de las automatizaciones con n8n, y cuando una herramienta no tiene conexión hecha, la programamos a medida."],
  ["¿Cuánto se tarda en automatizar algo?",
    "Un flujo sencillo, unos días; si hay que tocar varios sistemas, unas semanas. La fecha exacta te la damos por escrito antes de empezar, y se monta en paralelo, sin parar tu negocio."],
];
