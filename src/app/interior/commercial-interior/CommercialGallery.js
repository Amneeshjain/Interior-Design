"use client";

import { useState } from "react";
import Image from "next/image";

const CommercialGallery = () => {
  const images = [
    "/Commercial-Interiors.jpg",
    "/commercial2.jpg",
    "/2.webp",
    "/4.webp",
    "/Commercial-Interiors.jpg",
    "/commercial2.jpg",
    "/2.webp",
    "/4.webp",
    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 text-sm uppercase text-gray-500">
          <span className="w-10 h-[2px] bg-gray-400"></span>
          Our Gallery
          <span className="w-10 h-[2px] bg-gray-400"></span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          Explore Our Catalogue
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-60 cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={src}
              alt={`gallery-${index}`}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          {/* Image */}
          <div className="relative w-[90%] md:w-[70%] h-[70vh]">
            <Image
              src={images[activeIndex]}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>

          {/* Prev */}
          <button
            className="absolute left-5 text-white text-3xl"
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
            className="absolute right-5 text-white text-3xl"
            onClick={() =>
              setActiveIndex((activeIndex + 1) % images.length)
            }
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default CommercialGallery;