import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function PlanesPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <header className="hero-gradient pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-8 tracking-tight leading-[0.95]">
            Tu escala de <br /> <span className="font-serif-italic text-slate-500 dark:text-zinc-500">crecimiento.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Diseñamos planes que se adaptan al volumen real de tu negocio. Sin sorpresas, con todo incluido.
          </p>
        </div>
      </header>

      {/* Comparative Matrix */}
      <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm dark:shadow-none border border-black/5 dark:border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-white/5">
                    <th className="p-8 text-slate-400 dark:text-zinc-500 font-medium text-sm">Características</th>
                    <th className="p-8">
                      <span className="block text-xl font-bold text-black dark:text-white">Esencial</span>
                      <span className="text-xs text-slate-400 dark:text-zinc-500">79€/mes</span>
                    </th>
                    <th className="p-8 bg-black dark:bg-white text-white dark:text-black">
                      <span className="block text-xl font-bold">Crecimiento</span>
                      <span className="text-xs text-white/50 dark:text-black/50">149€/mes</span>
                    </th>
                    <th className="p-8">
                      <span className="block text-xl font-bold text-black dark:text-white">Pro</span>
                      <span className="text-xs text-slate-400 dark:text-zinc-500">Desde 299€/mes</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 dark:text-zinc-400">
                  <TableRow label="Setup Inicial (Inversión)" v1="250€" v2="Desde 400€" v3="Desde 700€" />
                  <TableRow label="Auditoría Previa" v1="Opcional (Desde 200€)" v2="Opcional (Desde 200€)" v3="Opcional (Desde 200€)" />
                  <TableRow label="Integración Web (Web Connect)" v1="Incluido en Setup" v2="Incluido en Setup" v3="Incluido en Setup" />
                  <TableRow label="WhatsApp Chatbot" v1="Básico" v2="Avanzado (IA)" v3="Multi-agente IA" />
                  <TableRow label="Dashboard de Métricas" v1="Simple" v2="Avanzado (BI)" v3="Personalizado ERP" />
                  <TableRow label="Soporte Técnico" v1="Email" v2="Prioritario" v3="24/7 + Consultoría" />
                  <tr className="border-b border-slate-50 dark:border-white/5">
                    <td className="p-6 font-medium text-black dark:text-white">Software Incluido</td>
                    <td className="p-6 text-green-600 dark:text-green-400 font-bold">✓ Todo incluido</td>
                    <td className="p-6 text-green-600 dark:text-green-400 font-bold">✓ Todo incluido</td>
                    <td className="p-6 text-green-600 dark:text-green-400 font-bold">✓ Todo incluido</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 dark:text-zinc-500 mt-6 max-w-3xl mx-auto px-4">
            * Los planes y módulos incluyen un volumen muy generoso de tokens de IA para un uso diario normal. Si tu empresa requiere un volumen masivo de operaciones, el precio mensual se ajustará de forma transparente en base al coste real de consumo.
          </p>
        </div>
      </section>

      {/* What is an Audit Section */}
      <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300 border-t border-slate-50 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">¿Cuándo recomendamos una Auditoría?</h2>
            <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Si tienes muy claros tus flujos de trabajo, pasamos directamente al Setup. Pero si tu negocio tiene procesos complejos o desordenados, esta sesión previa nos asegura adaptar la IA a tu realidad operativa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-3">Mapeo del Flujo</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                Nos sentamos contigo para diseccionar paso a paso cómo captas, atiendes y cierras a tus clientes. Identificamos cuellos de botella y tareas manuales repetitivas.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-3">Diseño del Sistema</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                Proponemos un rediseño de ese flujo delegando las tareas de poco valor a la IA (como cualificar o registrar datos), manteniendo el toque humano donde realmente importa.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-3">Roadmap de Ejecución</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                Salimos de la sesión con un plan claro de qué automatizaciones se van a construir, qué herramientas conectaremos (CRM, Web, WhatsApp) y los plazos exactos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "Everything Included"? */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white tracking-tight leading-[1.1]">
            Sin facturas sorpresa. <br /> <span className="font-serif-italic text-slate-400 dark:text-zinc-500">Tu cuota mensual lo cubre todo.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black dark:text-white">¿Qué pagamos nosotros?</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
                Dentro de tu cuota mensual de Synora, nosotros asumimos los costes de las suscripciones premium necesarias:
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-zinc-300">
                <ListItem iconColor="text-blue-500 dark:text-blue-400">Servidores y Hosting (n8n Enterprise)</ListItem>
                <ListItem iconColor="text-blue-500 dark:text-blue-400">Consumo de Inteligencia Artificial (Uso estándar)</ListItem>
                <ListItem iconColor="text-blue-500 dark:text-blue-400">Integraciones (Make/Zapier)</ListItem>
                <ListItem iconColor="text-blue-500 dark:text-blue-400">WhatsApp Business API</ListItem>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black dark:text-white">¿Qué ganas tú?</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
                Transparencia y simplicidad contable. Una sola factura al mes de un solo proveedor local.
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-zinc-300">
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Olvídate de gestionar 5 suscripciones</ListItem>
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Costes predecibles mes a mes</ListItem>
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Monitorización 24/7 incluida</ListItem>
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Evolución constante sin pagar más</ListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Modules */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">Módulos Adicionales</h2>
            <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">Complementa tu plan con herramientas potentes para tu sector. Amplía las capacidades de tu ecosistema Synora cuando lo necesites.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <ModuleDetailCard 
              title="Captador de Viviendas" 
              price="+49€" 
              desde={true}
              desc="Monitorización activa 24/7 de portales inmobiliarios. Ideal para agencias que quieren captar particulares antes que la competencia." 
            />
            <ModuleDetailCard 
              title="Property Intelligence" 
              price="+59€" 
              desde={true}
              desc="Valoraciones automáticas e informes de mercado generados por IA. Cierra más captaciones enviando dossiers al instante." 
            />
            <ModuleDetailCard 
              title="Transcripción IA" 
              price="+69€" 
              desde={true}
              desc="Tu asistente en reuniones. Graba, transcribe y resume automáticamente los puntos clave y próximos pasos de tus llamadas." 
            />
          </div>
        </div>
      </section>

      {/* Custom Advanced Section */}
      <section className="py-24 px-6 bg-white dark:bg-black border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
             <span className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4 block">Custom Advanced</span>
             <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight">¿Tienes un proceso muy específico?</h2>
             <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
               Diseñamos y mantenemos automatizaciones de alto nivel y flujos multi-paso adaptados al 100% a tu forma de trabajar.
             </p>
             <Link href="/contacto" className="inline-flex items-center text-sm font-bold text-black dark:text-white hover:text-slate-500 dark:hover:text-zinc-400 transition-colors border-b-2 border-black dark:border-white pb-1 group">
               Consultar Viabilidad
               <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </Link>
          </div>
          <div className="md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right border-l-4 md:border-l-0 md:border-r-4 border-black dark:border-white pl-6 md:pl-0 md:pr-8 py-4">
             <div className="text-5xl md:text-6xl font-bold text-black dark:text-white">+30-80€</div>
             <div className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mt-2">/mes (Estimado)</div>
          </div>
        </div>
      </section>

      {/* Web Services Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black dark:bg-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden transition-all duration-300 shadow-2xl shadow-black/10 dark:shadow-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent dark:from-black/10 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 dark:bg-black/10 text-white dark:text-black mb-6">Infraestructura Digital</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white dark:text-black mb-6 tracking-tight">¿Tu web actual es un obstáculo para automatizar?</h3>
                <p className="text-white/70 dark:text-black/70 text-lg md:text-xl leading-relaxed mb-8">
                  La integración de tu web actual (Web Connect) ya está incluida en tu Setup inicial. Pero si tu página actual es un obstáculo o está obsoleta, diseñamos infraestructuras web premium desde cero preparadas para el ecosistema IA.
                </p>
                <div className="grid sm:grid-cols-1 gap-6 max-w-sm">
                  <div className="border-l-2 border-white/20 dark:border-black/20 pl-5">
                    <div className="text-white dark:text-black font-bold mb-1 text-lg">Web a Medida</div>
                    <div className="text-white/90 dark:text-black/90 font-bold text-2xl mb-1">Desde 349€ <span className="text-xs font-normal uppercase tracking-widest text-white/60 dark:text-black/60 ml-1">pago único</span></div>
                    <div className="text-white/60 dark:text-black/60 text-sm">Creación desde cero. Mantenimiento mensual del hosting no incluido (+20€/mes).</div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-full lg:w-auto">
                <Link href="/contacto" className="block text-center px-10 py-5 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold btn-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white dark:focus-visible:ring-offset-white dark:focus-visible:ring-black">
                  Auditoría Web Gratuita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Guide */}
      <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">¿Cuál es el plan para ti?</h2>
            <p className="text-slate-500 dark:text-zinc-400">Guía rápida según tu momento actual.</p>
          </div>

          <div className="grid gap-6">
            <RecommendationCard 
              letter="E" 
              color="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" 
              title='"Solo quiero dejar de perder clientes"' 
              desc="Ideal para autónomos o pymes que necesitan respuesta inmediata 24/7. El **Plan Esencial** es tu puerta de entrada." 
            />
            <RecommendationCard 
              letter="C" 
              color="bg-black dark:bg-white text-white dark:text-black" 
              title='"Quiero un sistema de ventas serio"' 
              desc="Para empresas que manejan volumen de leads y necesitan calificarlos estratégicamente. El **Plan Crecimiento** es nuestra recomendación." 
              dark 
            />
            <RecommendationCard 
              letter="P" 
              color="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" 
              title='"Necesito eficiencia operativa total"' 
              desc="Para empresas que quieren integrar automatización en todo su flujo de trabajo y software propio. El **Plan Pro** es tu aliado." 
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TableRow({ label, v1, v2, v3 }: { label: string; v1: string; v2: string; v3: string }) {
  return (
    <tr className="border-b border-slate-50 dark:border-white/5">
      <td className="p-6 font-medium text-black dark:text-white">{label}</td>
      <td className="p-6">{v1}</td>
      <td className="p-6">{v2}</td>
      <td className="p-6">{v3}</td>
    </tr>
  );
}

