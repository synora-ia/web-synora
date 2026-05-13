"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FloatingBlobs from "@/components/ui/FloatingBlobs";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/layout/LanguageContext";
import { usePricingData } from "@/data/pricingData";

// --- Constants ---
const getModulesRow1 = (modules: any[]) => {
  const getMod = (id: string) => modules.find((m: any) => m.id === id);
  const getModData = (id: string, fallbackTitle: string, fallbackDesc: string) => {
    const m = getMod(id);
    return {
      title: m?.title || fallbackTitle,
      desc: m?.desc || fallbackDesc,
      price: m?.priceLabel || "+39€/mes",
    };
  };

  return [
    { ...getModData("dashboard_core", "Dashboard Core", "Dashboard centralizado"), icon: "📊", active: true },
    { ...getModData("leads_management", "Gestión de Leads", "Gestión de contactos centralizada"), icon: "👤", active: true },
    { ...getModData("icebraker", "Contestador IceBraker", "Contestador automático"), icon: "🧊", active: false },
    { ...getModData("reminders", "Recordatorios automáticos", "Envío de recordatorios"), icon: "⏰", active: true },
    { ...getModData("wa_chatbot", "Chatbot WhatsApp", "IA conversacional en WA"), icon: "💬", active: true },
    { ...getModData("web_chatbot", "Chatbot Web", "IA conversacional en web"), icon: "🤖", active: false },
    { ...getModData("web_connect", "WebConnect", "Conexión web"), icon: "🌐", active: true },
    { ...getModData("analytics", "Analytics & Tracking", "Analíticas avanzadas"), icon: "🔍", active: true },
    { ...getModData("internal_ia", "IA Interna", "Asistente interno para el equipo"), icon: "🏢", active: false },
  ];
};

const getModulesRow2 = (modules: any[]) => {
  const getMod = (id: string) => modules.find((m: any) => m.id === id);
  const getModData = (id: string, fallbackTitle: string, fallbackDesc: string) => {
    const m = getMod(id);
    return {
      title: m?.title || fallbackTitle,
      desc: m?.desc || fallbackDesc,
      price: m?.priceLabel || "+39€/mes",
    };
  };

  return [
    { ...getModData("transcriptions", "Transcripción", "Transcripción de audios y llamadas"), icon: "✍️", active: false },
    { ...getModData("funnel", "Funnel de Ventas", "Flujo de ventas automatizado"), icon: "🌪️", active: true },
    { ...getModData("property_intel", "Property Intel", "Análisis de mercado"), icon: "🛡️", active: false },
    { ...getModData("auto_capture", "Captador IA Automático", "Búsqueda activa de propiedades"), icon: "🤖", active: true },
    { ...getModData("valuation_reports", "Informes de Valoración", "Valoraciones en PDF automático"), icon: "📋", active: false },
    { ...getModData("manual_capture", "Captador Manual", "Gestión de propiedades manual"), icon: "📝", active: true },
    { ...getModData("web_publisher", "Publicador Web", "Envío a web y portales"), icon: "📤", active: false },
    { ...getModData("ai_suggestions", "Sugerencias IA", "Matching inteligente"), icon: "💡", active: true },
  ];
};

// --- Helper Components ---

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="min-w-[85vw] snap-center md:min-w-0 group p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white transition-all duration-500">
      <div className="w-14 h-14 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-slate-400 dark:text-zinc-500 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
        {icon}
      </div>
      <h4 className="text-2xl font-bold mb-4 text-black dark:text-white">{title}</h4>
      <p className="text-slate-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function IntegrationItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-6 pb-8 border-b border-slate-100 dark:border-white/5 last:border-0 last:pb-0">
      <div className="mt-1.5">
        <div className="w-5 h-5 rounded-full border-2 border-black dark:border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-bold text-black dark:text-white mb-2">{title}</h5>
        <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ModuleBox({ color, label, border, light }: { color: string; label: string; border?: boolean; light?: boolean }) {
  return (
    <div className={`p-6 rounded-2xl ${color} ${light ? 'text-black' : 'text-white'} font-bold text-center shadow-xl shadow-${color.split('-')[1]}-500/10 hover:scale-105 transition-transform cursor-default ${border ? 'border border-white/10' : ''}`}>
      {label}
    </div>
  );
}

