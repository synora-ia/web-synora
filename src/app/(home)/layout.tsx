import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synora — Automatización Operativa para Negocios en España",
  description:
    "Synora conecta tus herramientas y automatiza los procesos de tu negocio para que funcione solo. Especialistas en inmobiliarias, clínicas, restaurantes y empresas de servicios.",
  keywords: [
    "automatización operativa para pymes",
    "qué es la automatización operativa para pymes",
    "automatización negocios España",
    "cómo un negocio pequeño puede usar inteligencia artificial",
    "software automatización pyme sin programar",
    "inteligencia operativa negocios",
    "integrar herramientas negocio",
    "dashboard métricas pequeño negocio sin excel",
    "automatización inmobiliaria clínicas restaurantes",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://synora.es",
    siteName: "Synora",
    title: "Synora — Tu Negocio No Necesita Trabajar Más, Necesita Trabajar Solo",
    description:
      "Automatización operativa para pymes en España. Conecta tus herramientas actuales, elimina las tareas repetitivas y recupera más de 10 horas a la semana.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synora — Automatización Operativa para Negocios en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synora — Automatización Operativa para Negocios en España",
    description:
      "Conecta tus herramientas, elimina las tareas repetitivas y haz que tu negocio funcione solo. Para inmobiliarias, clínicas, restaurantes y empresas de servicios.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://synora.es",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
