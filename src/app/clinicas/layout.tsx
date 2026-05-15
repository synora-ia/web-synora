import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización para Clínicas Médicas y Dentales | Synora — Reduce No-Shows con IA",
  description:
    "Software de automatización para clínicas: reduce no-shows hasta un 80%, agenda inteligente, recordatorios automáticos por WhatsApp y seguimiento de pacientes sin esfuerzo.",
  keywords: [
    "software para reducir no-shows clínica dental",
    "automatización clínica médica privada",
    "recordatorios automáticos citas clínica",
    "automatización para clínica de fisioterapia",
    "cuánto cuesta automatizar una clínica médica privada",
    "gestión pacientes automática",
    "agenda inteligente clínica España",
  ],
  openGraph: {
    title: "Reduce No-Shows y Automatiza tu Clínica | Synora",
    description:
      "Las clínicas pierden entre 800€ y 3.000€/mes por citas no atendidas. Synora implementa recordatorios automáticos, agenda inteligente y seguimiento de pacientes en 48h.",
    url: "https://synora.es/clinicas",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/clinicas",
  },
};

export default function ClinicasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
