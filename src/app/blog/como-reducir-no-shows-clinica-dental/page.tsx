import type { Metadata } from "next";
import Link from "next/link";
import ViewTracker from "@/components/blog/ViewTracker";

export const metadata: Metadata = {
  title: "Cómo Reducir No-Shows en Clínica Dental un 80% — Sistema de Recordatorios 2025",
  description:
    "Las clínicas dentales pierden entre 1.200€ y 4.000€/mes por no-shows. Te mostramos el sistema exacto de recordatorios automáticos multicapa que reduce ausencias hasta un 80%.",
  keywords: [
    "software para reducir no-shows clínica dental",
    "cómo reducir no-shows clínica dental",
    "recordatorios automáticos citas clínica dental",
    "reducir ausencias pacientes clínica",
    "automatización recordatorios clínica España",
  ],
  openGraph: {
    title: "Cómo Reducir los No-Shows en tu Clínica Dental un 80% | Synora",
    description:
      "El sistema de recordatorios multicapa que usan las clínicas dentales que han resuelto el problema de las citas no atendidas. Paso a paso.",
    url: "https://synora.es/blog/como-reducir-no-shows-clinica-dental",
    siteName: "Synora",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical: "https://synora.es/blog/como-reducir-no-shows-clinica-dental",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo Reducir No-Shows en Clínica Dental un 80% — Sistema de Recordatorios 2025",
    description: "El sistema exacto de recordatorios automáticos que reduce no-shows en clínicas dentales hasta un 80%.",
    author: { "@type": "Organization", name: "Synora", url: "https://synora.es" },
    publisher: { "@type": "Organization", name: "Synora", url: "https://synora.es" },
    datePublished: "2025-05-08",
    dateModified: "2025-05-15",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://synora.es/blog/como-reducir-no-shows-clinica-dental" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto dinero pierde una clínica dental por no-shows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una clínica dental media con agenda de 6-8 pacientes diarios pierde entre 1.200€ y 4.000€ al mes por citas no atendidas, dependiendo del tipo de tratamiento y el porcentaje de ausencias. En clínicas con mucho trabajo de ortodoncia o implantes, esta cifra puede ser significativamente mayor.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto se tarda en implementar un sistema de recordatorios automáticos en una clínica dental?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con una plataforma como Synora, la implementación completa del sistema de recordatorios para una clínica dental lleva entre 48 y 72 horas desde la contratación hasta que el sistema está funcionando en producción.",
        },
      },
    ],
  };

  return (
    <main className="pt-32 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-full">
              Sector Clínicas
            </span>
            <span className="text-xs text-slate-400 dark:text-zinc-600">6 min de lectura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6 leading-tight">
            Cómo reducir los no-shows en tu clínica dental un 80% con recordatorios automáticos
          </h1>
          <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
            Una clínica dental media pierde entre 1.200€ y 4.000€ al mes por citas no atendidas. Te
            mostramos el sistema exacto de recordatorios multicapa que usan las clínicas que han
            resuelto este problema.
          </p>
          <time className="block mt-4 text-sm text-slate-400 dark:text-zinc-600" dateTime="2025-05-08">
            8 de mayo de 2025
          </time>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-zinc-400 prose-li:text-slate-600 dark:prose-li:text-zinc-400 prose-strong:text-black dark:prose-strong:text-white">

          <h2>El coste real de un no-show en una clínica dental</h2>
          <p>
            Antes de hablar de soluciones, hay que cuantificar el problema. Una clínica dental con
            agenda completa de 6–8 pacientes diarios tiene, de media, una tasa de no-show del
            10–18%. Eso significa entre 3 y 7 citas no atendidas por semana.
          </p>
          <p>
            Si el ingreso medio por cita (contando limpiezas, revisiones, tratamientos menores) es de
            80€, eso son entre 240€ y 560€ perdidos cada semana. Al mes: entre 960€ y 2.240€. Y eso
            sin contar los tratamientos de mayor coste (ortodoncia, implantes, estética) donde una
            sola cita perdida puede representar más de 200€.
          </p>
          <p>
            La razón por la que esto ocurre es simple:{" "}
            <strong>
              el paciente no recibió ningún recordatorio, lo recibió demasiado tarde, o lo recibió por
              un canal que no usa.
            </strong>
          </p>

          <h2>Por qué los recordatorios simples no son suficientes</h2>
          <p>
            Muchas clínicas ya envían algún tipo de recordatorio: un SMS el día anterior, un email
            al confirmar la cita. El problema es que un único recordatorio tiene una tasa de
            efectividad del 40–55%. Lejos del 80% que se puede alcanzar con un sistema multicapa.
          </p>
          <p>Los motivos por los que falla el recordatorio único:</p>
          <ul>
            <li>El SMS se envía muy cerca de la cita y el paciente ya tiene otro plan.</li>
            <li>El email no se lee hasta después de la hora de la cita.</li>
            <li>El paciente quería cancelar pero no encontró cómo hacerlo fácilmente.</li>
            <li>No hay ninguna capa de "rescate" si el primer recordatorio falla.</li>
          </ul>

          <h2>El sistema de recordatorios multicapa que funciona</h2>
          <p>
            Las clínicas que han reducido sus no-shows por debajo del 5% usan un sistema de 4 capas:
          </p>

          <h3>Capa 1: Confirmación inmediata al reservar</h3>
          <p>
            En el momento en que se agenda la cita (presencialmente, por teléfono o por la web), el
            paciente recibe automáticamente un mensaje de confirmación con los detalles:{" "}
            <em>fecha, hora, dirección, nombre del médico y enlace para cancelar o cambiar la cita</em>.
          </p>
          <p>
            El canal ideal: <strong>WhatsApp</strong>. Tasa de apertura superior al 95% frente al
            20–30% del email. Si no hay WhatsApp, SMS.
          </p>

          <h3>Capa 2: Recordatorio 72 horas antes</h3>
          <p>
            Tres días antes de la cita, el sistema envía un recordatorio amable con los datos de la
            cita y un botón de confirmación o cancelación. El paciente puede responder "1" para
            confirmar o "2" para cancelar directamente desde WhatsApp.
          </p>
          <p>
            Si cancela, el sistema libera el hueco y puede notificar automáticamente a pacientes en
            lista de espera. Si confirma, el sistema lo registra. Si no responde, pasa a la capa 3.
          </p>

          <h3>Capa 3: Recordatorio 24 horas antes con acción requerida</h3>
          <p>
            El día anterior, el sistema envía un segundo recordatorio pero con un tono más directo:{" "}
            <em>"Mañana tienes cita con nosotros. Por favor, confirma tu asistencia para que podamos
            reservarte el tiempo."</em>
          </p>
          <p>
            Los pacientes que no han respondido a las 72h tienen el doble de probabilidad de ser
            no-show. Este segundo toque captura a muchos de ellos.
          </p>

          <h3>Capa 4: Alerta al equipo para los no confirmados</h3>
          <p>
            Si a las 8h del día de la cita el paciente no ha confirmado, el sistema alerta
            automáticamente a la recepción con una lista de los pacientes pendientes de confirmar.
            El equipo puede hacer una llamada rápida solo a quienes importa llamar, en lugar de
            llamar a todos.
          </p>

          <h2>Resultados reales del sistema</h2>
          <p>
            Las clínicas que implementan este sistema de 4 capas pasan de una tasa de no-show del
            12–18% a menos del 4% en los primeros 60 días. El ROI es inmediato: con una inversión
            mensual de entre 99€ y 199€ para el sistema, la recuperación de ingresos perdidos es de
            entre 8x y 20x.
          </p>

          <h2>Cómo se integra con tu software actual</h2>
          <p>
            El sistema de recordatorios de Synora se conecta con el software de gestión que ya usas
            en tu clínica (Medesk, Cliniwin, Doctoralia, o cualquier sistema con API). No necesitas
            migrar datos ni cambiar tu forma de trabajar. Los recordatorios salen automáticamente
            cuando se agenda una cita en tu sistema actual.
          </p>
          <p>
            La implementación completa lleva entre 48 y 72 horas desde la contratación.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
            Calcula cuánto está perdiendo tu clínica por no-shows
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 mb-6">
            Cuéntanos cuántas citas tienes a la semana y cuál es tu tasa de ausencias. Te preparamos
            un análisis gratuito con el impacto económico exacto y cómo reducirlo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Calcular mis pérdidas por no-shows
          </Link>
        </div>

        <nav className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5">
          <p className="text-sm text-slate-400 dark:text-zinc-600 mb-4">Artículos relacionados</p>
          <div className="space-y-3">
            <Link href="/blog/cuanto-cuesta-automatizar-clinica-medica-privada" className="block font-semibold text-black dark:text-white hover:underline underline-offset-4">
              → ¿Cuánto cuesta automatizar una clínica médica privada?
            </Link>
            <Link href="/clinicas" className="block font-semibold text-black dark:text-white hover:underline underline-offset-4">
              → Ver todas las soluciones de Synora para clínicas
            </Link>
          </div>
        </nav>
      </article>
      <ViewTracker slug="como-reducir-no-shows-clinica-dental" />
    </main>
  );
}
