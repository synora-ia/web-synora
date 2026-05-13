"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import IsoModalBadge from "@/components/sections/IsoModalBadge";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function PlanesPage() {
  const { t, language } = useLanguage();

  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <header className="hero-gradient pt-32 md:pt-40 pb-12 md:pb-20 px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-black dark:text-white mb-8 tracking-tight leading-[1.1] md:leading-[0.95]">
              {t("planes.hero.title1")} <br /> <span className="font-serif-italic text-slate-500 dark:text-zinc-500">{t("planes.hero.title2")}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {t("planes.hero.desc")}
            </p>
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
          {/* Comparative Matrix */}
          <section className="py-12 md:py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm dark:shadow-none border border-black/5 dark:border-white/5 overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent z-10 pointer-events-none md:hidden"></div>
                <div className="overflow-x-auto relative z-0 pb-4">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-white/5">
                        <th className="p-8 text-slate-400 dark:text-zinc-500 font-medium text-sm">{t("planes.matrix.features")}</th>
                        <th className="p-8">
                          <span className="block text-xl font-bold text-black dark:text-white">{t("planes.matrix.essential")}</span>
                          <span className="text-xs text-slate-400 dark:text-zinc-500">99€/{t("planes.matrix.month")}</span>
                        </th>
                        <th className="p-8 bg-black dark:bg-white text-white dark:text-black">
                          <span className="block text-xl font-bold">{t("planes.matrix.growth")}</span>
                          <span className="text-xs text-white/50 dark:text-black/50">199€/{t("planes.matrix.month")}</span>
                        </th>
                        <th className="p-8">
                          <span className="block text-xl font-bold text-black dark:text-white">{t("planes.matrix.pro")}</span>
                          <span className="text-xs text-slate-400 dark:text-zinc-500">{t("planes.matrix.from")} 399€/{t("planes.matrix.month")}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-slate-600 dark:text-zinc-400">
                      <TableRow label={t("planes.matrix.setup")} v1="350€" v2={`${t("planes.matrix.from")} 600€`} v3={`${t("planes.matrix.from")} 900€`} />
                      <TableRow label={t("planes.matrix.audit")} v1={`${t("planes.matrix.optional")} (${t("planes.matrix.from")} 200€)`} v2={`${t("planes.matrix.optional")} (${t("planes.matrix.from")} 200€)`} v3={`${t("planes.matrix.optional")} (${t("planes.matrix.from")} 200€)`} />

                      <TableRow label={t("planes.matrix.agenda")} v1="✓" v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.leads")} v1="✓" v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.docs")} v1="✓" v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.icebraker")} v1="✓" v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.web_automation")} v1="✓" v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.reminders")} v1="✓" v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.wa_chatbot")} v1={`+49€/${t("planes.matrix.month")}`} v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.web_chatbot")} v1={`+49€/${t("planes.matrix.month")}`} v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.web_connect")} v1={`+39€/${t("planes.matrix.month")}`} v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.ia_followup")} v1={`+39€/${t("planes.matrix.month")}`} v2="✓" v3="✓" />
                      <TableRow label={t("planes.matrix.analytics")} v1={`+29€/${t("planes.matrix.month")}`} v2={`+29€/${t("planes.matrix.month")}`} v3="✓" />
                      <TableRow label={t("planes.matrix.internal_ia")} v1={`+39€/${t("planes.matrix.month")}`} v2={`+39€/${t("planes.matrix.month")}`} v3="✓" />
                      <TableRow label={t("planes.matrix.transcriptions")} v1={`+39€/${t("planes.matrix.month")}`} v2={`+39€/${t("planes.matrix.month")}`} v3="✓" />
                      <TableRow label={t("planes.matrix.funnel")} v1={`+59€/${t("planes.matrix.month")}`} v2={`+59€/${t("planes.matrix.month")}`} v3="✓" />

                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-xs text-slate-400 dark:text-zinc-500 mt-6 max-w-3xl mx-auto px-4">
                {t("planes.matrix.tokens_disclaimer")}
              </p>
            </div>
          </section>

          {/* What is an Audit Section */}
          <section className="py-12 md:py-24 px-6 bg-white dark:bg-black transition-colors duration-300 border-t border-slate-50 dark:border-white/5">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">{t("planes.audit.title")}</h2>
                <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto mb-6">
                  {t("planes.audit.desc")}
                </p>
                <IsoModalBadge />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">1</div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-3">{t("planes.audit.step1_title")}</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {t("planes.audit.step1_desc")}
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">2</div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-3">{t("planes.audit.step2_title")}</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {t("planes.audit.step2_desc")}
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">3</div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-3">{t("planes.audit.step3_title")}</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {t("planes.audit.step3_desc")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why "Everything Included"? */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white tracking-tight leading-[1.1]">
                {t("planes.no_surprises.title")} <br /> <span className="font-serif-italic text-slate-400 dark:text-zinc-500">{t("planes.no_surprises.subtitle")}</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-black dark:text-white">{t("planes.no_surprises.what_we_pay")}</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
                    {t("planes.no_surprises.what_we_pay_desc")}
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-zinc-300">
                    <ListItem iconColor="text-blue-500 dark:text-blue-400">{t("planes.no_surprises.pay_list.0")}</ListItem>
                    <ListItem iconColor="text-blue-500 dark:text-blue-400">{t("planes.no_surprises.pay_list.1")}</ListItem>
                    <ListItem iconColor="text-blue-500 dark:text-blue-400">{t("planes.no_surprises.pay_list.2")}</ListItem>
                    <ListItem iconColor="text-blue-500 dark:text-blue-400">{t("planes.no_surprises.pay_list.3")}</ListItem>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-black dark:text-white">{t("planes.no_surprises.what_you_gain")}</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
                    {t("planes.no_surprises.what_you_gain_desc")}
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-zinc-300">
                    <ListItem iconColor="text-orange-500 dark:text-orange-400">{t("planes.no_surprises.gain_list.0")}</ListItem>
                    <ListItem iconColor="text-orange-500 dark:text-orange-400">{t("planes.no_surprises.gain_list.1")}</ListItem>
                    <ListItem iconColor="text-orange-500 dark:text-orange-400">{t("planes.no_surprises.gain_list.2")}</ListItem>
                    <ListItem iconColor="text-orange-500 dark:text-orange-400">{t("planes.no_surprises.gain_list.3")}</ListItem>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Modules */}
          <section className="py-12 md:py-24 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">{t("planes.packs.title")}</h2>
                <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                  {t("planes.packs.desc1")} <strong>{t("planes.packs.desc2")}</strong> {t("planes.packs.desc3")}
                </p>
              </div>

              {/* Real Estate Section */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Pack Esencial */}
                  <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden flex flex-col h-full pricing-card transition-all duration-300">
                    <div className="p-10 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-zinc-900/50">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">{t("planes.packs.acquisition_badge")}</span>
                          <h4 className="text-3xl font-bold text-black dark:text-white">{t("planes.packs.acquisition_title")}</h4>
                          <p className="text-slate-500 dark:text-zinc-400 mt-2 text-sm max-w-[200px]">{t("planes.packs.acquisition_desc")}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-4xl font-bold text-black dark:text-white">+89€</div>
                          <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">/{t("planes.matrix.month")} {t("planes.packs.complete_pack")}</div>
                          <div className="text-[10px] text-blue-500 font-bold mt-2 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md inline-block">{t("planes.packs.requires_plan")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col gap-2">
                      <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-2 px-4">{t("planes.packs.individual_modules")}</span>
                      <ModuleItem
                        title={t("planes.modules.web_publisher.title")}
                        price={`+39€/${t("planes.matrix.month")}`}
                        desc={t("planes.modules.web_publisher.desc")}
                      />
                      <ModuleItem
                        title={t("planes.modules.ai_suggestions.title")}
                        price={`+39€/${t("planes.matrix.month")}`}
                        desc={t("planes.modules.ai_suggestions.desc")}
                      />
                      <ModuleItem
                        title={t("planes.modules.manual_capture.title")}
                        price={`+29€/${t("planes.matrix.month")}`}
                        desc={t("planes.modules.manual_capture.desc")}
                      />
                    </div>
                  </div>

                  {/* Pack Avanzado */}
                  <div className="bg-black dark:bg-white rounded-[2.5rem] border border-black dark:border-white overflow-hidden flex flex-col h-full text-white dark:text-black shadow-2xl dark:shadow-none pricing-card transition-all duration-300">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent dark:from-black/10 pointer-events-none"></div>
                    <div className="p-10 border-b border-white/10 dark:border-black/10 relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/20 dark:bg-black/10 text-white dark:text-black">{t("planes.packs.intelligence_badge")}</span>
                          <h4 className="text-3xl font-bold">{t("planes.packs.intelligence_title")}</h4>
                          <p className="text-white/70 dark:text-black/70 mt-2 text-sm max-w-[220px]">{t("planes.packs.intelligence_desc")}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-4xl font-bold">+149€</div>
                          <div className="text-xs text-white/60 dark:text-black/50 uppercase tracking-wider font-bold mt-1">/{t("planes.matrix.month")} {t("planes.packs.complete_pack")}</div>
                          <div className="text-[10px] text-white/80 dark:text-black/80 font-bold mt-2 bg-white/20 dark:bg-black/10 px-2 py-1 rounded-md inline-block">{t("planes.packs.requires_plan")}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-sm font-bold text-white/90 dark:text-black/90 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        {t("planes.packs.includes_base")}
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col gap-2 relative z-10">
                      <span className="text-xs font-bold text-white/50 dark:text-black/40 uppercase tracking-widest mb-2 px-4">{t("planes.packs.individual_modules")}</span>
                      <ModuleItem
                        title={language === "es" ? "Property Intel" : "Property Intel"}
                        price={`+59€/${t("planes.matrix.month")}`}
                        desc={language === "es" ? "Análisis de mercado automático por zonas." : "Automatic market analysis by areas."}
                        dark
                      />
                      <ModuleItem
                        title={t("planes.modules.valuation.title")}
                        price={`+49€/${t("planes.matrix.month")}`}
                        desc={t("planes.modules.valuation.desc")}
                        dark
                      />
                      <ModuleItem
                        title={t("planes.modules.auto_capture.title")}
                        price={`+69€/${t("planes.matrix.month")}`}
                        desc={t("planes.modules.auto_capture.desc")}
                        dark
                      />
                    </div>
                  </div>
                </div>
              </div>



              {/* Setup & Infrastructure Section */}
              <div className="mt-16 md:mt-32 pt-10 md:pt-20 border-t border-slate-100 dark:border-white/5">
                <div className="text-center mb-16">
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{t("planes.infrastructure.badge")}</span>
                  <h3 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">{t("planes.infrastructure.title")}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto">
                    {t("planes.infrastructure.desc")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-black dark:text-white">{t("planes.matrix.from")} 349€</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{t("planes.infrastructure.one_time")}</div>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-black dark:text-white mb-4">{t("planes.infrastructure.web_title")}</h4>
                    <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {t("planes.infrastructure.web_desc")}
                    </p>
                    <ul className="space-y-3 mb-8">
                      <ListItem iconColor="text-blue-500">{t("planes.infrastructure.web_list.0")}</ListItem>
                      <ListItem iconColor="text-blue-500">{t("planes.infrastructure.web_list.1")}</ListItem>
                      <ListItem iconColor="text-blue-500">{t("planes.infrastructure.web_list.2")}</ListItem>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-black dark:text-white">{t("planes.matrix.from")} 200€</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{t("planes.matrix.optional")}</div>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-black dark:text-white mb-4">{t("planes.infrastructure.audit_title")}</h4>
                    <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {t("planes.infrastructure.audit_desc")}
                    </p>
                    <ul className="space-y-3 mb-8">
                      <ListItem iconColor="text-amber-500">{t("planes.infrastructure.audit_list.0")}</ListItem>
                      <ListItem iconColor="text-amber-500">{t("planes.infrastructure.audit_list.1")}</ListItem>
                      <ListItem iconColor="text-amber-500">{t("planes.infrastructure.audit_list.2")}</ListItem>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Custom Advanced Section */}
          <section className="py-12 md:py-24 px-6 bg-white dark:bg-black transition-colors duration-300 border-y border-slate-100 dark:border-white/5 relative overflow-hidden">


            <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-4 block">
                    {t("planes.custom_advanced.badge")}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight">Custom Advanced</h3>
                  <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-2xl">
                    {t("planes.custom_advanced.desc")}
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {t("planes.custom_advanced.list.0")}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {t("planes.custom_advanced.list.1")}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {t("planes.custom_advanced.list.2")}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto shrink-0 text-center md:text-left">
                  <div className="text-sm font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4">{t("planes.custom_advanced.investment")}</div>
                  <div className="text-6xl font-bold text-black dark:text-white mb-2">+30-80€</div>
                  <div className="text-sm font-bold text-slate-400 dark:text-zinc-500 mb-8 uppercase tracking-widest">/{t("planes.matrix.month")}</div>

                  <Link href="/contacto" className="block w-full px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all text-center">
                    {t("planes.custom_advanced.check")}
                  </Link>

                </div>
              </div>
            </div>
          </section>

          {/* A la Carta Section */}
          <section id="funcionalidades" className="py-12 md:py-24 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300 scroll-mt-20 border-t border-slate-100 dark:border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{t("planes.a_la_carte.badge")}</span>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">{t("planes.a_la_carte.title")}</h3>
                <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto">
                  <strong>{t("planes.a_la_carte.desc1")}</strong> {t("planes.a_la_carte.desc2")}
                </p>
              </div>
              <div className="space-y-16">
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-3">{t("planes.a_la_carte.core")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FeatureMiniCard title="Dashboard Core" price="+39€" desc={t("dashboard.badge")} />
                    <FeatureMiniCard title={t("planes.matrix.analytics")} price="+59€" desc={t("planes.matrix.analytics")} />
                    <FeatureMiniCard title={t("planes.matrix.internal_ia")} price="+49€" desc={t("planes.matrix.internal_ia")} />
                    <FeatureMiniCard title={t("planes.matrix.transcriptions")} price="+39€" desc={t("planes.matrix.transcriptions")} />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-3">{t("planes.a_la_carte.service")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FeatureMiniCard title={t("planes.matrix.icebraker")} price="+29€" desc={t("planes.matrix.icebraker")} />
                    <FeatureMiniCard title={t("planes.matrix.reminders")} price="+29€" desc={t("planes.matrix.reminders")} />
                    <FeatureMiniCard title={t("planes.matrix.wa_chatbot")} price="+49€" desc={t("planes.matrix.wa_chatbot")} />
                    <FeatureMiniCard title={t("planes.matrix.web_chatbot")} price="+49€" desc={t("planes.matrix.web_chatbot")} />
                    <FeatureMiniCard title={t("planes.matrix.ia_followup")} price="+39€" desc={t("planes.matrix.ia_followup")} />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-3">{t("planes.a_la_carte.sales")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FeatureMiniCard title="WebConnect" price="+39€" desc={t("planes.matrix.web_connect")} />
                    <FeatureMiniCard title={t("planes.matrix.funnel")} price="+59€" desc={t("planes.matrix.funnel")} />
                    <FeatureMiniCard title={t("planes.modules.ai_suggestions.title")} price="+39€" desc={t("planes.modules.ai_suggestions.desc")} />
                    <FeatureMiniCard title={t("planes.modules.web_publisher.title")} price="+39€" desc={t("planes.modules.web_publisher.desc")} />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-3">{t("planes.a_la_carte.advanced")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FeatureMiniCard title="Property Intel" price="+59€" desc={language === "es" ? "Análisis de mercado." : "Market analysis."} />
                    <FeatureMiniCard title={t("planes.modules.valuation.title")} price="+49€" desc={t("planes.modules.valuation.desc")} />
                    <FeatureMiniCard title={t("planes.modules.auto_capture.title")} price="+69€" desc={t("planes.modules.auto_capture.desc")} />
                    <FeatureMiniCard title={t("planes.modules.manual_capture.title")} price="+29€" desc={t("planes.modules.manual_capture.desc")} />
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Recommendation Guide */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">{t("planes.guide.title")}</h2>
                <p className="text-slate-500 dark:text-zinc-400 text-lg">{t("planes.guide.subtitle")}</p>
              </div>

              <div className="flex overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch -mx-6 px-6 lg:mx-0 lg:px-0 py-10">
                <RecommendationCard
                  letter="1"
                  badge={t("planes.guide.step1.badge")}
                  title={t("planes.guide.step1.title")}
                  desc={t("planes.guide.step1.desc")}
                />
                <RecommendationCard
                  letter="2"
                  badge={t("planes.guide.step2.badge")}
                  title={t("planes.guide.step2.title")}
                  desc={t("planes.guide.step2.desc")}
                  dark
                />
                <RecommendationCard
                  letter="3"
                  badge={t("planes.guide.step3.badge")}
                  title={t("planes.guide.step3.title")}
                  desc={t("planes.guide.step3.desc")}
                />
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}

