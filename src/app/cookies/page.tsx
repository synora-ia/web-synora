import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CookiesPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Documentación Legal</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-black dark:text-white">Política de <span className="font-serif-italic text-slate-500">Cookies.</span></h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. ¿Qué son las cookies?</h2>
              <p>
                Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Cookies utilizadas en este sitio web</h2>
              <p>Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.</p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Cookies técnicas:</strong> Son las más elementales y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada, cuándo navega un usuario anónimo y uno registrado, tareas básicas para el funcionamiento de cualquier web dinámica.</li>
                <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo el idioma o el tipo de navegador.</li>
                <li><strong>Cookies de análisis:</strong> Recogen información sobre el tipo de navegación que está realizando, las secciones que más utiliza, productos consultados, franja horaria de uso, idioma, etc.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. Desactivación o eliminación de cookies</h2>
              <p>
                En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