function ModuleCard({ title, desc, price, active }: { title: string; desc: string; price: string; active?: boolean }) {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="w-[280px] shrink-0 h-[160px]">
      <div className={`bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-100 dark:border-white/5 hover:shadow-lg dark:hover:shadow-white/5 transition-all text-center relative overflow-hidden h-full flex flex-col justify-center`}>
        <h5 className="font-bold text-black dark:text-white mb-2">{title}</h5>
        <div className="text-xl font-bold text-black dark:text-white mb-2">
          {active ? (
            <span className="text-green-500 text-sm uppercase tracking-widest font-bold">{isEs ? "Activo" : "Active"}</span>
          ) : (
            <>{price}</>
          )}
        </div>
        <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-2 px-2">{desc}</p>

        {active && (
          <div className="absolute top-4 right-4">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}

function ModuleMarquee({ direction, modules }: { direction: "left" | "right", modules: any[] }) {
  return (
    <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex animate-scroll hover:[animation-play-state:paused] w-fit gap-6 py-4 ${direction === "right" ? "[animation-direction:reverse]" : ""}`}>
        {/* We double the modules to create a seamless loop */}
        {[...modules, ...modules, ...modules, ...modules].map((m, i) => (
          <ModuleCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
}

function SecurityBadge({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="w-28 h-28 flex flex-col items-center justify-center border border-slate-100 dark:border-white/10 rounded-[2rem] bg-white/50 dark:bg-black/20 backdrop-blur-sm group hover:border-black dark:hover:border-white transition-all duration-500">
      <div className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-1">{title}</div>
      <div className="text-lg font-black text-black dark:text-white tracking-tighter">{subtitle}</div>
    </div>
  );
}

function SecurityItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-black dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-black shrink-0">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22"></path></svg>
      </div>
      <div>
        <h4 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h4>
        <p className="text-slate-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ActivityFeed() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const initialEvents = [
    { id: 1, type: "Lead", msg: isEs ? "Nuevo lead captado vía WhatsApp" : "New lead captured via WhatsApp", time: isEs ? "ahora" : "now", color: "text-green-400" },
    { id: 2, type: "Sync", msg: isEs ? "Base de datos sincronizada con CRM" : "Database synced with CRM", time: isEs ? "hace 2m" : "2m ago", color: "text-blue-400" },
    { id: 3, type: "AI", msg: isEs ? "Análisis de sentimiento completado" : "Sentiment analysis completed", time: isEs ? "hace 5m" : "5m ago", color: "text-purple-400" },
    { id: 4, type: "Sale", msg: isEs ? "Conversión detectada: Pack Premium" : "Conversion detected: Premium Pack", time: isEs ? "hace 12m" : "12m ago", color: "text-orange-400" },
    { id: 5, type: "Alert", msg: isEs ? "Cita programada automáticamente" : "Appointment scheduled automatically", time: isEs ? "hace 15m" : "15m ago", color: "text-yellow-400" },
    { id: 6, type: "System", msg: isEs ? "Optimización de flujo n8n" : "n8n flow optimization", time: isEs ? "hace 20m" : "20m ago", color: "text-zinc-400" },
  ];

  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prev => {
        const types = ["Lead", "AI", "Sync", "Sale", "System"];
        const msgsEs = [
          "Lead calificado por Captador IA",
          "Actualización de stock completada",
          "Email de seguimiento enviado",
          "Nuevo usuario registrado",
          "Backup diario finalizado"
        ];
        const msgsEn = [
          "Lead qualified by AI Captor",
          "Stock update completed",
          "Follow-up email sent",
          "New user registered",
          "Daily backup finished"
        ];

        const idx = Math.floor(Math.random() * 5);
        const newEvent = {
          id: Date.now(),
          type: types[idx],
          msg: isEs ? msgsEs[idx] : msgsEn[idx],
          time: isEs ? "ahora" : "now",
          color: ["text-blue-400", "text-purple-400", "text-green-400", "text-orange-400", "text-zinc-400"][Math.floor(Math.random() * 5)]
        };
        return [newEvent, ...prev.slice(0, 7)];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isEs]);

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className={`text-[10px] font-bold uppercase tracking-widest ${event.color} bg-white/5 px-2 py-1 rounded`}>
              {event.type}
            </div>
            <div className="text-sm text-white/80 font-medium">{event.msg}</div>
          </div>
          <div className="text-[10px] text-white/30 uppercase font-bold">{event.time}</div>
        </motion.div>
      ))}
    </div>
  );
}

// --- Main Page ---

export default function DashboardPage() {
  const { t, language } = useLanguage();
  const { modules } = usePricingData();

  return (
    <main className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section className="relative pt-32 md:pt-40 pb-[180px] md:pb-[260px] lg:pb-[320px] px-6">
            <FloatingBlobs
              blobs={[
                { color: "bg-blue-600/20", className: "-top-[10%] -left-[10%] w-[60%] h-[60%]", animation: "animate-drift" },
                { color: "bg-purple-600/20", className: "-bottom-[10%] -right-[10%] w-[60%] h-[60%]", animation: "animate-drift-slow", delay: "2s" },
              ]}
            />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest mb-6"
                >
                  {t("dashboard.badge")}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight"
                >
                  {t("dashboard.hero.title1")} <br /> <span className="text-slate-400 dark:text-zinc-500">{t("dashboard.hero.title2")}</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed mb-10"
                >
                  {t("dashboard.hero.desc")}
                </motion.p>
              </div>
            </div>

            {/* Mockup — absolutamente en el borde inferior del hero, translate-y-1/2 lo solapa en ambas secciones */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute bottom-0 left-0 right-0 px-6 translate-y-1/2 z-30"
            >
              <div className="relative mx-auto max-w-5xl group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-800/80 flex items-center px-6 gap-2 z-20 border-b border-white/5 backdrop-blur-md">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                  </div>
                  <img
                    src="/images/dashboard/dashboard-main.png"
                    alt="Synora Dashboard Mockup"
                    className="w-full h-auto mt-10 object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Core Functionalities */}
          <section className="pt-[220px] md:pt-[300px] lg:pt-[370px] pb-20 md:pb-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-y border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 gap-6 md:gap-12 -mx-6 px-6 md:mx-0 md:px-0 py-4">
                <FeatureCard
                  title={t("dashboard.feat1.title")}
                  desc={t("dashboard.feat1.desc")}
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.48A12.042 12.042 0 013 12c0-5.523 4.477-10 10-10a10 10 0 0110 10c0 5.523-4.477 10-10 10z"></path></svg>}
                />
                <FeatureCard
                  title={t("dashboard.feat2.title")}
                  desc={t("dashboard.feat2.desc")}
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>}
                />
                <FeatureCard
                  title={t("dashboard.feat3.title")}
                  desc={t("dashboard.feat3.desc")}
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
                />
              </div>
            </div>
          </section>

          {/* AI Activity Feed Section */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 block">{t("dashboard.monitor.badge")}</span>
                  <h2 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">{t("dashboard.monitor.title1")} <br /> <span className="text-slate-400 dark:text-zinc-500">{t("dashboard.monitor.title2")}</span></h2>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {t("dashboard.monitor.desc")}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full text-sm font-medium text-slate-600 dark:text-zinc-400 border border-slate-100 dark:border-white/10">{t("dashboard.monitor.latency")}: 24ms</div>
                    <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full text-sm font-medium text-slate-600 dark:text-zinc-400 border border-slate-100 dark:border-white/10">{t("dashboard.monitor.uptime")}: 99.99%</div>
                    <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full text-sm font-medium text-slate-600 dark:text-zinc-400 border border-slate-100 dark:border-white/10">{t("dashboard.monitor.events")}: +10k</div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="bg-slate-950 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden h-[500px] flex flex-col">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/5 shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
                      </div>
                      <div className="ml-4 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Synora_Monitor_v2.0</div>
                      <div className="ml-auto flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-green-500/60 uppercase">Live</span>
                      </div>
                    </div>

                    <div className="relative flex-1 overflow-hidden p-8">
                      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none"></div>
                      <ActivityFeed />
                    </div>

                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-20 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics Section */}
          <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-zinc-900/20 border-y border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300 relative">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid md:grid-cols-3 gap-16 md:gap-8 items-start">
                <div className="text-center md:text-left">
                  <div className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 tracking-tighter">85%</div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">{t("dashboard.stats.time")}</h4>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{t("dashboard.stats.time_desc")}</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-5xl md:text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-tighter">x3</div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">{t("dashboard.stats.leads")}</h4>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{t("dashboard.stats.leads_desc")}</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 tracking-tighter">0.5s</div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">{t("dashboard.stats.response")}</h4>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{t("dashboard.stats.response_desc")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Integration & Modules */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-y border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                  <h2 className="font-serif-italic text-2xl text-slate-400 dark:text-zinc-500 mb-4">{t("dashboard.connect.badge")}</h2>
                  <h3 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">{t("dashboard.connect.title1")} <br /> <span className="text-slate-400 dark:text-zinc-500">{t("dashboard.connect.title2")}</span></h3>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed">
                    {t("dashboard.connect.desc")}
                  </p>

                  <div className="space-y-6">
                    <IntegrationItem
                      title={t("dashboard.connect.item1.title")}
                      desc={t("dashboard.connect.item1.desc")}
                    />
                    <IntegrationItem
                      title={t("dashboard.connect.item2.title")}
                      desc={t("dashboard.connect.item2.desc")}
                    />
                    <IntegrationItem
                      title={t("dashboard.connect.item3.title")}
                      desc={t("dashboard.connect.item3.desc")}
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6 mt-12">
                      <ModuleBox color="bg-blue-600" label={t("dashboard.connect.item1.title")} />
                      <ModuleBox color="bg-purple-600" label="Captador IA" />
                      <ModuleBox color="bg-zinc-900" label="CRM Sync" border />
                    </div>
                    <div className="space-y-6">
                      <ModuleBox color="bg-orange-600" label="Analytics" />
                      <ModuleBox color="bg-green-600" label="Team" />
                      <ModuleBox color="bg-white" label="Automation" light />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-slate-100 dark:border-zinc-800">
                    <span className="text-white dark:text-black font-bold text-xl uppercase tracking-tighter">Synora</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modular Ecosystem Section with Infinite Marquee */}
          <section className="py-16 md:py-32 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-20 px-6">
              <h2 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">{t("dashboard.ecosystem.title1")} <span className="text-slate-400 dark:text-zinc-500 italic font-serif">{t("dashboard.ecosystem.title2")}</span></h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                {t("dashboard.ecosystem.desc")}
              </p>
            </div>

            <div className="space-y-4">
              {/* Row 1: Moving Right */}
              <ModuleMarquee direction="right" modules={getModulesRow1(modules)} />

              {/* Row 2: Moving Left */}
              <ModuleMarquee direction="left" modules={getModulesRow2(modules)} />
            </div>

            <div className="max-w-7xl mx-auto text-center mt-20 px-6">
              <p className="text-sm font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-8">{t("dashboard.ecosystem.custom")}</p>
              <Link href="/contacto" className="inline-flex items-center text-black dark:text-white border-b-2 border-black/10 dark:border-white/10 pb-2 hover:border-black dark:hover:border-white transition-all text-lg font-bold">
                {t("dashboard.ecosystem.custom_cta")}
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Adaptability Section */}
          <section className="py-16 md:py-32 px-6 bg-black text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">{t("dashboard.custom.title1")} <span className="font-serif-italic text-white/40">{t("dashboard.custom.title2")}</span></h3>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                    {t("dashboard.custom.desc")}
                  </p>
                </div>
                <Link href="/contacto" className="px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
                  {t("dashboard.custom.cta")}
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-20 text-center md:text-left">
                <div>
                  <h4 className="text-3xl font-bold mb-2">100%</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">{t("dashboard.custom.feat1")}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">∞</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">{t("dashboard.custom.feat2")}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">Zero</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">{t("dashboard.custom.feat3")}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">Dual</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">{t("dashboard.custom.feat4")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Security & Infrastructure Section */}
          <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-y border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">{t("dashboard.security.title1")} <br /> <span className="text-slate-400 dark:text-zinc-500">{t("dashboard.security.title2")}</span></h2>
                  <div className="space-y-8">
                    <SecurityItem
                      title={t("dashboard.security.item1.title")}
                      desc={t("dashboard.security.item1.desc")}
                    />
                    <SecurityItem
                      title={t("dashboard.security.item2.title")}
                      desc={t("dashboard.security.item2.desc")}
                    />
                    <SecurityItem
                      title={t("dashboard.security.item3.title")}
                      desc={t("dashboard.security.item3.desc")}
                    />
                  </div>
                </div>
                <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-12 border border-slate-200 dark:border-white/5 shadow-xl flex flex-wrap justify-center items-center gap-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

                  <SecurityBadge title="ISO" subtitle="27001" />
                  <SecurityBadge title="GDPR" subtitle="Ready" />
                  <SecurityBadge title="SSL" subtitle="Secure" />
                  <SecurityBadge title="AES" subtitle="256-bit" />
                </div>
              </div>
            </div>
          </section>

          {/* Multi-device / Responsive Section */}
          <section className="py-16 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
                      {/* Browser Header dots */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-800/50 flex items-center px-6 gap-2 z-20 border-b border-white/5 backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                      </div>
                      <img
                        src="/images/dashboard/dashboard-stats.png"
                        alt="Synora Multi-device Mockup"
                        className="w-full h-auto mt-10 object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <span className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs mb-6 block">{t("dashboard.mobile.badge")}</span>
                  <h2 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">{t("dashboard.mobile.title1")} <br /> <span className="text-slate-400 dark:text-zinc-500">{t("dashboard.mobile.title2")}</span></h2>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {t("dashboard.mobile.desc")}
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                      </div>
                      <span className="text-lg font-medium text-black dark:text-white">{t("dashboard.mobile.feat1")}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                      </div>
                      <span className="text-lg font-medium text-black dark:text-white">{t("dashboard.mobile.feat2")}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                      </div>
                      <span className="text-lg font-medium text-black dark:text-white">{t("dashboard.mobile.feat3")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
