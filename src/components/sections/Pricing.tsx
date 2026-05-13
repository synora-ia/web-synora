"use client";

import Link from "next/link";
import { useLanguage } from "../layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

import { usePricingData } from "@/data/pricingData";

export default function Pricing() {
  const { t, language } = useLanguage();
  const { plans, modules } = usePricingData();

  return (
    <section id="precios" className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{t("pricing.badge")}</span>
              <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight leading-tight">{t("pricing.title")}</h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {t("pricing.subtitle")}
              </p>
            </div>

            <div className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 -mx-6 px-6 md:mx-0 md:px-0 py-10">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`min-w-[85vw] snap-center md:min-w-0 bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-[2.5rem] pricing-card flex flex-col relative transition-all duration-300 ${plan.recommended
                    ? "border-2 border-black dark:border-white md:scale-105 z-10 shadow-xl dark:shadow-white/5"
                    : "border border-slate-100 dark:border-white/5"
                    }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-20">
                      {t("pricing.recommended")}
                    </div>
                  )}
                  <div className="mb-8">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${plan.name.includes("Esencial") || plan.name.includes("Essential") ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" :
                      plan.name.includes("Crecimiento") || plan.name.includes("Growth") ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" :
                        "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      }`}>
                      {plan.tag}
                    </span>
                    <h4 className="text-2xl font-bold text-black dark:text-white">{plan.name}</h4>
                    <div className="mt-4 flex flex-col">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-black dark:text-white">{plan.price}</span>
                        <span className="ml-1 text-slate-400 dark:text-zinc-500 text-sm">{t("pricing.month")}</span>
                      </div>
                      <span className="text-slate-400 dark:text-zinc-500 text-sm mt-1">+ {plan.setup} {t("pricing.setup")}</span>
                      <span className="text-amber-600 dark:text-amber-500/80 font-bold text-xs mt-2 flex items-center bg-amber-50 dark:bg-amber-900/10 px-3 py-1.5 rounded-lg w-fit">
                        <svg className="w-3.5 h-3.5 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        {t("pricing.audit")}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium mb-6">{plan.quote}</p>
                  <ul className="space-y-4 mb-10 text-sm text-slate-600 dark:text-zinc-400 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`w-5 h-5 mr-3 shrink-0 ${plan.recommended ? "text-blue-500" : index === 0 ? "text-green-500" : "text-red-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={feature.includes("Todo lo del") || feature.includes("Everything in") || feature.includes("Auditoría") || feature.includes("Web Connect") ? "font-bold text-black dark:text-white" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/planes" className="text-center text-xs text-slate-400 dark:text-zinc-500 hover:text-black dark:hover:text-white mb-4 transition-colors">
                    {language === "es" ? "Ver detalles del plan" : "View plan details"}
                  </Link>
                  <Link href="/contacto" className={`block w-full py-4 text-center rounded-2xl font-bold transition-all ${plan.buttonStyle === "bg-black text-white"
                    ? "bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-900 dark:hover:bg-zinc-200"
                    : "bg-slate-100 text-black hover:bg-black hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                    }`}>
                    {plan.recommended ? (language === "es" ? "Solicitar Plan" : "Request Plan") : plan.name.includes("Pro") ? (language === "es" ? "Hablar con Experto" : "Talk to Expert") : (language === "es" ? "Empezar ahora" : "Get started now")}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 dark:text-zinc-500 mb-16 max-w-3xl mx-auto px-4">
              {t("pricing.disclaimer")}
            </p>

            {/* Foundational Services - Pago Único */}
            <div className="mt-20 pt-20 border-t border-slate-100 dark:border-white/5">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight">{t("pricing.foundational.title")}</h3>
                <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm">
                  {t("pricing.foundational.subtitle")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white">{t("pricing.foundational.web.title")}</h4>
                    <div className="text-lg font-bold text-black dark:text-white">{t("pricing.foundational.web.price")}</div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">{t("pricing.foundational.web.desc")}</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white">{t("pricing.foundational.iso.title")}</h4>
                    <div className="text-lg font-bold text-black dark:text-white">{t("pricing.foundational.iso.price")}</div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">{t("pricing.foundational.iso.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Monthly Modules Section - Full Width */}
      <div className="mt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12 px-6">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">{t("pricing.modules.title")}</h3>
          <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed text-sm">
            {t("pricing.modules.subtitle")}
          </p>
        </div>

        <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll hover:[animation-play-state:paused] w-fit gap-6 py-4">
            {/* First set of cards */}
            {modules.map((mod, i) => (
              <div key={`pack-1-${i}`} className="w-[280px] shrink-0">
                <ExtraCard mod={mod} language={language} />
              </div>
            ))}
            {/* Duplicated set for infinite loop */}
            {modules.map((mod, i) => (
              <div key={`pack-2-${i}`} className="w-[300px] shrink-0">
                <ExtraCard mod={mod} language={language} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/planes#funcionalidades" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-black dark:hover:text-white transition-colors group">
            {t("pricing.modules.all")}
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </div>
    </section>

  );
}

function ExtraCard({ mod, language }: { mod: any; language: string }) {
  const { title, desc, setupPrice, monthlyPrice, oneTimePrice, isPack } = mod;
  const isEs = language === "es";
  
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-100 dark:border-white/5 hover:shadow-lg dark:hover:shadow-white/5 transition-all text-center relative overflow-hidden h-full flex flex-col justify-center group">
      {isPack && (
        <div className="absolute top-3 right-3 bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest">
          Pack
        </div>
      )}
      
      <h5 className="font-bold text-black dark:text-white mb-2">{title}</h5>
      
      <div className="flex flex-col items-center justify-center mb-2">
        <div className="flex flex-col gap-1 w-full max-w-[140px]">
          {oneTimePrice ? (
            <div className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800/30">
              {oneTimePrice}€ {isEs ? "Único" : "Once"}
            </div>
          ) : (
            <div className="flex gap-2 justify-center">
              {setupPrice !== undefined && (
                <div className="flex flex-col items-center">
                  <span className="text-[8px] uppercase tracking-wider text-slate-400">{isEs ? "Instal." : "Setup"}</span>
                  <span className="text-xs font-bold text-black dark:text-white">{setupPrice}€</span>
                </div>
              )}
              <div className="w-px h-6 bg-slate-200 dark:bg-white/10"></div>
              {monthlyPrice !== undefined && (
                <div className="flex flex-col items-center">
                  <span className="text-[8px] uppercase tracking-wider text-slate-400">{isEs ? "Mes" : "Mo."}</span>
                  <span className="text-xs font-bold text-black dark:text-white">{monthlyPrice}€</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-2 px-2">{desc}</p>
    </div>
  );
}
