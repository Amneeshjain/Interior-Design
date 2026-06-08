"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ArchitureGallery = () => {
  const images = [
    "/969e29466c4040aa181f7d80e6cac331.jpg",
    "/0bd07155c428cb7d7c832a757bcccccc.jpg",
    "/24bef507d7592b7399108b7a6c670170.jpg",
    "/4aa359d22fe14b635b082924943b54fc.jpg",
    "/caa692263b6916d9bec795a2ec2f2c47.jpg",
    "/78bedd051c61eb7249c919f47118c30b.jpg",
    "/0bd07155c428cb7d7c832a757bcccccc.jpg",
    "/24bef507d7592b7399108b7a6c670170.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // 👈 default visible

  const handleToggle = () => {
    if (visibleCount >= images.length) {
      setVisibleCount(4); // show less
    } else {
      setVisibleCount(images.length); // show all
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
          Explore Our Projects
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

      {/* Show More / Show Less Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleToggle}
          className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
        >
          {visibleCount >= images.length ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={() =>
              setActiveIndex((activeIndex - 1 + images.length) % images.length)
            }
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          <button
            onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default ArchitureGallery;
