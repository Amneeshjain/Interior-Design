"use client";

import React from "react";
import Image from "next/image";

const timelineData = [
  { title: "Understanding", icon: "/understanding.png", desc: "We start by discussing your vision and requirements." },
  { title: "Pitch", icon: "/presentation.png", desc: "We present ideas & take feedback." },
  { title: "Contract", icon: "/contract.png", desc: "Agreement & project kickoff." },
  { title: "Measurement", icon: "/measuring.png", desc: "Site analysis & measurements." },
  { title: "Estimate", icon: "/estimation.png", desc: "Budget & timeline planning." },
  { title: "Design", icon: "/design.png", desc: "3D layouts & refinements." },
  { title: "Execution", icon: "/execute.png", desc: "On-site execution begins." },
  { title: "Handover", icon: "/completed-task -1.png", desc: "Final delivery." },
];

const TimelineCard = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-orange-50/30 to-white">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-orange-500 font-medium">
          Our Process
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Project Timeline
        </h2>

        <div className="w-16 h-[3px] bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-orange-100 hidden md:block" />

        <div className="space-y-10">

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >

              {/* Step Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-orange-500 text-white items-center justify-center text-xs font-bold shadow-lg z-10">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Card */}
              <div
                className="
                  w-full md:w-[45%]
                  bg-white
                  border border-orange-100
                  rounded-2xl
                  p-5
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                  group
                "
              >

                <div className="flex items-center gap-3 mb-3">

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold group-hover:text-orange-600 transition">
                    {item.title}
                  </h3>

                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent Line */}
                <div className="mt-4 w-12 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition" />

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TimelineCard;