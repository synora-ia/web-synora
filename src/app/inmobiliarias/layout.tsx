import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización para Inmobiliarias | Synora — Gestión de Leads y Captación con IA",
  description:
    "Automatiza el seguimiento de clientes en tu inmobiliaria, capta propietarios antes que la competencia y cierra más operaciones con IA. Sin cambiar tu CRM actual.",
  keywords: [
    "automatización inmobiliaria",
    "software inmobiliaria España",
    "cómo automatizar seguimiento clientes inmobiliaria",
    "gestión leads inmobiliarios",
    "CRM inmobiliario con IA",
    "captación automática propietarios",
    "reducir tareas repetitivas agencia inmobiliaria",
  ],
  openGraph: {
    title: "Automatización Inteligente para Inmobiliarias | Synora",
    description:
      "Capta propietarios antes que nadie, automatiza el seguimiento de leads y cierra operaciones con datos reales. Tu agencia inmobiliaria funcionando en piloto automático.",
    url: "https://synora.es/inmobiliarias",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/inmobiliarias",
  },
};

export default function InmobiliariasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
