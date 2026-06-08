"use client";

import Image from "next/image";

const AboutFirm = ({
  imgSrc,
  imgAlt = "About Image",
  tagText,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div className="container mx-auto max-w-7xl px-5">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
        {/* Image */}
        <div className="relative w-full lg:w-[65%]">
          <div className="overflow-hidden rounded shadow-2xl">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={900}
              height={700}
              className="
           
            h-[380px]
            md:h-[500px]
            lg:h-[680px]
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
            />
          </div>

          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-3xl bg-orange-500/10 blur-3xl" />
        </div>

        {/* Content */}
        <div
          className="
        relative
        w-full
        lg:w-[40%]
        lg:-ml-24
        z-20

        rounded
        bg-white

        p-8
        md:p-10

        shadow-2xl
        border
        border-orange-100
      "
        >
          <div className="flex items-center gap-3 text-orange-500 text-xs uppercase tracking-[0.3em] mb-5">
            <span className="w-10 h-[1px] bg-orange-300"></span>
            {tagText}
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-5">
            {title}
          </h2>

          <p className="text-gray-600 leading-8 text-sm md:text-base mb-8">
            {description}
          </p>

          <button className="px-6 py-3 rounded-xl bg-orange-500 text-white font-medium transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutFirm;
