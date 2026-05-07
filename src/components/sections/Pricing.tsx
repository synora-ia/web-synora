import Link from "next/link";

const plans = [
  {
    name: "Plan Básico",
    price: "99€",
    setup: "350€",
    tag: "Organiza y Captura",
    tagColor: "bg-green-50 text-green-600",
    quote: '"Centraliza todos tus procesos en un solo dashboard inteligente."',
    features: [
      "Dashboard, Agenda y ToDo",
      "Gestión de Leads y Docs",
      "Contestador IceBraker",
      "Automatización de contacto web",
      "Recordatorios automáticos",
    ],
    recommended: false,
    buttonStyle: "bg-slate-100 text-black hover:bg-black hover:text-white",
  },
  {
    name: "Plan Medio",
    price: "199€",
    setup: "Desde 600€",
    tag: "Ventas en Piloto Automático",
    tagColor: "bg-blue-50 text-blue-600",
    quote: '"No solo organizas, sino que conviertes más clientes con chatbots y seguimientos."',
    features: [
      "Todo lo del Plan Básico",
      "Chatbot de WhatsApp y Web",
      "WebConnect integrado",
      "Seguimiento de leads avanzado",
    ],
    recommended: true,
    buttonStyle: "bg-black text-white",
  },
  {
    name: "Plan Pro",
    price: "399€",
    setup: "Desde 900€",
    tag: "Ecosistema Total",
    tagColor: "bg-red-50 text-red-600",
    quote: '"Automatizamos internamente tu negocio y analizamos cada dato para escalar."',
    features: [
      "Todo lo del Plan Medio",
      "Analíticas avanzadas en dashboard",
      "Chatbot de gestión interna",
      "Transcripción de reuniones",
      "Funnel de ventas completo",
    ],
    recommended: false,
    buttonStyle: "bg-black text-white",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Inversión Inteligente</span>
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight">Planes de Automatización</h2>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Escala tu negocio con sistemas que trabajan por ti. Sin complicaciones técnicas, solo resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] pricing-card flex flex-col relative transition-all duration-300 ${
                plan.recommended 
                  ? "border-2 border-black dark:border-white scale-105 z-10 shadow-xl dark:shadow-white/5" 
                  : "border border-slate-100 dark:border-white/5"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recomendado
                </div>
              )}
              <div className="mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
                  plan.name === "Plan Básico" ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" :
                  plan.name === "Plan Medio" ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" :
                  "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                }`}>
                  {plan.tag}
                </span>
                <h4 className="text-2xl font-bold text-black dark:text-white">{plan.name}</h4>
                <div className="mt-4 flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-black dark:text-white">{plan.price}</span>
                    <span className="ml-1 text-slate-400 dark:text-zinc-500 text-sm">/mes</span>
                  </div>
                  <span className="text-slate-400 dark:text-zinc-500 text-sm mt-1">+ {plan.setup} Setup inicial</span>
                  <span className="text-amber-600 dark:text-amber-500/80 font-bold text-xs mt-2 flex items-center bg-amber-50 dark:bg-amber-900/10 px-3 py-1.5 rounded-lg w-fit">
                    <svg className="w-3.5 h-3.5 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    Auditoría Recomendada (Desde 200€)
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium mb-6">{plan.quote}</p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600 dark:text-zinc-400 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 shrink-0 ${plan.recommended ? "text-blue-500" : index === 0 ? "text-green-500" : "text-red-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={feature.includes("Todo lo del") || feature.includes("Auditoría") || feature.includes("Web Connect") ? "font-bold text-black dark:text-white" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/planes" className="text-center text-xs text-slate-400 dark:text-zinc-500 hover:text-black dark:hover:text-white mb-4 transition-colors">
                Ver detalles del plan
              </Link>
              <Link href="/contacto" className={`block w-full py-4 text-center rounded-2xl font-bold transition-all ${
                plan.buttonStyle === "bg-black text-white" 
                  ? "bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-900 dark:hover:bg-zinc-200" 
                  : "bg-slate-100 text-black hover:bg-black hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
              }`}>
                {plan.recommended ? "Solicitar Plan" : plan.name === "Plan Pro" ? "Hablar con Experto" : "Empezar ahora"}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 dark:text-zinc-500 mb-20 max-w-3xl mx-auto px-4">
          * Los planes y módulos incluyen un volumen generoso de tokens de Inteligencia Artificial para un uso estándar. En caso de uso masivo, el precio se ajustará proporcionalmente al consumo real.
        </p>

        {/* Extras Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">Módulos y Soluciones Independientes</h3>
            <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              <strong>No necesitas un plan mensual para empezar.</strong> Los módulos y soluciones a la carta pueden contratarse de forma independiente. Los packs especializados se añaden a tu suscripción mensual.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <ExtraCard title="Pack Captación" price="+89€" subtext="/mes" desc="Captador, Publicador y Sugerencias IA para Inmobiliarias." />
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <ExtraCard title="Pack Inteligencia" price="+149€" subtext="/mes" desc="Scraping automático, valoraciones y Property Intelligence." />
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <ExtraCard title="Web a Medida & CRM" price="Desde 349€" subtext="pago único" desc="Diseño web desde cero y conexión de ecosistemas." />
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <ExtraCard title="Custom Advanced" price="+30-80€" subtext="/mes" desc="Automatizaciones exclusivas y procesos multi-paso 100% a medida." />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/planes#funcionalidades" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-black dark:hover:text-white transition-colors group">
              Ver todas las funcionalidades individuales a la carta
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExtraCard({ title, price, subtext = "/mes", desc }: { title: string; price: string; subtext?: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-100 dark:border-white/5 hover:shadow-lg dark:hover:shadow-white/5 transition-all text-center">
      <h5 className="font-bold text-black dark:text-white mb-2">{title}</h5>
      <div className="text-xl font-bold text-black dark:text-white mb-2">{price}<span className="text-xs text-slate-400 dark:text-zinc-500 ml-1">{subtext}</span></div>
      <p className="text-xs text-slate-500 dark:text-zinc-400">{desc}</p>
    </div>
  );
}
