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
      
      {/* Impact Stats */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-900/50 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif-italic text-2xl text-slate-400 dark:text-zinc-500 mb-4">El impacto de Synora</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">Resultados que transforman <br /> <span className="text-slate-400 dark:text-zinc-500">tu día a día.</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="30-40%" label="Reducción Operativa" />
            <StatCard value="24/7" label="Automatización Activa" />
            <StatCard value="0" label="Dependencia Técnica" />
            <StatCard value="+10h" label="Semanales Liberadas" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif-italic text-2xl text-slate-400 dark:text-zinc-500 mb-4">Metodología Synora</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-black dark:text-white">Del problema a la solución</h3>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 -translate-y-1/2 z-0"></div>
            <div className="grid lg:grid-cols-4 gap-12 relative z-10">
              <Step step="01" title="Detectamos el atasco" desc="Analizamos cómo trabajas hoy para identificar procesos que roban tiempo y generan errores." />
              <Step step="02" title="Diseñamos el flujo" desc="Definimos activadores, pasos y gestión de excepciones. Validamos la lógica contigo." />
              <Step step="03" title="Conectamos sistemas" desc="Integramos Synora con tu CRM, agenda y herramientas actuales. Sin cambiar de software." />
              <Step step="04" title="Puesta en marcha" desc="Lanzamos el sistema y monitorizamos resultados. Tu negocio empieza a trabajar solo." />
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      {/* Industry Ecosystem Grid */}
      <section id="sectores" className="py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectorCard href="/sectores/inmobiliarias" title="Inmobiliarias" desc="Captación de propietarios y Property Intelligence." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>} />
            <SectorCard href="/sectores/clinicas" title="Clínicas Médicas" desc="Gestión de citas IA y recuperación de pacientes inactivos." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>} />
            <SectorCard href="/sectores/restaurantes" title="Restaurantes" desc="Libro de reservas inteligente y Guest Intelligence." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>} />
            <SectorCard href="/sectores/gimnasios" title="Fitness y Deporte" desc="Prevención de churn y altas de socios automatizadas." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>} />
            
            <SectorCard href="/sectores/servicios" title="Reformas" desc="Presupuestos automáticos y gestión de gremios." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>} />
            <ComingSoonCard title="E-commerce" desc="Atención al cliente 24/7 y recuperación de carritos." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>} />
            <ComingSoonCard title="Legal / Despachos" desc="Clasificación de documentos y triaje de expedientes." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>} />
            
            <div className="p-8 rounded-[2.5rem] bg-black dark:bg-white text-white dark:text-black flex flex-col justify-center items-center text-center transition-colors duration-300">
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

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">{value}</div>
      <p className="text-sm text-slate-500 dark:text-zinc-500 uppercase tracking-widest font-semibold">{label}</p>
    </div>
  );
}

function Step({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none transition-colors duration-300">
      <div className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6">Paso {step}</div>
      <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-zinc-400 text-sm">{desc}</p>
    </div>
  );
}

function SectorCard({ href, title, desc, icon }: { href: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="group p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/5">
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
    <div className="relative group p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
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
