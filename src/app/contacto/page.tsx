"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactoPage() {
  const { t, language } = useLanguage();

  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6 min-h-[80vh] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">{t("contact.badge")}</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-black dark:text-white">
              {t("contact.title1")} <br />
              <span className="font-serif-italic text-slate-500 dark:text-zinc-500">{t("contact.title2")}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>

            <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 text-left max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">{t("contact.form.name")}</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-all" placeholder={t("contact.form.namePlaceholder")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">{t("contact.form.company")}</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-all" placeholder={t("contact.form.companyPlaceholder")} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">{t("contact.form.email")}</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-all" placeholder={t("contact.form.emailPlaceholder")} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">{t("contact.form.message")}</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-all" placeholder={t("contact.form.messagePlaceholder")}></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-lg btn-hover transition-all duration-300">
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