function ListItem({ children, iconColor }: { children: React.ReactNode; iconColor: string }) {
  return (
    <li className="flex items-center">
      <svg className={`w-4 h-4 mr-3 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg> 
      {children}
    </li>
  );
}

function RecommendationCard({ letter, color, title, desc, dark = false }: { letter: string; color: string; title: string; desc: string; dark?: boolean }) {
  return (
    <div className={`p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-6 items-center pricing-card ${dark ? "bg-black dark:bg-white text-white dark:text-black shadow-2xl shadow-black/20 dark:shadow-none scale-[1.02]" : "bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-white/5"}`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 ${dark ? "bg-white/10 dark:bg-black/10" : color}`}>
        {letter}
      </div>
      <div>
        <h4 className={`text-xl font-bold mb-2 ${dark ? "text-white dark:text-black" : "text-black dark:text-white"}`}>{title}</h4>
        <p className={`text-sm ${dark ? "text-white/60 dark:text-black/60" : "text-slate-500 dark:text-zinc-400"}`}>{desc}</p>
      </div>
    </div>
  );
}

function ModuleDetailCard({ title, price, desc, desde = false }: { title: string; price: string; desc: string; desde?: boolean }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-none transition-all flex flex-col sm:flex-row gap-6 items-start sm:items-center group">
      <div className="shrink-0 w-24 h-24 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center flex-col border border-slate-100 dark:border-white/10 group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
        {desde && <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-zinc-500 font-bold mb-0.5">Desde</span>}
        <span className="text-xl font-bold text-black dark:text-white">{price}</span>
        <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-bold mt-1">/mes</span>
      </div>
      <div>
        <h5 className="text-xl font-bold text-black dark:text-white mb-3">{title}</h5>
        <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
