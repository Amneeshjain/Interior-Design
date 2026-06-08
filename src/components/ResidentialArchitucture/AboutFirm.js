"use client";

import React from "react";
import Image from "next/image";
import firmBg from "../../../public/image 9.png";

const AboutFirm = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Image */}
        <div className="relative w-full md:w-[60%] h-[350px] md:h-[500px]">
          <Image
            src={firmBg}
            alt="about"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Content Card */}
        <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-8 md:mt-0 md:w-[55%]">
          <div className="bg-white text-black p-6 md:p-10 rounded-2xl shadow-xl">

            {/* Small Heading */}
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">
              About the Firm
            </p>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-4xl font-semibold uppercase mb-4">
              We Started Back in Year 2012
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>

            {/* Button (optional) */}
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Read More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFirm;