"use client";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('../../bg-hero.png')",
        }}
      />

      {/* Orange Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-orange-500/20" />

      {/* Soft Glow Layer */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">

        <div className="text-white max-w-3xl">

          {/* Label */}
          <div className="flex items-center gap-4 mb-5">
            <span className="w-14 h-[2px] bg-orange-400"></span>
            <p className="uppercase tracking-[0.3em] text-xs text-orange-200">
              How it started
            </p>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
            A PAGE COLONELZ
          </h1>

          {/* Accent line */}
          <div className="w-24 h-[2px] bg-orange-400 mt-6"></div>

          {/* Optional subtitle */}
          <p className="mt-5 text-sm md:text-base text-gray-200 max-w-xl">
            Crafting timeless interiors with precision, discipline, and modern design vision.
          </p>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;