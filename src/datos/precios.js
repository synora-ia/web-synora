/* ═══════════════════════════════════════════════════════════════════════════
   PRECIOS · único sitio donde se cambian
   La página /precios, los planes y el catálogo de módulos salen de aquí.

   ORIGEN DE CADA CIFRA
   · Planes y módulos: los que publicaba synora.es (/planes y su
     pricingData.ts), con nombres de módulo que dicen lo que hacen. Pro a
     399 € sin «desde», usuarios por plan y Pack Inmobiliaria a 39 €:
     decididos por Josep (20/10).
   · Auditoría desde 200 € (se descuenta si seguimos): ya estaba en la web.
   · Web desde 600 €, panel desde 300 €, tienda y app (PWA) desde 800 €:
     cifras de Josep (20/10).
   · SIN CONFIRMAR (propuestas mías, oct. 2026): plan Solo (59 € y su
     puesta en marcha), automatización desde 250 € y las cuotas de SIN_CRM.
     Confirmar antes de publicar.
   ═══════════════════════════════════════════════════════════════════════════ */

/* Si los precios llevan o no IVA. Lo normal en B2B es «sin IVA»; confirmar. */
export const NOTA_IVA = "Precios sin IVA.";

/* Cada persona más de las que incluye el plan (aprobado por Josep, 20/10). */
export const USUARIO_EXTRA = 15;

export const PLANES = [
  {
    id: "esencial",
    nombre: "Esencial",
    para: "Para ordenar el día a día y que nadie se quede sin respuesta.",
    cuota: 99,
    usuarios: 2,
    puesta: "350 €",
    incluye: [
      "CRM: contactos, oportunidades y su historial",
      "Agenda centralizada",
      "Documentos de cada cliente en su ficha",
      "Respuesta inmediata a cada contacto nuevo",
      "El formulario de tu web entra directo al CRM",
      "Recordatorios automáticos",
    ],
  },
  {
    id: "crecimiento",
    nombre: "Crecimiento",
    para: "Para atender 24/7 y que ningún interesado se enfríe.",
    cuota: 199,
    usuarios: 5,
    puesta: "desde 600 €",
    destacado: true,
    ia: true,
    incluye: [
      "Todo lo del plan Esencial",
      "Chatbot de WhatsApp que atiende 24/7",
      "Chatbot en tu web",
      "Seguimiento con IA de cada interesado",
    ],
  },
  {
    id: "pro",
    nombre: "Pro",
    para: "Para el equipo que quiere decidir con datos y delegar en la IA.",
    /* 399 sin «desde» y con más dentro (aprobado 20/10): por piezas serían
       199 + 49 + 25 + 39 + 49 + 49 = 410 €, más 5 usuarios extra (75 €). */
    cuota: 399,
    usuarios: 10,
    ia: true,
    puesta: "desde 900 €",
    incluye: [
      "Todo lo del plan Crecimiento",
      "Asistente interno con IA",
      "Analíticas en tiempo real",
      "Transcripción de reuniones",
      "Embudo de ventas",
      "Aviso de clientes en riesgo",
      "Soporte prioritario",
    ],
  },
];

/* Plan para quien trabaja solo: el CRM de Esencial sin sus dos
   automatizaciones (99 − 15 − 25 = 59). Va aparte de PLANES para no romper
   la fila de tres.
   Puesta «desde»: sube si se le suman módulos. Si no, Solo + respuesta +
   recordatorios sería un Esencial con 200 € menos de puesta en marcha. */
export const PLAN_SOLO = {
  id: "solo",
  nombre: "Solo",
  para: "Para quien trabaja por su cuenta.",
  cuota: 59,
  usuarios: 1,
  puesta: "desde 150 €",
  incluye: "CRM, agenda, documentos y el formulario de tu web entrando directo",
};

/* Catálogo completo de módulos sueltos, por capacidad (las mismas cinco de
   la página del CRM). precio: texto tal cual se enseña. */
