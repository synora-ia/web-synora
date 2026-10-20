import { Manrope, DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Atmos from "./components/Atmos";

/* Las tres familias de la maqueta, ahora autoalojadas por next/font:
   desaparecen los preconnect a Google y el salto de texto al cargar.
   Manrope e Instrument Sans son variables, así que no se declara `weight`. */
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  /* La maqueta pedía también 500, pero ninguna regla lo usa. */
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  /* Solo el logo usa Instrument Sans, y siempre en itálica. */
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://synora.es"),
  title: {
    default: "Synora — Montamos el CRM, la web y las automatizaciones",
    template: "%s · Synora",
  },
  description:
    "Montamos el CRM, la web y las automatizaciones que hacen que tu empresa funcione sin que estés encima.",
};

/* [FIX] La maqueta no tenía <meta viewport>: en un móvil real la página se
   renderizaba a 981px y se encogía, así que ninguna media query llegaba a
   dispararse. Aquí va declarado, más el color de la barra del navegador
   por tema. */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1F2F7" },
    { media: "(prefers-color-scheme: dark)", color: "#07080B" },
  ],
};

/* [FIX] Se ejecuta antes del primer pintado. Sin esto, quien haya elegido
   tema oscuro ve un fogonazo claro en cada carga. Si no hay elección
   guardada no se toca nada y manda prefers-color-scheme, como en la
   maqueta. */
const noFlash = `try{var t=localStorage.getItem("aurora-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${dmMono.variable} ${instrument.variable}`}
      /* Mantiene el desplazamiento suave para las anclas, pero no al
         cambiar de página: ahí el salto arriba debe ser inmediato. */
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Atmos />
        <div className="shell">
          <Nav />
          <main id="contenido">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
