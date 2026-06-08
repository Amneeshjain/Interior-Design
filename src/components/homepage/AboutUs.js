"use client";

import { useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [active, setActive] = useState(1);

  const images = [
    {
      src: "/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/cww_25.jpg",
      title: "Apartments & Villas",
    },
    {
      src: "/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/tye_144.jpg",
      title: "Restaurants & Cafes",
    },
    {
      src: "/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/DSC_1674.JPG",
      title: "Offices & Retail",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
            About Us
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Spaces That
            <span className="text-orange-500"> Define Lifestyle</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500">
            We transform residential, hospitality, and commercial spaces into
            timeless experiences through thoughtful design and execution.
          </p>
        </div>

        {/* Desktop Showcase */}
        <div className="hidden lg:flex justify-center items-center gap-5 h-[650px]">
          {images.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className={`
  relative
  overflow-hidden
  rounded
  cursor-pointer
  transition-all
  duration-700

  ${active === index ? "w-[48%] h-full" : "w-[26%] h-[650px]"}
`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="inline-block w-10 h-[2px] bg-orange-500 mb-4" />

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="grid gap-5 lg:hidden">
          {images.map((item, index) => (
            <div key={index} className="relative h-[320px] overflow-hidden ">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="inline-block w-8 h-[2px] bg-orange-500 mb-3" />

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
