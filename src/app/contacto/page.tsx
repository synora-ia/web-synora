"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const N8N_WEBHOOK = "https://nando-test-n8n.ucyvee.easypanel.host/webhook/contacto";

type ModalState = "idle" | "success" | "error";

export default function ContactoPage() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    consulta: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState<ModalState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setModalState("success");
      setFormData({ nombre: "", apellidos: "", telefono: "", email: "", consulta: "" });
    } catch {
      setModalState("error");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => setModalState("idle");

  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      {/* ── Success / Error Modal ─────────────────────────────────────────── */}
      <AnimatePresence>
        {modalState !== "idle" && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-6"
            onClick={closeModal}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Modal card */}
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-md bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 dark:border-white/10 text-center"
            >
              {modalState === "success" ? (
                <>
                  {/* Animated checkmark */}
                  <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                    <motion.svg
                      viewBox="0 0 52 52"
                      className="w-11 h-11"
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.circle
                        cx="26" cy="26" r="24"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M14.5 27l8 8 15-15"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
                      />
                    </motion.svg>
                  </div>

                  <h2 className="text-2xl font-bold text-black dark:text-white mb-3 tracking-tight">
                    {t("contact.success.title")}
                  </h2>
                  <p className="text-slate-500 dark:text-zinc-400 text-base leading-relaxed mb-8">
                    {t("contact.success.subtitle")}
                  </p>
                </>
              ) : (
                <>
                  {/* Error icon */}
                  <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <svg viewBox="0 0 52 52" className="w-11 h-11">
                      <circle cx="26" cy="26" r="24" fill="none" stroke="#ef4444" strokeWidth="3" />
                      <line x1="17" y1="17" x2="35" y2="35" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="35" y1="17" x2="17" y2="35" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold text-black dark:text-white mb-3 tracking-tight">
                    {t("contact.error.title")}
                  </h2>
                  <p className="text-slate-500 dark:text-zinc-400 text-base leading-relaxed mb-8">
                    {t("contact.error.subtitle")}
                  </p>
                </>
              )}

              <button
                onClick={closeModal}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-base cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
              >
                {t("contact.success.close")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero + Form ──────────────────────────────────────────────────── */}
      <section className="hero-gradient pt-40 pb-24 px-6 min-h-[80vh] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              {t("contact.badge")}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-black dark:text-white">
              {t("contact.title1")} <br />
              <span className="font-serif-italic text-slate-500 dark:text-zinc-500">
                {t("contact.title2")}
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>

            {/* Form card */}
            <div className="bg-white dark:bg-zinc-900 p-10 md:p-12 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 text-left max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>

                {/* Row 1: Nombre + Apellidos */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-nombre"
                      className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2"
                    >
                      {t("contact.form.name")}
                    </label>
                    <input
                      id="contact-nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-apellidos"
                      className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2"
                    >
                      {t("contact.form.lastname")}
                    </label>
                    <input
                      id="contact-apellidos"
                      name="apellidos"
                      type="text"
                      required
                      value={formData.apellidos}
                      onChange={handleChange}
                      placeholder={t("contact.form.lastnamePlaceholder")}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Teléfono + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-telefono"
                      className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2"
                    >
                      {t("contact.form.phone")}
                    </label>
                    <input
                      id="contact-telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder={t("contact.form.phonePlaceholder")}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Row 3: Consulta */}
                <div>
                  <label
                    htmlFor="contact-consulta"
                    className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="contact-consulta"
                    name="consulta"
                    rows={5}
                    required
                    value={formData.consulta}
                    onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-lg btn-hover transition-opacity duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      {/* Spinner */}
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                        />
                      </svg>
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    t("contact.form.submit")
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
