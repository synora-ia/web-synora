import { ImageResponse } from "next/og";

/* TARJETA PARA COMPARTIR
   La imagen que sale al pegar el enlace en WhatsApp, LinkedIn, Telegram o
   X. Se genera una vez al compilar. Mismo lenguaje que la web en oscuro:
   fondo #07080B con el resplandor azul y cian del hero, y el titular.
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

export default async function Imagen() {
  /* El logo de la web va en Instrument Sans itálica; el resto en Manrope. */
  const [m800, m500, logo] = await Promise.all([
    fuente("Manrope:wght@800"),
    fuente("Manrope:wght@500"),
    fuente("Instrument+Sans:ital,wght@1,700"),
  ]);
  const fonts = [
    m800 && { name: "Manrope", data: m800, weight: 800, style: "normal" },
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
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#07080B",
          backgroundImage:
            "radial-gradient(circle at 78% 92%, rgba(51,109,234,.55) 0%, transparent 45%), radial-gradient(circle at 50% 118%, rgba(60,242,255,.45) 0%, transparent 45%), radial-gradient(circle at 22% 90%, rgba(83,80,255,.40) 0%, transparent 45%)",
          fontFamily: fonts.length ? "Manrope" : "sans-serif",
          color: "#F4F6FA",
        }}
      >
        <div style={{ display: "flex", fontFamily: logo ? "Instrument Sans" : undefined, fontSize: 44, fontWeight: 700, fontStyle: "italic", letterSpacing: "-0.03em" }}>
          <span>synora</span>
          <span style={{ color: "#5EE6FF" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.04 }}>
          <span>Tu negocio no necesita</span>
          <span>trabajar más, necesita</span>
          <span style={{ display: "flex" }}>
            <span style={{ color: "#8AB4FF" }}>trabajar solo</span>
            <span>.</span>
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 28, fontWeight: 500, color: "#9AA1AE", letterSpacing: "-0.01em" }}>
          CRM a medida · Webs y apps · Automatizaciones
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
