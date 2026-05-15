import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización para Restaurantes y Hostelería | Synora — Cero No-Shows con IA",
  description:
    "Automatiza las reservas de tu restaurante, elimina los no-shows y fideliza clientes con IA. Sistema de confirmaciones automáticas por WhatsApp y lista de espera inteligente.",
  keywords: [
    "automatización restaurante España",
    "herramientas para automatizar reservas restaurante con IA",
    "reducir no-shows restaurante",
    "cómo fidelizar clientes de restaurante de forma automática",
    "software gestión restaurante IA",
    "lista de espera automática restaurante",
    "confirmación reservas WhatsApp automática",
  ],
  openGraph: {
    title: "Elimina los No-Shows y Automatiza tu Restaurante | Synora",
    description:
      "Confirmaciones automáticas, lista de espera IA y fidelización proactiva para tu restaurante. No cambias de plataforma de reservas, añades inteligencia encima.",
    url: "https://synora.es/restaurantes",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/restaurantes",
  },
};

export default function RestaurantesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
