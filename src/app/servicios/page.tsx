"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiciosPage() {
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
                {isEs ? "Especialización / Reformas y Servicios" : "Specialization / Renovations and Services"}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
                {isEs ? "Presupuestos…" : "Quotes…"} <br />
                <span className="font-serif-italic text-slate-500 dark:text-zinc-500">{isEs ? "al instante." : "instantly."}</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
                {isEs
                  ? "Convierte interesados en clientes reales mientras tu competencia sigue midiendo. IA para presupuestos automáticos y gestión de gremios."
                  : "Convert leads into real customers while your competition is still measuring. AI for automatic quotes and trade management."}
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
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80" alt="Reformas" className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
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
          {/* Quotation Logic Section - Unique for Trades */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">
                    {isEs ? "Presupuestos por" : "Quotes by"} <br /><span className="text-slate-400">{isEs ? "Voz y Foto." : "Voice and Photo."}</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-12 leading-relaxed">
                    {isEs
                      ? "Tus clientes ya no esperan 3 días. Envían una nota de voz explicando la reforma o fotos del espacio y Synora genera una estimación profesional basada en tus baremos de precios reales."
                      : "Your customers no longer wait 3 days. They send a voice note explaining the renovation or photos of the space and Synora generates a professional estimate based on your real price ranges."}
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
                      <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-black dark:text-white">{isEs ? "Transcripción Inteligente" : "Intelligent Transcription"}</h4>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 italic">{isEs ? "\"Quiero pintar el salón de 25m2 y cambiar el rodapié...\"" : "\"I want to paint the 25m2 living room and change the baseboard...\""}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
                      <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-black dark:text-white">{isEs ? "Visión Artificial" : "Computer Vision"}</h4>
                        <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Identificación de materiales y estado actual a través de fotos." : "Identification of materials and current state through photos."}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white dark:bg-zinc-900 p-8 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 block">{isEs ? "Estimación Generada" : "Estimate Generated"}</div>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                        <span className="text-sm">{isEs ? "Pintura Plástica Blanca" : "White Plastic Paint"}</span>
                        <span className="font-bold">450€</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                        <span className="text-sm">{isEs ? "Mano de obra (2 días)" : "Labor (2 days)"}</span>
                        <span className="font-bold">600€</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2">
                        <span>{isEs ? "Total Estimado" : "Estimated Total"}</span>
                        <span className="text-blue-500">1.050€</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-500/10 p-4 rounded-2xl text-[10px] text-blue-600 dark:text-blue-400 leading-relaxed">
                      {isEs
                        ? "* Estimación sujeta a visita técnica. Enviada automáticamente al cliente por WhatsApp."
                        : "* Estimate subject to technical visit. Automatically sent to the customer via WhatsApp."}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Speed Section */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="bg-black dark:bg-white text-white dark:text-black rounded-[4rem] p-16 md:p-24 overflow-hidden relative">
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{isEs ? "La Regla de los" : "The Rule of"} <br /><span className="text-white/40 dark:text-black/40 text-3xl font-serif-italic">{isEs ? "5 Minutos" : "5 Minutes"}</span></h2>
                    <p className="text-lg text-white/60 dark:text-black/60 mb-10 leading-relaxed">
                      {isEs
                        ? "Si no respondes a un lead en menos de 5 minutos, la probabilidad de cerrar la venta cae un 80%. Synora garantiza respuesta instantánea y cualificación del presupuesto 24/7."
                        : "If you don't respond to a lead in less than 5 minutes, the probability of closing the sale drops by 80%. Synora guarantees instant response and budget qualification 24/7."}
                    </p>
                    <div className="flex gap-4">
                      <div className="px-6 py-3 bg-white/10 dark:bg-black/5 rounded-full text-xs font-bold">{isEs ? "Respuesta IA Instantánea" : "Instant AI Response"}</div>
                      <div className="px-6 py-3 bg-white/10 dark:bg-black/5 rounded-full text-xs font-bold">{isEs ? "Triaje de Leads" : "Lead Triaging"}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[120px] font-bold leading-none mb-4 opacity-20">5'</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-40">{isEs ? "Tiempo Medio de Respuesta" : "Average Response Time"}</div>
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
                    {isEs ? "Control de Obra y Gremios" : "Site and Trade Control"}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {isEs
                      ? "Centraliza las comunicaciones con tus oficiales, el estado de los pedidos y la aprobación de presupuestos en un panel pensado para la movilidad."
                      : "Centralize communications with your trades, order status, and budget approval on a panel designed for mobility."}
                  </p>

                  <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10 shadow-sm">
                    <h5 className="font-bold text-black dark:text-white mb-3">{isEs ? "Integración con ERP/Facturación" : "ERP/Invoicing Integration"}</h5>
                    <p className="text-sm text-slate-600 dark:text-zinc-400">
                      {isEs
                        ? "Nos conectamos con tu sistema de facturación para que una vez aceptado el presupuesto, el proceso sea fluido hasta el cobro final."
                        : "We connect with your invoicing system so that once the budget is accepted, the process is fluid until final collection."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-2">{isEs ? "Firma Digital" : "Digital Signature"}</h5>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Aceptación de presupuestos por móvil con validez legal." : "Budget acceptance via mobile with legal validity."}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-2">{isEs ? "Gestión de Fotos" : "Photo Management"}</h5>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Archivo visual de cada obra compartido con el cliente." : "Visual archive of each site shared with the client."}</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-[4rem] -z-10"></div>
                  <div className="bg-white dark:bg-zinc-900 p-4 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
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
              <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">{isEs ? "Tu sistema ideal para Reformas" : "Your ideal system for Renovations"}</h2>

              <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                  <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Best Value
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{isEs ? "Plan Crecimiento + Módulos de Reforma" : "Growth Plan + Renovation Modules"}</h3>
                <div className="text-5xl font-bold text-black dark:text-white mb-8">288€/{isEs ? "mes" : "month"}</div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[isEs ? "Presupuestos Voz/Foto" : "Voice/Photo Quotes", isEs ? "Gestión de Gremios" : "Trade Management", isEs ? "Firma Digital" : "Digital Signature"].map((mod, i) => (
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
