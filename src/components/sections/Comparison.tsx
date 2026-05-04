export default function Comparison() {
  const points = [
    {
      feature: "Gestión de Leads",
      without: "Respuesta manual lenta, leads que se enfrían o se pierden.",
      with: "Respuesta instantánea 24/7 y calificación automática por IA.",
    },
    {
      feature: "Agendas y Citas",
      without: "Idas y venidas de mensajes, huecos vacíos y errores humanos.",
      with: "Sincronización total en tiempo real sin intervención manual.",
    },
    {
      feature: "Seguimiento",
      without: "Depende de la memoria o de excels que nadie actualiza.",
      with: "Sistemas persistentes que nunca olvidan un contacto.",
    },
    {
      feature: "Toma de Decisiones",
      without: "Basada en intuición y datos dispersos o desactualizados.",
      with: "Dashboards con métricas reales y precisas cada segundo.",
    },
    {
      feature: "Escalabilidad",
      without: "Limitada por las horas que tú o tu equipo podéis echar.",
      with: "Tu capacidad operativa crece sin aumentar los costes fijos.",
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Comparativa</span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            La diferencia es <span className="font-serif-italic text-slate-500">el tiempo.</span>
          </h2>
        </div>

        <div className="relative rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Column: Sin Synora */}
            <div className="bg-slate-50 p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-100">
              <h3 className="text-2xl font-bold text-slate-400 mb-12 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Sin Synora
              </h3>
              <ul className="space-y-10">
                {points.map((point, i) => (
                  <li key={i} className="opacity-50 group">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-500">{point.feature}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{point.without}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Con Synora */}
            <div className="bg-white p-12 md:p-16 relative overflow-hidden">
              {/* Subtle glow for the "With" column */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
              
              <h3 className="text-2xl font-bold text-black mb-12 flex items-center relative z-10">
                <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Con Synora
              </h3>
              <ul className="space-y-10 relative z-10">
                {points.map((point, i) => (
                  <li key={i}>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-blue-500">{point.feature}</h4>
                    <p className="text-black text-lg font-medium leading-relaxed">{point.with}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
