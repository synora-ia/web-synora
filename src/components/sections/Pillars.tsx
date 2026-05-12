"use client";

import { useLanguage } from "../layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Pillars() {
  const { t, language } = useLanguage();

  return (
    <section id="que-hacemos" className="py-12 md:py-24 px-6 bg-slate-50 dark:bg-black relative z-20 transition-colors duration-300 border-y border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-16 items-center"
          >
            {/* Left Column: Title */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white mb-6 tracking-tight">
                {t("pillars.title1")} <br />
                <span className="font-serif-italic text-slate-400 dark:text-zinc-500">{t("pillars.title2")}</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8">
                {t("pillars.subtitle")}
              </p>
            </div>

            {/* Right Column: 3 Pillar Cards with integrated stats */}
            <div className="lg:col-span-7 space-y-6">
              {/* Card 1 */}
              <div className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start sm:items-center shadow-sm hover:shadow-xl dark:shadow-none">
                <div className="w-16 h-16 shrink-0 bg-slate-50 dark:bg-black rounded-2xl flex items-center justify-center text-black dark:text-white border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black dark:text-white">{t("pillars.card1.title")}</h3>
                    <span className="text-xs font-bold bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full">{t("pillars.card1.stat")}</span>
                  </div>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">{t("pillars.card1.desc")}</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start sm:items-center shadow-sm hover:shadow-xl dark:shadow-none">
                <div className="w-16 h-16 shrink-0 bg-slate-50 dark:bg-black rounded-2xl flex items-center justify-center text-black dark:text-white border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black dark:text-white">{t("pillars.card2.title")}</h3>
                    <span className="text-xs font-bold bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white px-3 py-1 rounded-full">{t("pillars.card2.stat")}</span>
                  </div>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">{t("pillars.card2.desc")}</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start sm:items-center shadow-sm hover:shadow-xl dark:shadow-none">
                <div className="w-16 h-16 shrink-0 bg-slate-50 dark:bg-black rounded-2xl flex items-center justify-center text-black dark:text-white border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black dark:text-white">{t("pillars.card3.title")}</h3>
                    <span className="text-xs font-bold bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white px-3 py-1 rounded-full">{t("pillars.card3.stat")}</span>
                  </div>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">{t("pillars.card3.desc")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
