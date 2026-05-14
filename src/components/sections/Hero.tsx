"use client";

import Link from "next/link";
import { useLanguage } from "../layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="inicio" className="hero-gradient pt-32 md:pt-40 pb-16 md:pb-24 px-6 min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-8 text-black dark:text-white leading-[1.1] md:leading-[0.95]">
              {t("hero.title1")} <br className="hidden sm:block" />
              <span className="font-serif-italic text-slate-500 dark:text-zinc-500 block mt-2 md:mt-4">{t("hero.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#que-hacemos" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-base font-medium btn-hover">
                {t("hero.cta1")}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/contacto" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-black/10 dark:border-white/10 text-black dark:text-white rounded-full text-base font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                {t("hero.cta2")}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
