"use client";

import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="relative py-24 bg-neutral-950 text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_55%)]" />

      <div className="relative max-w-4xl mx-auto px-5 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-6">
          Let’s Work Together
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Ready to make your design
          <br className="hidden md:block" />
          journey incredible?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Let’s create something beautiful, functional, and timeless together.
        </p>

        {/* CTA */}
        <Link
          href="/get-in-touch"
          className="
            mt-10 inline-flex items-center justify-center gap-2

            px-7 py-3.5
            rounded-full

            bg-orange-500
            text-white
            font-medium

            shadow-[0_10px_30px_rgba(249,115,22,0.35)]

            hover:bg-orange-600
            hover:-translate-y-1
            hover:shadow-[0_20px_50px_rgba(249,115,22,0.45)]

            transition-all duration-300 active:scale-95
          "
        >
          Get in touch today
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>

      </div>
    </section>
  );
};

export default GetInTouch;