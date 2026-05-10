import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import Carousel from "@/components/sections/Carousel";
import Pricing from "@/components/sections/Pricing";
import Comparison from "@/components/sections/Comparison";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <Pillars />
      


      {/* Process Section */}
      <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif-italic text-2xl text-slate-400 dark:text-zinc-500 mb-4">Metodología Synora</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-black dark:text-white">Del problema a la solución</h3>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 -translate-y-1/2 z-0"></div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 gap-6 lg:gap-12 relative z-10 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
              <Step step="01" title="Detectamos el atasco" desc="Analizamos cómo trabajas hoy para identificar procesos que roban tiempo y generan errores." />
              <Step step="02" title="Diseñamos el flujo" desc="Definimos activadores, pasos y gestión de excepciones. Validamos la lógica contigo." />
              <Step step="03" title="Conectamos sistemas" desc="Integramos Synora con tu CRM, agenda y herramientas actuales. Sin cambiar de software." />
              <Step step="04" title="Puesta en marcha" desc="Lanzamos el sistema y monitorizamos resultados. Tu negocio empieza a trabajar solo." />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="plataforma" className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-[4rem] -z-10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-700"></div>
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Synora Dashboard Preview" 
                    className="rounded-[2rem] w-full aspect-square lg:aspect-auto lg:h-[500px] object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Tu Centro de Control</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white tracking-tight">
                Una única plataforma para <br/>
                <span className="text-slate-400">gobernarlo todo.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed">
                Olvídate de saltar entre 10 herramientas distintas. El Dashboard de Synora centraliza tus automatizaciones, embudos de venta, clientes y métricas clave en un solo lugar.
              </p>

              <ul className="space-y-4 text-sm font-bold text-black dark:text-white mb-10">
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>Monitorización en tiempo real</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>Integración con tu CRM actual</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>Gestión de agentes y roles</li>
              </ul>

              <Link href="/dashboard" className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
                Explorar el Dashboard interactivo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      {/* Industry Ecosystem Grid */}
      <section id="sectores" className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif-italic text-2xl text-slate-400 dark:text-zinc-500 mb-4">Ecosistema de Industrias</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-black dark:text-white tracking-tight">Especialización <br /> <span className="text-slate-400 dark:text-zinc-500">sectorial total.</span></h3>
            </div>
            <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-sm">
              Aunque nuestra tecnología es transversal, hemos diseñado módulos específicos para los retos críticos de cada industria.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            <SectorCard href="/inmobiliarias" title="Inmobiliarias" desc="Captación de propietarios y Property Intelligence." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>} />
            <SectorCard href="/clinicas" title="Clínicas Médicas" desc="Gestión de citas IA y recuperación de pacientes inactivos." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>} />
            <SectorCard href="/restaurantes" title="Restaurantes" desc="Libro de reservas inteligente y Guest Intelligence." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>} />
            <SectorCard href="/gimnasios" title="Fitness y Deporte" desc="Prevención de churn y altas de socios automatizadas." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>} />
            
            <ComingSoonCard title="E-commerce" desc="Atención al cliente 24/7 y recuperación de carritos." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>} />
            <ComingSoonCard title="Legal / Despachos" desc="Clasificación de documentos y triaje de expedientes." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>} />
            
            <div className="min-w-[85vw] snap-center md:min-w-0 p-8 rounded-[2.5rem] bg-black dark:bg-white text-white dark:text-black flex flex-col justify-center items-center text-center transition-colors duration-300">
              <h4 className="text-xl font-bold mb-3">¿Tu sector no aparece?</h4>
              <p className="text-white/40 dark:text-black/40 text-xs mb-8">Diseñamos soluciones personalizadas para cualquier flujo de trabajo.</p>
              <Link href="/contacto" className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white rounded-full text-xs font-bold btn-hover">Consultar caso</Link>
            </div>
          </div>
        </div>
      </section>

      <Comparison />
      <Pricing />
      <Footer />
    </main>
  );
}


function Step({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="min-w-[85vw] snap-center lg:min-w-0 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none transition-colors duration-300">
      <div className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6">Paso {step}</div>
      <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-zinc-400 text-sm">{desc}</p>
    </div>
  );
}

function SectorCard({ href, title, desc, icon }: { href: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="min-w-[85vw] snap-center md:min-w-0 group p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/5">
      <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-slate-400 dark:text-zinc-500 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h4>
      <p className="text-slate-500 dark:text-zinc-400 text-sm mb-6 leading-relaxed">{desc}</p>
      <span className="text-xs font-bold uppercase tracking-widest text-black dark:text-white flex items-center transition-all">
        Ver solución <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </span>
    </Link>
  );
}

function ComingSoonCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="min-w-[85vw] snap-center md:min-w-0 relative group p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="blur-[2px] opacity-40 grayscale pointer-events-none transition-all duration-500 dark:opacity-20">
        <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-slate-400 dark:text-zinc-500">
          {icon}
        </div>
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h4>
        <p className="text-slate-500 dark:text-zinc-400 text-sm mb-6 leading-relaxed">{desc}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <span className="px-4 py-2 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">Próximamente</span>
      </div>
    </div>
  );
}
