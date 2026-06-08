"use client";

import React from "react";

const stepsData = [
  {
    id: 1,
    title: "Space Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit.",
  },
  {
    id: 2,
    title: "Design Execution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit.",
  },
  {
    id: 3,
    title: "Decoration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit.",
  },
];

const Process = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Heading */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-10 h-[2px] bg-white/30"></div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            Our Process
          </p>
          <div className="w-10 h-[2px] bg-white/30"></div>
        </div>

        <h1 className="text-center text-2xl md:text-4xl font-semibold max-w-2xl mx-auto uppercase mb-12">
          A Simple, yet Effective Process
        </h1>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition group"
            >
              {/* Number */}
              <div className="text-5xl font-bold text-white/10 absolute top-4 right-4">
                {step.id.toString().padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 relative z-10">
                {step.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Hover underline */}
              <span className="block mt-4 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-12"></span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;