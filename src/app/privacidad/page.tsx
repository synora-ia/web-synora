"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function PrivacidadPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 min-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              {isEs ? "Documentación Legal" : "Legal Documentation"}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-black dark:text-white">
              {isEs ? "Política de" : "Privacy"} <span className="font-serif-italic text-slate-500">{isEs ? "Privacidad." : "Policy."}</span>
            </h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-zinc-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "1. Responsable del Tratamiento" : "1. Controller"}
                </h2>
                <p>
                  {isEs 
                    ? "Synora (en adelante, \"el Titular\") con domicilio social en España, es el responsable del tratamiento de los datos personales que se recojan a través de este sitio web."
                    : "Synora (hereinafter, \"the Owner\") with registered office in Spain, is responsible for the processing of personal data collected through this website."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "2. Finalidad del Tratamiento" : "2. Purpose of Processing"}
                </h2>
                <p>{isEs ? "Tratamos los datos que nos facilitan las personas interesadas con las siguientes finalidades:" : "We process the data provided to us by the interested parties for the following purposes:"}</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    {isEs 
                      ? "Gestionar las solicitudes de información enviadas a través del formulario de contacto."
                      : "Manage information requests sent through the contact form."}
                  </li>
                  <li>
                    {isEs 
                      ? "Prestar los servicios de automatización e integración contratados."
                      : "Provide the contracted automation and integration services."}
                  </li>
                  <li>
                    {isEs 
                      ? "Enviar comunicaciones comerciales relacionadas con nuestros servicios (solo si se ha dado consentimiento)."
                      : "Send commercial communications related to our services (only if consent has been given)."}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "3. Legitimación" : "3. Legitimation"}
                </h2>
                <p>
                  {isEs 
                    ? "La base legal para el tratamiento de sus datos es el consentimiento del usuario al facilitar sus datos a través de nuestros formularios y la ejecución de un contrato para la prestación de servicios."
                    : "The legal basis for the processing of your data is the user's consent when providing their data through our forms and the execution of a contract for the provision of services."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "4. Derechos del Usuario" : "4. User Rights"}
                </h2>
                <p>
                  {isEs 
                    ? "Cualquier persona tiene derecho a obtener confirmación sobre si en Synora estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos."
                    : "Any person has the right to obtain confirmation as to whether or not we at Synora are processing personal data concerning them. Interested persons have the right to access their personal data, as well as to request the rectification of inaccurate data or, where appropriate, request its deletion when, among other reasons, the data is no longer necessary for the purposes for which it was collected."}
                </p>
              </section>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
