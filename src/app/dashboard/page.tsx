"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingBlobs from "@/components/ui/FloatingBlobs";
import { useState, useEffect } from "react";

// --- Constants ---
const modulesRow1 = [
  { title: "Dashboard Core", icon: "📊", desc: "Acceso a tu panel de control, agenda y tareas.", price: "39€", active: true },
  { title: "Gestión Leads", icon: "👤", desc: "Sistema centralizado de clientes y documentos.", price: "39€", active: true },
  { title: "Contestador IceBraker", icon: "🧊", desc: "Respuesta automática inicial a nuevos leads.", price: "29€", active: false },
  { title: "Recordatorios IA", icon: "⏰", desc: "Avisos automáticos de citas y seguimientos.", price: "29€", active: true },
  { title: "Chatbot WhatsApp", icon: "💬", desc: "Atención 24/7 en el canal nº1.", price: "49€", active: true },
  { title: "Chatbot Web", icon: "🤖", desc: "Asistente inteligente para tu página web.", price: "49€", active: false },
  { title: "WebConnect", icon: "🌐", desc: "Conexión automática entre web y dashboard.", price: "39€", active: true },
  { title: "Seguimiento IA", icon: "🔍", desc: "Calificación y seguimiento de leads.", price: "39€", active: true },
  { title: "Analíticas IA", icon: "📈", desc: "Visualización de datos en tiempo real.", price: "29€", active: false },
  { title: "Gestión Interna", icon: "🏢", desc: "Tu asistente IA para consultas privadas.", price: "39€", active: false },
];

