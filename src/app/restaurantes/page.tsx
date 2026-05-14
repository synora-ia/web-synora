"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function RestaurantesPage() {
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
                {isEs ? "Especialización / Hostelería" : "Specialization / Hospitality"}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
                {isEs ? "Mesas llenas…" : "Full tables…"} <br />
                <span className="font-serif-italic text-slate-500 dark:text-zinc-500">{isEs ? "sin complicaciones." : "without complications."}</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
                {isEs
                  ? "Libro de reservas inteligente y gestión de no-shows. Deja que la IA gestione el teléfono mientras tú cuidas el servicio."
                  : "Smart booking book and no-show management. Let the AI handle the phone while you take care of the service."}
              </p>
              <div className="flex space-x-4">
                <Link href="/contacto" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold btn-hover transition-all duration-300">
                  {isEs ? "Solicitar Auditoría" : "Request Audit"}
                </Link>
              </div>
            </div>
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl dark:shadow-white/5 border border-transparent dark:border-white/10">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Restaurante" className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
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
          {/* Peak Hour Section - Unique for F&B */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="bg-slate-50 dark:bg-zinc-900 rounded-[3rem] p-12 border border-slate-100 dark:border-white/5 relative">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-black p-4 rounded-2xl rounded-bl-none shadow-sm text-sm max-w-[80%] border border-slate-100 dark:border-white/5">
                          {isEs ? "Hola, ¿tenéis mesa para 4 esta noche a las 21:00?" : "Hi, do you have a table for 4 tonight at 9:00 PM?"}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-2xl rounded-br-none shadow-sm text-sm max-w-[80%] font-medium">
                          {isEs ? "¡Hola! Sí, nos queda una mesa disponible. ¿Queréis confirmar la reserva?" : "Hello! Yes, we have one table available. Would you like to confirm the booking?"}
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-black p-4 rounded-2xl rounded-bl-none shadow-sm text-sm max-w-[80%] border border-slate-100 dark:border-white/5">
                          {isEs ? "Sí, perfecto." : "Yes, perfect."}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-2xl rounded-br-none shadow-sm text-sm max-w-[80%] font-medium">
                          {isEs ? "¡Mesa confirmada! Nos vemos a las 21:00. 🍷" : "Table confirmed! See you at 9:00 PM. 🍷"}
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                      {isEs ? "Chatbot WhatsApp Activo" : "WhatsApp Chatbot Active"}
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">
                    {isEs ? "Paz Operativa en" : "Operational Peace during"} <br /><span className="text-slate-400">{isEs ? "Hora Punta." : "Peak Hour."}</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed">
                    {isEs
                      ? "El teléfono ya no interrumpirá el servicio. Synora atiende a tus clientes por WhatsApp y Web, sincronizando cada reserva directamente en tu panel de sala."
                      : "The phone will no longer interrupt service. Synora attends to your customers via WhatsApp and Web, synchronizing each reservation directly in your dining room panel."}
                  </p>
                  <ul className="grid grid-cols-2 gap-8">
                    <li>
                      <div className="font-bold text-black dark:text-white mb-2">{isEs ? "Reservas 24/7" : "24/7 Bookings"}</div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Atención inmediata incluso con el restaurante cerrado." : "Immediate attention even when the restaurant is closed."}</p>
                    </li>
                    <li>
                      <div className="font-bold text-black dark:text-white mb-2">{isEs ? "Zero Colas" : "Zero Queues"}</div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{isEs ? "Gestiona listas de espera automáticas en momentos de alta demanda." : "Manage automatic waiting lists during high-demand times."}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* No-Show Prevention Section */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">{isEs ? "Protege tu Facturación" : "Protect Your Billing"}</h2>
                <p className="text-slate-500 dark:text-zinc-400">{isEs ? "Un restaurante con 40 plazas no puede permitirse un \"no-show\" de 6 personas un sábado por la noche." : "A restaurant with 40 seats cannot afford a 'no-show' of 6 people on a Saturday night."}</p>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 gap-6 md:gap-8 -mx-6 px-6 md:mx-0 md:px-0 py-4">
                <div className="min-w-[85vw] snap-center md:min-w-0 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mb-8">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-black dark:text-white">{isEs ? "Confirmación con Fianza" : "Confirmation with Deposit"}</h4>
                  <p className="text-slate-500 dark:text-zinc-400 leading-relaxed mb-8">
                    {isEs
                      ? "Activa el cobro de una pequeña fianza automática para grupos grandes o fechas críticas (San Valentín, Navidad). El cliente se compromete y tu mesa está protegida."
                      : "Activate the automatic collection of a small deposit for large groups or critical dates (Valentine's, Christmas). The customer commits and your table is protected."}
                  </p>
                  <div className="text-sm font-bold text-black dark:text-white">{isEs ? "Reducción del 95% en No-Shows" : "95% Reduction in No-Shows"}</div>
                </div>
                <div className="min-w-[85vw] snap-center md:min-w-0 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-8">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-black dark:text-white">Guest Intelligence</h4>
                  <p className="text-slate-500 dark:text-zinc-400 leading-relaxed mb-8">
                    {isEs
                      ? "¿Es un cliente recurrente? ¿Tiene alergias? ¿Viene por un aniversario? Synora identifica al cliente al reservar y avisa al personal de sala."
                      : "Is it a recurring customer? Do they have allergies? Are they coming for an anniversary? Synora identifies the customer when booking and alerts the floor staff."}
                  </p>
                  <div className="text-sm font-bold text-black dark:text-white">{isEs ? "Experiencia Personalizada" : "Personalized Experience"}</div>
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
                    {isEs ? "Tu libro de reservas, evolucionado" : "Your reservation book, evolved"}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {isEs
                      ? "Visualiza la ocupación de tus salas, el histórico de clientes y las alertas de alergias en un panel táctil diseñado para el ritmo de la sala."
                      : "Visualize your room occupancy, customer history, and allergy alerts on a touch panel designed for the floor rhythm."}
                  </p>

                  <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10 shadow-sm">
                    <h5 className="font-bold text-black dark:text-white mb-3">{isEs ? "Integración con TPV" : "POS Integration"}</h5>
                    <p className="text-sm text-slate-600 dark:text-zinc-400">
                      {isEs
                        ? "Se integra con tu TPV y widget de reservas web para que no pierdas ni una mesa y reduzcas los no-shows a cero."
                        : "Integrates with your POS and web booking widget so you don't miss a single table and reduce no-shows to zero."}
                    </p>
                  </div>

                  <div className="flex gap-12">
                    <div>
                      <div className="text-4xl font-bold text-black dark:text-white">+15%</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{isEs ? "Rotación de Mesas" : "Table Turnover"}</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-black dark:text-white">+20%</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{isEs ? "Ticket Medio" : "Average Ticket"}</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-[4rem] -z-10"></div>
                  <div className="bg-white dark:bg-zinc-900 p-4 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
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
              <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">{isEs ? "Tu sistema ideal para Restaurantes" : "Your ideal system for Restaurants"}</h2>

              <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                  <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Best Value
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{isEs ? "Plan Esencial + Módulos de Reserva" : "Essential Plan + Booking Modules"}</h3>
                <div className="text-5xl font-bold text-black dark:text-white mb-8">148€/{isEs ? "mes" : "month"}</div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[isEs ? "Chatbot de Reservas" : "Booking Chatbot", isEs ? "Confirmación con Fianza" : "Confirmation with Deposit", isEs ? "Gestión de No-Shows" : "No-Show Management"].map((mod, i) => (
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
