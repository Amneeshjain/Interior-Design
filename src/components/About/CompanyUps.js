"use client";

import Image from "next/image";

const CompanyUps = () => {
  const UPSP_DATA = [
    {
      id: 1,
      icon: "/Ups1.png",
      title: "Creative & Adaptability",
      desc: "Innovative design thinking tailored to every unique space.",
    },
    {
      id: 2,
      icon: "/Ups2.png",
      title: "Discipline & Planning",
      desc: "Structured execution ensuring timelines & precision.",
    },
    {
      id: 3,
      icon: "/Ups3.png",
      title: "Competitive & Flexible",
      desc: "Adaptive solutions aligned with client budgets & needs.",
    },
    {
      id: 4,
      icon: "/Ups4.png",
      title: "Trust & Quality",
      desc: "Premium materials and long-term reliability you can trust.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-orange-400">
            Why Colonelz
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Designed with Vision.
            <span className="text-orange-500"> Built with Precision.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
            We combine creativity, discipline, and craftsmanship to deliver
            exceptional interior and architectural experiences.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {UPSP_DATA.map((item) => (
            <div
              key={item.id}
              className="
                group
                text-center

                border-b
                border-orange-500/20

                pb-8

                transition-all
                duration-300

                hover:border-orange-500
              "
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-full

                    bg-white/5

                    transition-all
                    duration-300

                    group-hover:bg-orange-500/10
                    group-hover:scale-110
                  "
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={34}
                    height={34}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  mb-3
                  text-lg
                  font-semibold

                  transition-colors
                  duration-300

                  group-hover:text-orange-400
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyUps;
