import { sectors } from "@/data/sectors";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

// In Next.js 15/App Router with static params
export async function generateStaticParams() {
  return Object.keys(sectors).map((slug) => ({
    slug: slug,
  }));
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = sectors[slug];

  if (!sector) {
    notFound();
  }

  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      {/* Sector Hero */}
      <header className="hero-gradient pt-40 pb-24 px-6 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
          <div>
            <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              Sectores / {sector.category}
            </span>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white">
              {sector.title} <br />
              <span className="font-serif-italic text-slate-500 dark:text-zinc-500">{sector.titleSerif}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-lg">
              {sector.description}
            </p>
            <div className="flex space-x-4">
              <Link href="/contacto" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold btn-hover transition-all duration-300">
                Solicitar Auditoría
              </Link>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl dark:shadow-white/5 border border-transparent dark:border-white/10">
            <img src={sector.image} alt={sector.category} className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white dark:bg-black border-b border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {sector.stats.map((stat, index) => (
              <div key={index} className={index === 2 ? "col-span-2 md:col-span-1" : ""}>
                <div className="text-5xl font-bold mb-4 text-black dark:text-white">{stat.value}</div>
                <p className="text-slate-500 dark:text-zinc-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Soluciones Específicas</h2>
            <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Hemos diseñado módulos pensados exclusivamente para los retos operativos de tu sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sector.features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 feature-card">
                <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-black dark:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{feature.title}</h4>
                <p className="text-slate-600 dark:text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">Ecosistema Digital</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white tracking-tight">
                {sector.dashboardBenefits.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {sector.dashboardBenefits.description}
              </p>

              <div className="bg-slate-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-white/5 mb-10">
                <h5 className="font-bold text-black dark:text-white mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Integración con tu stack actual
                </h5>
                <p className="text-sm text-slate-600 dark:text-zinc-400">
                  {sector.dashboardBenefits.integration}
                </p>
              </div>

              <div className="space-y-6">
                {sector.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shrink-0 mt-1 text-[10px] font-bold transition-transform group-hover:scale-110">
                      0{index + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-black dark:text-white">{step.title}</h5>
                      <p className="text-sm text-slate-500 dark:text-zinc-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-[4rem] -z-10"></div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                <img 
                  src={sector.dashboardBenefits.image} 
                  alt="Dashboard Preview" 
                  className="rounded-[2rem] w-full aspect-square lg:aspect-auto lg:h-[600px] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                />
                <div className="p-6 text-center">
                  <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Panel Central de Operaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Pricing Section */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-6 block">Configuración Recomendada</span>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-12 tracking-tight">Tu sistema ideal para {sector.category}</h2>
          
          <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border-2 border-black dark:border-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Best Value
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{sector.recommendedPlan.name}</h3>
            <div className="text-5xl font-bold text-black dark:text-white mb-8">{sector.recommendedPlan.price}</div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {sector.recommendedPlan.modules.map((mod, i) => (
                <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-300">
                  {mod}
                </span>
              ))}
            </div>
            
            <Link href="/contacto" className="inline-block px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
              Empezar ahora
            </Link>
            
            <p className="mt-6 text-xs text-slate-400 dark:text-zinc-500">
              * Incluye setup inicial y formación de equipo.
            </p>
          </div>
          
          <div className="mt-12">
            <Link href="/planes" className="text-sm font-bold text-slate-400 hover:text-black dark:hover:text-white transition-colors group">
              Ver todos los planes y módulos individuales 
              <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
