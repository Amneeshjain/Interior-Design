"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaClock, FaBuilding, FaUsers, FaCheckCircle } from "react-icons/fa";

const stats = [
  {
    icon: FaClock,
    count: 20,
    suffix: "+",
    label: "Years Experience",
    subtitle: "Estd. in 2004",
  },
  {
    icon: FaBuilding,
    count: 350000,
    separator: ",",
    label: "Sqft",
    subtitle: "Under Construction",
  },
  {
    icon: FaUsers,
    count: 25,
    suffix: "+",
    label: "Team Members",
    subtitle: "Growing Team",
  },
  {
    icon: FaCheckCircle,
    count: 250,
    suffix: "+",
    label: "Projects",
    subtitle: "Completed",
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-orange-50/30"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="
            inline-flex
            items-center
            rounded-full
            bg-orange-100
            text-orange-600
            px-4 py-2
            text-sm
            font-medium
          "
          >
            Our Achievements
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            Numbers That Define Our Journey
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional architecture, interiors, and construction
            solutions with passion and precision.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-lg
                 border
    border-orange-200
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
  
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
                hover:border-orange-200
              "
              >
                {/* Glow */}
                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-orange-100/40
                  via-transparent
                  to-transparent
                "
                />

                {/* Icon */}
                <div
                  className="
                  relative
                  w-14 h-14
                  rounded-2xl
                  bg-orange-50
                  text-orange-500
                  flex
                  items-center
                  justify-center
                  mb-6
  
                  group-hover:bg-orange-500
                  group-hover:text-white
                  transition-all
                  duration-500
                "
                >
                  <Icon size={24} />
                </div>

                {/* Count */}
                <h3 className="text-4xl font-bold tracking-tight">
                  {inView ? (
                    <CountUp
                      end={item.count}
                      duration={2.5}
                      separator={item.separator || ""}
                    />
                  ) : (
                    "0"
                  )}
                  {item.suffix}
                </h3>

                {/* Label */}
                <p className="mt-3 text-lg font-semibold">{item.label}</p>

                {/* Subtitle */}
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.subtitle}
                </p>

                {/* Accent Line */}
                <div
                  className="
                  mt-6
                  h-1
                  w-12
                  rounded-full
                  bg-orange-500
                  transition-all
                  duration-500
                  group-hover:w-20
                "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;
