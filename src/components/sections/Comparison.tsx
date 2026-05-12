"use client";

import { useLanguage } from "../layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Comparison() {
  const { t, language } = useLanguage();

  const points = [
    {
      feature: language === "es" ? "Gestión de Leads" : "Lead Management",
      without: language === "es" ? "Respuesta manual lenta, leads que se enfrían o se pierden." : "Slow manual response, leads getting cold or lost.",
      with: language === "es" ? "Respuesta instantánea 24/7 y calificación automática por IA." : "Instant 24/7 response and automatic AI qualification.",
    },
    {
      feature: language === "es" ? "Agendas y Citas" : "Schedules and Appointments",
      without: language === "es" ? "Idas y venidas de mensajes, huecos vacíos y errores humanos." : "Back and forth messages, empty slots and human errors.",
      with: language === "es" ? "Sincronización total en tiempo real sin intervención manual." : "Total real-time synchronization without manual intervention.",
    },
    {
      feature: language === "es" ? "Seguimiento" : "Follow-up",
      without: language === "es" ? "Depende de la memoria o de excels que nadie actualiza." : "Depends on memory or Excels that nobody updates.",
      with: language === "es" ? "Sistemas persistentes que nunca olvidan un contacto." : "Persistent systems that never forget a contact.",
    },
    {
      feature: language === "es" ? "Toma de Decisiones" : "Decision Making",
      without: language === "es" ? "Basada en intuición y datos dispersos o desactualizados." : "Based on intuition and scattered or outdated data.",
      with: language === "es" ? "Dashboards con métricas reales y precisas cada segundo." : "Dashboards with real and precise metrics every second.",
    },
    {
      feature: language === "es" ? "Escalabilidad" : "Scalability",
      without: language === "es" ? "Limitada por las horas que tú o tu equipo podéis echar." : "Limited by the hours you or your team can put in.",
      with: language === "es" ? "Tu capacidad operativa crece sin aumentar los costes fijos." : "Your operational capacity grows without increasing fixed costs.",
    }
  ];

  return (
    <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{t("comparison.badge")}</span>
              <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight leading-tight">
                {t("comparison.title1")} <span className="font-serif-italic text-slate-500 dark:text-zinc-400">{t("comparison.title2")}</span>
              </h2>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="grid md:grid-cols-2">
                {/* Column: Sin Synora */}
                <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 sm:p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5">
                  <h3 className="text-2xl font-bold text-slate-400 dark:text-zinc-600 mb-12 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {t("comparison.without")}
                  </h3>
                  <ul className="space-y-10">
                    {points.map((point, i) => (
                      <li key={i} className="opacity-50 group">
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-500 dark:text-zinc-500">{point.feature}</h4>
                        <p className="text-slate-600 dark:text-zinc-400 text-lg leading-relaxed">{point.without}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column: Con Synora */}
                <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 md:p-16 relative overflow-hidden">
                  {/* Subtle glow for the "With" column */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 dark:bg-white/5 rounded-full blur-[100px] opacity-60"></div>

                  <h3 className="text-2xl font-bold text-black dark:text-white mb-12 flex items-center relative z-10">
                    <svg className="w-6 h-6 mr-3 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t("comparison.with")}
                  </h3>
                  <ul className="space-y-10 relative z-10">
                    {points.map((point, i) => (
                      <li key={i}>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-500 dark:text-zinc-500">{point.feature}</h4>
                        <p className="text-black dark:text-white text-lg font-medium leading-relaxed">{point.with}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