function TableRow({ label, v1, v2, v3 }: { label: string; v1: string; v2: string; v3: string }) {
  return (
    <tr className="border-b border-slate-50 dark:border-white/5">
      <td className="p-6 font-medium text-black dark:text-white">{label}</td>
      <td className="p-6">{v1}</td>
      <td className="p-6">{v2}</td>
      <td className="p-6">{v3}</td>
    </tr>
  );
}

function ListItem({ children, iconColor }: { children: React.ReactNode; iconColor: string }) {
  return (
    <li className="flex items-center">
      <svg className={`w-4 h-4 mr-3 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </li>
  );
}

function RecommendationCard({ letter, badge, title, desc, dark = false }: { letter: string; badge: string; title: string; desc: string; dark?: boolean }) {
  const formatDesc = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className={`font-bold ${dark ? "text-white dark:text-black" : "text-black dark:text-white"}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={`min-w-[85vw] snap-center lg:min-w-0 p-10 rounded-[2.5rem] flex flex-col gap-6 items-start relative overflow-hidden transition-all duration-300 h-full ${dark ? "bg-black dark:bg-white text-white dark:text-black shadow-2xl dark:shadow-none lg:scale-[1.05] z-10" : "bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-zinc-800"}`}>
      {dark && <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent dark:from-black/10 pointer-events-none"></div>}

      <div className="flex items-center justify-between w-full relative z-10">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${dark ? "bg-white/10 dark:bg-black/10" : "bg-white dark:bg-zinc-800 shadow-sm border border-slate-100 dark:border-white/5"}`}>
          {letter}
        </div>
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${dark ? "bg-white/20 dark:bg-black/10 text-white dark:text-black" : "bg-slate-200 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"}`}>
          {badge}
        </span>
      </div>

      <div className="relative z-10 mt-2 flex-1">
        <h4 className={`text-2xl font-bold mb-4 tracking-tight ${dark ? "text-white dark:text-black" : "text-black dark:text-white"}`}>{title}</h4>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/80 dark:text-black/80" : "text-slate-600 dark:text-zinc-400"}`}>
          {formatDesc(desc)}
        </p>
      </div>
    </div>
  );
}

function ModuleItem({ title, price, desc, dark = false }: { title: string; price: string; desc: string; dark?: boolean }) {
  return (
    <div className={`flex gap-5 p-4 rounded-2xl transition-all border ${dark ? "border-white/5 hover:bg-white/10" : "border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5"}`}>
      <div className={`shrink-0 h-10 min-w-[70px] px-3 rounded-xl flex items-center justify-center font-bold text-sm ${dark ? "bg-white text-black" : "bg-black text-white dark:bg-white dark:text-black"}`}>
        {price.split('/')[0]}
      </div>
      <div>
        <h5 className={`font-bold mb-1 ${dark ? "text-white dark:text-black" : "text-black dark:text-white"}`}>{title}</h5>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/70 dark:text-black/70" : "text-slate-500 dark:text-zinc-400"}`}>{desc}</p>
      </div>
    </div>
  );
}

function FeatureMiniCard({ title, price, desc }: { title: string; price: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white transition-all">
      <div className="flex justify-between items-start mb-3">
        <h5 className="font-bold text-black dark:text-white">{title}</h5>
        <span className="text-sm font-bold text-black dark:text-white bg-slate-50 dark:bg-white/5 px-2 py-0.5 rounded-lg">{price}</span>
      </div>
      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
