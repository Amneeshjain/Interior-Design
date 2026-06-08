"use client";

import { useState } from "react";
import Image from "next/image";

const ProjectGallery = ({ gallery }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const images = gallery?.images || [];

  const visibleImages = showMore ? images : images.slice(0, 8);

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-10 h-[1px] bg-white/30"></div>
            <p className="uppercase text-sm tracking-widest text-gray-400">
              {gallery?.heading}
            </p>
            <div className="w-10 h-[1px] bg-white/30"></div>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold">
            {gallery?.subheading}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index % 3 === 0 ? "row-span-2" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-[200px] md:h-[250px]">
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {images.length > 8 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        )}

        {/* Lightbox */}
        {activeIndex !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setActiveIndex(null)}
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-[90%] md:w-[70%] h-[60vh]">
              <Image
                src={images[activeIndex]}
                alt="preview"
                fill
                className="object-contain"
              />
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 text-white text-3xl"
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + images.length) % images.length
                )
              }
            >
              ‹
            </button>

            {/* Next */}
            <button
              className="absolute right-4 text-white text-3xl"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % images.length)
              }
            >
              ›
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectGallery;