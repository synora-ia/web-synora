import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AvisoLegalPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Documentación Legal</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-black dark:text-white">Aviso <span className="font-serif-italic text-slate-500">Legal.</span></h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Datos Identificativos</h2>
              <p>
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Titular:</strong> Synora AI Solutions S.L.</li>
                <li><strong>NIF:</strong> B00000000</li>
                <li><strong>Domicilio:</strong> Calle de la Automatización, 1, Madrid, España</li>
                <li><strong>Email:</strong> hola@synora.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Usuarios</h2>
              <p>
                El acceso y/o uso de este portal de Synora atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. Propiedad Intelectual e Industrial</h2>
              <p>
                Synora por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
              <p>
                Synora no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
