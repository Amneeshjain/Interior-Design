"use client";
import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const Specification = ({ additionalMedia, gallery, bgimage }) => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-white/30"></div>
              <p className="uppercase text-sm tracking-widest text-gray-400">
                {additionalMedia?.title}
              </p>
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              {additionalMedia?.headingDescription}
            </h2>

            <div className="text-gray-400 text-sm md:text-base leading-relaxed">
              {additionalMedia?.description &&
                parse(DOMPurify.sanitize(additionalMedia.description))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            {bgimage && (
              <Image
                src={bgimage}
                alt="Main image"
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery?.images?.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[200px] md:h-[250px] rounded-xl overflow-hidden group"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Specification;