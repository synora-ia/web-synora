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
                <ListItem iconColor="text-blue-500 dark:text-blue-400">Consumo de Inteligencia Artificial</ListItem>
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
      <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-900/30 border-y border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">Módulos Adicionales</h2>
            <p className="text-slate-500 dark:text-zinc-400">Complementa tu plan con herramientas potentes para tu sector.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-none transition-all text-center group">
              <h5 className="font-bold text-black dark:text-white mb-2">Captador Viviendas</h5>
              <div className="text-2xl font-bold text-black dark:text-white mb-2">+49€<span className="text-xs text-slate-400 dark:text-zinc-500">/mes</span></div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">Monitorización en tiempo real de portales inmobiliarios.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-none transition-all text-center group">
              <h5 className="font-bold text-black dark:text-white mb-2">Property Intel</h5>
              <div className="text-2xl font-bold text-black dark:text-white mb-2">+59€<span className="text-xs text-slate-400 dark:text-zinc-500">/mes</span></div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">Valoraciones automáticas e informes de mercado IA.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-none transition-all text-center group">
              <h5 className="font-bold text-black dark:text-white mb-2">Transcripción IA</h5>
              <div className="text-2xl font-bold text-black dark:text-white mb-2">+69€<span className="text-xs text-slate-400 dark:text-zinc-500">/mes</span></div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">Resúmenes inteligentes de cada llamada o reunión.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-none transition-all text-center group">
              <h5 className="font-bold text-black dark:text-white mb-2">Custom Adv.</h5>
              <div className="text-2xl font-bold text-black dark:text-white mb-2">+30-80€<span className="text-xs text-slate-400 dark:text-zinc-500">/mes</span></div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">Automatizaciones de alto nivel diseñadas a medida.</p>
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
