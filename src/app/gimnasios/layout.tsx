import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización para Gimnasios y Centros Fitness | Synora — Retención de Socios con IA",
  description:
    "Automatiza la gestión de socios, reduce las bajas con IA predictiva y convierte más leads en miembros activos. Synora para gimnasios y centros de fitness en España.",
  keywords: [
    "automatización gimnasios España",
    "software gestión gimnasio IA",
    "reducir bajas gimnasio automáticamente",
    "retención socios gimnasio IA",
    "gestión leads gimnasio automática",
    "recordatorios renovación membresía automáticos",
    "fidelización socios centro fitness",
  ],
  openGraph: {
    title: "Retén Más Socios y Automatiza tu Gimnasio | Synora",
    description:
      "Detecta qué socios van a darse de baja antes de que lo hagan. Synora usa IA predictiva para reducir el churn en gimnasios y centros fitness en España.",
    url: "https://synora.es/gimnasios",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/gimnasios",
  },
};

export default function GimansiosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
