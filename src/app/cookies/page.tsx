"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CookiesPage() {
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
              {isEs ? "Política de" : "Cookies"} <span className="font-serif-italic text-slate-500">{isEs ? "Cookies." : "Policy."}</span>
            </h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-zinc-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "1. ¿Qué son las cookies?" : "1. What are cookies?"}
                </h2>
                <p>
                  {isEs 
                    ? "Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc."
                    : "A cookie is a small text file that is stored in your browser when you visit almost any web page. Its utility is that the web is capable of remembering your visit when you browse that page again. Cookies usually store technical information, personal preferences, personalization of content, usage statistics, links to social networks, access to user accounts, etc."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "2. Cookies utilizadas en este sitio web" : "2. Cookies used on this website"}
                </h2>
                <p>
                  {isEs 
                    ? "Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible."
                    : "Following the guidelines of the Spanish Data Protection Agency, we proceed to detail the use of cookies made by this website in order to inform you with the maximum possible accuracy."}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>{isEs ? "Cookies técnicas:" : "Technical cookies:"}</strong> 
                    {isEs 
                      ? " Son las más elementales y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada, cuándo navega un usuario anónimo y uno registrado, tareas básicas para el funcionamiento de cualquier web dinámica."
                      : " They are the most elementary and allow, among other things, knowing when a human or an automated application is browsing, when an anonymous user and a registered one are browsing, basic tasks for the operation of any dynamic website."}
                  </li>
                  <li>
                    <strong>{isEs ? "Cookies de personalización:" : "Personalization cookies:"}</strong> 
                    {isEs 
                      ? " Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo el idioma o el tipo de navegador."
                      : " They allow the user to access the service with some predefined general characteristics based on a series of criteria in the user's terminal, such as language or browser type."}
                  </li>
                  <li>
                    <strong>{isEs ? "Cookies de análisis:" : "Analysis cookies:"}</strong> 
                    {isEs 
                      ? " Recogen información sobre el tipo de navegación que está realizando, las secciones que más utiliza, productos consultados, franja horaria de uso, idioma, etc."
                      : " They collect information about the type of browsing being carried out, the sections most used, products consulted, time slot of use, language, etc."}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {isEs ? "3. Desactivación o eliminación de cookies" : "3. Deactivation or elimination of cookies"}
                </h2>
                <p>
                  {isEs 
                    ? "En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando."
                    : "At any time you may exercise your right to deactivate or eliminate cookies from this website. These actions are performed differently depending on the browser you are using."}
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
