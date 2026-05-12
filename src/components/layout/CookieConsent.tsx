"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-6 left-6 right-6 z-50"
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 p-6 md:p-8 rounded-[2.5rem] shadow-2xl shadow-black/10 dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl bg-white/90 dark:bg-zinc-900/90">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg font-bold text-black dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {language === "es" ? "Tu privacidad nos importa" : "Your privacy matters"}
                </h4>
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                  {language === "es" 
                    ? "Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrarte contenido relevante. Puedes aceptar todas las cookies o configurar tus preferencias. Consulta nuestra "
                    : "We use our own and third-party cookies to improve your experience, analyze traffic and show you relevant content. You can accept all cookies or configure your preferences. Check our "}
                  <Link href="/privacidad" className="hover:text-black dark:hover:text-white transition-colors">{language === "es" ? "Política de Cookies" : "Cookie Policy"}</Link>.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button 
              onClick={handleDecline}
              className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors border border-slate-100 dark:border-white/5 rounded-2xl"
            >
              {language === "es" ? "Solo necesarias" : "Necessary only"}
            </button>
            <button 
              onClick={handleAccept}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 dark:hover:bg-zinc-200 transition-all shadow-lg shadow-black/5"
            >
              {language === "es" ? "Aceptar todas" : "Accept all"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
