"use client";

import Image from "next/image";

const logos = [
  "/New logo_s 200 x 200/Ardee.webp",
  "/New logo_s 200 x 200/bptp.webp",
  "/New logo_s 200 x 200/DLF.webp",
  "/New logo_s 200 x 200/Emaar.webp",
  "/New logo_s 200 x 200/Fiserv.webp",
  "/New logo_s 200 x 200/HFI.webp",
  "/New logo_s 200 x 200/indian army.webp",
  "/New logo_s 200 x 200/Justdial.webp",
  "/New logo_s 200 x 200/Samsara.webp",
  "/New logo_s 200 x 200/Sierra.webp",
  "/New logo_s 200 x 200/Sobha.webp",
];

const LogoSlider = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[400px] h-[400px] bg-orange-100 blur-3xl rounded-full opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-medium tracking-widest uppercase">
            Trusted By Brands
          </span>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900">
            Partners Who Believe in Us
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex gap-14 w-max animate-scroll items-center">

            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="
                  group
                  flex items-center justify-center
                  min-w-[140px] h-24

                  rounded-2xl
                  bg-white/60
                  backdrop-blur-md

                  border border-orange-100

                  shadow-sm

                  hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)]
                  hover:-translate-y-1

                  transition-all duration-500
                "
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={110}
                  height={70}
                  className="
                    object-contain
                    grayscale
                    group-hover:grayscale-0
                    opacity-70
                    group-hover:opacity-100
                    transition-all duration-500
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 28s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;