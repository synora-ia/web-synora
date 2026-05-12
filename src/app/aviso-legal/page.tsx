"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function AvisoLegalPage() {
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
              {isEs ? "Aviso" : "Legal"} <span className="font-serif-italic text-slate-500">{isEs ? "Legal." : "Notice."}</span>
            </h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-zinc-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "1. Datos Identificativos" : "1. Identifying Data"}
                </h2>
                <p>
                  {isEs 
                    ? "En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:"
                    : "In compliance with the duty of information established in article 10 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce, the following data are reflected below:"}
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>{isEs ? "Titular:" : "Owner:"}</strong> Synora AI Solutions S.L.</li>
                  <li><strong>NIF:</strong> B00000000</li>
                  <li><strong>{isEs ? "Domicilio:" : "Address:"}</strong> Calle de la Automatización, 1, Madrid, España</li>
                  <li><strong>Email:</strong> hola@synora.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "2. Usuarios" : "2. Users"}
                </h2>
                <p>
                  {isEs 
                    ? "El acceso y/o uso de este portal de Synora atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento."
                    : "Access and/or use of this Synora portal attributes the condition of USER, who accepts, from said access and/or use, the General Conditions of Use reflected here. The aforementioned Conditions will apply regardless of the General Conditions of Contract that, if applicable, are mandatory."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "3. Propiedad Intelectual e Industrial" : "3. Intellectual and Industrial Property"}
                </h2>
                <p>
                  {isEs 
                    ? "Synora por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.)."
                    : "Synora by itself or as an assignee, is the owner of all intellectual and industrial property rights of its website, as well as the elements contained therein (by way of example, images, sound, audio, video, software or texts; trademarks or logos, color combinations, structure and design, selection of materials used, computer programs necessary for its operation, access and use, etc.)."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "4. Exclusión de Garantías y Responsabilidad" : "4. Disclaimer of Warranties and Liability"}
                </h2>
                <p>
                  {isEs 
                    ? "Synora no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo."
                    : "Synora is not responsible, in any case, for damages of any nature that could be caused, by way of example: errors or omissions in the contents, lack of availability of the portal or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all the necessary technological measures to avoid it."}
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
