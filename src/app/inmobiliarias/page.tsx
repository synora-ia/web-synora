"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function InmobiliariasPage() {
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
                {isEs ? "Especialización / Inmobiliaria" : "Specialization / Real Estate"}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
                {isEs ? "No se trata de captar…" : "It's not about capturing…"} <br />
                <span className="font-serif-italic text-slate-500 dark:text-zinc-500">
                  {isEs ? "sino de convencer." : "but about convincing."}
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
                {isEs
                  ? "Dotamos a tu equipo de la autoridad y evidencia necesarias para cerrar en la primera reunión con datos claros y procesos automáticos."
                  : "We provide your team with the authority and evidence needed to close in the first meeting with clear data and automatic processes."}
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
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" alt="Inmobiliaria" className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
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
          {/* Property Intelligence Section - Unique for Real Estate */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">
                    {isEs ? "Autoridad basada en" : "Authority based on"} <br /><span className="text-slate-400">{isEs ? "Datos Reales." : "Real Data."}</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-12 leading-relaxed">
                    {isEs
                      ? "Deja de pelear por el precio de salida basándote en \"olfato\". Muestra al propietario por qué su vivienda vale lo que vale con informes que no dejan lugar a dudas."
                      : "Stop fighting over the starting price based on \"gut feeling\". Show the owner why their home is worth what it's worth with reports that leave no room for doubt."}
                  </p>

                  <div className="space-y-6">
                    <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
                      <h4 className="font-bold text-black dark:text-white mb-2">{isEs ? "Valoración Instantánea" : "Instant Valuation"}</h4>
                      <p className="text-sm text-slate-500 dark:text-zinc-400">
                        {isEs
                          ? "Genera comparativas de mercado en segundos cruzando datos de los principales portales y registros."
                          : "Generate market comparisons in seconds by crossing data from the main portals and records."}
                      </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
                      <h4 className="font-bold text-black dark:text-white mb-2">{isEs ? "Análisis de la Competencia" : "Competitor Analysis"}</h4>
                      <p className="text-sm text-slate-500 dark:text-zinc-400">
                        {isEs
                          ? "Identifica qué inmuebles similares están en venta, cuánto llevan publicados y cuántas bajadas de precio han tenido."
                          : "Identify which similar properties are for sale, how long they have been published and how many price drops they have had."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float">
                      <div className="text-blue-500 font-bold mb-2">320.000€</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest">{isEs ? "Precio Sugerido" : "Suggested Price"}</div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float-delayed">
                      <div className="text-green-500 font-bold mb-2">12 {isEs ? "días" : "days"}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest">{isEs ? "Tiempo Estimado" : "Estimated Time"}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float">
                      <div className="text-purple-500 font-bold mb-2">85%</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest">{isEs ? "Demanda Alta" : "High Demand"}</div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-float-delayed">
                      <div className="text-orange-500 font-bold mb-2">+15</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest">{isEs ? "Visitas Semanales" : "Weekly Visits"}</div>
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
                <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">{isEs ? "El Funnel de Captación" : "The Acquisition Funnel"}</h2>
                <p className="text-slate-500 dark:text-zinc-400">{isEs ? "De la llamada en frío a la exclusiva firmada." : "From the cold call to the signed exclusive."}</p>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 gap-4 relative -mx-6 px-6 md:mx-0 md:px-0 py-4">
                {[
                  { t: isEs ? "Captación" : "Acquisition", d: isEs ? "WebConnect detecta nuevos propietarios en portales antes que nadie." : "WebConnect detects new owners on portals before anyone else." },
                  { t: isEs ? "Calificación" : "Qualification", d: isEs ? "Chatbot IA contacta y filtra por motivación y urgencia." : "AI Chatbot contacts and filters by motivation and urgency." },
                  { t: isEs ? "Cierre" : "Closing", d: isEs ? "Visita técnica con informe de valoración profesional impreso." : "Technical visit with printed professional valuation report." },
                  { t: isEs ? "Venta" : "Sale", d: isEs ? "Publicación automática en 40 portales con descripciones SEO." : "Automatic publication on 40 portals with SEO descriptions." }
                ].map((step, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 group hover:bg-black dark:hover:bg-white transition-all duration-500">
                    <div className="text-xs font-bold text-slate-400 group-hover:text-white/50 dark:group-hover:text-black/50 mb-4 uppercase tracking-[0.2em]">{isEs ? "Paso" : "Step"} 0{i + 1}</div>
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
                  <div className="relative mx-auto max-w-5xl group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                      <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-800/80 flex items-center px-6 gap-2 z-20 border-b border-white/5 backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                      </div>
                      <img
                        alt="Synora Dashboard Map"
                        className="w-full h-auto mt-10 object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                        src="/images/dashboard/dashboard-map.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{isEs ? "Ecosistema Digital" : "Digital Ecosystem"}</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white tracking-tight">
                    {isEs ? "Control total de tu cartera" : "Total control of your portfolio"}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {isEs
                      ? "Visualiza en tiempo real el funnel de captación, el rendimiento de tus agentes y el stock disponible sin cambiar de pestaña."
                      : "Visualize in real time the acquisition funnel, the performance of your agents and the available stock without changing tabs."}
                  </p>

                  <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10">
                    <h5 className="font-bold text-black dark:text-white mb-3">{isEs ? "Integración Inmobiliaria" : "Real Estate Integration"}</h5>
                    <p className="text-sm text-slate-600 dark:text-zinc-400">
                      {isEs
                        ? "Se integra con Idealista, Fotocasa y tu CRM actual para centralizar toda la operativa en una sola pantalla inteligente."
                        : "Integrates with Idealista, Fotocasa and your current CRM to centralize all operations on a single smart screen."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-black dark:text-white">+30%</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{isEs ? "Visitas Efectivas" : "Effective Visits"}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black dark:text-white">+20%</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{isEs ? "Tasa de Cierre" : "Closing Rate"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended Pricing Section */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6 block">{isEs ? "Configuración Recomendada" : "Recommended Configuration"}</span>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">{isEs ? "Tu sistema ideal para Inmobiliarias" : "Your ideal system for Real Estate"}</h2>

              <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                  <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Best Value
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{isEs ? "Plan Crecimiento + Pack Captación" : "Growth Plan + Acquisition Pack"}</h3>
                <div className="text-5xl font-bold text-black dark:text-white mb-8">288€/{isEs ? "mes" : "month"}</div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[(isEs ? "Pack Captación" : "Acquisition Pack"), "WebConnect", (isEs ? "Seguimiento Leads IA" : "AI Lead Follow-up")].map((mod, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-300">
                      {mod}
                    </span>
                  ))}
                </div>

                <Link href="/contacto" className="inline-block px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
                  {isEs ? "Empezar ahora" : "Get started now"}
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