export const MODULOS = [
  {
    grupo: "Captar",
    items: [
      ["Respuesta inmediata a contactos nuevos", "Contesta al momento a cada contacto que entra", "+15 €/mes"],
      ["Chatbot de WhatsApp", "Atiende y responde 24/7 en WhatsApp. La IA, según uso", "+49 €/mes"],
      ["Chatbot en tu web", "Atiende a quien visita tu web. La IA, según uso", "+49 €/mes"],
    ],
  },
  {
    grupo: "Convertir",
    items: [
      ["Seguimiento con IA", "Puntúa a cada interesado y le escribe cuando toca", "+39 €/mes"],
      ["Recordatorios automáticos", "Avisos de citas y siguientes pasos, sin que nadie los dispare", "+25 €/mes"],
      ["Embudo de ventas", "Flujo automático de la captación al cierre", "+49 €/mes"],
      ["Cruce de clientes y producto", "Propone a cada cliente lo que encaja con lo que busca. Va incluido en el Pack Inmobiliaria", "+29 €/mes"],
    ],
  },
  {
    grupo: "Gestionar",
    items: [
      ["Asistente interno con IA", "Le preguntas o le pides tareas sobre tu CRM", "+49 €/mes"],
      ["Transcripción de reuniones", "Resumen automático de cada reunión o llamada", "+39 €/mes"],
      ["Pasarela de publicación", "Lo que das de alta en el CRM se publica solo donde lo necesites: tu web, Idealista u otra plataforma de tu sector. Una pasarela por cada destino", "25 € pago único"],
      ["Usuario extra", "Cada persona más de las que incluye tu plan", `+${USUARIO_EXTRA} €/mes`],
    ],
  },
  {
    grupo: "Decidir",
    items: [
      ["Analíticas en tiempo real", "Las cifras del negocio en un panel, al momento", "+25 €/mes"],
      ["Aviso de clientes en riesgo", "Avisa de los clientes que dejan de comprar o de responder, para que los llames a tiempo", "+49 €/mes"],
    ],
  },
  {
    grupo: "Inmobiliarias",
    items: [
      ["Captador de particulares", "Rastrea portales y avisa de propietarios particulares", "+75 €/mes"],
      ["Tasación con IA", "Análisis de mercado por zonas e informe de tasación", "+69 €/mes"],
      ["Pack Inmobiliaria", "Ficha de propietarios para captar a mano, pasarela de publicación y cruce de clientes", "+39 €/mes"],
      ["Pack Inmobiliaria Pro", "Todo el Pack Inmobiliaria, más captación avanzada en portales y tasación con IA", "+125 €/mes"],
    ],
  },
];

/* Proyectos: lo que no es cuota mensual, en el orden en que se enseñan.
   La auditoría y el consumo de IA se explican en las preguntas. */
export const A_MEDIDA = [
  /* Panel aparte (Josep, 20/10): la web de 600 € no lo lleva. Va dentro de
     la tarjeta de la web (`extra`) para no dejar una tarjeta huérfana.
     OJO: el CRM NO sustituye al panel. La pasarela publica fichas del CRM
     (inmuebles, productos); el panel cambia el contenido de la web. */
  { nombre: "Web a medida", precio: "desde 600 €", texto: "Rápida, pensada para el móvil y lista para posicionar. El código es tuyo.", extra: "Con panel de gestión para cambiar tú textos, fotos o blog: desde 300 € más." },
  { nombre: "Tienda online", precio: "desde 800 €", texto: "Catálogo, carrito, pago online y la gestión de productos y pedidos. Se conecta con tu stock, envíos o facturación si hace falta." },
  { nombre: "App para Android e iOS", precio: "desde 800 €", texto: "Se instala desde el navegador en cualquier móvil, sin pasar por las tiendas de apps. Para tus clientes o para tu equipo." },
  { nombre: "Automatización a medida", precio: "desde 250 €", texto: "Cada flujo que conecta tus herramientas: WhatsApp, correo, tu programa de gestión, el TPV, la facturación…" },
];

/* Cuotas aparte: el mantenimiento de lo que se entrega y el chatbot por su
   cuenta, sin CRM. */
