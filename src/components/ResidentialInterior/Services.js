"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

const Services = () => {
  return (
    <div className="w-full bg-black text-white py-20">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section ref={targetRef} className="relative h-[200vh]">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-10 h-[2px] bg-white/30"></div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            Our Services
          </p>
          <div className="w-10 h-[1px] bg-white/30"></div>
        </div>

        <h1 className="text-center text-2xl md:text-4xl font-semibold max-w-2xl mx-auto mb-10 uppercase">
          Browse our set of services
        </h1>

        {/* Sticky Horizontal Scroll */}
        <div className="sticky top-0 flex items-center overflow-hidden h-screen -mt-16">
          <motion.div style={{ x }} className="flex gap-6">
            {text.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="flex justify-center items-center gap-6 -mt-20">
        <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
          Get in touch
        </button>
        <p className="text-gray-400 text-sm cursor-pointer hover:text-white transition">
          Browse all services
        </p>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="relative w-[280px] md:w-[350px] h-[320px] md:h-[380px] overflow-hidden rounded-2xl group">

      {/* Card Body */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between rounded-2xl border border-white/10 group-hover:bg-white/10 transition">

        <div>
          <Image
            src={item.image}
            alt={item.title}
            width={60}
            height={60}
            className="mb-4"
          />

          <h2 className="text-lg md:text-xl font-semibold mb-2">
            {item.title}
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Button */}
        <p className="text-sm mt-4 relative inline-block group-hover:text-white transition">
          {item.buttonText}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </p>
      </div>
    </div>
  );
};

export default Services;

const text = [
  {
    image: "/archui.png",
    title: "Architectural",
    description:
      "Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus.",
    buttonText: "View service",
  },
  {
    image: "/archui.png",
    title: "Interior Design",
    description:
      "Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus.",
    buttonText: "View service",
  },
  {
    image: "/archui.png",
    title: "Space Planning",
    description:
      "Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus.",
    buttonText: "View service",
  },
  {
    image: "/archui.png",
    title: "Exterior",
    description:
      "Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus.",
    buttonText: "View service",
  },
  {
    image: "/archui.png",
    title: "Architectural",
    description:
      "Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus.",
    buttonText: "View service",
  },
];