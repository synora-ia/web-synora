"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FloatingBlobs from "@/components/ui/FloatingBlobs";

const slides = [
  {
    category: "Sector Inmobiliario",
    title: "Soluciones para",
    titleSerif: "Inmobiliarias.",
    description: "Automatizamos la captación, valoración y gestión de exclusivas. Convierte tu agencia en una máquina de cerrar operaciones con datos e inteligencia artificial.",
    features: [
      { title: "Captación 24/7", desc: "IA que califica propietarios y programa visitas automáticamente." },
      { title: "Valoración Instantánea", desc: "Informes de mercado precisos generados en segundos." }
    ],
    link: "/inmobiliarias",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Sector Salud",
    title: "Soluciones para",
    titleSerif: "Clínicas y Centros.",
    description: "Optimizamos la gestión de pacientes y agendas para centros médicos, dentales y fisioterapia. Automatización total desde la cita hasta el post-tratamiento.",
    features: [
      { title: "Agenda Inteligente", desc: "IA que gestiona huecos, recordatorios y cancelaciones en tiempo real." },
      { title: "Fidelización Activa", desc: "Seguimiento automático de tratamientos y bonos de sesiones." }
    ],
    link: "/clinicas",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Sector Fitness",
    title: "Soluciones para",
    titleSerif: "Gimnasios y Centros.",
    description: "Reduce la tasa de bajas con alertas de churn preventivas y automatiza el alta de nuevos socios sin fricciones.",
    features: [
      { title: "Prevención de Bajas", desc: "IA que detecta socios en riesgo y activa campañas de retención." },
      { title: "Altas Express", desc: "Proceso de inscripción y pago 100% digital y automatizado." }
    ],
    link: "/gimnasios",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Sector Hostelería",
    title: "Soluciones para",
    titleSerif: "Restaurantes.",
    description: "Libro de reservas inteligente y gestión de no-shows. Conoce a tus clientes antes de que crucen la puerta.",
    features: [
      { title: "Cero No-Shows", desc: "Confirmación automática y cobro de fianza en reservas críticas." },
      { title: "Guest Intelligence", desc: "Historial de preferencias y alergias integrado en cada reserva." }
    ],
    link: "/restaurantes",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Sector Servicios",
    title: "Soluciones para",
    titleSerif: "Reformas y Obras.",
    description: "Automatizamos presupuestos, agendas y seguimiento de trabajos. Control total de tus cuadrillas y materiales desde un solo panel.",
    features: [
      { title: "Presupuestos IA", desc: "Generación y envío automático de propuestas técnicas en minutos." },
      { title: "Gestión de Gremios", desc: "Coordinación automática de técnicos y materiales según la obra." }
    ],
    link: "/servicios",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      id="sectores-carousel" 
      className="bg-black py-32 px-6 relative overflow-hidden border-y border-white/5 transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <FloatingBlobs 
        blobs={[
          { color: "bg-purple-600/30", className: "-top-[20%] -left-[10%] w-[70%] h-[70%]", animation: "animate-drift" },
          { color: "bg-orange-600/30", className: "-bottom-[20%] -right-[10%] w-[70%] h-[70%]", animation: "animate-drift-slow", delay: "2s" },
          { color: "bg-pink-600/10", className: "top-[20%] right-[10%] w-[50%] h-[50%]", animation: "animate-drift-reverse", delay: "4s" },
        ]}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative min-h-[500px]">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-20 items-center transition-all duration-700 ${
                index === currentSlide 
                  ? "opacity-100 translate-x-0 relative" 
                  : "opacity-0 translate-x-12 absolute inset-0 pointer-events-none"
              }`}
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6">
                  {slide.category}
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                  {slide.title} <br />
                  <span className="font-serif-italic text-white/60">{slide.titleSerif}</span>
                </h2>
                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                  {slide.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  {slide.features.map((f, i) => (
                    <div key={i}>
                      <h4 className="text-white font-bold text-lg mb-2">{f.title}</h4>
                      <p className="text-white/40 text-sm">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href={slide.link} className="inline-flex items-center text-white border-b border-white/30 pb-1 hover:border-white transition-colors font-bold">
                  Explorar {slide.category.toLowerCase()}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img src={slide.image} alt={slide.titleSerif} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-16">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white/40" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