export const SIN_CRM = [
  ["Chatbot de WhatsApp por su cuenta", "Atiende, responde y coge reservas o citas 24/7, sin necesidad de CRM. La IA, según uso", "89 €/mes"],
  ["Mantenimiento de web o app", "Servidor, copias de seguridad, actualizaciones y pequeños cambios", "desde 29 €/mes"],
  ["Mantenimiento de tienda", "Lo mismo que la web, más pagos, envíos y stock vigilados", "desde 49 €/mes"],
  ["Mantenimiento de automatizaciones", "Servidor, vigilancia y arreglos si otra herramienta cambia", "desde 29 €/mes"],
];

/* Ejemplos de lo que pagaría cada tipo de negocio. Se calculan solos con
   las cuotas de arriba; las piezas de módulo van con su precio a mano, así
   que si cambia un módulo, cambiarlo también aquí. */
const plan = (id) => PLANES.find((p) => p.id === id);
export const EJEMPLOS = [
  {
    id: "profesional",
    quien: "Profesional por su cuenta",
    caso: "Asesor, fisio, abogado, coach…",
    piezas: [["Plan Solo", PLAN_SOLO.cuota]],
    puesta: PLAN_SOLO.puesta,
  },
  {
    id: "clinica",
    quien: "Clínica o centro con citas",
    caso: "Que nadie se quede sin cita ni falte por olvido.",
    piezas: [["Plan Esencial", plan("esencial").cuota], ["Chatbot de WhatsApp", 49]],
    puesta: plan("esencial").puesta,
  },
  {
    id: "inmobiliaria",
    quien: "Inmobiliaria de 3 agentes",
    caso: "Contactos de su web y de WhatsApp atendidos al momento.",
    piezas: [["Plan Crecimiento", plan("crecimiento").cuota], ["Pack Inmobiliaria", 39]],
    puesta: plan("crecimiento").puesta,
  },
  {
    id: "red",
    quien: "Red de 20 agentes",
    caso: "Varias oficinas, captación y datos para decidir.",
    piezas: [["Plan Pro", plan("pro").cuota], ["Pack Inmobiliaria Pro", 125], ["10 usuarios extra", 10 * USUARIO_EXTRA]],
    puesta: plan("pro").puesta,
  },
];

/* Preguntas frecuentes de la página. Solo respuestas que la web ya sostiene
   en otro sitio; nada de permanencias ni plazos que nadie ha confirmado. */
export const FAQ_PRECIOS = [
  ["¿Hay permanencia?", "No. Pagas mes a mes y te das de baja cuando quieras. La puesta en marcha se paga una sola vez, al empezar."],
  ["¿Por qué hay un pago de puesta en marcha?", "Porque no te damos acceso a un programa y ya: configuramos el CRM a tu medida, lo conectamos con las herramientas que usas y formamos a tu equipo durante las primeras semanas."],
  ["¿La IA se paga aparte?", "Los chatbots y el asistente usan modelos de IA que cuestan según cuánto se usen. Por eso no lo metemos en una cifra fija: en la auditoría te damos una estimación con tu volumen real."],
  ["¿Cuántas personas pueden usarlo?", `El plan Solo incluye 1 usuario; Esencial, 2; Crecimiento, 5, y Pro, 10. Cada persona más cuesta ${USUARIO_EXTRA} €/mes.`],
  ["¿Cómo sé qué plan necesito?", "Empezamos por media hora gratis: nos cuentas cómo trabajas y te decimos qué haría falta. Si hay que mirar tu operativa a fondo, el siguiente paso es la auditoría, desde 200 €, que se descuenta si seguimos adelante."],
  ["¿Podré cambiar yo la web?", "Sí. Los textos, las fotos o el blog los cambias tú con el panel de gestión, desde 300 €, o nos los pides con el mantenimiento. Y si usas nuestro CRM, las fichas que das de alta allí (inmuebles, productos…) se publican solas con la pasarela de publicación."],
  ["¿La web o la app que nos hagáis es nuestra?", "Sí. Te entregamos el código: no te quedas atado a nosotros. Si quieres, la mantenemos nosotros."],
];
