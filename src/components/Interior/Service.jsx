"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    title: "Residential Interior",
    image: "/image6.png", // ⚠️ rename (no space)
    navigate: "/interior/residential-interior",
  },
  {
    id: 2,
    title: "Commercial Interior",
    image: "/image7.png",
    navigate: "/interior/commercial-interior",
  },
];

const Services = () => {
  return (
    <div className="w-full py-16 px-4 md:px-10 lg:px-20">

      {/* Heading */}
      <div className="flex items-center justify-center gap-3 text-gray-500 uppercase text-sm">
        <span className="w-10 h-[2px] bg-gray-400"></span>
        Interior Services
        <span className="w-10 h-[2px] bg-gray-400"></span>
      </div>

      <h1 className="text-center text-2xl md:text-4xl font-bold mt-4 mb-12 max-w-2xl mx-auto">
        Tailored to fit your space and style
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <Link
            key={project.id}
            href={project.navigate}
            className="group block"
          >
            <div className="relative w-full h-72 overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              {/* Title */}
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;