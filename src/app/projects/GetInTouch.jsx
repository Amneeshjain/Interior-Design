import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="relative py-24 bg-linear-to-r from-black to-gray-900 text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-5 relative z-10">

        <div className="text-center max-w-3xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Ready to make your design
            <br />
            journey incredible?
          </h2>

          {/* Sub text (optional future use) */}
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Let’s design something exceptional together.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition shadow-lg"
            >
              Get in touch today
              <span className="text-lg">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;