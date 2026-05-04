import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6 min-h-[80vh] flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Hablemos</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Diseñemos tu <br />
            <span className="font-serif-italic text-slate-500">próximo salto.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            ¿Tienes un proceso que te quita el sueño? Cuéntanoslo y te diremos cómo podemos automatizarlo.
          </p>

          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 text-left max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Nombre</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Empresa</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="Nombre de tu empresa" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="hola@tuempresa.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">¿Cómo podemos ayudarte?</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="Cuéntanos brevemente tu caso..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg btn-hover">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