const modulesRow2 = [
  { title: "Transcripciones", icon: "✍️", desc: "Resúmenes de reuniones automáticos.", price: "39€", active: false },
  { title: "Funnel de Ventas", icon: "🌪️", desc: "Flujo automatizado de captación y cierre.", price: "59€", active: true },
  { title: "Prevención Churn", icon: "🛡️", desc: "IA predictiva para detectar y evitar bajas.", price: "59€", active: false },
  { title: "Captador Automático", icon: "🤖", desc: "Scraping de portales y alerta de particulares.", price: "69€", active: true },
  { title: "Property Intel", icon: "🏠", desc: "Análisis de mercado automático por zonas.", price: "59€", active: false },
  { title: "Informes Tasación", icon: "📋", desc: "Generación de valoraciones IA en PDF.", price: "49€", active: false },
  { title: "Captador Manual", icon: "📝", desc: "Gestión manual de propietarios en dashboard.", price: "29€", active: true },
  { title: "Publicador Web", icon: "📤", desc: "Envío automático de inmuebles a tu web.", price: "39€", active: false },
  { title: "Sugerencias IA", icon: "💡", desc: "Cruce inteligente de clientes y propiedades.", price: "39€", active: true },
];

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
  return (
    <div className="w-[280px] shrink-0 h-[160px]">
      <div className={`bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-100 dark:border-white/5 hover:shadow-lg dark:hover:shadow-white/5 transition-all text-center relative overflow-hidden h-full flex flex-col justify-center`}>
        <h5 className="font-bold text-black dark:text-white mb-2">{title}</h5>
        <div className="text-xl font-bold text-black dark:text-white mb-2">
          {active ? (
            <span className="text-green-500 text-sm uppercase tracking-widest font-bold">Activo</span>
          ) : (
            <>+{price}<span className="text-xs text-slate-400 dark:text-zinc-500 ml-1 font-normal">/mes</span></>
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
  const [events, setEvents] = useState([
    { id: 1, type: "Lead", msg: "Nuevo lead captado vía WhatsApp", time: "ahora", color: "text-green-400" },
    { id: 2, type: "Sync", msg: "Base de datos sincronizada con CRM", time: "hace 2m", color: "text-blue-400" },
    { id: 3, type: "AI", msg: "Análisis de sentimiento completado", time: "hace 5m", color: "text-purple-400" },
    { id: 4, type: "Sale", msg: "Conversión detectada: Pack Premium", time: "hace 12m", color: "text-orange-400" },
    { id: 5, type: "Alert", msg: "Cita programada automáticamente", time: "hace 15m", color: "text-yellow-400" },
    { id: 6, type: "System", msg: "Optimización de flujo n8n", time: "hace 20m", color: "text-zinc-400" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prev => {
        const newEvent = {
          id: Date.now(),
          type: ["Lead", "AI", "Sync", "Sale", "System"][Math.floor(Math.random() * 5)],
          msg: [
            "Lead calificado por Captador IA",
            "Actualización de stock completada",
            "Email de seguimiento enviado",
            "Nuevo usuario registrado",
            "Backup diario finalizado"
          ][Math.floor(Math.random() * 5)],
          time: "ahora",
          color: ["text-blue-400", "text-purple-400", "text-green-400", "text-orange-400", "text-zinc-400"][Math.floor(Math.random() * 5)]
        };
        return [newEvent, ...prev.slice(0, 7)];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-24 px-6 overflow-hidden">
        <FloatingBlobs
          blobs={[
            { color: "bg-blue-600/20", className: "-top-[10%] -left-[10%] w-[60%] h-[60%]", animation: "animate-drift" },
            { color: "bg-purple-600/20", className: "-bottom-[10%] -right-[10%] w-[60%] h-[60%]", animation: "animate-drift-slow", delay: "2s" },
          ]}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest mb-6"
            >
              Centro de Operaciones
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight"
            >
              El cerebro de <br /> <span className="text-slate-400 dark:text-zinc-500">tu negocio.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed mb-10"
            >
              Centraliza, monitoriza y escala. El Dashboard de Synora no es solo un panel de control, es el núcleo donde la inteligencia artificial y tus procesos se encuentran.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto max-w-5xl group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src="/home/josep/.gemini/antigravity/brain/c18842ce-8401-4bb3-8eed-bb71b6c66ab5/synora_dashboard_mockup_1778248407901.png"
                alt="Synora Dashboard Mockup"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Functionalities */}
      <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 gap-6 md:gap-12 -mx-6 px-6 md:mx-0 md:px-0 py-4">
            <FeatureCard
              title="Control Total 24/7"
              desc="Acceso instantáneo a todos tus procesos automatizados. Revisa el estado de tus leads, citas y operaciones en tiempo real desde cualquier dispositivo."
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.48A12.042 12.042 0 013 12c0-5.523 4.477-10 10-10a10 10 0 0110 10c0 5.523-4.477 10-10 10z"></path></svg>}
            />
            <FeatureCard
              title="Analítica Inteligente"
              desc="No solo mostramos datos, te decimos qué significan. Identifica cuellos de botella y oportunidades de crecimiento con informes generados por IA."
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>}
            />
            <FeatureCard
              title="Gestión de Equipo"
              desc="Asigna roles, monitoriza el rendimiento de tus colaboradores y centraliza la comunicación interna sin salir de la plataforma."
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
              <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 block">Monitorización Viva</span>
              <h2 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">Inteligencia en <br /> <span className="text-slate-400 dark:text-zinc-500">tiempo real.</span></h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Observa cómo Synora procesa cada evento de tu negocio. Desde la entrada de un lead hasta la confirmación de una venta, todo ocurre bajo tu supervisión pero sin tu intervención.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full text-sm font-medium text-slate-600 dark:text-zinc-400 border border-slate-100 dark:border-white/10">Latencia: 24ms</div>
                <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full text-sm font-medium text-slate-600 dark:text-zinc-400 border border-slate-100 dark:border-white/10">Uptime: 99.99%</div>
                <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full text-sm font-medium text-slate-600 dark:text-zinc-400 border border-slate-100 dark:border-white/10">Eventos/día: +10k</div>
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
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Ahorro de Tiempo</h4>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">Automatizamos las tareas repetitivas para que tu equipo se enfoque en cerrar acuerdos reales.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-tighter">x3</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Más Leads</h4>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">Nuestra IA no descansa. Capta, filtra y califica prospectos las 24 horas del día, los 7 días de la semana.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 tracking-tighter">0.5s</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Respuesta Media</h4>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">La velocidad de respuesta es clave. Synora atiende a tus clientes al instante, garantizando la máxima conversión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Modules */}
      <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-y border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="font-serif-italic text-2xl text-slate-400 dark:text-zinc-500 mb-4">Conectividad sin límites</h2>
              <h3 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">El núcleo que une <br /> <span className="text-slate-400 dark:text-zinc-500">todo tu ecosistema.</span></h3>
              <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed">
                El dashboard no es un silo. Se integra con cada módulo y pack de Synora, además de tus herramientas actuales, para crear un flujo de trabajo fluido y sin fricciones.
              </p>

              <div className="space-y-6">
                <IntegrationItem
                  title="WebConnect"
                  desc="Sincronización bidireccional automática entre tu página web y el dashboard. Cada lead o cambio se refleja al instante."
                />
                <IntegrationItem
                  title="Módulos Sectoriales"
                  desc="Ya sea para inmobiliarias, clínicas o gimnasios, el dashboard adapta sus herramientas a las necesidades de tu industria."
                />
                <IntegrationItem
                  title="API & Webhooks"
                  desc="Conecta cualquier sistema externo. Si tiene una API, Synora puede hablar con ella y centralizar su gestión."
                />
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 mt-12">
                  <ModuleBox color="bg-blue-600" label="WebConnect" />
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
          <h2 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">Ecosistema <span className="text-slate-400 dark:text-zinc-500 italic font-serif">Ilimitado.</span></h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Activa solo lo que necesitas. Nuestro dashboard es un sistema vivo que escala con bloques funcionales listos para ser desplegados.
          </p>
        </div>

        <div className="space-y-4">
          {/* Row 1: Moving Right */}
          <ModuleMarquee direction="right" modules={modulesRow1} />

          {/* Row 2: Moving Left */}
          <ModuleMarquee direction="left" modules={modulesRow2} />
        </div>

        <div className="max-w-7xl mx-auto text-center mt-20 px-6">
          <p className="text-sm font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-8">¿Necesitas algo a medida?</p>
          <Link href="/contacto" className="inline-flex items-center text-black dark:text-white border-b-2 border-black/10 dark:border-white/10 pb-2 hover:border-black dark:hover:border-white transition-all text-lg font-bold">
            Desarrollar módulo personalizado
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
              <h3 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">Hecho <span className="font-serif-italic text-white/40">100% para ti.</span></h3>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                No creemos en soluciones genéricas. Cada dashboard se configura y personaliza según los flujos de trabajo específicos de tu empresa para garantizar el máximo rendimiento.
              </p>
            </div>
            <Link href="/contacto" className="px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
              Solicitar personalización
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-20 text-center md:text-left">
            <div>
              <h4 className="text-3xl font-bold mb-2">100%</h4>
              <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">Adaptable</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">Infinitas</h4>
              <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">Integraciones</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">Zero</h4>
              <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">Configuración técnica</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">Dual</h4>
              <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">Dark / Light Mode</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Infrastructure Section */}
      <section className="py-16 md:py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-y border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">Seguridad de <br /> <span className="text-slate-400 dark:text-zinc-500">grado empresarial.</span></h2>
              <div className="space-y-8">
                <SecurityItem
                  title="Encriptación AES-256"
                  desc="Tus datos están protegidos con el estándar de cifrado más robusto de la industria, tanto en reposo como en tránsito."
                />
                <SecurityItem
                  title="Conformidad RGPD"
                  desc="Cumplimos estrictamente con la normativa europea de protección de datos para tu tranquilidad y la de tus clientes."
                />
                <SecurityItem
                  title="Backups en Tiempo Real"
                  desc="Réplicas automáticas en múltiples regiones para garantizar que tu negocio nunca se detenga."
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
                <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-black">
                  <img
                    src="/home/josep/.gemini/antigravity/brain/a0957a5f-bb07-4488-ac23-70b372088658/synora_multi_device_mockup_1778257231505.png"
                    alt="Synora Multi-device Mockup"
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs mb-6 block">Movilidad Total</span>
              <h2 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight leading-tight">Tu negocio, <br /> <span className="text-slate-400 dark:text-zinc-500">en tu bolsillo.</span></h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                El Dashboard de Synora ha sido diseñado con un enfoque "responsive-first". Accede a toda la potencia de tu centro de operaciones desde tu smartphone, tablet o escritorio sin perder ni una sola funcionalidad.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="text-lg font-medium text-black dark:text-white">Interfaz móvil optimizada</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="text-lg font-medium text-black dark:text-white">Modo offline inteligente</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                  </div>
                  <span className="text-lg font-medium text-black dark:text-white">Notificaciones push en tiempo real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
