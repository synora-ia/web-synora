import type { Metadata } from "next";
import Link from "next/link";
import ViewTracker from "@/components/blog/ViewTracker";

export const metadata: Metadata = {
  title: "7 Ejemplos de Automatización para Empresas de Reformas (Con Flujos Reales) — 2025",
  description:
    "Los 7 procesos que toda empresa de reformas puede automatizar hoy: presupuestos, seguimiento de obras, gestión de cuadrillas y cobros. Con los flujos exactos incluidos.",
  keywords: [
    "ejemplos automatización empresa de reformas",
    "automatización empresas reformas España",
    "automatizar presupuestos empresa reformas",
    "gestión cuadrillas automática",
    "software empresa reformas automatización",
  ],
  openGraph: {
    title: "7 Ejemplos de Automatización para Empresas de Reformas | Synora",
    description:
      "Desde el primer contacto hasta el cobro final. Los 7 flujos de automatización que más impacto tienen en una empresa de reformas.",
    url: "https://synora.es/blog/ejemplos-automatizacion-empresa-reformas",
    siteName: "Synora",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical: "https://synora.es/blog/ejemplos-automatizacion-empresa-reformas",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 Ejemplos de Automatización para Empresas de Reformas (Con Flujos Reales) — 2025",
    description: "Los 7 procesos que toda empresa de reformas puede automatizar: presupuestos, seguimiento, cuadrillas y cobros.",
    author: { "@type": "Organization", name: "Synora", url: "https://synora.es" },
    publisher: { "@type": "Organization", name: "Synora", url: "https://synora.es" },
    datePublished: "2025-05-15",
    dateModified: "2025-05-15",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://synora.es/blog/ejemplos-automatizacion-empresa-reformas" },
  };

  const examples = [
    {
      n: "01",
      title: "Presupuesto automático desde el primer WhatsApp",
      body: 'Cuando un cliente escribe "quiero reformar mi cocina" por WhatsApp, el chatbot recoge la información básica (metros cuadrados, tipo de reforma, plazo deseado) y genera automáticamente un presupuesto orientativo en PDF que se envía al cliente en menos de 5 minutos. Sin que nadie del equipo haya intervenido.',
      impact: "Reduce el tiempo de respuesta de 24–48h a menos de 10 minutos.",
    },
    {
      n: "02",
      title: "Seguimiento automático de presupuestos enviados",
      body: "El 60% de los presupuestos que no se cierran no se rechazan activamente: simplemente nadie hace seguimiento. Cada presupuesto enviado activa automáticamente una secuencia: recordatorio a los 3 días, actualización de precio si hay variación a los 7 días, y cierre de oportunidad con encuesta a los 14 días si no hay respuesta.",
      impact: "Las empresas que implementan este flujo aumentan su tasa de cierre un 25–40%.",
    },
    {
      n: "03",
      title: "Asignación automática de cuadrillas por disponibilidad",
      body: "Cuando se confirma una obra, el sistema consulta automáticamente la disponibilidad de los equipos, asigna la cuadrilla adecuada según el tipo de trabajo y envía la orden de trabajo al equipo por WhatsApp con todos los detalles (dirección, cliente, alcance, materiales necesarios). Sin llamadas internas de coordinación.",
      impact: "Elimina 3–5 horas semanales de coordinación telefónica interna.",
    },
    {
      n: "04",
      title: "Actualización del estado de obra en tiempo real",
      body: "El equipo en obra actualiza el estado de los trabajos desde el móvil (una foto + un estado: iniciado, en progreso, terminado, bloqueado). El sistema actualiza automáticamente el dashboard del gerente y notifica al cliente los avances sin que nadie tenga que escribir informes ni hacer llamadas de actualización.",
      impact: "El cliente está siempre informado. Las reclamaciones por 'falta de comunicación' desaparecen.",
    },
    {
      n: "05",
      title: "Gestión automática de materiales y proveedores",
      body: "Cuando una obra avanza a cierta fase, el sistema genera automáticamente las órdenes de compra de materiales necesarios para la siguiente fase y las envía a los proveedores habituales. Si hay un problema de stock, alerta al gerente con tiempo suficiente para buscar alternativas.",
      impact: "Reduce los retrasos por falta de material en un 70%.",
    },
    {
      n: "06",
      title: "Facturación y cobros automáticos por hitos",
      body: "Las obras de cierta envergadura se facturan por hitos (inicio, avance 50%, finalización). Cuando la obra alcanza cada hito, el sistema genera automáticamente la factura correspondiente, la envía al cliente y programa el recordatorio de cobro si no se recibe el pago en el plazo acordado.",
      impact: "La tesorería mejora porque no hay facturas olvidadas ni cobros retrasados por falta de seguimiento.",
    },
    {
      n: "07",
      title: "Solicitud de valoración y captación de referencias",
      body: "48 horas después de terminar una obra y cobrar la última factura, el sistema envía automáticamente al cliente una solicitud de valoración en Google Maps y le pregunta si conoce a alguien que esté planificando una reforma. Los clientes satisfechos que responden en caliente generan el doble de referencias que los contactados semanas después.",
      impact: "Las empresas que implementan esto ven un 30–50% de aumento en leads por referidos.",
    },
  ];

  return (
    <main className="pt-32 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-full">
              Sector Servicios
            </span>
            <span className="text-xs text-slate-400 dark:text-zinc-600">7 min de lectura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6 leading-tight">
            7 ejemplos reales de automatización para empresas de reformas (con flujos incluidos)
          </h1>
          <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
            Desde el primer WhatsApp del cliente hasta el cobro final. Te mostramos los 7 procesos
            que toda empresa de reformas puede automatizar hoy, con los flujos exactos y el impacto
            real en el negocio.
          </p>
          <time className="block mt-4 text-sm text-slate-400 dark:text-zinc-600" dateTime="2025-05-15">
            15 de mayo de 2025
          </time>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-zinc-400 prose-li:text-slate-600 dark:prose-li:text-zinc-400 prose-strong:text-black dark:prose-strong:text-white">
          <p>
            El sector de reformas es uno de los más desatendidos cuando se habla de automatización.
            La mayor parte del contenido sobre automatización empresarial habla de ecommerce, SaaS o
            servicios digitales. Pero las empresas de reformas tienen exactamente el mismo tipo de
            procesos repetitivos, exactamente los mismos problemas de seguimiento y exactamente las
            mismas oportunidades de eficiencia.
          </p>
          <p>
            La diferencia es que nadie había escrito todavía la guía específica para ellas. Aquí está.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {examples.map((ex) => (
            <div key={ex.n} className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
              <div className="flex items-start gap-5">
                <span className="text-3xl font-bold text-slate-200 dark:text-zinc-700 shrink-0 leading-none">{ex.n}</span>
                <div>
                  <h2 className="text-xl font-bold text-black dark:text-white mb-3">{ex.title}</h2>
                  <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">{ex.body}</p>
                  <div className="flex items-start gap-2 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl">
                    <span className="text-green-500 font-bold text-sm shrink-0">Impacto:</span>
                    <span className="text-sm text-slate-600 dark:text-zinc-400">{ex.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
            ¿Qué flujos tienen más impacto en tu empresa de reformas?
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 mb-6">
            Cada empresa de reformas tiene sus propios cuellos de botella. En la auditoría gratuita
            identificamos los 3 procesos de mayor impacto para tu situación concreta y te mostramos
            cómo automatizarlos.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Solicitar auditoría para mi empresa
          </Link>
        </div>

        <nav className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5">
          <p className="text-sm text-slate-400 dark:text-zinc-600 mb-4">Artículos relacionados</p>
          <div className="space-y-3">
            <Link href="/blog/que-es-la-automatizacion-operativa-para-pymes" className="block font-semibold text-black dark:text-white hover:underline underline-offset-4">
              → Qué es la automatización operativa para pymes
            </Link>
            <Link href="/servicios" className="block font-semibold text-black dark:text-white hover:underline underline-offset-4">
              → Ver soluciones de Synora para empresas de servicios
            </Link>
          </div>
        </nav>
      </article>
      <ViewTracker slug="ejemplos-automatizacion-empresa-reformas" />
    </main>
  );
}
