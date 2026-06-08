"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/OUR PORTFOLIO/1.jpg",
    title: "Interior • Architecture • Construction",
    subtitle: "We Design Spaces That Inspire Living",
  },
  {
    id: 2,
    src: "/OUR PORTFOLIO/2.jpg",
    title: "Luxury Interiors",
    subtitle: "Elegant & Modern Living Spaces",
  },
  {
    id: 3,
    src: "/OUR PORTFOLIO/3.jpg",
    title: "Smart Architecture",
    subtitle: "Designed For Future Living",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[95vh] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 scale-105 transition-all duration-1000">
        <Image
          src={slide.src}
          alt={slide.title}
          fill
          priority
          className="object-cover"
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-orange-500/20" />
      </div>

      {/* Orange glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

        <div className="max-w-4xl text-white">

          {/* Tag */}
          <span className="
            inline-flex items-center gap-2
            rounded-full
            border border-orange-400/30
            bg-orange-500/10
            backdrop-blur-md
            px-5 py-2
            text-xs
            tracking-[0.25em]
            uppercase
            text-orange-200
            mb-6
          ">
            {slide.title}
          </span>

          {/* Title */}
          <h1 className="
            text-4xl md:text-6xl lg:text-7xl
            font-semibold
            leading-tight
            tracking-tight
          ">
            {slide.subtitle}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl mx-auto">
            Transforming ideas into timeless interiors and architectural masterpieces with precision, discipline, and creativity.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
              href="/projects"
              className="
                px-6 py-3
                rounded-full
                bg-orange-500
                text-white
                text-sm font-medium
                shadow-lg shadow-orange-500/20
                hover:bg-orange-600
                hover:shadow-orange-500/30
                transition-all duration-300
                active:scale-95
              "
            >
              View Projects
            </a>

            <a
              href="/get-in-touch"
              className="
                px-6 py-3
                rounded-full
                border border-white/30
                bg-white/10
                backdrop-blur-md
                text-white
                text-sm font-medium
                hover:bg-white
                hover:text-black
                transition-all duration-300
                active:scale-95
              "
            >
              Get In Touch
            </a>

          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`
              transition-all duration-300 rounded-full
              ${i === current
                ? "w-10 h-2 bg-orange-500"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}