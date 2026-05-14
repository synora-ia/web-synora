"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const isDashboard = pathname === "/dashboard";

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { href: "/#inicio", label: t("nav.start") },
    { href: "/#que-hacemos", label: t("nav.what_we_do") },
    { href: "/#plataforma", label: t("nav.platform") },
    { href: "/#sectores", label: t("nav.sectors") },
    { href: "/#precios", label: t("nav.pricing") },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-2xl tracking-tight text-black dark:text-white italic relative z-50" onClick={() => setIsOpen(false)}>
            synora.
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
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded px-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center space-x-4 relative z-50">
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
            
            {/* Hamburger Button */}
            <button 
              className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center space-y-8 w-full px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={language}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center space-y-8 w-full"
                >
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-2xl font-medium text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                    className="pt-4 w-full flex justify-center md:hidden"
                  >
                    <Link 
                      href="/contacto" 
                      className="flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-medium btn-hover"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("nav.contact")}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
