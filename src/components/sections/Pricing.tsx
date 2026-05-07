import Link from "next/link";

const plans = [
  {
    name: "Plan Esencial",
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
    name: "Plan Crecimiento",
    price: "199€",
    setup: "Desde 600€",
    tag: "Ventas en Piloto Automático",
    tagColor: "bg-blue-50 text-blue-600",
    quote: '"No solo organizas, sino que conviertes más clientes con chatbots y seguimientos."',
    features: [
      "Todo lo del Plan Esencial",
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
      "Todo lo del Plan Crecimiento",
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
                  plan.name === "Plan Esencial" ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" :
                  plan.name === "Plan Crecimiento" ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" :
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

        {/* Foundational Services - Pago Único */}
        <div className="mt-20 pt-20 border-t border-slate-100 dark:border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight">Infraestructura y Setup (Pago Único)</h3>
            <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm">
              Construimos la base sólida para tu automatización.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-black dark:text-white">Web a Medida & CRM</h4>
                <div className="text-lg font-bold text-black dark:text-white">Desde 349€</div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Tu escaparate premium listo para IA.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-black dark:text-white">Consultoría & ISO 9001</h4>
                <div className="text-lg font-bold text-black dark:text-white">Desde 200€</div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Calidad certificada y procesos IA.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Modules Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">Módulos y Packs de Automatización</h3>
            <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Añade soluciones verticales para tu sector o herramientas individuales a la carta para potenciar tu negocio.
            </p>
          </div>
          
          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-scroll hover:[animation-play-state:paused] w-fit gap-6 py-4">
              {/* First set of cards */}
              {[
                { title: "Pack Captación", price: "+89€", desc: "Bundle: Captador, Publicador y Sugerencias IA.", isPack: true },
                { title: "Pack Inteligencia", price: "+149€", desc: "Bundle: Scraping, Valoraciones y Property Intel.", isPack: true },
                { title: "Dashboard Core", price: "+39€", desc: "Panel de control, agenda y tareas centralizadas." },
                { title: "Gestión Leads", price: "+39€", desc: "Sistema central de clientes y documentos." },
                { title: "Contestador IceBraker", price: "+29€", desc: "Respuesta automática inicial a nuevos leads." },
                { title: "Recordatorios IA", price: "+29€", desc: "Avisos automáticos de citas y seguimientos." },
                { title: "Chatbot WhatsApp", price: "+49€", desc: "Atención 24/7 en el canal nº1 de comunicación." },
                { title: "Chatbot Web", price: "+49€", desc: "Asistente inteligente para tu página web." },
                { title: "WebConnect", price: "+39€", desc: "Conexión automática entre web y dashboard." },
                { title: "Seguimiento IA", price: "+39€", desc: "Calificación y seguimiento inteligente de leads." },
                { title: "Analíticas IA", price: "+29€", desc: "Visualización de datos de negocio en tiempo real." },
                { title: "Gestión Interna", price: "+39€", desc: "Tu asistente IA para consultas privadas." },
                { title: "Transcripciones", price: "+39€", desc: "Resúmenes de reuniones automáticos." },
                { title: "Funnel de Ventas", price: "+59€", desc: "Flujo automatizado de captación y cierre." },
                { title: "Prevención Churn", price: "+59€", desc: "IA predictiva para detectar y evitar bajas." },
                { title: "Captador Automático", price: "+69€", desc: "Scraping de portales y alerta de particulares." },
                { title: "Property Intel", price: "+59€", desc: "Análisis de mercado automático por zonas." },
                { title: "Informes Tasación", price: "+49€", desc: "Generación de valoraciones IA en PDF." },
                { title: "Captador Manual", price: "+29€", desc: "Gestión manual de propietarios en dashboard." },
                { title: "Publicador Web", price: "+39€", desc: "Envío automático de inmuebles a tu web." },
                { title: "Sugerencias IA", price: "+39€", desc: "Cruce inteligente de clientes y propiedades." },
                { title: "Custom Advanced", price: "+30-80€", desc: "Automatizaciones exclusivas y flujos a medida." }
              ].map((card, i) => (
                <div key={`pack-1-${i}`} className="w-[280px] shrink-0">
                  <ExtraCard {...card} />
                </div>
              ))}
              {/* Duplicated set for infinite loop */}
              {[
                { title: "Pack Captación", price: "+89€", desc: "Bundle: Captador, Publicador y Sugerencias IA.", isPack: true },
                { title: "Pack Inteligencia", price: "+149€", desc: "Bundle: Scraping, Valoraciones y Property Intel.", isPack: true },
                { title: "Dashboard Core", price: "+39€", desc: "Panel de control, agenda y tareas centralizadas." },
                { title: "Gestión Leads", price: "+39€", desc: "Sistema central de clientes y documentos." },
                { title: "Contestador IceBraker", price: "+29€", desc: "Respuesta automática inicial a nuevos leads." },
                { title: "Recordatorios IA", price: "+29€", desc: "Avisos automáticos de citas y seguimientos." },
                { title: "Chatbot WhatsApp", price: "+49€", desc: "Atención 24/7 en el canal nº1 de comunicación." },
                { title: "Chatbot Web", price: "+49€", desc: "Asistente inteligente para tu página web." },
                { title: "WebConnect", price: "+39€", desc: "Conexión automática entre web y dashboard." },
                { title: "Seguimiento IA", price: "+39€", desc: "Calificación y seguimiento inteligente de leads." },
                { title: "Analíticas IA", price: "+29€", desc: "Visualización de datos de negocio en tiempo real." },
                { title: "Gestión Interna", price: "+39€", desc: "Tu asistente IA para consultas privadas." },
                { title: "Transcripciones", price: "+39€", desc: "Resúmenes de reuniones automáticos." },
                { title: "Funnel de Ventas", price: "+59€", desc: "Flujo automatizado de captación y cierre." },
                { title: "Prevención Churn", price: "+59€", desc: "IA predictiva para detectar y evitar bajas." },
                { title: "Captador Automático", price: "+69€", desc: "Scraping de portales y alerta de particulares." },
                { title: "Property Intel", price: "+59€", desc: "Análisis de mercado automático por zonas." },
                { title: "Informes Tasación", price: "+49€", desc: "Generación de valoraciones IA en PDF." },
                { title: "Captador Manual", price: "+29€", desc: "Gestión manual de propietarios en dashboard." },
                { title: "Publicador Web", price: "+39€", desc: "Envío automático de inmuebles a tu web." },
                { title: "Sugerencias IA", price: "+39€", desc: "Cruce inteligente de clientes y propiedades." },
                { title: "Custom Advanced", price: "+30-80€", desc: "Automatizaciones exclusivas y flujos a medida." }
              ].map((card, i) => (
                <div key={`pack-2-${i}`} className="w-[300px] shrink-0">
                  <ExtraCard {...card} />
                </div>
              ))}
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

function ExtraCard({ title, price, subtext = "/mes", desc, isPack = false }: { title: string; price: string; subtext?: string; desc: string, isPack?: boolean }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-100 dark:border-white/5 hover:shadow-lg dark:hover:shadow-white/5 transition-all text-center relative overflow-hidden h-full flex flex-col justify-center">
      {isPack && (
        <div className="absolute top-3 right-3 bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest">
          Pack
        </div>
      )}
      <h5 className="font-bold text-black dark:text-white mb-2">{title}</h5>
      <div className="text-xl font-bold text-black dark:text-white mb-2">{price}<span className="text-xs text-slate-400 dark:text-zinc-500 ml-1">{subtext}</span></div>
      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
