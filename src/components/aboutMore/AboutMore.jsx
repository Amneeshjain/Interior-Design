"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AboutMore = ({ content, mainText, text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-orange-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        {/* Heading */}
        <span className="text-xs uppercase tracking-[0.35em] text-orange-500">
          Discover More
        </span>

        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
          {text}
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 h-[2px] w-20 rounded-full bg-orange-400/50" />

        {/* Main Text */}
        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
          {mainText}
        </p>

        {/* Expandable Content */}
        <div
          className={`
    overflow-hidden
    transition-all
    duration-300
    ease-out

    ${expanded
              ? "max-h-[400px] opacity-100 translate-y-0 mt-6"
              : "max-h-0 opacity-0 -translate-y-2"
            }
  `}
        >
          <div className="border-t border-orange-100 pt-6 text-gray-600 leading-8">
            {content}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="
    mt-8
    inline-flex
    items-center
    gap-2

    rounded-full
    border
    border-orange-200

    px-6
    py-3

    text-sm
    font-medium

    text-orange-600

    transition-all
    duration-200

    hover:bg-orange-500
    hover:text-white
    active:scale-95
  "
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </section>
  );
};

export default AboutMore;