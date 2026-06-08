"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/photo gallery-20241009T061648Z-001/photo gallery/4.JPG",
  "/photo gallery-20241009T061648Z-001/photo gallery/20230911_150200.jpg",
  "/photo gallery-20241009T061648Z-001/photo gallery/cww_142.jpg",
  "/photo gallery-20241009T061648Z-001/photo gallery/IMG_20231104_144848 (2).jpg",
  "/photo gallery-20241009T061648Z-001/photo gallery/IMG-20230904-WA0032.jpg",
  "/photo gallery-20241009T061648Z-001/photo gallery/tye_132.jpg",
  "/photo gallery-20241009T061648Z-001/photo gallery/tye_254.jpg",
  "/photo gallery-20241009T061648Z-001/photo gallery/View-01.jpg",
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleImages = showMore ? images : images.slice(0, 6);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/20 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-100 blur-3xl rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-orange-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-medium">
              Our Gallery
            </span>
            <span className="h-[2px] w-10 bg-orange-400" />
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Project Gallery
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Explore our curated collection of interior and architectural
            projects.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="
                relative
                break-inside-avoid
                overflow-hidden
                rounded
                cursor-pointer
                group
                shadow-sm
                hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]
                transition-all duration-500
              "
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={src}
                alt="gallery"
                width={800}
                height={600}
                className="
                  w-full h-auto object-cover
                  group-hover:scale-110
                  transition-transform duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              px-6 py-2.5
              rounded-full
              bg-orange-500
              text-white
              text-sm
              font-medium
              shadow-[0_10px_30px_rgba(249,115,22,0.3)]
              hover:bg-orange-600
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-orange-400 transition"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white hover:text-orange-400 transition"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white hover:text-orange-400 transition"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image */}
          <div className="relative w-[92%] max-w-5xl h-[75vh]">
            <Image
              src={images[activeIndex]}
              alt="preview"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
