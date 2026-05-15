"use client";

import { useEffect, useState } from "react";
import { getPageViews, getButtonClicks } from "@/lib/analyticsStore";
import { motion, AnimatePresence } from "framer-motion";

export default function AnalyticsPage() {
  const [pageViews, setPageViews] = useState<Record<string, number>>({});
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    setPageViews(getPageViews());
    setClicks(getButtonClicks());
  }, []);

  const sortedPages = Object.entries(pageViews).sort((a, b) => b[1] - a[1]);
  const sortedClicks = Object.entries(clicks).sort((a, b) => b[1] - a[1]);

  const totalPageViews = Object.values(pageViews).reduce((a, b) => a + b, 0);
  const totalClicks = Object.values(clicks).reduce((a, b) => a + b, 0);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="space-y-12"
      >
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">
              Analíticas Globales
            </h1>
            <p className="text-slate-500 dark:text-zinc-500 mt-2">
              Métricas de comportamiento, páginas más vistas y eventos en tu web.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest">
              Live Data
            </span>
          </div>
        </header>

        {/* Global Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">Páginas Vistas</p>
              <h4 className="text-4xl font-bold text-black dark:text-white">{totalPageViews}</h4>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">Interacciones (Clics)</p>
              <h4 className="text-4xl font-bold text-black dark:text-white">{totalClicks}</h4>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Páginas vistas */}
          <section className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-8">Páginas Principales</h2>
            {sortedPages.length === 0 ? (
              <p className="text-slate-400 dark:text-zinc-600 text-sm py-4">No hay datos todavía. Navega por la web para registrar visitas.</p>
            ) : (
              <div className="space-y-0">
                {sortedPages.map(([page, views]) => (
                  <div key={page} className="flex items-center justify-between py-5 border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-slate-50/50 dark:hover:bg-white/5 px-4 -mx-4 rounded-2xl transition-all">
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-1">{page}</h5>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">Página</p>
                    </div>
                    <div className="font-mono text-lg font-bold text-black dark:text-white">
                      {views}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Clics e Interacciones */}
          <section className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-8">Eventos / Clics</h2>
            {sortedClicks.length === 0 ? (
              <p className="text-slate-400 dark:text-zinc-600 text-sm py-4">No hay eventos todavía. Haz clic en algún botón trackeado.</p>
            ) : (
              <div className="space-y-0">
                {sortedClicks.map(([btn, clicks]) => (
                  <div key={btn} className="flex items-center justify-between py-5 border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-slate-50/50 dark:hover:bg-white/5 px-4 -mx-4 rounded-2xl transition-all">
                    <div>
                      <h5 className="font-bold text-black dark:text-white mb-1">{btn}</h5>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">Botón / CTA</p>
                    </div>
                    <div className="font-mono text-lg font-bold text-blue-500">
                      {clicks}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
