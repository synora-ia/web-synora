"use client";

import { useEffect, useState } from "react";
import { getPageViews, getButtonClicks } from "@/lib/analyticsStore";
import { motion, AnimatePresence } from "framer-motion";

// Definimos el tipo para los logs detallados
interface AnalyticsLog {
  id: string;
  created_at: string;
  category: string;
  action: string;
  label: string;
  path: string;
  user_agent: string;
  session_id: string;
  ip?: string; // Añadimos IP opcional
}

const SB_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/web_analytics`;
const SB_HEADERS = {
  "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  "Content-Type": "application/json"
};

export default function AnalyticsPage() {
  const [pageViews, setPageViews] = useState<Record<string, number>>({});
  const [clicks, setClicks] = useState<Record<string, number>>({});
  const [recentLogs, setRecentLogs] = useState<AnalyticsLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGlobal, setIsGlobal] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
          console.warn("Faltan las variables de entorno de Supabase. ¿Has reiniciado el servidor?");
          throw new Error("Missing credentials");
        }

        const response = await fetch(`${SB_URL}?order=created_at.desc&limit=500`, {
          method: 'GET',
          headers: {
            ...SB_HEADERS,
            "Range": "0-499"
          }
        });

        if (response.ok) {
          const logs: AnalyticsLog[] = await response.json();
          
          // Agregamos los datos para las gráficas
          const pViews: Record<string, number> = {};
          const pClicks: Record<string, number> = {};

          logs.forEach(log => {
            if (log.category === 'pageview') {
              pViews[log.label] = (pViews[log.label] || 0) + 1;
            } else if (log.category === 'click') {
              pClicks[log.label] = (pClicks[log.label] || 0) + 1;
            }
          });

          setPageViews(pViews);
          setClicks(pClicks);
          setRecentLogs(logs); 
          setIsGlobal(true); // Conexión exitosa
          setIsLoading(false);
          return;
        } else {
          throw new Error(`Response not ok: ${response.status}`);
        }
      } catch (error) {
        console.error("Connection fallback to local data:", error);
        setPageViews(getPageViews());
        setClicks(getButtonClicks());
        setIsGlobal(false);
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const sortedPages = Object.entries(pageViews).sort((a, b) => b[1] - a[1]);
  const sortedClicks = Object.entries(clicks).sort((a, b) => b[1] - a[1]);

  const totalPageViews = Object.values(pageViews).reduce((a, b) => a + b, 0);
  const totalClicks = Object.values(clicks).reduce((a, b) => a + b, 0);

  if (isLoading) {
    return (
      <div className="max-w-[1400px] mx-auto space-y-10 py-10 px-6 font-mono">
        {/* Skeleton Header */}
        <div className="space-y-4">
          <div className="h-3 w-32 bg-slate-100 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-12 w-64 bg-slate-100 dark:bg-white/5 rounded-xl animate-pulse" />
        </div>

        {/* Skeleton Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 bg-slate-50 dark:bg-white/5 rounded-[2rem] border border-slate-100 dark:border-white/5 animate-pulse" />
          ))}
        </div>

        {/* Skeleton Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="h-80 bg-slate-50 dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/5 animate-pulse" />
          <div className="h-80 bg-slate-50 dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/5 animate-pulse" />
        </div>

        {/* Technical Loading Text */}
        <div className="flex items-center justify-center gap-3 py-10">
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold"
          >
            Sincronizando con Supabase Cluster...
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[1400px] mx-auto space-y-10 py-10 px-6 font-sans selection:bg-blue-500/30"
      >
        {/* Header con estética técnica */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 dark:border-white/5 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">System Monitoring v2.0</p>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-black dark:text-white">
              Analytics <span className="text-blue-600 dark:text-blue-500">Insights</span>
            </h1>
            <p className="text-slate-500 dark:text-zinc-500 mt-3 max-w-lg leading-relaxed">
              {isGlobal 
                ? "Visualizando datos consolidados de Supabase en tiempo real."
                : "Mostrando caché local de sesión. Sincroniza para ver datos globales."}
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-3">
            <div className={`px-4 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${
              isGlobal 
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                : 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400'
            }`}>
              {isGlobal ? '● LIVE_REMOTE_DATA' : '○ LOCAL_BUFFER_ONLY'}
            </div>
            <p className="text-[10px] font-mono text-slate-400">Refrescado: {new Date().toLocaleTimeString()}</p>
          </div>
        </header>

        {/* Resumen de Métricas (Cards Elevadas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Páginas Vistas', value: totalPageViews, color: 'text-blue-600', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
            { label: 'Interacciones', value: totalClicks, color: 'text-amber-500', icon: 'M15 15l-2 5L9 9l11 4-5 2z' },
            { label: 'Ratio Conversión', value: totalPageViews > 0 ? ((totalClicks / totalPageViews) * 100).toFixed(1) + '%' : '0%', color: 'text-emerald-500', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-500 transition-colors">{stat.label}</p>
                <svg className={`w-5 h-5 ${stat.color} opacity-50`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                </svg>
              </div>
              <h4 className="text-5xl font-bold tracking-tighter text-black dark:text-white font-mono">{stat.value}</h4>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Listas de Ranking */}
          <section className="bg-white dark:bg-zinc-900/30 backdrop-blur-sm border border-slate-100 dark:border-white/5 rounded-[3rem] p-10">
            <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-3">
              <span className="h-1 w-6 bg-blue-600 rounded-full" />
              Ranking de Páginas
            </h3>
            <div className="space-y-2">
              {sortedPages.map(([page, views], i) => (
                <div key={page} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group border border-transparent hover:border-slate-100 dark:hover:border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-slate-300 dark:text-zinc-700 w-4">{i + 1}</span>
                    <span className="font-mono text-sm text-black dark:text-white">{page}</span>
                  </div>
                  <span className="font-mono font-bold text-blue-600">{views}</span>
                </div>
              ))}
              {sortedPages.length === 0 && <p className="text-slate-400 font-mono text-xs italic">No data records found in buffer.</p>}
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-900/30 backdrop-blur-sm border border-slate-100 dark:border-white/5 rounded-[3rem] p-10">
            <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-3">
              <span className="h-1 w-6 bg-amber-500 rounded-full" />
              Eventos Populares
            </h3>
            <div className="space-y-2">
              {sortedClicks.map(([btn, count], i) => (
                <div key={btn} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group border border-transparent hover:border-slate-100 dark:hover:border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-slate-300 dark:text-zinc-700 w-4">{i + 1}</span>
                    <span className="font-mono text-sm text-black dark:text-white">{btn}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-500">{count}</span>
                </div>
              ))}
              {sortedClicks.length === 0 && <p className="text-slate-400 font-mono text-xs italic">No interaction records found.</p>}
            </div>
          </section>
        </div>

        {/* Nueva Sección: Visualización de Tráfico (Gráfica de Barras) */}
        <section className="bg-white dark:bg-zinc-900/30 border border-slate-100 dark:border-white/5 rounded-[3rem] p-10">
          <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-3">
            <span className="h-1 w-6 bg-blue-600 rounded-full" />
            Visualización de Densidad de Tráfico
          </h3>
          <div className="space-y-6">
            {sortedPages.slice(0, 5).map(([page, views], i) => {
              const percentage = totalPageViews > 0 ? (views / totalPageViews) * 100 : 0;
              return (
                <div key={page} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tighter">{page}</span>
                    <span className="text-[10px] font-mono text-blue-500 font-bold">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    />
                  </div>
                </div>
              );
            })}
            {sortedPages.length === 0 && (
              <div className="h-40 flex items-center justify-center border-2 border-dashed border-slate-100 dark:border-white/5 rounded-3xl">
                <p className="text-slate-400 font-mono text-xs italic">Esperando datos para generar visualización...</p>
              </div>
            )}
          </div>
        </section>

        {/* Tabla de Logs Detallados (New) */}
        <section className="bg-white dark:bg-zinc-900/30 border border-slate-100 dark:border-white/5 rounded-[3rem] p-10 overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white flex items-center gap-3">
              <span className="h-1 w-6 bg-emerald-500 rounded-full" />
              Registros Recientes (web_analytics)
            </h3>
            <span className="text-[10px] font-mono text-slate-400">Total logs: {recentLogs.length}</span>
          </div>
          
          <div className="overflow-x-auto -mx-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-white/5">
                  {['TIMESTAMP', 'CAT', 'ACTION', 'LABEL', 'PATH', 'IP', 'SESSION_ID'].map(h => (
                    <th key={h} className="p-4 text-[10px] font-mono font-bold text-slate-400 tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-mono text-[11px]">
                {recentLogs.map((log, i) => (
                  <tr key={log.id || i} className="border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-blue-500/5 transition-colors">
                    <td className="p-4 text-slate-400">{new Date(log.created_at).toLocaleTimeString()}</td>
                    <td className="p-4 font-bold text-blue-500">{log.category}</td>
                    <td className="p-4">{log.action}</td>
                    <td className="p-4 text-black dark:text-white">{log.label}</td>
                    <td className="p-4 text-slate-500">{log.path}</td>
                    <td className="p-4 text-blue-400 font-mono text-[9px]">{log.ip || 'no-ip'}</td>
                    <td className="p-4 text-[9px] text-zinc-600">{log.session_id}</td>
                  </tr>
                ))}
                {recentLogs.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-10 text-center text-slate-400 italic">No detailed logs available from the current source.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
