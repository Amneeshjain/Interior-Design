"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Building2, Hammer, Sofa, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Luxury interior spaces crafted with elegance, comfort, and functionality.",
    url: "/interior",
  },
  {
    icon: Building2,
    title: "Architecture",
    description:
      "Modern architectural solutions designed for innovation and sustainability.",
    url: "/architecture",
  },
  {
    icon: Hammer,
    title: "Construction",
    description:
      "High-quality construction services delivered with precision and care.",
    url: "/construction",
  },
  {
    icon: Sofa,
    title: "Furniture Design",
    description:
      "Custom furniture solutions tailored perfectly to your lifestyle.",
    url: "/furniture",
  },
];

const Card = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded
          border
          border-gray-100
          bg-white
          p-5
          lg:p-6

          shadow-sm

          transition-all
          duration-500

          hover:border-orange-200
          hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)]
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            inset-0

            opacity-0
            group-hover:opacity-100

            transition-opacity
            duration-500

            bg-gradient-to-br
            from-orange-50
            via-transparent
            to-transparent
          "
        />

        {/* Icon */}
        <div
          className="
            relative
            z-10

            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            bg-orange-50
            text-orange-500

            transition-all
            duration-500

            group-hover:rotate-6
            group-hover:bg-orange-500
            group-hover:text-white
          "
        >
          <Icon size={26} />
        </div>

        {/* Title */}
        <h3
          className="
            relative
            z-10

            mt-5

            text-lg
            md:text-xl

            font-semibold
            text-gray-900
          "
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="
            relative
            z-10

            mt-3

            text-sm
            leading-7
            text-gray-500
          "
        >
          {item.description}
        </p>

        {/* Button */}
        <Link
          href={item.url}
          className="
            relative
            z-10

            mt-6

            inline-flex
            items-center
            gap-2

            text-sm
            font-medium
            text-orange-600

            group/link
          "
        >
          Explore Service
          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover/link:translate-x-1
            "
          />
        </Link>

        {/* Bottom Line */}
        <div
          className="
            absolute
            bottom-0
            left-0

            h-1
            w-0

            bg-orange-500

            transition-all
            duration-500

            group-hover:w-full
          "
        />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-orange-50/20 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-500">
            OUR SERVICES
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Design. Build. Transform.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            We create inspiring spaces through architecture, interior design,
            construction, and bespoke furniture solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
