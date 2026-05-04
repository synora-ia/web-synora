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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased selection:bg-black selection:text-white bg-[#FAFAFA] text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
