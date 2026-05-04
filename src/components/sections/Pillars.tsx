export default function Pillars() {
  const pillars = [
    {
      title: "Automatización",
      description: "Lo repetitivo se hace solo. Mensajes, citas, registros, seguimientos y avisos se gestionan automáticamente sin intervención manual.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Orden",
      description: "La información llega limpia y lista para usar. Transformamos datos dispersos en dashboards claros para tomar decisiones con base real.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
    },
    {
      title: "Control",
      description: "Menos errores, más consistencia. Los procesos se ejecutan siempre de la misma forma, independientemente de la carga de trabajo.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="que-hacemos" className="py-32 px-6 bg-white dark:bg-black relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-end">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] text-black dark:text-white">
              Simplificamos el crecimiento, <span className="block font-serif-italic text-slate-400 dark:text-zinc-500 mt-2">optimizamos tu tiempo</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-slate-600 dark:text-zinc-400">
              No se trata de implantar tecnología compleja, sino de identificar procesos que hoy consumen tu tiempo y convertirlos en flujos que funcionan solos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-t border-slate-100 dark:border-white/5 pt-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="group cursor-pointer p-8 rounded-3xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all duration-300 border border-transparent hover:border-slate-100 dark:hover:border-white/5">
              <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{pillar.title}</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
