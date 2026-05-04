import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="hero-gradient pt-40 pb-24 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-black leading-[0.95]">
          Tu negocio no necesita trabajar más, <br />
          <span className="font-serif-italic text-slate-500 block mt-4">necesita trabajar solo.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          Synora es la solución de automatización diseñada para empresas que quieren crecer sin complicarse la
          vida. Transformamos procesos manuales en flujos inteligentes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#que-hacemos" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-black text-white rounded-full text-base font-medium btn-hover">
            Ver Soluciones 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/contacto" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-black/10 text-black rounded-full text-base font-medium hover:bg-black hover:text-white transition-all duration-300">
            Agendar Auditoría
          </Link>
        </div>
      </div>
    </section>
  );
}
