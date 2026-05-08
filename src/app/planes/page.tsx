import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import IsoModalBadge from "@/components/sections/IsoModalBadge";

export default function PlanesPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <header className="hero-gradient pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-8 tracking-tight leading-[0.95]">
            Tu escala de <br /> <span className="font-serif-italic text-slate-500 dark:text-zinc-500">crecimiento.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Diseñamos planes que se adaptan al volumen real de tu negocio. Sin sorpresas, con todo incluido.
          </p>
        </div>
      </header>

      {/* Comparative Matrix */}
      <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm dark:shadow-none border border-black/5 dark:border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-white/5">
                    <th className="p-8 text-slate-400 dark:text-zinc-500 font-medium text-sm">Características</th>
                    <th className="p-8">
                      <span className="block text-xl font-bold text-black dark:text-white">Plan Esencial</span>
                      <span className="text-xs text-slate-400 dark:text-zinc-500">99€/mes</span>
                    </th>
                    <th className="p-8 bg-black dark:bg-white text-white dark:text-black">
                      <span className="block text-xl font-bold">Plan Crecimiento</span>
                      <span className="text-xs text-white/50 dark:text-black/50">199€/mes</span>
                    </th>
                    <th className="p-8">
                      <span className="block text-xl font-bold text-black dark:text-white">Plan Pro</span>
                      <span className="text-xs text-slate-400 dark:text-zinc-500">Desde 399€/mes</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 dark:text-zinc-400">
                  <TableRow label="Setup Inicial (Inversión)" v1="350€" v2="Desde 600€" v3="Desde 900€" />
                  <TableRow label="Auditoría Previa" v1="Opcional (Desde 200€)" v2="Opcional (Desde 200€)" v3="Opcional (Desde 200€)" />

                  <TableRow label="Agenda + ToDo" v1="✓" v2="✓" v3="✓" />
                  <TableRow label="Gestión de Leads" v1="✓" v2="✓" v3="✓" />
                  <TableRow label="Gestión de Documentos" v1="✓" v2="✓" v3="✓" />
                  <TableRow label="Contestador IceBraker" v1="✓" v2="✓" v3="✓" />
                  <TableRow label="Automatización Contacto Web" v1="✓" v2="✓" v3="✓" />
                  <TableRow label="Recordatorios Automáticos" v1="✓" v2="✓" v3="✓" />
                  <TableRow label="Chatbot de WhatsApp" v1="+49€/mes" v2="✓" v3="✓" />
                  <TableRow label="Chatbot Web" v1="+49€/mes" v2="✓" v3="✓" />
                  <TableRow label="WebConnect" v1="+39€/mes" v2="✓" v3="✓" />
                  <TableRow label="Seguimientos de Leads (IA)" v1="+39€/mes" v2="✓" v3="✓" />
                  <TableRow label="Analíticas Avanzadas" v1="+29€/mes" v2="+29€/mes" v3="✓" />
                  <TableRow label="Chatbot de Gestión Interna" v1="+39€/mes" v2="+39€/mes" v3="✓" />
                  <TableRow label="Transcripción de Reuniones" v1="+39€/mes" v2="+39€/mes" v3="✓" />
                  <TableRow label="Funnel de Ventas" v1="+59€/mes" v2="+59€/mes" v3="✓" />

                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 dark:text-zinc-500 mt-6 max-w-3xl mx-auto px-4">
            * Los planes y módulos incluyen un volumen muy generoso de tokens de IA para un uso diario normal. Si tu empresa requiere un volumen masivo de operaciones, el precio mensual se ajustará de forma transparente en base al coste real de consumo.
          </p>
        </div>
      </section>

      {/* What is an Audit Section */}
      <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300 border-t border-slate-50 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">¿Cuándo recomendamos una Auditoría?</h2>
            <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto mb-6">
              Si tienes muy claros tus flujos de trabajo, pasamos directamente al Setup. Pero si tu negocio tiene procesos complejos o desordenados, esta sesión previa nos asegura adaptar la IA a tu realidad operativa.
            </p>
            <IsoModalBadge />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-3">Mapeo del Flujo</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                Nos sentamos contigo para diseccionar paso a paso cómo captas, atiendes y cierras a tus clientes. Identificamos cuellos de botella y tareas manuales repetitivas.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-3">Diseño del Sistema</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                Proponemos un rediseño de ese flujo delegando las tareas de poco valor a la IA (como cualificar o registrar datos), manteniendo el toque humano donde realmente importa.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-3">Roadmap de Ejecución</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                Salimos de la sesión con un plan claro de qué automatizaciones se van a construir, qué herramientas conectaremos (CRM, Web, WhatsApp) y los plazos exactos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "Everything Included"? */}
      <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white tracking-tight leading-[1.1]">
            Sin facturas sorpresa. <br /> <span className="font-serif-italic text-slate-400 dark:text-zinc-500">Tu cuota mensual lo cubre todo.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black dark:text-white">¿Qué pagamos nosotros?</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
                Dentro de tu cuota mensual de Synora, nosotros asumimos los costes de las suscripciones premium necesarias:
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-zinc-300">
                <ListItem iconColor="text-blue-500 dark:text-blue-400">Servidores y Hosting (n8n Enterprise)</ListItem>
                <ListItem iconColor="text-blue-500 dark:text-blue-400">Consumo de Inteligencia Artificial (Uso estándar)</ListItem>
                <ListItem iconColor="text-blue-500 dark:text-blue-400">Integraciones (Make/Zapier)</ListItem>
                <ListItem iconColor="text-blue-500 dark:text-blue-400">WhatsApp Business API</ListItem>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black dark:text-white">¿Qué ganas tú?</h4>
              <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
                Transparencia y simplicidad contable. Una sola factura al mes de un solo proveedor local.
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-zinc-300">
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Olvídate de gestionar 5 suscripciones</ListItem>
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Costes predecibles mes a mes</ListItem>
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Monitorización 24/7 incluida</ListItem>
                <ListItem iconColor="text-orange-500 dark:text-orange-400">Evolución constante sin pagar más</ListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Modules */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">Packs Especializados</h2>
            <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Potencia tu plan con <strong>verticales específicos</strong> diseñados para tu sector.
            </p>
          </div>

          {/* Real Estate Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Pack Esencial */}
              <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden flex flex-col h-full pricing-card transition-all duration-300">
                <div className="p-10 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-zinc-900/50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">Pack Inmobiliario</span>
                      <h4 className="text-3xl font-bold text-black dark:text-white">Captación</h4>
                      <p className="text-slate-500 dark:text-zinc-400 mt-2 text-sm max-w-[200px]">Gestión de propiedades, cruce con clientes y publicación centralizada.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-black dark:text-white">+89€</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">/mes Pack Completo</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-2 px-4">Módulos Individuales</span>
                  <ModuleItem 
                    title="Captador Manual" 
                    price="+29€/mes" 
                    desc="Herramienta en dashboard para guardar y clasificar propietarios." 
                  />
                  <ModuleItem 
                    title="Publicador Propiedades" 
                    price="+39€/mes" 
                    desc="Sincronización de inmuebles desde el dashboard a tu web." 
                  />
                  <ModuleItem 
                    title="Sugerencias IA" 
                    price="+39€/mes" 
                    desc="Cruces automáticos de requerimientos de clientes con propiedades." 
                  />
                </div>
              </div>

              {/* Pack Avanzado */}
              <div className="bg-black dark:bg-white rounded-[2.5rem] border border-black dark:border-white overflow-hidden flex flex-col h-full text-white dark:text-black shadow-2xl dark:shadow-none pricing-card transition-all duration-300">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent dark:from-black/10 pointer-events-none"></div>
                <div className="p-10 border-b border-white/10 dark:border-black/10 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/20 dark:bg-black/10 text-white dark:text-black">Pack Avanzado</span>
                      <h4 className="text-3xl font-bold">Inteligencia</h4>
                      <p className="text-white/70 dark:text-black/70 mt-2 text-sm max-w-[220px]">Automatización total del mercado y generación de tasaciones IA.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold">+149€</div>
                      <div className="text-xs text-white/60 dark:text-black/50 uppercase tracking-wider font-bold mt-1">/mes Pack Completo</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col gap-2 relative z-10">
                  <span className="text-xs font-bold text-white/50 dark:text-black/40 uppercase tracking-widest mb-2 px-4">Módulos Individuales</span>
                  <ModuleItem 
                    title="Captador Automático" 
                    price="+69€/mes" 
                    desc="Scraping de portales y alerta automática de particulares." 
                    dark
                  />
                  <ModuleItem 
                    title="Property Intelligence" 
                    price="+59€/mes" 
                    desc="Análisis de mercado automático para zonas concretas." 
                    dark
                  />
                  <ModuleItem 
                    title="Informes de Tasación" 
                    price="+49€/mes" 
                    desc="Generación de PDF automático con valoración IA para clientes." 
                    dark
                  />
                </div>
              </div>
            </div>
          </div>



          {/* Setup & Infrastructure Section */}
          <div className="mt-32 pt-20 border-t border-slate-100 dark:border-white/5">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Base y Despliegue</span>
              <h3 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">Infraestructura y Servicios de Implantación</h3>
              <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto">
                Servicios de <strong>pago único</strong> para construir la base sólida que tu automatización necesita.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-black dark:text-white">Desde 349€</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Pago Único</div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-black dark:text-white mb-4">Web a Medida & CRM Connect</h4>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Si tu web actual es un obstáculo, diseñamos desde cero una infraestructura premium optimizada para IA. Conectamos tus herramientas actuales (CRM, Agendas) para que todo fluya hacia tu Dashboard.
                </p>
                <ul className="space-y-3 mb-8">
                  <ListItem iconColor="text-blue-500">Diseño UX/UI Premium</ListItem>
                  <ListItem iconColor="text-blue-500">Optimización de Conversión (CRO)</ListItem>
                  <ListItem iconColor="text-blue-500">Sincronización de Datos en Tiempo Real</ListItem>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-black dark:text-white">Desde 200€</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Pago Único</div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-black dark:text-white mb-4">Auditoría & Consultoría ISO 9001</h4>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Analizamos tus procesos actuales y diseñamos el mapa de automatización. Nuestro servicio de consultoría permite a tu negocio obtener el <strong>Certificado ISO 9001</strong> de gestión de calidad.
                </p>
                <ul className="space-y-3 mb-8">
                  <ListItem iconColor="text-amber-500">Mapeo de Procesos Críticos</ListItem>
                  <ListItem iconColor="text-amber-500">Preparación para Certificación ISO</ListItem>
                  <ListItem iconColor="text-amber-500">Roadmap de Digitalización Personalizado</ListItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Advanced Section */}
      <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300 border-y border-slate-100 dark:border-white/5 relative overflow-hidden">

            
            <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-4 block">
                    Ingeniería de Procesos
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 tracking-tight">Custom Advanced</h3>
                  <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-2xl">
                    ¿Tienes un proceso operativo muy específico o necesitas flujos multi-paso complejos? Diseñamos y mantenemos automatizaciones de alto nivel adaptadas al 100% a tu lógica de negocio.
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Integración Software Propietario
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Flujos de Decisión Autónomos
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Mantenimiento y Soporte L1
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-auto shrink-0 text-center md:text-left">
                  <div className="text-sm font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4">Inversión Estimada</div>
                  <div className="text-6xl font-bold text-black dark:text-white mb-2">+30-80€</div>
                  <div className="text-sm font-bold text-slate-400 dark:text-zinc-500 mb-8 uppercase tracking-widest">/mes</div>
                  
                  <Link href="/contacto" className="block w-full px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all text-center">
                    Consultar Viabilidad
                  </Link>

                </div>
              </div>
            </div>
        </section>

      {/* A la Carta Section */}
      <section id="funcionalidades" className="py-24 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300 scroll-mt-20 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Flexibilidad Total</span>
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">Funcionalidades a la Carta (Sin Plan)</h3>
              <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto">
                <strong>No necesitas contratar un plan mensual.</strong> Adquiere cualquier funcionalidad o módulo de forma 100% independiente para digitalizar procesos específicos de tu negocio.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeatureMiniCard title="Dashboard Core" price="+39€" desc="Acceso a tu panel de control, agenda y tareas." />
              <FeatureMiniCard title="Gestión Leads" price="+39€" desc="Sistema centralizado de clientes y documentos." />
              <FeatureMiniCard title="Contestador IceBraker" price="+29€" desc="Respuesta automática inicial a nuevos leads." />
              <FeatureMiniCard title="Recordatorios IA" price="+29€" desc="Avisos automáticos de citas y seguimientos." />
              <FeatureMiniCard title="Chatbot WhatsApp" price="+49€" desc="Atención 24/7 en el canal nº1." />
              <FeatureMiniCard title="Chatbot Web" price="+49€" desc="Asistente inteligente para tu página web." />
              <FeatureMiniCard title="WebConnect" price="+39€" desc="Conexión automática entre web y dashboard." />
              <FeatureMiniCard title="Seguimiento IA" price="+39€" desc="Calificación y seguimiento de leads." />
              <FeatureMiniCard title="Analíticas IA" price="+29€" desc="Visualización de datos en tiempo real." />
              <FeatureMiniCard title="Gestión Interna" price="+39€" desc="Tu asistente IA para consultas privadas." />
              <FeatureMiniCard title="Transcripciones" price="+39€" desc="Resúmenes de reuniones automáticos." />
              <FeatureMiniCard title="Funnel de Ventas" price="+59€" desc="Flujo automatizado de captación y cierre." />
              <FeatureMiniCard title="Prevención Churn" price="+59€" desc="IA predictiva para detectar y evitar bajas." />
              <FeatureMiniCard title="Captador Automático" price="+69€" desc="Scraping de portales y alerta de particulares." />
              <FeatureMiniCard title="Property Intel" price="+59€" desc="Análisis de mercado automático por zonas." />
              <FeatureMiniCard title="Informes Tasación" price="+49€" desc="Generación de valoraciones IA en PDF." />
              <FeatureMiniCard title="Captador Manual" price="+29€" desc="Gestión manual de propietarios en dashboard." />
              <FeatureMiniCard title="Publicador Web" price="+39€" desc="Envío automático de inmuebles a tu web." />
              <FeatureMiniCard title="Sugerencias IA" price="+39€" desc="Cruce inteligente de clientes y propiedades." />
            </div>
        </div>
      </section>



      {/* Recommendation Guide */}
      <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">¿Cuál es el plan para ti?</h2>
            <p className="text-slate-500 dark:text-zinc-400 text-lg">Guía rápida según tu momento actual.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            <RecommendationCard 
              letter="1" 
              badge="Para Empezar"
              title="Organización y Control" 
              desc="El **Plan Esencial** (99€/mes) es tu puerta de entrada. Ideal para pymes que necesitan control 24/7. Puedes personalizarlo añadiendo módulos sueltos desde +29€/mes." 
            />
            <RecommendationCard 
              letter="2" 
              badge="El Más Elegido"
              title="Automatización y Ventas" 
              desc="El **Plan Crecimiento** (199€/mes) es nuestra recomendación. Si eres inmobiliaria, acompáñalo del **Pack Captación** (+89€/mes) para dominar el mercado local desde el primer mes." 
              dark 
            />
            <RecommendationCard 
              letter="3" 
              badge="Escalabilidad"
              title="Infraestructura Total" 
              desc="Combina el **Plan Pro** (399€/mes) con el **Pack Inteligencia** (+149€/mes) o solicita **Custom Advanced** para tener el ecosistema más avanzado y a medida del sector." 
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TableRow({ label, v1, v2, v3 }: { label: string; v1: string; v2: string; v3: string }) {
  return (
    <tr className="border-b border-slate-50 dark:border-white/5">
      <td className="p-6 font-medium text-black dark:text-white">{label}</td>
      <td className="p-6">{v1}</td>
      <td className="p-6">{v2}</td>
      <td className="p-6">{v3}</td>
    </tr>
  );
}

