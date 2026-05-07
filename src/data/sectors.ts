export interface SectorData {
  slug: string;
  category: string;
  title: string;
  titleSerif: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  dashboardBenefits: {
    title: string;
    description: string;
    integration: string;
    image: string;
  };
  recommendedPlan: {
    name: string;
    price: string;
    modules: string[];
  };
}

export const sectors: Record<string, SectorData> = {
  inmobiliarias: {
    slug: "inmobiliarias",
    category: "Inmobiliaria",
    title: "No se trata de captar…",
    titleSerif: "sino de convencer.",
    description: "Dotamos a tu equipo de la autoridad y evidencia necesarias para cerrar en la primera reunión con datos claros y procesos automáticos.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "+30%", label: "Visitas Efectivas" },
      { value: "+20%", label: "Tasa de Cierre" },
      { value: "24/7", label: "Atención Comercial" },
    ],
    features: [
      {
        title: "Valoración Real",
        description: "Comparativas ajustadas al mercado local generadas en segundos, con datos actualizados de zonas y tipologías similares.",
        icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      },
      {
        title: "Análisis Competitivo",
        description: "Puntos fuertes y débiles frente a la competencia directa, identificados automáticamente para cada inmueble.",
        icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      },
      {
        title: "Informe PDF con Marca",
        description: "Listo para enviar o presentar. Incluye datos de demanda, tiempos de venta y evolución de precios.",
        icon: "M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM7 21l5-5 5 5M7 3l5 5 5-5",
      },
    ],
    process: [
      { title: "Leads de Portales Centralizados", description: "Recibe leads de Idealista, Fotocasa y Habitaclia en tiempo real con calificación automática." },
      { title: "Estado de Captaciones", description: "Controla visualmente en qué fase está cada propiedad, desde la primera llamada hasta la firma." },
      { title: "Análisis de Mercado Integrado", description: "Accede a las valoraciones de Property Intelligence directamente desde la ficha de cada cliente." },
    ],
    dashboardBenefits: {
      title: "Control total de tu cartera",
      description: "Visualiza en tiempo real el funnel de captación, el rendimiento de tus agentes y el stock disponible sin cambiar de pestaña.",
      integration: "Se integra con Idealista, Fotocasa y tu CRM actual para centralizar toda la operativa en una sola pantalla inteligente.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    recommendedPlan: {
      name: "Plan Medio + Pack Inmobiliario",
      price: "288€/mes",
      modules: ["Pack Captación", "WebConnect", "Seguimiento Leads IA"],
    }
  },
  clinicas: {
    slug: "clinicas",
    category: "Salud",
    title: "Más que una agenda…",
    titleSerif: "un sistema de cuidado.",
    description: "Optimizamos la gestión de pacientes y agendas para centros médicos, dentales y fisioterapia. Automatización total desde la cita hasta el post-tratamiento.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "-15%", label: "Tasa de No-Shows" },
      { value: "+25%", label: "Recuperación Pacientes" },
      { value: "100%", label: "Agenda Optimizada" },
    ],
    features: [
      {
        title: "Agenda Inteligente",
        description: "IA que gestiona huecos, recordatorios y cancelaciones en tiempo real para maximizar la ocupación.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      },
      {
        title: "Fidelización Activa",
        description: "Seguimiento automático de tratamientos y bonos de sesiones para asegurar que el paciente complete su ciclo.",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      },
      {
        title: "Historial Digital",
        description: "Acceso rápido y centralizado a toda la evolución del paciente, preferencias y notas de tratamiento.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      },
    ],
    process: [
      { title: "Recordatorios Multicanal", description: "WhatsApp, SMS y Email coordinados para reducir ausencias sin esfuerzo manual." },
      { title: "Gestión de Cobros", description: "Automatización de facturación y recordatorios de pagos pendientes o bonos por agotar." },
      { title: "Encuestas de Satisfacción", description: "Feedback automático tras cada visita para mejorar el servicio y obtener reseñas positivas." },
    ],
    dashboardBenefits: {
      title: "Optimización de Agenda 360°",
      description: "Gestiona citas, disponibilidad de doctores y salas desde un panel visual que predice huecos y minimiza el tiempo ocioso.",
      integration: "Conexión bidireccional con tu software de gestión actual y WhatsApp Business para automatizar el ciclo del paciente.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    },
    recommendedPlan: {
      name: "Plan Medio",
      price: "199€/mes",
      modules: ["Chatbot WhatsApp", "Recordatorios Automáticos", "Gestión Documental"],
    }
  },
  restaurantes: {
    slug: "restaurantes",
    category: "Hostelería",
    title: "Mesas llenas…",
    titleSerif: "sin complicaciones.",
    description: "Libro de reservas inteligente y gestión de no-shows. Conoce a tus clientes antes de que crucen la puerta.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "0", label: "No-Shows Críticos" },
      { value: "+15%", label: "Rotación de Mesas" },
      { value: "+20%", label: "Ticket Medio" },
    ],
    features: [
      {
        title: "Cero No-Shows",
        description: "Confirmación automática y cobro de fianza en reservas críticas o grupos grandes.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Guest Intelligence",
        description: "Historial de preferencias, alergias y celebraciones integrado en cada nueva reserva.",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      },
      {
        title: "Lista de Espera IA",
        description: "Gestión automática de cancelaciones de última hora avisando a clientes en lista de espera.",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    process: [
      { title: "Reservas 24/7", description: "Chatbot y widget web que reserva mesas sin interrumpir al personal de sala." },
      { title: "Marketing Automatizado", description: "Envío de ofertas personalizadas en cumpleaños o fechas especiales del cliente." },
      { title: "Análisis de Ocupación", description: "Previsión de demanda para optimizar turnos y compras de materia prima." },
    ],
    dashboardBenefits: {
      title: "Tu libro de reservas, evolucionado",
      description: "Visualiza la ocupación de tus salas, el histórico de clientes y las alertas de alergias en un panel táctil diseñado para el ritmo de la sala.",
      integration: "Se integra con tu TPV y widget de reservas web para que no pierdas ni una mesa y reduzcas los no-shows a cero.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    },
    recommendedPlan: {
      name: "Plan Básico + Módulos",
      price: "148€/mes",
      modules: ["Chatbot WhatsApp", "Confirmación con Fianza", "Guest Intelligence"],
    }
  },
  gimnasios: {
    slug: "gimnasios",
    category: "Fitness",
    title: "Entrena tu negocio…",
    titleSerif: "para que crezca solo.",
    description: "Reduce la tasa de bajas con alertas de churn preventivas y automatiza el alta de nuevos socios sin fricciones.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "-20%", label: "Tasa de Abandono" },
      { value: "+40%", label: "Altas Digitales" },
      { value: "24h", label: "Soporte al Socio" },
    ],
    features: [
      {
        title: "Prevención de Bajas",
        description: "IA que detecta socios con baja asistencia y activa campañas de motivación automáticamente.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title: "Altas Express",
        description: "Proceso de inscripción, firma de contrato y pago 100% digital desde el móvil del socio.",
        icon: "M12 4v16m8-8H4",
      },
      {
        title: "Control de Accesos",
        description: "Integración con tornos y apps para gestión de aforos y reservas de clases dirigidas.",
        icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
      },
    ],
    process: [
      { title: "Onboarding Automatizado", description: "Secuencia de mensajes de bienvenida y tutoriales para los primeros 30 días del socio." },
      { title: "Gestión de Recobros", description: "Sistema automático que gestiona cuotas devueltas y avisos de caducidad de tarjetas." },
      { title: "Reserva de Clases", description: "App sencilla para que los socios gestionen sus plazas sin saturar la recepción." },
    ],
    dashboardBenefits: {
      title: "Gestión de Socios sin Fricción",
      description: "Monitoriza el churn preventivo, las altas en tiempo real y la ocupación de clases dirigidas desde un panel de mando central.",
      integration: "Conexión con tornos de acceso, pasarelas de pago y tu App de socios para automatizar toda la administración.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    },
    recommendedPlan: {
      name: "Plan Medio",
      price: "199€/mes",
      modules: ["Altas Digitales", "Gestión de Recobros", "Analíticas de Churn"],
    }
  },
  servicios: {
    slug: "servicios",
    category: "Reformas y Servicios",
    title: "Gestión...",
    titleSerif: "Operativa.",
    description: "Automatizamos presupuestos, agendas y seguimiento de trabajos para empresas de reformas, electricidad y climatización.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "-70%", label: "Tiempo de Respuesta" },
      { value: "+50%", label: "Presupuestos Enviados" },
      { value: "+40%", label: "Tasa de Conversión" },
    ],
    features: [
      {
        title: "Seguimiento de Presupuestos",
        description: "Visualiza al instante qué presupuestos han sido leídos por el cliente y activa recordatorios de cierre automáticos.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      },
      {
        title: "Gestión de Cuadrillas",
        description: "Asigna leads y trabajos directamente a tus técnicos según su disponibilidad y zona geográfica desde el mismo panel.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      },
      {
        title: "Analítica de Rentabilidad",
        description: "Datos claros sobre qué tipo de servicios son más rentables para tu negocio, optimizando tus márgenes.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    ],
    process: [
      { title: "Captación Automática", description: "Centralización de leads con clasificación por urgencia y servicio solicitado." },
      { title: "Generación de Presupuestos", description: "Envío automatizado de propuestas técnicas y seguimiento hasta el cierre de la obra." },
      { title: "Organización de Trabajos", description: "Asignación inteligente de tareas según agenda de técnicos y materiales necesarios." },
    ],
    dashboardBenefits: {
      title: "Gestión de Obra y Presupuestos",
      description: "Visualiza qué presupuestos están calientes, asigna cuadrillas por zona y controla el margen de cada proyecto en tiempo real.",
      integration: "Se integra con formularios de contacto, herramientas de firma digital y WhatsApp para cerrar contratos más rápido.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    recommendedPlan: {
      name: "Plan Medio + Custom Advanced",
      price: "Desde 249€/mes",
      modules: ["Gestión de Cuadrillas", "Seguimiento de Presupuestos", "Web a Medida"],
    }
  },
};
