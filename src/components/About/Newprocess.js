"use client";
import React from "react";

const data = [
  { number: "01", title: "Requirement Gathering", desc: "Understanding client vision and project scope." },
  { number: "02", title: "Concept & Estimate", desc: "Mood board and initial budget planning." },
  { number: "03", title: "Approval & Contract", desc: "Final approval and formal agreement signing." },
  { number: "04", title: "Design Phase", desc: "3D design, layouts, and client feedback integration." },
  { number: "05", title: "Execution", desc: "On-site work with regular updates and quality checks." },
  { number: "06", title: "Handover", desc: "Final delivery with documentation and support." },
];

const SmallTimeline = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">

      {/* background glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/30 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto px-5 relative">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
            Our Process
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mt-3">
            Simple & Transparent Workflow
          </h2>

          <div className="w-20 h-[2px] bg-orange-400 mx-auto mt-5" />
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {data.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                p-6
                rounded-2xl
                bg-white
                border border-orange-100
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-500
              "
            >

              {/* number badge */}
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shadow-md">
                {item.number}
              </div>

              {/* content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}

        </div>

        {/* Footer note */}
        <div className="text-center mt-14">
          <p className="text-sm text-gray-500">
            Average Project Duration:{" "}
            <span className="text-orange-600 font-semibold">
              6–12 Weeks
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default SmallTimeline;