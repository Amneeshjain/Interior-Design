"use client";

import React, { useState } from "react";

const AboutProject = ({ sections }) => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const MAX_CHAR_COUNT = 110;

  const ABOUT_PROJECT_DATA = [
    { id: "sub_sections_one", ...sections?.sub_sections_one },
    { id: "sub_sections_two", ...sections?.sub_sections_two },
    { id: "sub_sections_three", ...sections?.sub_sections_three },
  ];

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-[1px] bg-white/30"></div>
            <p className="uppercase text-sm tracking-widest text-gray-400">
              {sections?.mainHeading}
            </p>
            <div className="w-10 h-[1px] bg-white/30"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ABOUT_PROJECT_DATA.map(({ id, title, description }) => {
            if (!title || !description) return null;

            const isExpanded = expanded[id];
            const displayDescription = isExpanded
              ? description
              : description.slice(0, MAX_CHAR_COUNT) + "...";

            return (
              <div
                key={id}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition group"
              >
                <h3 className="text-lg font-semibold mb-3">{title}</h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {displayDescription}
                </p>

                {description.length > MAX_CHAR_COUNT && (
                  <button
                    onClick={() => toggleReadMore(id)}
                    className="mt-4 text-sm relative inline-block text-white group-hover:text-white transition"
                  >
                    {isExpanded ? "Read Less" : "Read More"}

                    {/* Underline animation */}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutProject;