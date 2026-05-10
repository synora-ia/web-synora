import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function InmobiliariasPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      {/* Sector Hero */}
      <header className="hero-gradient pt-32 md:pt-40 pb-12 md:pb-24 px-6 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              Especialización / Inmobiliaria
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
              No se trata de captar… <br />
              <span className="font-serif-italic text-slate-500 dark:text-zinc-500">sino de convencer.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
              Dotamos a tu equipo de la autoridad y evidencia necesarias para cerrar en la primera reunión con datos claros y procesos automáticos.
            </p>
            <div className="flex space-x-4">
              <Link href="/contacto" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold btn-hover transition-all duration-300">
                Solicitar Auditoría
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl dark:shadow-white/5 border border-transparent dark:border-white/10">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" alt="Inmobiliaria" className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Property Intelligence Section - Unique for Real Estate */}
      <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">
                Autoridad basada en <br /><span className="text-slate-400">Datos Reales.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-12 leading-relaxed">
                Deja de pelear por el precio de salida basándote en "olfato". Muestra al propietario por qué su vivienda vale lo que vale con informes que no dejan lugar a dudas.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
                  <h4 className="font-bold text-black dark:text-white mb-2">Valoración Instantánea</h4>
                  <p className="text-sm text-slate-500 dark:text-zinc-400">Genera comparativas de mercado en segundos cruzando datos de los principales portales y registros.</p>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
                  <h4 className="font-bold text-black dark:text-white mb-2">Análisis de la Competencia</h4>
                  <p className="text-sm text-slate-500 dark:text-zinc-400">Identifica qué inmuebles similares están en venta, cuánto llevan publicados y cuántas bajadas de precio han tenido.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float">
                  <div className="text-blue-500 font-bold mb-2">320.000€</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Precio Sugerido</div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float-delayed">
                  <div className="text-green-500 font-bold mb-2">12 días</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Tiempo Estimado</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float">
                  <div className="text-purple-500 font-bold mb-2">85%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Demanda Alta</div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float-delayed">
                  <div className="text-orange-500 font-bold mb-2">+15</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Visitas Semanales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Funnel Section */}
      <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">El Funnel de Captación</h2>
            <p className="text-slate-500 dark:text-zinc-400">De la llamada en frío a la exclusiva firmada.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 gap-4 relative -mx-6 px-6 md:mx-0 md:px-0 py-4">
             {[
               { t: "Captación", d: "WebConnect detecta nuevos propietarios en portales antes que nadie." },
               { t: "Calificación", d: "Chatbot IA contacta y filtra por motivación y urgencia." },
               { t: "Cierre", d: "Visita técnica con informe de valoración profesional impreso." },
               { t: "Venta", d: "Publicación automática en 40 portales con descripciones SEO." }
             ].map((step, i) => (
               <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 group hover:bg-black dark:hover:bg-white transition-all duration-500">
                 <div className="text-xs font-bold text-slate-400 group-hover:text-white/50 dark:group-hover:text-black/50 mb-4 uppercase tracking-[0.2em]">Paso 0{i+1}</div>
                 <h4 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-white dark:group-hover:text-black">{step.t}</h4>
                 <p className="text-sm text-slate-500 group-hover:text-white/70 dark:group-hover:text-black/70 leading-relaxed">{step.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-[4rem] -z-10"></div>
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Dashboard Preview" 
                    className="rounded-[2rem] w-full aspect-square lg:aspect-auto lg:h-[600px] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Ecosistema Digital</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white tracking-tight">
                Control total de tu cartera
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Visualiza en tiempo real el funnel de captación, el rendimiento de tus agentes y el stock disponible sin cambiar de pestaña.
              </p>

              <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10">
                <h5 className="font-bold text-black dark:text-white mb-3">Integración Inmobiliaria</h5>
                <p className="text-sm text-slate-600 dark:text-zinc-400">
                  Se integra con Idealista, Fotocasa y tu CRM actual para centralizar toda la operativa en una sola pantalla inteligente.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                 <div>
                   <div className="text-3xl font-bold text-black dark:text-white">+30%</div>
                   <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Visitas Efectivas</div>
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-black dark:text-white">+20%</div>
                   <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Tasa de Cierre</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Pricing Section */}
      <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6 block">Configuración Recomendada</span>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">Tu sistema ideal para Inmobiliarias</h2>
          
          <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Best Value
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Plan Crecimiento + Pack Captación</h3>
            <div className="text-5xl font-bold text-black dark:text-white mb-8">288€/mes</div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Pack Captación", "WebConnect", "Seguimiento Leads IA"].map((mod, i) => (
                <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-300">
                  {mod}
                </span>
              ))}
            </div>
            
            <Link href="/contacto" className="inline-block px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
              Empezar ahora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
