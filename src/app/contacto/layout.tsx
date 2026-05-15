import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Habla con un Experto en Automatización de Negocios",
  description:
    "¿Quieres automatizar tu inmobiliaria, clínica, restaurante o empresa de servicios? Habla con el equipo de Synora y recibe una auditoría gratuita de tu operativa en 24h.",
  openGraph: {
    title: "Contacta con Synora — Auditoría Gratuita de tu Negocio",
    description:
      "Cuéntanos cómo funciona tu negocio y te mostramos exactamente qué procesos puedes automatizar y cuánto tiempo recuperarías cada semana.",
    url: "https://synora.es/contacto",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/contacto",
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
