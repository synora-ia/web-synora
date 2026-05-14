"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FloatingBlobs from "@/components/ui/FloatingBlobs";
import { useLanguage } from "../layout/LanguageContext";

export default function Carousel() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      category: t("carousel.inmo.category"),
      title: t("carousel.solutions_for"),
      titleSerif: t("carousel.inmo.titleSerif"),
      description: t("carousel.inmo.description"),
      features: [
        { title: t("carousel.inmo.f1_title"), desc: t("carousel.inmo.f1_desc") },
        { title: t("carousel.inmo.f2_title"), desc: t("carousel.inmo.f2_desc") }
      ],
      link: "/inmobiliarias",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: t("carousel.health.category"),
      title: t("carousel.solutions_for"),
      titleSerif: t("carousel.health.titleSerif"),
      description: t("carousel.health.description"),
      features: [
        { title: t("carousel.health.f1_title"), desc: t("carousel.health.f1_desc") },
        { title: t("carousel.health.f2_title"), desc: t("carousel.health.f2_desc") }
      ],
      link: "/clinicas",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: t("carousel.fitness.category"),
      title: t("carousel.solutions_for"),
      titleSerif: t("carousel.fitness.titleSerif"),
      description: t("carousel.fitness.description"),
      features: [
        { title: t("carousel.fitness.f1_title"), desc: t("carousel.fitness.f1_desc") },
        { title: t("carousel.fitness.f2_title"), desc: t("carousel.fitness.f2_desc") }
      ],
      link: "/gimnasios",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: t("carousel.hospitality.category"),
      title: t("carousel.solutions_for"),
      titleSerif: t("carousel.hospitality.titleSerif"),
      description: t("carousel.hospitality.description"),
      features: [
        { title: t("carousel.hospitality.f1_title"), desc: t("carousel.hospitality.f1_desc") },
        { title: t("carousel.hospitality.f2_title"), desc: t("carousel.hospitality.f2_desc") }
      ],
      link: "/restaurantes",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section
      id="sectores-carousel"
      className="bg-black py-16 md:py-32 px-6 relative overflow-hidden border-y border-white/5 transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <FloatingBlobs
        blobs={[
          { color: "blob-1", className: "-top-[20%] -left-[10%] w-[70%] h-[70%]", animation: "animate-drift" },
          { color: "blob-2", className: "-bottom-[20%] -right-[10%] w-[70%] h-[70%]", animation: "animate-drift-slow", delay: "2s" },
          { color: "blob-3", className: "top-[20%] right-[10%] w-[50%] h-[50%]", animation: "animate-drift-reverse", delay: "4s" },
        ]}
      />

      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        <div className="relative min-h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-20 items-center transition-all duration-700 ${index === currentSlide
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
                  {t("carousel.explore")} {slide.category}
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

        <div className="flex justify-center items-center space-x-3 mt-16 h-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 hover:h-2 hover:bg-white/60 ${index === currentSlide ? "bg-white/40" : "bg-white/10"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
