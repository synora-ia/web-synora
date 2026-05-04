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
  title: "Synora | Automatización Inteligente para Empresas",
  description: "Synora ayuda a las empresas a crecer automatizando tareas repetitivas. Tu negocio no necesita trabajar más, necesita trabajar solo.",
};

import { Providers } from "@/components/layout/Providers";
import CookieConsent from "@/components/layout/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black bg-white dark:bg-black text-black dark:text-white transition-colors duration-300" suppressHydrationWarning>
        <Providers>
          {children}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
