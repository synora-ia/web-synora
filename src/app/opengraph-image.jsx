import { ImageResponse } from "next/og";

/* TARJETA PARA COMPARTIR (y la que Google suele enseñar en Imágenes)
   La imagen que sale al pegar el enlace en WhatsApp, LinkedIn, Telegram o
   X, y la candidata principal de Google para la miniatura de la marca. Se
   genera una vez al compilar. Todo va CENTRADO: Google y las redes recortan
   la miniatura por los lados (a cuadrado o 4:3), y así el logo y la frase
   sobreviven a cualquier recorte. Los colores son los de la web en cada tema
   (abajo, TEMAS); VARIANTE elige cuál se publica.
   Next la aplica a todas las páginas que no tengan la suya. */
export const alt = "Synora — Tu negocio no necesita trabajar más, necesita trabajar solo.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Manrope (la letra de la web) en TTF, que es lo que admite el generador.
   Si no se puede descargar al compilar, sale con la letra por defecto en
   vez de romper la compilación. */
async function fuente(familia) {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=${familia}`, {
      headers: { "User-Agent": "Mozilla/4.0" },
    }).then((r) => r.text());
    const url = css.match(/src:\s*url\((https:[^)]+)\)/)?.[1];
    return url ? await fetch(url).then((r) => r.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

/* Dos versiones, como los dos temas de la web. Josep eligió la clara (21/10).
   Los degradados acaban en el mismo color a opacidad 0, no en «transparent»:
   el generador mezclaría con negro y en la clara saldría una mancha gris. */
const VARIANTE = "clara";
const TEMAS = {
  oscura: {
    fondo: "#07080B",
    brillos:
      "radial-gradient(ellipse 60% 48% at 50% 112%, rgba(60,242,255,.55) 0%, rgba(60,242,255,0) 75%), radial-gradient(ellipse 42% 55% at 18% 100%, rgba(83,80,255,.55) 0%, rgba(83,80,255,0) 75%), radial-gradient(ellipse 42% 55% at 84% 100%, rgba(51,109,234,.62) 0%, rgba(51,109,234,0) 75%)",
    logo: "#F4F6FA",
    punto: "linear-gradient(120deg, #336dea, #3cf2ff)",
    frase: "#C9CED8",
    pie: "#7E8696",
    linea: "rgba(255,255,255,.14)",
  },
  clara: {
    fondo: "#F1F2F7",
    brillos:
      "radial-gradient(ellipse 60% 48% at 50% 112%, rgba(255,80,140,.34) 0%, rgba(255,80,140,0) 75%), radial-gradient(ellipse 42% 55% at 18% 100%, rgba(234,51,91,.26) 0%, rgba(234,51,91,0) 75%), radial-gradient(ellipse 42% 55% at 84% 100%, rgba(255,140,175,.34) 0%, rgba(255,140,175,0) 75%)",
    logo: "#0E1016",
    punto: "linear-gradient(120deg, #ea335b, #ff508c)",
    frase: "#3A404C",
    pie: "#6B7280",
    linea: "rgba(14,16,22,.12)",
  },
};

export default async function Imagen() {
  const t = TEMAS[VARIANTE];
  /* El logo de la web va en Instrument Sans itálica; el resto en Manrope. */
  const [m600, m500, logo] = await Promise.all([
    fuente("Manrope:wght@600"),
    fuente("Manrope:wght@500"),
    fuente("Instrument+Sans:ital,wght@1,700"),
  ]);
  const fonts = [
    m600 && { name: "Manrope", data: m600, weight: 600, style: "normal" },
    m500 && { name: "Manrope", data: m500, weight: 500, style: "normal" },
    logo && { name: "Instrument Sans", data: logo, weight: 700, style: "italic" },
  ].filter(Boolean);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: t.fondo,
          backgroundImage: t.brillos,
          fontFamily: fonts.length ? "Manrope" : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontFamily: logo ? "Instrument Sans" : undefined,
            fontSize: 168,
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "-0.035em",
            lineHeight: 1,
            color: t.logo,
          }}
        >
          <span>synora</span>
          {/* El punto del logo, con el degradado de la marca. */}
          <span style={{ width: 30, height: 30, borderRadius: 15, marginLeft: 6, marginBottom: 22, backgroundImage: t.punto }} />
        </div>

        <div style={{ display: "flex", width: 120, height: 1, background: t.linea, margin: "40px 0 30px" }} />

        {/* La frase del hero en dos líneas: estrecha, para que no la corte
            la miniatura. */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, color: t.frase }}>
          <span>Tu negocio no necesita trabajar más,</span>
          <span>necesita trabajar solo.</span>
        </div>
        <div style={{ display: "flex", marginTop: 22, fontSize: 25, fontWeight: 500, letterSpacing: "0.01em", color: t.pie }}>
          CRM a medida · Webs y apps · Automatizaciones
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
