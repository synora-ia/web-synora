"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { t, language } = useLanguage();

  const isDashboard = pathname === "/dashboard";

  return (
    <nav className="fixed top-0 w-full z-40 glass-nav transition-all duration-300 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight text-black dark:text-white">
          Synora<span className="text-slate-400">.</span>
        </Link>
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-8"
            >
              <Link href="/#inicio" className="hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded px-1">
                {t("nav.start")}
              </Link>
              <Link href="/#que-hacemos" className="hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded px-1">
                {t("nav.what_we_do")}
              </Link>
              <Link href="/#plataforma" className="hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded px-1">
                {t("nav.platform")}
              </Link>
              <Link href="/#sectores" className="hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded px-1">
                {t("nav.sectors")}
              </Link>
              <Link href="/#precios" className="hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded px-1">
                {t("nav.pricing")}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
          <Link href="/contacto" className="hidden md:flex items-center px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium btn-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                {t("nav.contact")}
              </motion.span>
            </AnimatePresence>
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
