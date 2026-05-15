import type { Metadata } from "next";
import Link from "next/link";
import ViewTracker from "@/components/blog/ViewTracker";

export const metadata: Metadata = {
  title: "Cómo Automatizar el Seguimiento de Clientes en una Inmobiliaria (Sin Cambiar de CRM)",
  description:
    "El 70% de los leads inmobiliarios se pierden por falta de seguimiento. Aquí está el sistema paso a paso para automatizarlo sin cambiar el CRM que ya usas.",
  keywords: [
    "cómo automatizar el seguimiento de clientes en una inmobiliaria",
    "automatizar seguimiento leads inmobiliaria",
    "seguimiento automático clientes inmobiliaria",
    "gestión leads inmobiliarios automática",
    "reducir tareas repetitivas agencia inmobiliaria",
  ],
  openGraph: {
    title: "Automatiza el Seguimiento de Clientes en tu Inmobiliaria | Synora",
    description:
      "Sin cambiar de CRM, sin contratar más agentes. El sistema de seguimiento automático que usan las agencias que no pierden leads.",
    url: "https://synora.es/blog/automatizar-seguimiento-clientes-inmobiliaria",
    siteName: "Synora",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical: "https://synora.es/blog/automatizar-seguimiento-clientes-inmobiliaria",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo Automatizar el Seguimiento de Clientes en una Inmobiliaria (Sin Cambiar de CRM)",
    description: "El 70% de los leads inmobiliarios se pierden por falta de seguimiento. Sistema paso a paso.",
    author: { "@type": "Organization", name: "Synora", url: "https://synora.es" },
    publisher: { "@type": "Organization", name: "Synora", url: "https://synora.es" },
    datePublished: "2025-05-12",
    dateModified: "2025-05-15",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://synora.es/blog/automatizar-seguimiento-clientes-inmobiliaria" },
  };

  return (
    <main className="pt-32 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-full">
              Sector Inmobiliario
            </span>
            <span className="text-xs text-slate-400 dark:text-zinc-600">9 min de lectura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6 leading-tight">
            Cómo automatizar el seguimiento de clientes en una inmobiliaria (sin cambiar de CRM)
          </h1>
          <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
            El 70% de los leads inmobiliarios se pierden por falta de seguimiento. No porque los
            agentes sean malos, sino porque el proceso depende de que alguien se acuerde. Aquí está
            la solución paso a paso.
          </p>
          <time className="block mt-4 text-sm text-slate-400 dark:text-zinc-600" dateTime="2025-05-12">
            12 de mayo de 2025
          </time>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-zinc-400 prose-li:text-slate-600 dark:prose-li:text-zinc-400 prose-strong:text-black dark:prose-strong:text-white">

          <h2>El problema real: no es la cantidad de leads, es el seguimiento</h2>
          <p>
            La mayoría de agencias inmobiliarias invierte dinero en captar leads: Idealista, Fotocasa,
            Google Ads, redes sociales. Pero hay un agujero en el embudo que pocas quieren mirar de
            frente: el seguimiento.
          </p>
          <p>
            Un estudio de la NAR (National Association of Realtors) reveló que el{" "}
            <strong>70% de los compradores acaban trabajando con el primer agente que les responde</strong>.
            Y sin embargo, la respuesta media de una agencia inmobiliaria a un lead online es de más
            de 47 horas.
          </p>
          <p>
            Para cuando llamas al lead, ya está hablando con otra agencia.
          </p>

          <h2>Por qué el CRM solo no resuelve el problema</h2>
          <p>
            "Ya usamos un CRM" es la respuesta más común cuando se habla de automatización en
            inmobiliarias. Pero un CRM es una base de datos, no un sistema de seguimiento.
          </p>
          <p>
            Un CRM te dice <em>dónde están tus leads</em>. La automatización te dice{" "}
            <em>qué tiene que pasar con cada lead en cada momento</em>, y lo ejecuta sin que nadie
            tenga que recordarlo.
          </p>
          <p>La diferencia en práctica:</p>
          <ul>
            <li>
              <strong>Con CRM:</strong> El agente ve el lead en el CRM → se acuerda de llamar → llama
              cuando puede → actualiza el estado manualmente.
            </li>
            <li>
              <strong>Con automatización:</strong> El lead entra → mensaje automático en 2 minutos →
              si no responde, seguimiento a las 24h → si responde, alerta al agente → el CRM se
              actualiza solo → el agente solo interviene cuando hay una oportunidad real.
            </li>
          </ul>

          <h2>Los 6 flujos de seguimiento que toda agencia inmobiliaria debería automatizar</h2>

          <h3>Flujo 1: Respuesta inmediata al lead nuevo</h3>
          <p>
            En el momento en que un lead entra desde cualquier canal (portal, web, formulario de
            contacto, redes sociales), el sistema envía automáticamente un mensaje personalizado en
            menos de 2 minutos:{" "}
            <em>
              "Hola [nombre], soy del equipo de [agencia]. He visto que estás interesado en [tipo de
              propiedad] en [zona]. ¿Cuándo tienes 10 minutos para contarme qué estás buscando?"
            </em>
          </p>
          <p>
            Este primer mensaje tiene tasas de respuesta del 40–60% cuando llega en los primeros
            5 minutos. Pasada una hora, la tasa cae por debajo del 15%.
          </p>

          <h3>Flujo 2: Calificación automática por chatbot</h3>
          <p>
            Si el lead responde al primer mensaje, un chatbot IA continúa la conversación para
            recoger la información básica: presupuesto, zona de interés, si ya tiene préstamo
            aprobado, urgencia temporal. El agente recibe una ficha del lead precalificado, lista
            para actuar, sin haber tenido que hacer ninguna llamada previa.
          </p>

          <h3>Flujo 3: Secuencia de seguimiento para leads fríos</h3>
          <p>
            Los leads que no responden al primer contacto no están muertos, están fríos. Un lead que
            buscó piso en enero puede estar listo para comprar en abril. La secuencia de reactivación
            automática los mantiene en el radar sin esfuerzo: mensajes a los 3 días, 7 días, 14 días
            y 30 días, con contenido de valor (nuevas propiedades en su zona, bajadas de precio,
            información del mercado).
          </p>

          <h3>Flujo 4: Confirmación y preparación de visitas</h3>
          <p>
            Cuando se agenda una visita, el sistema envía automáticamente la confirmación con
            dirección, hora y nombre del agente. 24h antes, envía un recordatorio con la opción de
            confirmar o cambiar. El día de la visita, el agente recibe un resumen de lo que sabe del
            cliente para prepararse.
          </p>

          <h3>Flujo 5: Seguimiento post-visita</h3>
          <p>
            Una hora después de la visita, el sistema envía al cliente un mensaje agradeciendo su
            tiempo y preguntando qué le ha parecido el inmueble. Las respuestas se clasifican
            automáticamente (interesado, no interesado, quiere pensar) y el sistema actúa en
            consecuencia: propone una segunda visita, sugiere inmuebles alternativos, o programa un
            seguimiento a los 7 días.
          </p>

          <h3>Flujo 6: Reactivación de la base de datos dormida</h3>
          <p>
            Cada agencia tiene una base de datos de leads que lleva meses sin tocar. Un flujo de
            reactivación automático —con un mensaje personalizado basado en lo que buscaban cuando
            contactaron— recupera entre un 5% y un 12% de esos contactos en clientes activos.
          </p>

          <h2>Cómo funciona sin cambiar tu CRM actual</h2>
          <p>
            El sistema de automatización de Synora se integra por encima de tu CRM actual
            (Immovilla, Witei, Inmovilla, Salesforce, o cualquier sistema con API). Los datos fluyen
            en ambas direcciones: lo que ocurre en la automatización actualiza el CRM, y los cambios
            en el CRM activan los flujos automáticos correspondientes.
          </p>
          <p>
            No hay migración de datos. No hay curva de aprendizaje para el equipo. El CRM sigue
            siendo el mismo; lo que cambia es que ahora hace cosas solo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
            ¿Cuántos leads está perdiendo tu agencia cada mes?
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 mb-6">
            Cuéntanos cuántos leads recibes al mes y cómo es tu proceso de seguimiento actual. Te
            preparamos un análisis gratuito con el número de oportunidades que se están escapando.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Analizar mi proceso de seguimiento
          </Link>
        </div>

        <nav className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5">
          <p className="text-sm text-slate-400 dark:text-zinc-600 mb-4">Artículos relacionados</p>
          <div className="space-y-3">
            <Link href="/blog/que-es-la-automatizacion-operativa-para-pymes" className="block font-semibold text-black dark:text-white hover:underline underline-offset-4">
              → Qué es la automatización operativa para pymes
            </Link>
            <Link href="/inmobiliarias" className="block font-semibold text-black dark:text-white hover:underline underline-offset-4">
              → Ver todas las soluciones de Synora para inmobiliarias
            </Link>
          </div>
        </nav>
      </article>
      <ViewTracker slug="automatizar-seguimiento-clientes-inmobiliaria" />
    </main>
  );
}
