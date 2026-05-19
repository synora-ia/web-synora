"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnalyticsLog {
  id: string;
  created_at: string;
  category: string;
  action: string;
  label: string;
  path: string;
  user_agent: string;
  session_id: string;
  ip?: string;
}

interface ClickEvent {
  label: string;
  time: string;
}

interface JourneyStop {
  page: string;
  path: string;
  time: string;
  clicks: ClickEvent[];
}

interface JourneySession {
  sessionId: string;
  ip: string;
  stops: JourneyStop[];
  startTime: string;
  lastSeen: string;
  totalClicks: number;
}

interface IpGroup {
  ip: string;
  sessions: JourneySession[];
  lastSeen: string;
  totalClicks: number;
}

// ─── Colores ─────────────────────────────────────────────────────────────────

const PAGE_COLORS: Record<string, string> = {
  home: "#3b82f6",
  clinicas: "#8b5cf6",
  inmobiliarias: "#f59e0b",
  restaurantes: "#ef4444",
  gimnasios: "#10b981",
  servicios: "#06b6d4",
  planes: "#f97316",
  blog: "#84cc16",
  contacto: "#ec4899",
};
const FALLBACK_COLORS = [
  "#3b82f6","#8b5cf6","#f59e0b","#ef4444",
  "#10b981","#06b6d4","#f97316","#ec4899","#a78bfa",
];

function getPageColor(page: string): string {
  const lower = page.toLowerCase();
  for (const [key, color] of Object.entries(PAGE_COLORS)) {
    if (lower.includes(key)) return color;
  }
  const hash = [...page].reduce((a, c) => (a * 31 + c.charCodeAt(0)) & 0xfffffff, 0);
  return FALLBACK_COLORS[hash % FALLBACK_COLORS.length];
}

