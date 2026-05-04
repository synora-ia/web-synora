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
    <main>
      <Navbar />
      
      {/* Sector Hero */}
      <header className="hero-gradient pt-40 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">
              Sectores / {sector.category}
            </span>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
              {sector.title} <br />
              <span className="font-serif-italic text-slate-500">{sector.titleSerif}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg">
              {sector.description}
            </p>
            <div className="flex space-x-4">
              <Link href="/contacto" className="px-8 py-4 bg-black text-white rounded-full font-bold btn-hover">
                Solicitar Auditoría
              </Link>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={sector.image} alt={sector.category} className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {sector.stats.map((stat, index) => (
              <div key={index} className={index === 2 ? "col-span-2 md:col-span-1" : ""}>
                <div className="text-5xl font-bold mb-4 text-black">{stat.value}</div>
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluciones Específicas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hemos diseñado módulos pensados exclusivamente para los retos operativos de tu sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sector.features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 feature-card">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-black">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Dashboard Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Gestión Inteligente</h2>
              <p className="text-lg text-slate-600 mb-10">
                Centralizamos cada aspecto de tu operativa en un único panel diseñado para la máxima eficiencia.
              </p>

              <div className="space-y-8">
                {sector.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 mt-1 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">{step.title}</h5>
                      <p className="text-slate-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[3rem] shadow-xl border border-slate-100">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="rounded-2xl shadow-lg mb-6" />
              <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">Panel de Control Centralizado</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
