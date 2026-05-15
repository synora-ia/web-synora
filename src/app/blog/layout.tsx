import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog — Guías de Automatización para Negocios en España",
  description:
    "Guías prácticas, casos reales y estrategias de automatización operativa para inmobiliarias, clínicas, restaurantes y empresas de servicios en España.",
  openGraph: {
    title: "Blog de Synora — Automatización Operativa para Negocios",
    description:
      "Todo lo que necesitas saber para que tu negocio funcione solo: guías paso a paso, casos de estudio y comparativas de herramientas.",
    url: "https://synora.es/blog",
    siteName: "Synora",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://synora.es/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