// ─── Utils ────────────────────────────────────────────────────────────────────

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  if (diff < 60000) return "Ahora";
  if (diff < 3600000) return `${Math.floor(diff / 60000)}min`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h`;
  return `${Math.floor(diff / 86400000)}d`;
}

function timeDiff(a: string, b: string): string {
  const diff = new Date(b).getTime() - new Date(a).getTime();
  if (diff <= 0) return "";
  if (diff < 1000) return `${diff}ms`;
  if (diff < 60000) return `${Math.round(diff / 1000)}s`;
  return `${Math.round(diff / 60000)}min`;
}

// ─── Builders ─────────────────────────────────────────────────────────────────

function buildSessions(logs: AnalyticsLog[]): JourneySession[] {
  const map: Record<string, AnalyticsLog[]> = {};
  for (const log of logs) {
    if (!map[log.session_id]) map[log.session_id] = [];
    map[log.session_id].push(log);
  }
  return Object.entries(map)
    .map(([sessionId, events]) => {
      const sorted = [...events].sort(
        (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
      const stops: JourneyStop[] = [];
      for (const ev of sorted) {
        if (ev.category === "pageview") {
          stops.push({ page: ev.label, path: ev.path, time: ev.created_at, clicks: [] });
        } else if (ev.category === "click" && stops.length > 0) {
          stops[stops.length - 1].clicks.push({ label: ev.label, time: ev.created_at });
        }
      }
      return {
        sessionId,
        ip: sorted[0]?.ip || "unknown",
        stops,
        startTime: sorted[0]?.created_at || "",
        lastSeen: sorted[sorted.length - 1]?.created_at || "",
        totalClicks: stops.reduce((acc, s) => acc + s.clicks.length, 0),
      };
    })
    .filter((s) => s.stops.length > 0)
    .sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime());
}

function buildIpGroups(sessions: JourneySession[]): IpGroup[] {
  const map: Record<string, JourneySession[]> = {};
  for (const s of sessions) {
    if (!map[s.ip]) map[s.ip] = [];
    map[s.ip].push(s);
  }
  return Object.entries(map)
    .map(([ip, list]) => ({
      ip,
      sessions: [...list].sort(
        (a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime()
      ),
      lastSeen: list.reduce((max, s) => (s.lastSeen > max ? s.lastSeen : max), ""),
      totalClicks: list.reduce((acc, s) => acc + s.totalClicks, 0),
    }))
    .sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime());
}

// ─── JourneyFlow ──────────────────────────────────────────────────────────────

function JourneyFlow({ session }: { session: JourneySession }) {
  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="font-mono text-base font-bold text-black dark:text-white">{session.ip}</p>
          <p className="text-[10px] font-mono text-slate-400 mt-0.5">
            ID: <span className="text-zinc-500">{session.sessionId.slice(0, 24)}…</span>
          </p>
          <p className="text-[10px] font-mono text-slate-500 mt-0.5">
            Inicio: {new Date(session.startTime).toLocaleString()} · {timeAgo(session.lastSeen)}
          </p>
        </div>
        <div className="flex gap-6 text-right">
          <div>
            <div className="font-mono text-2xl font-bold text-violet-500">{session.stops.length}</div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">PÁGINAS</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-bold text-amber-500">{session.totalClicks}</div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">CLICKS</div>
          </div>
        </div>
      </div>

      <div className="flex items-start min-w-max">
        {session.stops.map((stop, i) => {
          const color = getPageColor(stop.page);
          const isLast = i === session.stops.length - 1;
          const dt = !isLast ? timeDiff(stop.time, session.stops[i + 1].time) : null;
          return (
            <div key={i} className="flex items-start">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center"
              >
                <span className="text-[9px] font-mono font-bold mb-2" style={{ color }}>
                  PASO {i + 1}
                </span>
                <div
                  className="w-44 rounded-2xl border p-4 relative"
                  style={{ borderColor: color + "40", background: color + "0a" }}
                >
                  <div className="font-mono text-[13px] font-bold mb-2 flex items-center gap-2" style={{ color }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                    <span className="truncate">{stop.page}</span>
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 mb-3 truncate">{stop.path}</div>
                  <div className="w-full border-t mb-3" style={{ borderColor: color + "25" }} />
                  <div className="space-y-1.5">
                    {stop.clicks.length === 0 ? (
                      <p className="text-[10px] font-mono text-zinc-600 italic">Sin interacciones</p>
                    ) : (
                      <>
                        {stop.clicks.slice(0, 4).map((c, ci) => (
                          <div key={ci} className="flex items-start gap-1">
                            <span className="text-[10px] leading-none mt-0.5 flex-shrink-0" style={{ color }}>↳</span>
                            <span className="text-[10px] font-mono text-slate-400 leading-snug line-clamp-1">{c.label}</span>
                          </div>
                        ))}
                        {stop.clicks.length > 4 && (
                          <p className="text-[9px] font-mono text-zinc-600">+{stop.clicks.length - 4} más</p>
                        )}
                      </>
                    )}
                  </div>
                  {stop.clicks.length > 0 && (
                    <div
                      className="absolute -top-2.5 -right-2.5 text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center text-black"
                      style={{ background: color }}
                    >
                      {stop.clicks.length}
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-mono text-zinc-700 mt-2">
                  {new Date(stop.time).toLocaleTimeString()}
                </span>
              </motion.div>

              {!isLast && (
                <div className="flex flex-col items-center pt-9 px-2 gap-1">
                  <div className="flex items-center">
                    <div className="h-px w-8 bg-zinc-700" />
                    <svg width="6" height="8" viewBox="0 0 6 8">
                      <polygon points="0,0 6,4 0,8" fill="#52525b" />
                    </svg>
                  </div>
                  {dt && <span className="text-[8px] font-mono text-zinc-600">{dt}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── NavigationMap ────────────────────────────────────────────────────────────

export function NavigationMap({ logs }: { logs: AnalyticsLog[] }) {
  const sessions = buildSessions(logs);
  const ipGroups = buildIpGroups(sessions);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedIps, setExpandedIps] = useState<Set<string>>(new Set());

  // Expande el primer grupo al cargar
  useEffect(() => {
    if (ipGroups[0]?.ip) setExpandedIps(new Set([ipGroups[0].ip]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logs.length]);

  if (sessions.length === 0) return null;

  const activeId = selectedId ?? sessions[0]?.sessionId;
  const active = sessions.find((s) => s.sessionId === activeId);

  function selectSession(sessionId: string, ip: string) {
    setSelectedId(sessionId);
    setExpandedIps((prev) => new Set([...prev, ip]));
  }

  function toggleIp(ip: string) {
    setExpandedIps((prev) => {
      const next = new Set(prev);
      if (next.has(ip)) next.delete(ip);
      else next.add(ip);
      return next;
    });
  }

  const uniqueIps = ipGroups.length;
  const totalSessions = sessions.length;

  return (
    <section className="bg-white dark:bg-zinc-900/30 border border-slate-100 dark:border-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
      {/* Cabecera */}
      <div className="p-5 sm:p-10 border-b border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white flex items-center gap-3">
            <span className="h-1 w-6 bg-violet-500 rounded-full" />
            Mapa de Navegación por IP
          </h3>
          <p className="text-slate-400 text-xs font-mono mt-2">
            {uniqueIps} IP{uniqueIps !== 1 ? "s" : ""} únicas · {totalSessions} sesión{totalSessions !== 1 ? "es" : ""}
          </p>
        </div>
        <span className="text-[10px] font-mono text-violet-400 border border-violet-500/20 bg-violet-500/5 px-3 py-1 rounded-full">
          ● JOURNEY_MAP
        </span>
      </div>

      {/* ── Selector móvil ── */}
      <div className="lg:hidden border-b border-slate-100 dark:border-white/5">
        {ipGroups.map((group) => {
          const isRecent = Date.now() - new Date(group.lastSeen).getTime() < 300000;
          const isGroupActive = group.sessions.some((s) => s.sessionId === activeId);
          const isExpanded = expandedIps.has(group.ip);

          return (
            <div key={group.ip} className="border-b border-slate-50 dark:border-white/5 last:border-0">
              {/* IP header */}
              <button
                onClick={() =>
                  group.sessions.length === 1
                    ? selectSession(group.sessions[0].sessionId, group.ip)
                    : toggleIp(group.ip)
                }
                className={`w-full flex items-center justify-between px-4 py-3 transition-all border-l-2 ${
                  isGroupActive
                    ? "bg-violet-500/5 border-l-violet-500"
                    : "border-l-transparent hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isRecent ? "bg-emerald-400" : "bg-zinc-600"}`} />
                  <span className="font-mono text-xs font-bold text-black dark:text-white">{group.ip}</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    · {group.sessions.length} ses.
                  </span>
                </div>
                {group.sessions.length > 1 && (
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Sub-sesiones */}
              {isExpanded && group.sessions.length > 1 && (
                <div className="flex gap-2 overflow-x-auto px-4 pb-3">
                  {group.sessions.map((s, idx) => {
                    const isActive = s.sessionId === activeId;
                    return (
                      <button
                        key={s.sessionId}
                        onClick={() => selectSession(s.sessionId, group.ip)}
                        className={`flex-shrink-0 text-left px-3 py-2 rounded-xl border transition-all ${
                          isActive
                            ? "bg-violet-500/10 border-violet-500/40"
                            : "bg-slate-50 dark:bg-zinc-800/50 border-slate-100 dark:border-white/10"
                        }`}
                      >
                        <div className="text-[10px] font-mono font-bold text-black dark:text-white">
                          Sesión #{idx + 1}
                        </div>
                        <div className="text-[9px] font-mono text-slate-400">
                          {s.stops.length}p · {s.totalClicks}c · {timeAgo(s.lastSeen)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row lg:h-[580px]">
        {/* ── Sidebar desktop ── */}
        <div className="hidden lg:block w-72 flex-shrink-0 border-r border-slate-100 dark:border-white/5 overflow-y-auto">
          {ipGroups.map((group) => {
            const isExpanded = expandedIps.has(group.ip);
            const isGroupActive = group.sessions.some((s) => s.sessionId === activeId);
            const isRecent = Date.now() - new Date(group.lastSeen).getTime() < 300000;

            return (
              <div key={group.ip}>
                {/* IP header */}
                <button
                  onClick={() =>
                    group.sessions.length === 1
                      ? selectSession(group.sessions[0].sessionId, group.ip)
                      : toggleIp(group.ip)
                  }
                  className={`w-full flex items-center justify-between px-5 py-3.5 border-b border-slate-50 dark:border-white/5 transition-all border-l-2 ${
                    isGroupActive
                      ? "bg-violet-500/5 border-l-violet-500"
                      : "border-l-transparent hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isRecent ? "bg-emerald-400" : "bg-zinc-600"}`} />
                    <span className="font-mono text-xs font-bold text-black dark:text-white truncate">
                      {group.ip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <span className="text-[10px] font-mono text-slate-400">
                      {group.sessions.length} ses.
                    </span>
                    {group.sessions.length > 1 && (
                      <svg
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Lista de sesiones — solo si tiene más de 1 */}
                {group.sessions.length > 1 && isExpanded && (
                  <div>
                    {group.sessions.map((s, idx) => {
                      const isActive = s.sessionId === activeId;
                      return (
                        <button
                          key={s.sessionId}
                          onClick={() => selectSession(s.sessionId, group.ip)}
                          className={`w-full text-left pl-8 pr-4 py-3 border-b border-slate-50 dark:border-white/5 transition-all border-l-2 ${
                            isActive
                              ? "bg-violet-500/5 border-l-violet-500"
                              : "border-l-transparent hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[11px] font-mono font-bold text-black dark:text-white">
                              Sesión #{idx + 1}
                            </span>
                            <span className="text-[9px] font-mono text-slate-500">{timeAgo(s.lastSeen)}</span>
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            {s.stops.length} página{s.stops.length !== 1 ? "s" : ""} · {s.totalClicks} clicks
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Panel derecho: flujo */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 min-h-[320px]">
          {active ? (
            <JourneyFlow session={active} />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-slate-500 font-mono text-sm">← Selecciona una sesión</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
