import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes y Precios — Automatización para Negocios desde 99€/mes",
  description:
    "Descubre cuánto cuesta automatizar tu negocio con Synora. Planes desde 99€/mes para inmobiliarias, clínicas, restaurantes y empresas de servicios. Sin permanencia.",
  keywords: [
    "cuánto cuesta automatizar negocio España",
    "precio software automatización pyme",
    "planes automatización inmobiliaria",
    "coste automatización clínica",
    "software automatización 99 euros mes",
  ],
  openGraph: {
    title: "Precios Transparentes para Automatizar tu Negocio | Synora",
    description:
      "Planes desde 99€/mes con setup incluido. Sin letra pequeña, sin permanencia. Elige el plan que encaja con tu negocio y empieza en 48h.",
    url: "https://synora.es/planes",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/planes",
  },
};

export default function PlanesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
