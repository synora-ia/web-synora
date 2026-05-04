import Link from "next/link";

const plans = [
  {
    name: "Plan Esencial",
    price: "79€",
    setup: "250€",
    tag: "No pierdas clientes",
    tagColor: "bg-green-50 text-green-600",
    quote: '"Te aseguro que cualquier persona que te escriba recibe respuesta y entra en tu sistema."',
    features: [
      "Chatbot de WhatsApp (Captación básica)",
      "Automatización de contacto web",
      "Sistema básico de captación de leads",
      "Recordatorios automáticos simples",
    ],
    recommended: false,
    buttonStyle: "bg-slate-100 text-black hover:bg-black hover:text-white",
  },
  {
    name: "Plan Crecimiento",
    price: "149€",
    setup: "Desde 400€",
    tag: "Sistema de ventas activo",
    tagColor: "bg-blue-50 text-blue-600",
    quote: '"No solo respondes, sino que conviertes más clientes sin estar pendiente."',
    features: [
      "Todo lo del Plan Esencial",
      "Dashboard de control y analítica",
      "Seguimiento de leads avanzado (IA)",
      "Agente Icebreaker automatizado",
      "1 Automatización extra a medida",
    ],
    recommended: true,
    buttonStyle: "bg-black text-white",
  },
  {
    name: "Plan Pro",
    price: "299€",
    setup: "Desde 700€",
    tag: "Negocio automatizado",
    tagColor: "bg-red-50 text-red-600",
    quote: '"Automatizamos parte de tu negocio para que funcione sin ti."',
    features: [
      "Todo lo del Plan Crecimiento",
      "Chatbot de gestión interna (Equipo)",
      "Integración con CRM / ERP propio",
      "2-3 Automatizaciones personalizadas",
      "Soporte prioritario 24/7",
    ],
    recommended: false,
    buttonStyle: "bg-black text-white",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Inversión Inteligente</span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">Planes de Automatización</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Escala tu negocio con sistemas que trabajan por ti. Sin complicaciones técnicas, solo resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-10 rounded-[2.5rem] pricing-card flex flex-col relative ${
                plan.recommended ? "border-2 border-black scale-105 z-10 shadow-xl" : "border border-slate-100"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recomendado
                </div>
              )}
              <div className="mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${plan.tagColor}`}>
                  {plan.tag}
                </span>
                <h4 className="text-2xl font-bold text-black">{plan.name}</h4>
                <div className="mt-4 flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-slate-400 text-sm">/mes</span>
                  </div>
                  <span className="text-slate-400 text-sm mt-1">+ {plan.setup} Setup inicial</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 font-medium mb-6">{plan.quote}</p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 shrink-0 ${plan.recommended ? "text-blue-500" : index === 0 ? "text-green-500" : "text-red-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={feature.includes("Todo lo del") ? "font-bold" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/planes" className="text-center text-xs text-slate-400 hover:text-black mb-4 underline transition-colors">
                Ver detalles del plan
              </Link>
              <Link href="/contacto" className={`block w-full py-4 text-center rounded-2xl font-bold transition-all ${plan.buttonStyle}`}>
                {plan.recommended ? "Solicitar Plan" : plan.name === "Plan Pro" ? "Hablar con Experto" : "Empezar ahora"}
              </Link>
            </div>
          ))}
        </div>

        {/* Extras Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Módulos Adicionales</h3>
            <p className="text-slate-500">Personaliza tu sistema con herramientas específicas para tu sector.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all text-center">
              <h5 className="font-bold text-black mb-2">Captador Viviendas</h5>
              <div className="text-xl font-bold text-black mb-2">+49€<span className="text-xs text-slate-400">/mes</span></div>
              <p className="text-xs text-slate-500">Monitorización activa de portales inmobiliarios.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all text-center">
              <h5 className="font-bold text-black mb-2">Property Intelligence</h5>
              <div className="text-xl font-bold text-black mb-2">+59€<span className="text-xs text-slate-400">/mes</span></div>
              <p className="text-xs text-slate-500">Valoraciones y análisis de mercado automáticos.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all text-center">
              <h5 className="font-bold text-black mb-2">Transcripción IA</h5>
              <div className="text-xl font-bold text-black mb-2">+69€<span className="text-xs text-slate-400">/mes</span></div>
              <p className="text-xs text-slate-500">Resumen automático de reuniones y llamadas.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all text-center">
              <h5 className="font-bold text-black mb-2">Custom Adv.</h5>
              <div className="text-xl font-bold text-black mb-2">+30-80€<span className="text-xs text-slate-400">/mes</span></div>
              <p className="text-xs text-slate-500">Automatizaciones avanzadas personalizadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
