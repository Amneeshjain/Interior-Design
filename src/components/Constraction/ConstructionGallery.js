"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ConstructionGallery = () => {
  const images = [
    "/photo-1542336391-ae2936d8efe4.jpg",
    "/photo-1531834685032-c34bf0d84c77.jpg",
    "/photo-1508450859948-4e04fabaa4ea.jpg",
    "/photo-1517089152318-42ec560349c0.jpg",
    "/9b61b85bab638b4201341c10fd74531a.jpg",
    "/image1.png", // rename (remove spaces)
    "/image2.png",
    "/image3.png",
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleImages = () => {
    if (visibleCount >= images.length) {
      setVisibleCount(4);
    } else {
      setVisibleCount(images.length);
    }
  };

  return (
    <div className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white">

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 text-sm uppercase text-gray-500">
          <span className="w-10 h-[1px] bg-gray-400"></span>
          Our Gallery
          <span className="w-10 h-[1px] bg-gray-400"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Explore Our Catalogue
        </h2>
      </div>

      {/* Masonry Grid */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 4 }}>
        <Masonry gutter="16px">
          {images.slice(0, visibleCount).map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer overflow-hidden rounded-xl group relative"
            >
              <div className="relative w-full h-64">
                <Image
                  src={img}
                  alt={`gallery-${index}`}
                  fill
                  className="object-cover rounded-xl transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Show More / Less */}
      <div className="text-center mt-10">
        <button
          onClick={toggleImages}
          className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
        >
          {visibleCount >= images.length ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Image */}
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>

          {/* Prev */}
          <button
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + images.length) % images.length
              )
            }
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={() =>
              setActiveIndex((activeIndex + 1) % images.length)
            }
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default ConstructionGallery;