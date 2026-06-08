"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    initials: "VG",
    quote: "Exceptional Design, Reliable Support",
    description:
      "I highly recommend Colonelz for their exceptional interior design services.",
    author: "Vineet Gautam",
  },
  {
    initials: "JS",
    quote: "Flawless Execution",
    description:
      "The project was completed successfully within the agreed time and budget.",
    author: "Jagrant S Pandher",
  },
  {
    initials: "RW",
    quote: "Dream Home Experience",
    description: "Their innovative design suggestions exceeded expectations.",
    author: "Ratika Wadhwa",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50/30">
      <div className="text-center mb-10 px-4">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-orange-600">
          Testimonials
        </span>

        <h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-4xl">
          What Clients Say
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
          Real feedback from homeowners and business owners who trusted our
          work.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[250px] rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.author}
                    </h4>
                    <p className="text-xs text-orange-500">Verified Client</p>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="mb-2 text-lg font-semibold">{item.quote}</h3>

                  <p className="text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 text-orange-500">★★★★★</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
