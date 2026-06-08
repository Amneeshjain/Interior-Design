"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Sparkles, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const points = [
    {
      title: "Impeccable Service",
      desc: "We deliver exactly what we promise, ensuring smooth execution and timely completion.",
      icon: ShieldCheck,
    },
    {
      title: "Commitment to Excellence",
      desc: "Innovation, technology, and sustainability drive every project we create.",
      icon: Sparkles,
    },
    {
      title: "Work Ethics",
      desc: "Integrity and professionalism are at the core of every decision we make.",
      icon: Users,
    },
    {
      title: "Leadership",
      desc: "We empower our team to lead, innovate, and deliver excellence consistently.",
      icon: Award,
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* Orange Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-orange-500 text-sm mb-4">
            <span className="w-8 h-[1px] bg-orange-300"></span>
            Key Points
            <span className="w-8 h-[1px] bg-orange-300"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Why <span className="text-orange-500">Colonelz</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We combine creativity, precision, and leadership to deliver spaces that truly inspire.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                  group relative
                  p-6
                  rounded-2xl
                  border border-orange-100
                  bg-white
                  shadow-sm
                  hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >

                {/* Glow Layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white mb-4 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Bottom line */}
                <div className="mt-4 h-[2px] w-0 bg-orange-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;