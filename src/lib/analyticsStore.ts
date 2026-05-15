export const ANALYTICS_KEY = "synora-global-analytics";
const SB_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/web_analytics`;
const SB_HEADERS = {
  "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  "Content-Type": "application/json",
  "Prefer": "return=minimal"
};

export interface AnalyticsData {
  [category: string]: {
    [action: string]: {
      [label: string]: number;
    }
  }
}

export function getGlobalAnalytics(): AnalyticsData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Envía el evento a Supabase (o n8n).
 */
async function syncEventToRemote(category: string, action: string, label: string) {
  if (typeof window === "undefined") return;

  try {
    // Intentar obtener la IP (silenciosamente)
    let ip = "unknown";
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      ip = ipData.ip;
    } catch (e) { /* ignore */ }

    const payload = {
      category,
      action,
      label,
      path: window.location.pathname,
      user_agent: navigator.userAgent,
      ip: ip, // Nuevo campo para la IP
      session_id: localStorage.getItem('synora-session-id') || (()=>{
        const id = 'sess_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('synora-session-id', id);
        return id;
      })()
    };

    // Enviamos directamente a Supabase
    fetch(SB_URL, {
      method: "POST",
      headers: SB_HEADERS,
      body: JSON.stringify(payload),
    }).catch(err => console.error("Analytics sync error:", err));
  } catch (e) {
    // Silencioso
  }
}

export function trackEvent(category: string, action: string, label: string): void {
  if (typeof window === "undefined") return;
  
  // 1. Guardar localmente (fallback)
  const data = getGlobalAnalytics();
  if (!data[category]) data[category] = {};
  if (!data[category][action]) data[category][action] = {};
  data[category][action][label] = (data[category][action][label] || 0) + 1;
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));

  // 2. Sincronizar con Supabase (vía n8n)
  syncEventToRemote(category, action, label);
}

// Helpers para obtener datos rápidos (actualmente locales)
export function getPageViews(): Record<string, number> {
  const data = getGlobalAnalytics();
  return data["pageview"]?.["view"] || {};
}

export function getButtonClicks(): Record<string, number> {
  const data = getGlobalAnalytics();
  return data["click"]?.["button"] || {};
}
