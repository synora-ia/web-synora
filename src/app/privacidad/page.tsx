import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacidadPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Documentación Legal</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-black dark:text-white">Política de <span className="font-serif-italic text-slate-500">Privacidad.</span></h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Responsable del Tratamiento</h2>
              <p>
                Synora (en adelante, "el Titular") con domicilio social en España, es el responsable del tratamiento de los datos personales que se recojan a través de este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Finalidad del Tratamiento</h2>
              <p>Tratamos los datos que nos facilitan las personas interesadas con las siguientes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Gestionar las solicitudes de información enviadas a través del formulario de contacto.</li>
                <li>Prestar los servicios de automatización e integración contratados.</li>
                <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios (solo si se ha dado consentimiento).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. Legitimación</h2>
              <p>
                La base legal para el tratamiento de sus datos es el consentimiento del usuario al facilitar sus datos a través de nuestros formularios y la ejecución de un contrato para la prestación de servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Derechos del Usuario</h2>
              <p>
                Cualquier persona tiene derecho a obtener confirmación sobre si en Synora estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
