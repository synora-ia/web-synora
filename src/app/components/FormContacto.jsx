"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Titular, Email } from "./Legal";
import { PLANES, PLAN_SOLO, EJEMPLOS } from "@/datos/precios";

const INTERESES = ["CRM", "Web o app", "Automatizaciones", "Auditoría", "Aún no lo sé"];

/* El botón desde el que se llega marca de antemano lo que interesa:
   /contacto?motivo=auditoria → «Auditoría» ya seleccionado. */
const POR_MOTIVO = {
  crm: "CRM",
  asistente: "CRM",
  auditoria: "Auditoría",
  desarrollo: "Web o app",
  automatizaciones: "Automatizaciones",
};

const VACIO = { nombre: "", apellidos: "", email: "", telefono: "", empresa: "", consulta: "" };

export default function FormContacto() {
  const [f, setF] = useState(VACIO);
  const [interes, setInteres] = useState([]);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("idle"); // idle · enviando · ok · error
  const t0 = useRef(0);
  const formRef = useRef(null);

  useEffect(() => {
    t0.current = Date.now();
    const q = new URLSearchParams(window.location.search);
    const m = q.get("motivo");
    if (m && POR_MOTIVO[m]) setInteres([POR_MOTIVO[m]]);
    /* Desde un plan de /precios: el mensaje empieza ya escrito con el plan,
       y la persona solo tiene que completarlo. */
    const plan = [...PLANES, PLAN_SOLO].find((p) => p.id === q.get("plan"));
    /* Desde un ejemplo de /precios («Quiero este»): el ejemplo con sus
       piezas y su cuota, sacados de los mismos datos que la tarjeta. */
    const ej = EJEMPLOS.find((x) => x.id === q.get("ejemplo"));
    const texto = ej
      ? `Me interesa algo como el ejemplo «${ej.quien}»: ${ej.piezas.map(([n]) => n).join(" + ")} (${ej.piezas.reduce((t, [, n]) => t + n, 0)} €/mes). `
      : plan
        ? `Me interesa el plan ${plan.nombre}. `
        : m === "precio"
          ? "Quiero saber cuánto me costaría. "
          : "";
    if (texto) setF((x) => (x.consulta ? x : { ...x, consulta: texto }));
  }, []);

  /* Con errores ya pintados, el foco va al primero (teclado y lector de
     pantalla saben así qué hay que corregir). Se hace tras el render, no
     antes: hasta entonces el campo aún no está marcado. */
  useEffect(() => {
    if (Object.values(errores).some(Boolean)) {
      formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
    }
  }, [errores]);

  const cambia = (e) => {
    const { name, value } = e.target;
    setF((x) => ({ ...x, [name]: value }));
    if (errores[name]) setErrores((x) => ({ ...x, [name]: undefined }));
  };
  const alterna = (i) =>
    setInteres((xs) => (xs.includes(i) ? xs.filter((x) => x !== i) : [...xs, i]));

  async function envia(e) {
    e.preventDefault();
    const web = e.currentTarget.elements.web?.value || "";
    setEstado("enviando");
    setErrores({});
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        /* El tiempo que ha estado abierto, medido aquí: no depende de
           que el reloj del móvil coincida con el del servidor. */
        body: JSON.stringify({ ...f, interes, web, ms: Date.now() - t0.current }),
      });
      const r = await res.json().catch(() => ({}));
      if (res.ok && r.ok) {
        setEstado("ok");
        setF(VACIO);
        setInteres([]);
        return;
      }
      if (res.status === 422 && r.errores) {
        setErrores(r.errores);
        setEstado("idle");
        return;
      }
      setEstado("error");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="form-hecho" role="status">
        <span className="eyebrow">Recibido</span>
        <h2 className="sheen">Gracias. Ya lo tenemos.</h2>
        <p className="lead">
          Te escribimos para buscar media hora que te venga bien. Si se te
          olvidó algo, escríbenos a <Email />.
        </p>
      </div>
    );
  }

  const campoConError = (n) => (errores[n] ? { "aria-invalid": true, "aria-describedby": `e-${n}` } : {});

  return (
    <form className="form" ref={formRef} onSubmit={envia} noValidate>
      <div className="form-fila">
        <div className="campo">
          <label htmlFor="c-nombre">Nombre</label>
          <input id="c-nombre" name="nombre" autoComplete="given-name" required value={f.nombre} onChange={cambia}
            maxLength={80} {...campoConError("nombre")} />
          {errores.nombre && <small id="e-nombre" className="err">{errores.nombre}</small>}
        </div>
        <div className="campo">
          <label htmlFor="c-apellidos">Apellidos <em>· opcional</em></label>
          <input id="c-apellidos" name="apellidos" autoComplete="family-name" value={f.apellidos} onChange={cambia} maxLength={120} />
        </div>
      </div>

      <div className="form-fila">
        <div className="campo">
          <label htmlFor="c-email">Correo</label>
          <input id="c-email" name="email" type="email" autoComplete="email" inputMode="email" required value={f.email}
            onChange={cambia} maxLength={160} {...campoConError("email")} />
          {errores.email && <small id="e-email" className="err">{errores.email}</small>}
        </div>
        <div className="campo">
          <label htmlFor="c-telefono">Teléfono <em>· si prefieres que te llamemos</em></label>
          <input id="c-telefono" name="telefono" type="tel" autoComplete="tel" inputMode="tel" value={f.telefono} onChange={cambia} maxLength={30} />
        </div>
      </div>

      <div className="campo">
        <label htmlFor="c-empresa">Empresa <em>· opcional</em></label>
        <input id="c-empresa" name="empresa" autoComplete="organization" value={f.empresa} onChange={cambia} maxLength={120} />
      </div>

      <fieldset className="campo">
        <legend>¿Qué te interesa? <em>· opcional</em></legend>
        <div className="form-chips">
          {INTERESES.map((i) => (
            <button key={i} type="button" className="chip" aria-pressed={interes.includes(i)} onClick={() => alterna(i)}>
              {i}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="campo">
        <label htmlFor="c-consulta">Cuéntanos tu caso</label>
        <textarea id="c-consulta" name="consulta" rows={4} required value={f.consulta} onChange={cambia} maxLength={4000}
          placeholder="Aunque sea en una línea: a qué te dedicas y dónde se te va el tiempo." {...campoConError("consulta")} />
        {errores.consulta && <small id="e-consulta" className="err">{errores.consulta}</small>}
      </div>

      {/* Campo trampa: una persona no lo ve ni llega con el tabulador; los
          bots que rellenan todo, sí. */}
      <div className="trampa" aria-hidden="true">
        <label>
          No rellenes este campo
          <input name="web" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      {estado === "error" && (
        <p className="form-aviso" role="alert">
          No hemos podido enviarlo. Tu mensaje sigue aquí escrito: prueba otra
          vez en un momento, o escríbenos a <Email />.
        </p>
      )}

      <div className="form-pie">
        <button className="btn" type="submit" disabled={estado === "enviando"}>
          {estado === "enviando" ? "Enviando…" : "Enviar"}
        </button>
      </div>

      {/* Primera capa de información (art. 13 RGPD). No hay casilla de
          «acepto la política»: la base no es el consentimiento sino tu
          propia petición, y aceptar un texto no es una base válida. */}
      <p className="form-legal">
        <strong>Protección de datos.</strong> Responsable:{" "}
        <Titular />. Finalidad:
        responder a tu consulta y, si lo pides, prepararte una propuesta.
        Legitimación: tu propia solicitud. Destinatarios: no se ceden a
        terceros salvo obligación legal; los tratan por nuestra cuenta los
        proveedores con los que gestionamos los contactos. Derechos: acceso, rectificación,
        supresión y los demás que explica la{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </form>
  );
}
