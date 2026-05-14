"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ClinicasPage() {
  const { t, language } = useLanguage();
  const isEs = language === "es";
  const [topCard, setTopCard] = useState<"calendar" | "todo">("todo");

  const toggle = useCallback(() => {
    setTopCard((prev) => (prev === "todo" ? "calendar" : "todo"));
  }, []);

  useEffect(() => {
    const id = setInterval(toggle, 4000);
    return () => clearInterval(id);
  }, [toggle]);

  const handleClick = (card: "calendar" | "todo") => {
    setTopCard((prev) => (prev === card ? (card === "todo" ? "calendar" : "todo") : card));
  };

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
                {isEs ? "Especialización / Salud" : "Specialization / Healthcare"}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
                {isEs ? "Más que una agenda…" : "More than a schedule…"} <br />
                <span className="font-serif-italic text-slate-500 dark:text-zinc-500">{isEs ? "un sistema de cuidado." : "a care system."}</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
                {isEs
                  ? "Optimizamos la gestión de pacientes y agendas para centros médicos, dentales y fisioterapia. Automatización total desde la cita hasta el post-tratamiento."
                  : "We optimize patient and schedule management for medical, dental, and physiotherapy centers. Total automation from appointment to post-treatment."}
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
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" alt="Clínica" className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
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
          {/* Patient Journey Section - Unique for Healthcare */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">{isEs ? "El Ciclo del Paciente 360°" : "The 360° Patient Cycle"}</h2>
                <p className="text-slate-500 dark:text-zinc-400">{isEs ? "Automatización humana que mejora la adherencia al tratamiento." : "Human automation that improves treatment adherence."}</p>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 -translate-y-1/2 hidden lg:block"></div>
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 gap-6 lg:gap-12 relative z-10 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 py-4">
                  <div className="min-w-[85vw] snap-center lg:min-w-0 bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-8 font-bold">01</div>
                    <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{isEs ? "Reserva Inteligente" : "Smart Booking"}</h4>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                      {isEs
                        ? "El paciente reserva por WhatsApp o Web. La IA confirma la cita, asigna doctor y sala, y envía las instrucciones previas automáticamente."
                        : "The patient books via WhatsApp or Web. The AI confirms the appointment, assigns doctor and room, and sends pre-instructions automatically."}
                    </p>
                  </div>
                  <div className="min-w-[85vw] snap-center lg:min-w-0 bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-2xl flex items-center justify-center mb-8 font-bold">02</div>
                    <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{isEs ? "Recordatorios Sin Falla" : "Flawless Reminders"}</h4>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                      {isEs
                        ? "Secuencia de WhatsApp y SMS coordinados 24h y 2h antes. Reducción drástica del ausentismo y huecos vacíos en agenda."
                        : "Coordinated WhatsApp and SMS sequence 24h and 2h before. Drastic reduction in no-shows and empty slots in the schedule."}
                    </p>
                  </div>
                  <div className="min-w-[85vw] snap-center lg:min-w-0 bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-8 font-bold">03</div>
                    <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{isEs ? "Post-Tratamiento" : "Post-Treatment"}</h4>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                      {isEs
                        ? "Seguimiento de evolución, encuesta de satisfacción y recordatorio automático para la próxima sesión del plan de cuidado."
                        : "Progress tracking, satisfaction survey, and automatic reminder for the next session of the care plan."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* No-Show Impact Section — Redesigned */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* Main card */}
              <div className="relative rounded-[3rem] overflow-hidden">
                {/* Gradient background using brand colors */}
                <div className="absolute inset-0 bg-[#09090b]" />
                <div className="absolute inset-0 opacity-35"
                  style={{
                    background: `radial-gradient(ellipse at 20% 50%, var(--brand-c1) 0%, transparent 55%),
                                 radial-gradient(ellipse at 80% 30%, var(--brand-c3) 0%, transparent 50%),
                                 radial-gradient(ellipse at 60% 90%, var(--brand-c2) 0%, transparent 45%)`
                  }}
                />
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px"
                  }}
                />

                <div className="relative z-10 p-10 md:p-16 lg:p-24">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: text */}
                    <div>
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                        {isEs ? "Impacto Clínico" : "Clinical Impact"}
                      </span>

                      <h2 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight leading-none">
                        -15%
                      </h2>
                      <p className="font-serif-italic text-white/40 text-2xl mb-8">
                        {isEs ? "Tasa de No-Shows" : "No-Show Rate"}
                      </p>

                      <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-md">
                        {isEs
                          ? "Cada cita perdida es un recurso desperdiciado. Nuestro sistema de recordatorios omnicanal garantiza que tu agenda esté siempre llena y tu equipo siempre productivo."
                          : "Every missed appointment is a wasted resource. Our omnichannel reminder system ensures your schedule is always full and your team always productive."}
                      </p>

                      <ul className="space-y-3">
                        {[
                          isEs ? "WhatsApp Business Integrado" : "Integrated WhatsApp Business",
                          isEs ? "Re-agendado Automático" : "Automatic Re-scheduling",
                          isEs ? "Confirmación por SMS" : "SMS Confirmation",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/70">
                            <span className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: stat cards */}
                    <div className="grid grid-cols-1 gap-4">
                      {/* Big recovery card */}
                      <div className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
                        <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                          {isEs ? "Recuperación Media" : "Average Recovery"}
                        </div>
                        <div className="text-6xl font-bold text-white mb-2 tracking-tighter">+1.200€</div>
                        <p className="text-sm text-white/40">
                          {isEs ? "Ingresos extra mensuales por cada 10 citas rescatadas." : "Extra monthly income for every 10 rescued appointments."}
                        </p>
                      </div>

                      {/* Two smaller stat cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6">
                          <div className="text-3xl font-bold text-white mb-1">24h</div>
                          <p className="text-xs text-white/40 uppercase tracking-widest font-bold">
                            {isEs ? "Primer recordatorio" : "First reminder"}
                          </p>
                        </div>
                        <div className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6">
                          <div className="text-3xl font-bold text-white mb-1">3×</div>
                          <p className="text-xs text-white/40 uppercase tracking-widest font-bold">
                            {isEs ? "Canales activos" : "Active channels"}
                          </p>
                        </div>
                      </div>
                    </div>

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
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{isEs ? "Ecosistema Digital" : "Digital Ecosystem"}</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white tracking-tight">
                    {isEs ? "Optimización de Agenda 360°" : "360° Schedule Optimization"}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {isEs
                      ? "Gestiona citas, disponibilidad de doctores y salas desde un panel visual que predice huecos y minimiza el tiempo ocioso."
                      : "Manage appointments, doctor availability and rooms from a visual panel that predicts gaps and minimizes idle time."}
                  </p>

                  <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10 shadow-sm">
                    <h5 className="font-bold text-black dark:text-white mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {isEs ? "Conexión con tu Stack Médico" : "Connection with your Medical Stack"}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-zinc-400">
                      {isEs
                        ? "Conexión bidireccional con tu software de gestión actual y WhatsApp Business para automatizar el ciclo del paciente."
                        : "Bi-directional connection with your current management software and WhatsApp Business to automate the patient cycle."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-2">{isEs ? "Fidelización" : "Loyalty"}</h5>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Seguimiento automático de tratamientos y bonos de sesiones." : "Automatic tracking of treatments and session vouchers."}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-2">{isEs ? "Historial" : "History"}</h5>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Acceso rápido y centralizado a toda la evolución del paciente." : "Fast and centralized access to all patient evolution."}</p>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto max-w-5xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-25"></div>

                  {/* Calendar card — position relative to establish container height */}
                  <motion.div
                    className="relative cursor-pointer"
                    style={{ zIndex: topCard === "calendar" ? 20 : 10 }}
                    animate={{
                      x: topCard === "calendar" ? 20 : 0,
                      y: topCard === "calendar" ? -12 : 0,
                      scale: topCard === "calendar" ? 0.97 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    onClick={() => handleClick("calendar")}
                  >
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                      <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-800/80 flex items-center px-6 gap-2 z-20 border-b border-white/5 backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                      </div>
                      <img
                        alt="Synora Dashboard Calendar"
                        className="w-full h-auto mt-10 object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        src="/images/dashboard/dashboard-calendar.png"
                      />
                    </div>
                  </motion.div>

                  {/* Todo card — absolute, stacked on top */}
                  <motion.div
                    className="absolute inset-0 cursor-pointer"
                    style={{ zIndex: topCard === "todo" ? 20 : 10 }}
                    animate={{
                      x: topCard === "todo" ? 20 : 0,
                      y: topCard === "todo" ? -12 : 0,
                      scale: topCard === "todo" ? 0.97 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    onClick={() => handleClick("todo")}
                  >
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                      <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-800/80 flex items-center px-6 gap-2 z-20 border-b border-white/5 backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                      </div>
                      <img
                        alt="Synora Dashboard Todo"
                        className="w-full h-auto mt-10 object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        src="/images/dashboard/dashboard-todo.png"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended Pricing Section */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6 block">{isEs ? "Configuración Recomendada" : "Recommended Configuration"}</span>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">{isEs ? "Tu sistema ideal para Clínicas" : "Your ideal system for Clinics"}</h2>

              <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                  <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Best Value
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{isEs ? "Plan Crecimiento" : "Growth Plan"}</h3>
                <div className="text-5xl font-bold text-black dark:text-white mb-8">199€/{isEs ? "mes" : "month"}</div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[isEs ? "Chatbot WhatsApp" : "WhatsApp Chatbot", isEs ? "Recordatorios Automáticos" : "Automatic Reminders", isEs ? "Seguimiento Post-Tratamiento" : "Post-Treatment Follow-up"].map((mod, i) => (
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
