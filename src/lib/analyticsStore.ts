export const ANALYTICS_KEY = "synora-global-analytics";

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

export function trackEvent(category: string, action: string, label: string): void {
  if (typeof window === "undefined") return;
  const data = getGlobalAnalytics();
  
  if (!data[category]) data[category] = {};
  if (!data[category][action]) data[category][action] = {};
  
  data[category][action][label] = (data[category][action][label] || 0) + 1;
  
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
}

// Helpers para obtener datos rápidos
export function getPageViews(): Record<string, number> {
  const data = getGlobalAnalytics();
  return data["pageview"]?.["view"] || {};
}

export function getButtonClicks(): Record<string, number> {
  const data = getGlobalAnalytics();
  return data["click"]?.["button"] || {};
}