function ListItem({ children, iconColor }: { children: React.ReactNode; iconColor: string }) {
  return (
    <li className="flex items-center">
      <svg className={`w-4 h-4 mr-3 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg> 
      {children}
    </li>
  );
}

function RecommendationCard({ letter, badge, title, desc, dark = false }: { letter: string; badge: string; title: string; desc: string; dark?: boolean }) {
  const formatDesc = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className={`font-bold ${dark ? "text-white dark:text-black" : "text-black dark:text-white"}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={`p-10 rounded-[2.5rem] flex flex-col gap-6 items-start relative overflow-hidden transition-all duration-300 h-full ${dark ? "bg-black dark:bg-white text-white dark:text-black shadow-2xl dark:shadow-none lg:scale-[1.05] z-10" : "bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-zinc-800"}`}>
      {dark && <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent dark:from-black/10 pointer-events-none"></div>}
      
      <div className="flex items-center justify-between w-full relative z-10">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${dark ? "bg-white/10 dark:bg-black/10" : "bg-white dark:bg-zinc-800 shadow-sm border border-slate-100 dark:border-white/5"}`}>
          {letter}
        </div>
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${dark ? "bg-white/20 dark:bg-black/10 text-white dark:text-black" : "bg-slate-200 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"}`}>
          {badge}
        </span>
      </div>
      
      <div className="relative z-10 mt-2 flex-1">
        <h4 className={`text-2xl font-bold mb-4 tracking-tight ${dark ? "text-white dark:text-black" : "text-black dark:text-white"}`}>{title}</h4>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/80 dark:text-black/80" : "text-slate-600 dark:text-zinc-400"}`}>
          {formatDesc(desc)}
        </p>
      </div>
    </div>
  );
}

function ModuleItem({ title, price, desc, dark = false }: { title: string; price: string; desc: string; dark?: boolean }) {
  return (
    <div className={`flex gap-5 p-4 rounded-2xl transition-all border ${dark ? "border-white/5 hover:bg-white/10" : "border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5"}`}>
      <div className={`shrink-0 h-10 min-w-[70px] px-3 rounded-xl flex items-center justify-center font-bold text-sm ${dark ? "bg-white text-black" : "bg-black text-white dark:bg-white dark:text-black"}`}>
        {price.split('/')[0]}
      </div>
      <div>
        <h5 className={`font-bold mb-1 ${dark ? "text-white dark:text-black" : "text-black dark:text-white"}`}>{title}</h5>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/70 dark:text-black/70" : "text-slate-500 dark:text-zinc-400"}`}>{desc}</p>
      </div>
    </div>
  );
}

function FeatureMiniCard({ title, price, desc }: { title: string; price: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-black dark:hover:border-white transition-all">
      <div className="flex justify-between items-start mb-3">
        <h5 className="font-bold text-black dark:text-white">{title}</h5>
        <span className="text-sm font-bold text-black dark:text-white bg-slate-50 dark:bg-white/5 px-2 py-0.5 rounded-lg">{price}</span>
      </div>
      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
