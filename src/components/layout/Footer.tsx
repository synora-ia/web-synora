"use client";

import Link from "next/link";
import FloatingBlobs from "@/components/ui/FloatingBlobs";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <section id="contacto" className="py-16 md:py-32 px-6 bg-black text-white text-center relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* Abstract glowing background elements */}
      <FloatingBlobs
        blobs={[
          { color: "bg-purple-600/20", className: "top-0 left-1/4 w-[40rem] h-[40rem]", animation: "animate-drift-slow" },
          { color: "bg-orange-600/10", className: "bottom-0 right-1/4 w-[40rem] h-[40rem]", animation: "animate-drift-reverse", delay: "5s", duration: "30s" },
        ]}
      />

      <div className="max-w-4xl mx-auto relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
              {t("footer.title1")} <br />
              <span className="font-serif-italic text-white/70 block mt-4 font-normal">{t("footer.title2")}</span>
            </h2>
            <p className="text-xl text-white/60 mb-12">{t("footer.subtitle")}</p>

            <a href="mailto:info@synora.es" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black dark:bg-zinc-800 dark:text-white rounded-full text-lg font-bold btn-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50">
              {t("footer.cta")}
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-white/40 text-sm">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@synora.es
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826L10.242 10.242m4.826 4.826l1.101-1.102a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            synora.es
          </span>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="max-w-7xl mx-auto relative z-20 mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/40 uppercase tracking-widest">
        <div className="mb-4 md:mb-0">{t("footer.rights")}</div>
        <div className="flex space-x-8">
          <Link href="/aviso-legal" className="hover:text-white transition-colors">{t("footer.legal")}</Link>
          <Link href="/privacidad" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">{t("footer.cookies")}</Link>
        </div>
      </footer>
    </section>
  );
}
