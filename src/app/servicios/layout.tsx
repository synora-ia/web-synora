import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización para Empresas de Reformas y Servicios | Synora — Presupuestos Express",
  description:
    "Automatiza los presupuestos, la gestión de cuadrillas y el seguimiento de clientes en tu empresa de reformas o servicios. Cierra más obras sin depender de llamadas manuales.",
  keywords: [
    "automatización empresas reformas España",
    "ejemplos automatización empresa de reformas",
    "software empresa reformas IA",
    "automatizar presupuestos reformas",
    "gestión cuadrillas automática",
    "seguimiento clientes empresa servicios",
    "reducir tareas repetitivas empresa reformas",
  ],
  openGraph: {
    title: "Automatiza tu Empresa de Reformas o Servicios | Synora",
    description:
      "Presupuestos automáticos en minutos, gestión de cuadrillas sin llamadas y seguimiento de obras en tiempo real. El sector de reformas no tenía esto hasta ahora.",
    url: "https://synora.es/servicios",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/servicios",
  },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
