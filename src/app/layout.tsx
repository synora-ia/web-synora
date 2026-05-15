import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: {
    default: "Synora | Automatización Operativa para Negocios en España",
    template: "%s | Synora",
  },
  description:
    "Synora es la plataforma de automatización operativa para pymes en España. Conecta tus herramientas, elimina tareas repetitivas y haz que tu negocio funcione solo — sin programar.",
  keywords: [
    "automatización operativa para pymes",
    "qué es la automatización operativa para pymes",
    "automatización negocios España",
    "cómo un negocio pequeño puede usar inteligencia artificial",
    "software automatización pyme",
    "inteligencia operativa negocios",
    "integrar herramientas negocio sin programar",
    "dashboard métricas pequeño negocio",
  ],
  authors: [{ name: "Synora", url: "https://synora.es" }],
  creator: "Synora",
  metadataBase: new URL("https://synora.es"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://synora.es",
    siteName: "Synora",
    title: "Synora — Tu Negocio No Necesita Trabajar Más, Necesita Trabajar Solo",
    description:
      "Automatización operativa para pymes en España. Inmobiliarias, clínicas, restaurantes y empresas de servicios que quieren crecer sin contratar más gente.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synora — Automatización Operativa para Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synora — Automatización Operativa para Negocios en España",
    description:
      "Conecta tus herramientas, elimina las tareas repetitivas y haz que tu negocio funcione solo. Synora para inmobiliarias, clínicas, restaurantes y servicios.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://synora.es",
  },
};

import { Providers } from "@/components/layout/Providers";
import CookieConsent from "@/components/layout/CookieConsent";
import { GlobalPageViewTracker } from "@/components/analytics/Trackers";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Synora",
  url: "https://synora.es",
  logo: "https://synora.es/logo.png",
  description:
    "Plataforma de automatización operativa para pymes en España. Especialistas en inmobiliarias, clínicas, restaurantes y empresas de servicios.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Spanish",
    url: "https://synora.es/contacto",
  },
  areaServed: {
    "@type": "Country",
    name: "España",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Synora",
  url: "https://synora.es",
  description: "Automatización operativa para negocios en España",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://synora.es/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black bg-white dark:bg-black text-black dark:text-white transition-colors duration-300" suppressHydrationWarning>
        <Providers>
          <GlobalPageViewTracker />
          {children}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
