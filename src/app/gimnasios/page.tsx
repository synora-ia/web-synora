"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function GimnasiosPage() {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      {/* Sector Hero */}
      <header className="hero-gradient pt-32 md:pt-40 pb-12 md:pb-24 px-6 border-b border-slate-100 dark:border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
                {isEs ? "Especialización / Fitness" : "Specialization / Fitness"}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
                {isEs ? "No pierdas más socios…" : "Don't lose more members…"} <br />
                <span className="font-serif-italic text-slate-500 dark:text-zinc-500">{isEs ? "fideliza con IA." : "loyalty through AI."}</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
                {isEs
                  ? "Prevención de churn y altas automáticas 24/7. Transforma la gestión de tu box o gimnasio en un sistema de crecimiento imparable."
                  : "Churn prevention and 24/7 automatic sign-ups. Transform the management of your box or gym into an unstoppable growth system."}
              </p>
              <div className="flex space-x-4">
                <Link href="/contacto" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold btn-hover transition-all duration-300">
                  {isEs ? "Solicitar Auditoría" : "Request Audit"}
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl dark:shadow-white/5 border border-transparent dark:border-white/10">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80" alt="Gimnasio" className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Churn Prevention Section - Unique for Fitness */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">
                    {isEs ? "Anticípate a la" : "Anticipate the"} <br /><span className="text-slate-400">{isEs ? "Baja del Socio." : "Member Churn."}</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-12 leading-relaxed">
                    {isEs
                      ? "Nuestro sistema analiza los patrones de asistencia. Si un socio deja de venir, la IA detecta el riesgo de baja y lanza una secuencia de motivación personalizada por WhatsApp para traerlo de vuelta."
                      : "Our system analyzes attendance patterns. If a member stops coming, the AI detects the churn risk and launches a personalized motivation sequence via WhatsApp to bring them back."}
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 bg-slate-50 dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
                      <div className="text-3xl font-bold text-black dark:text-white mb-2">90%</div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Precisión en la detección de riesgo de abandono." : "Accuracy in detecting abandonment risk."}</p>
                    </div>
                    <div className="p-8 bg-slate-50 dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
                      <div className="text-3xl font-bold text-black dark:text-white mb-2">+25%</div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Tasa de recuperación de socios inactivos." : "Recovery rate of inactive members."}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-black dark:bg-white p-12 rounded-[3.5rem] text-white dark:text-black">
                    <div className="text-xs font-bold uppercase tracking-widest text-white/40 dark:text-black/40 mb-8">{isEs ? "Alerta de Churn Activa" : "Active Churn Alert"}</div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/5 flex items-center justify-center font-bold">JD</div>
                        <div>
                          <div className="font-bold">Juan Delgado</div>
                          <div className="text-xs opacity-50">{isEs ? "Inactivo hace 12 días" : "Inactive for 12 days"}</div>
                        </div>
                        <div className="ml-auto bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold">{isEs ? "Riesgo Alto" : "High Risk"}</div>
                      </div>
                      <div className="p-4 bg-white/5 dark:bg-black/5 rounded-2xl text-sm italic">
                        {isEs
                          ? "\"Hola Juan, te echamos de menos en el Box. Tienes un pase de invitado para un amigo esta semana si vienes el martes. ¿Te apuntas?\""
                          : "\"Hi Juan, we miss you at the Box. You have a guest pass for a friend this week if you come on Tuesday. Are you in?\""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Frictionless Onboarding Section */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">{isEs ? "Altas en 60 Segundos" : "Sign-ups in 60 Seconds"}</h2>
                <p className="text-slate-500 dark:text-zinc-400">{isEs ? "Elimina las barreras en la recepción. Convierte interesados en socios de cuota activa desde su móvil." : "Eliminate barriers at the reception. Convert interested leads into active members from their mobile phones."}</p>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 gap-6 md:gap-8 -mx-6 px-6 md:mx-0 md:px-0 py-4">
                {[
                  { t: isEs ? "Escaneo QR" : "QR Scan", d: isEs ? "El cliente escanea un código en la entrada o ve un anuncio en redes." : "The customer scans a code at the entrance or sees an ad on social media." },
                  { t: isEs ? "WhatsApp IA" : "AI WhatsApp", d: isEs ? "El chatbot recoge datos, firma de SEPA y selección de tarifa." : "The chatbot collects data, SEPA signing, and rate selection." },
                  { t: isEs ? "Acceso Inmediato" : "Immediate Access", d: isEs ? "Sincronización con el torno o app de reservas. Alta completada." : "Synchronization with the turnstile or booking app. Sign-up completed." }
                ].map((step, i) => (
                  <div key={i} className="min-w-[85vw] snap-center md:min-w-0 bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-[3rem] border border-slate-100 dark:border-white/5">
                    <div className="text-5xl font-serif-italic text-slate-100 dark:text-white/5 mb-6">{i + 1}</div>
                    <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{step.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dashboard Section */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{isEs ? "Ecosistema Digital" : "Digital Ecosystem"}</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white tracking-tight">
                    {isEs ? "La salud de tu Box, en un vistazo" : "The health of your Box, at a glance"}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {isEs
                      ? "Controla la ocupación de clases, el ritmo de altas y bajas, y la recurrencia de tus socios desde un panel inteligente que te avisa de lo que importa."
                      : "Control class occupancy, sign-up and churn rates, and member recurrence from an intelligent panel that alerts you to what matters."}
                  </p>

                  <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10 shadow-sm">
                    <h5 className="font-bold text-black dark:text-white mb-3">{isEs ? "Integración con Software de Fitness" : "Fitness Software Integration"}</h5>
                    <p className="text-sm text-slate-600 dark:text-zinc-400">
                      {isEs
                        ? "Nos conectamos con Trainingym, WodBuster o Resawod para potenciar tu gestión actual con inteligencia artificial."
                        : "We connect with Trainingym, WodBuster, or Resawod to empower your current management with artificial intelligence."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-2">{isEs ? "KPIs Tiempo Real" : "Real-Time KPIs"}</h5>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "LTV, Churn Rate y ocupación de franjas horarias." : "LTV, Churn Rate, and time slot occupancy."}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-2">{isEs ? "Comunidad" : "Community"}</h5>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Envío masivo de comunicaciones segmentadas por WhatsApp." : "Mass delivery of segmented communications via WhatsApp."}</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-[4rem] -z-10"></div>
                  <div className="bg-white dark:bg-zinc-900 p-4 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
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
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6 block">{isEs ? "Configuración Recomendada" : "Recommended Configuration"}</span>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">{isEs ? "Tu sistema ideal para Gimnasios" : "Your ideal system for Gyms"}</h2>

              <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                  <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Best Value
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{isEs ? "Plan Crecimiento + Módulo Churn" : "Growth Plan + Churn Module"}</h3>
                <div className="text-5xl font-bold text-black dark:text-white mb-8">258€/{isEs ? "mes" : "month"}</div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[isEs ? "Prevención de Churn" : "Churn Prevention", isEs ? "Altas WhatsApp" : "WhatsApp Sign-ups", isEs ? "IA de Fidelización" : "Loyalty AI"].map((mod, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-300">
                      {mod}
                    </span>
                  ))}
                </div>

                <Link href="/contacto" className="inline-block px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
                  {isEs ? "Empezar ahora" : "Start now"}
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
