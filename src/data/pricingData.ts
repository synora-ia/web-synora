import { useLanguage } from "@/components/layout/LanguageContext";

export type PricingCategory = "core" | "service" | "sales" | "advanced" | "pack";

export interface SynoraModule {
  id: string;
  title: string;
  desc: string;
  priceLabel: string;
  category: PricingCategory;
  icon?: string;
  isPack?: boolean;
  includedInGrowth?: boolean;
  includedInPro?: boolean;
  setupPrice?: number;
  monthlyPrice?: number;
  oneTimePrice?: number;
}

export interface SynoraPlan {
  id: string;
  name: string;
  price: string;
  setup: string;
  tag: string;
  tagColor: string;
  quote: string;
  recommended: boolean;
  features: string[];
}

export function usePricingData() {
  const { t, language } = useLanguage();

  // 1. Módulos Individuales y Packs (A la Carta)
  const modules: SynoraModule[] = [
    // --- CORE ---
    {
      id: "dashboard_core",
      title: "Dashboard Core",
      desc: t("dashboard.badge") || (language === "es" ? "Panel de control, agenda y tareas centralizadas." : "Control panel, calendar and centralized tasks."),
      priceLabel: "+39€/mes",
      category: "core",
      icon: "📊",
      includedInGrowth: true,
      includedInPro: true,
      setupPrice: 20,
      monthlyPrice: 39
    },
    {
      id: "analytics",
      title: language === "es" ? "Analíticas Avanzadas" : "Advanced Analytics",
      desc: language === "es" ? "Visualización de datos de negocio en tiempo real." : "Real-time business data visualization.",
      priceLabel: "+25€/mes",
      category: "core",
      icon: "📈",
      includedInPro: true,
      setupPrice: 10,
      monthlyPrice: 25
    },
    {
      id: "internal_ia",
      title: language === "es" ? "Gestión Interna" : "Internal Management",
      desc: language === "es" ? "Tu asistente IA para consultas privadas." : "Your AI assistant for private queries.",
      priceLabel: "+49€/mes",
      category: "core",
      icon: "🏢",
      includedInPro: true,
      setupPrice: 30,
      monthlyPrice: 49
    },
    {
      id: "transcriptions",
      title: language === "es" ? "Transcripciones" : "Transcriptions",
      desc: language === "es" ? "Resúmenes de reuniones automáticos." : "Automatic meeting summaries.",
      priceLabel: "+39€/mes",
      category: "core",
      icon: "✍️",
      includedInPro: true,
      setupPrice: 20,
      monthlyPrice: 39
    },

    // --- SERVICE (Atención) ---
    {
      id: "icebraker",
      title: "Contestador IceBraker",
      desc: language === "es" ? "Respuesta automática inicial a nuevos leads." : "Initial auto-response to new leads.",
      priceLabel: "+15€/mes",
      category: "service",
      icon: "⚡",
      includedInGrowth: true,
      includedInPro: true,
      setupPrice: 10,
      monthlyPrice: 15
    },
    {
      id: "reminders",
      title: language === "es" ? "Recordatorios IA" : "AI Reminders",
      desc: language === "es" ? "Avisos automáticos de citas y seguimientos." : "Automatic appointment and follow-up alerts.",
      priceLabel: "+25€/mes",
      category: "service",
      icon: "⏰",
      includedInGrowth: true,
      includedInPro: true,
      setupPrice: 10,
      monthlyPrice: 25
    },
    {
      id: "wa_chatbot",
      title: "Chatbot WhatsApp",
      desc: language === "es" ? "Atención 24/7 en el canal nº1 de comunicación." : "24/7 support on the #1 communication channel.",
      priceLabel: "+49€/mes",
      category: "service",
      icon: "💬",
      includedInGrowth: true,
      includedInPro: true,
      setupPrice: 30,
      monthlyPrice: 49
    },
    {
      id: "web_chatbot",
      title: "Chatbot Web",
      desc: language === "es" ? "Asistente inteligente para tu página web." : "Smart assistant for your website.",
      priceLabel: "+49€/mes",
      category: "service",
      icon: "🤖",
      includedInGrowth: true,
      includedInPro: true,
      setupPrice: 30,
      monthlyPrice: 49
    },
    {
      id: "ia_followup",
      title: language === "es" ? "Seguimiento IA" : "AI Follow-up",
      desc: language === "es" ? "Calificación y seguimiento inteligente de leads." : "Smart lead scoring and follow-up.",
      priceLabel: "+39€/mes",
      category: "service",
      icon: "👥",
      setupPrice: 15,
      monthlyPrice: 39
    },

    // --- SALES (Ventas y Captación) ---
    {
      id: "web_connect",
      title: "WebConnect",
      desc: language === "es" ? "Conexión automática entre web y dashboard." : "Automatic connection between web and dashboard.",
      priceLabel: language === "es" ? "59€ (Pago único)" : "59€ (One-time)",
      category: "sales",
      icon: "🌐",
      oneTimePrice: 59
    },
    {
      id: "funnel",
      title: "Funnel de Ventas",
      desc: language === "es" ? "Flujo automatizado de captación y cierre." : "Automated capture and closing flow.",
      priceLabel: "+49€/mes",
      category: "sales",
      icon: "🔄",
      includedInPro: true,
      setupPrice: 25,
      monthlyPrice: 49
    },
    {
      id: "ai_suggestions",
      title: language === "es" ? "Sugerencias IA" : "AI Suggestions",
      desc: language === "es" ? "Cruce inteligente de clientes y propiedades." : "Smart matching of clients and properties.",
      priceLabel: "+29€/mes",
      category: "sales",
      icon: "💡",
      setupPrice: 15,
      monthlyPrice: 29
    },
    {
      id: "web_publisher",
      title: language === "es" ? "Publicador Web" : "Web Publisher",
      desc: language === "es" ? "Envío automático de inmuebles a tu web." : "Automatic sending of properties to your web.",
      priceLabel: language === "es" ? "15€ (Pago único)" : "15€ (One-time)",
      category: "sales",
      icon: "📤",
      oneTimePrice: 15
    },

    // --- ADVANCED & PACKS ---
    {
      id: "pack_inmobiliaria",
      title: language === "es" ? "Pack Inmobiliaria" : "Real Estate Pack",
      desc: language === "es" ? "Bundle: Captador, Publicador y Sugerencias IA." : "Bundle: Capturer, Publisher and IA Suggestions.",
      priceLabel: "+25€/mes",
      category: "pack",
      isPack: true,
      setupPrice: 30,
      monthlyPrice: 25
    },
    {
      id: "pack_inmobiliaria_pro",
      title: language === "es" ? "Pack Inmobiliaria Pro" : "Real Estate Pro Pack",
      desc: language === "es" ? "Bundle: Scraping avanzado y Property Intelligence & Tasación." : "Bundle: Advanced Scraping and Property Intelligence & Valuations.",
      priceLabel: "+125€/mes",
      category: "pack",
      isPack: true,
      setupPrice: 30,
      monthlyPrice: 125
    },
    {
      id: "churn_prevention",
      title: language === "es" ? "Prevención de Churn" : "Churn Prevention",
      desc: language === "es" ? "Detección de riesgo de baja y secuencias IA de retención." : "Churn risk detection and AI retention sequences.",
      priceLabel: "+49€/mes",
      category: "advanced",
      icon: "🛡️",
      setupPrice: 15,
      monthlyPrice: 49
    },
    {
      id: "property_intel",
      title: language === "es" ? "Property Intel & Tasación" : "Property Intel & Valuations",
      desc: language === "es" ? "Análisis de mercado por zonas y generación de informes de tasación IA." : "Market analysis by areas and AI valuation report generation.",
      priceLabel: "+69€/mes",
      category: "advanced",
      icon: "🧠",
      setupPrice: 20,
      monthlyPrice: 69
    },
    {
      id: "auto_capture",
      title: language === "es" ? "Captador Automático" : "Automatic Capturer",
      desc: language === "es" ? "Scraping de portales y alerta de particulares." : "Portal scraping and private party alerts.",
      priceLabel: "+75€/mes",
      category: "advanced",
      icon: "🕸️",
      setupPrice: 15,
      monthlyPrice: 75
    },
    {
      id: "manual_capture",
      title: language === "es" ? "Captador Manual" : "Manual Capturer",
      desc: language === "es" ? "Gestión manual de propietarios en dashboard." : "Manual owner management in dashboard.",
      priceLabel: language === "es" ? "10€ (Pago único)" : "10€ (One-time)",
      category: "advanced",
      icon: "✍️",
      oneTimePrice: 10
    }
  ];

  // 2. Planes Principales
  const plans: SynoraPlan[] = [
    {
      id: "plan_esencial",
      name: language === "es" ? "Plan Esencial" : "Essential Plan",
      price: "99€",
      setup: "350€",
      tag: language === "es" ? "Organiza y Captura" : "Organize and Capture",
      tagColor: "bg-green-50 text-green-600",
      quote: t("pillars.card1.desc"), 
      recommended: false,
      features: language === "es" ? [
        "Dashboard, Agenda y ToDo",
        "Gestión de Leads y Docs",
        "Contestador IceBraker",
        "Automatización de contacto web",
        "Recordatorios automáticos",
      ] : [
        "Dashboard, Calendar and ToDo",
        "Lead and Document Management",
        "IceBraker Auto-responder",
        "Web Contact Automation",
        "Automatic Reminders",
      ],
    },
    {
      id: "plan_crecimiento",
      name: language === "es" ? "Plan Crecimiento" : "Growth Plan",
      price: "199€",
      setup: language === "es" ? "Desde 600€" : "From 600€",
      tag: language === "es" ? "Ventas en Piloto Automático" : "Autopilot Sales",
      tagColor: "bg-blue-50 text-blue-600",
      quote: language === "es" ? '"No solo organizas, sino que conviertes más clientes con chatbots y seguimientos."' : '"You don\'t just organize, you convert more customers with chatbots and follow-ups."',
      recommended: true,
      features: language === "es" ? [
        "Todo lo del Plan Esencial",
        "Chatbot de WhatsApp y Web",
        "WebConnect integrado",
        "Seguimiento de leads avanzado",
      ] : [
        "Everything in Essential Plan",
        "WhatsApp and Web Chatbot",
        "Integrated WebConnect",
        "Advanced Lead Follow-up",
      ],
    },
    {
      id: "plan_pro",
      name: language === "es" ? "Plan Pro" : "Pro Plan",
      price: "399€",
      setup: language === "es" ? "Desde 900€" : "From 900€",
      tag: language === "es" ? "Ecosistema Total" : "Total Ecosystem",
      tagColor: "bg-red-50 text-red-600",
      quote: language === "es" ? '"Automatizamos internamente tu negocio y analizamos cada dato para escalar."' : '"We automate your business internally and analyze every data point to scale."',
      recommended: false,
      features: language === "es" ? [
        "Todo lo del Plan Crecimiento",
        "Analíticas avanzadas en dashboard",
        "Chatbot de gestión interna",
        "Transcripción de reuniones",
        "Funnel de ventas completo",
      ] : [
        "Everything in Growth Plan",
        "Advanced dashboard analytics",
        "Internal management chatbot",
        "Meeting transcription",
        "Complete sales funnel",
      ],
    }
  ];

  return { modules, plans };
}
