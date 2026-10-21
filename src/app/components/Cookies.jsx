"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GA_ID, CLAVE_COOKIES } from "../../datos/analitica";

/* AVISO DE COOKIES + GOOGLE ANALYTICS
   - Sin GA_ID no pinta nada ni carga nada.
   - Con GA_ID: si aún no has elegido, sale el aviso. Analytics solo se carga
     si aceptas (no antes: así lo pide la AEPD). «Rechazar» está al mismo
     nivel que «Aceptar» y cuesta lo mismo.
   - Puedes cambiar de idea con «Configurar cookies» (pie y /cookies): si
     retiras el permiso, se desactiva Analytics y se borran sus cookies. */

export const ABRIR = "synora:abrir-cookies";

function cargaAnalytics() {
  if (!GA_ID || window.__synoraGA) return;
  window.__synoraGA = true;
  window[`ga-disable-${GA_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  /* Modo de consentimiento v2: analítica sí (la has aceptado), publicidad no. */
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

function quitaAnalytics() {
  if (!GA_ID) return;
  window[`ga-disable-${GA_ID}`] = true;
  /* Borra _ga y _ga_<id> en el dominio y en el dominio raíz. */
  const dominio = location.hostname.replace(/^www\./, "");
  document.cookie.split(";").map((c) => c.split("=")[0].trim()).filter((n) => n.startsWith("_ga")).forEach((n) => {
    for (const d of ["", `; domain=${dominio}`, `; domain=.${dominio}`]) {
      document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
    }
  });
}

export function abrirCookies() {
  window.dispatchEvent(new Event(ABRIR));
}

export default function Cookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    let eleccion = null;
    try { eleccion = localStorage.getItem(CLAVE_COOKIES); } catch {}
    if (eleccion === "si") cargaAnalytics();
    else if (eleccion !== "no") setVisible(true);
    const abrir = () => setVisible(true);
    window.addEventListener(ABRIR, abrir);
    return () => window.removeEventListener(ABRIR, abrir);
  }, []);

  if (!GA_ID || !visible) return null;

  const elige = (si) => {
    try { localStorage.setItem(CLAVE_COOKIES, si ? "si" : "no"); } catch {}
    if (si) cargaAnalytics();
    else quitaAnalytics();
    setVisible(false);
  };

  return (
    <div className="cookies" role="dialog" aria-label="Aviso de cookies">
      <p>
        Usamos cookies de <strong>Google Analytics</strong> para contar las
        visitas y saber qué páginas interesan. Solo se instalan si aceptas.{" "}
        <Link className="ilink" href="/cookies">Más información</Link>
      </p>
      <div className="cookies-botones">
        <button type="button" className="cookies-btn" onClick={() => elige(false)}>Rechazar</button>
        <button type="button" className="cookies-btn" onClick={() => elige(true)}>Aceptar</button>
      </div>
    </div>
  );
}

/* Botón para volver a abrir el aviso (pie y política de cookies). */
export function BotonCookies({ className = "" }) {
  if (!GA_ID) return null;
  return (
    <button type="button" className={`enlace-cookies ${className}`.trim()} onClick={abrirCookies}>
      Configurar cookies
    </button>
  );
}
