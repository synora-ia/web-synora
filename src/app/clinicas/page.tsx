import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ClinicasPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      {/* Sector Hero */}
      <header className="hero-gradient pt-32 md:pt-40 pb-12 md:pb-24 px-6 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              Especialización / Salud
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
              Más que una agenda… <br />
              <span className="font-serif-italic text-slate-500 dark:text-zinc-500">un sistema de cuidado.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
              Optimizamos la gestión de pacientes y agendas para centros médicos, dentales y fisioterapia. Automatización total desde la cita hasta el post-tratamiento.
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
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" alt="Clínica" className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Patient Journey Section - Unique for Healthcare */}
      <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">El Ciclo del Paciente 360°</h2>
            <p className="text-slate-500 dark:text-zinc-400">Automatización humana que mejora la adherencia al tratamiento.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 -translate-y-1/2 hidden lg:block"></div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 gap-6 lg:gap-12 relative z-10 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 py-4">
              <div className="min-w-[85vw] snap-center lg:min-w-0 bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-8 font-bold">01</div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white">Reserva Inteligente</h4>
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">El paciente reserva por WhatsApp o Web. La IA confirma la cita, asigna doctor y sala, y envía las instrucciones previas automáticamente.</p>
              </div>
              <div className="min-w-[85vw] snap-center lg:min-w-0 bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-2xl flex items-center justify-center mb-8 font-bold">02</div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white">Recordatorios Sin Falla</h4>
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">Secuencia de WhatsApp y SMS coordinados 24h y 2h antes. Reducción drástica del ausentismo y huecos vacíos en agenda.</p>
              </div>
              <div className="min-w-[85vw] snap-center lg:min-w-0 bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-8 font-bold">03</div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white">Post-Tratamiento</h4>
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">Seguimiento de evolución, encuesta de satisfacción y recordatorio automático para la próxima sesión del plan de cuidado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No-Show Impact Section */}
      <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black dark:bg-white text-white dark:text-black rounded-[4rem] p-16 md:p-24 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">-15% <br /><span className="text-white/40 dark:text-black/40 text-3xl font-serif-italic">Tasa de No-Shows</span></h2>
              <p className="text-lg text-white/60 dark:text-black/60 mb-10 leading-relaxed">
                Cada cita perdida es un recurso desperdiciado. Nuestro sistema de recordatorios omnicanal garantiza que tu agenda esté siempre llena y tu equipo siempre productivo.
              </p>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/80 dark:text-black/80">
                <li className="flex items-center"><svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>WhatsApp Business Integrado</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>Re-agendado Automático</li>
                <li className="flex items-center"><svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>Confirmación por SMS</li>
              </ul>
            </div>
            <div className="flex-1 bg-white/10 dark:bg-black/5 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/10 dark:border-black/5">
               <div className="text-center">
                 <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Recuperación Media</div>
                 <div className="text-5xl font-bold mb-4">+1.200€</div>
                 <p className="text-xs text-white/40 dark:text-black/40">Ingresos extra mensuales por cada 10 citas rescatadas.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Ecosistema Digital</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white tracking-tight">
                Optimización de Agenda 360°
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Gestiona citas, disponibilidad de doctores y salas desde un panel visual que predice huecos y minimiza el tiempo ocioso.
              </p>

              <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10 shadow-sm">
                <h5 className="font-bold text-black dark:text-white mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Conexión con tu Stack Médico
                </h5>
                <p className="text-sm text-slate-600 dark:text-zinc-400">
                  Conexión bidireccional con tu software de gestión actual y WhatsApp Business para automatizar el ciclo del paciente.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 <div>
                   <h5 className="font-bold text-black dark:text-white mb-2">Fidelización</h5>
                   <p className="text-xs text-slate-500 dark:text-zinc-400">Seguimiento automático de tratamientos y bonos de sesiones.</p>
                 </div>
                 <div>
                   <h5 className="font-bold text-black dark:text-white mb-2">Historial</h5>
                   <p className="text-xs text-slate-500 dark:text-zinc-400">Acceso rápido y centralizado a toda la evolución del paciente.</p>
                 </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-[4rem] -z-10"></div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                  alt="Dashboard Preview" 
                  className="rounded-[2rem] w-full aspect-square lg:aspect-auto lg:h-[600px] object-cover transition-all duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Pricing Section */}
      <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6 block">Configuración Recomendada</span>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">Tu sistema ideal para Clínicas</h2>
          
          <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Best Value
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Plan Crecimiento</h3>
            <div className="text-5xl font-bold text-black dark:text-white mb-8">199€/mes</div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Chatbot WhatsApp", "Recordatorios Automáticos", "Seguimiento Post-Tratamiento"].map((mod, i) => (
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
