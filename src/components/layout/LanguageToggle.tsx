"use client";

import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center h-8 w-14 bg-slate-100 dark:bg-white/10 rounded-full p-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white group"
      aria-label={`Switch to ${language === "es" ? "English" : "Spanish"}`}
    >
      <div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        className="absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-sm flex items-center justify-center z-10"
        animate={{ x: language === "es" ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <span className="text-[10px] font-bold text-black dark:text-white uppercase">
          {language}
        </span>
      </motion.div>

      <div className="flex justify-between items-center w-full px-1.5 z-0">
        <span className={`text-[9px] font-bold uppercase transition-opacity duration-300 ${language === "es" ? "opacity-0" : "opacity-40 text-slate-500 dark:text-white/40"}`}>
          es
        </span>
        <span className={`text-[9px] font-bold uppercase transition-opacity duration-300 ${language === "en" ? "opacity-0" : "opacity-40 text-slate-500 dark:text-white/40"}`}>
          en
        </span>
      </div>
    </button>
  );
}
