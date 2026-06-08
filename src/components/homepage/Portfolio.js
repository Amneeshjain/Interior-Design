"use client";

import Image from "next/image";

const projects = [
  {
    title: "House of Colours",
    type: "Apartment",
    image: "/OUR PORTFOLIO/1.jpg",
  },
  {
    title: "Panda 18",
    type: "Restaurant & Cafe",
    image: "/OUR PORTFOLIO/2.jpg",
  },
  {
    title: "Taggd Gurugram",
    type: "Office",
    image: "/OUR PORTFOLIO/3.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="relative bg-white">
      {projects.map((item, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen"
          style={{
            zIndex: index + 1,
          }}
        >
          <div className="relative h-full w-full overflow-hidden">
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="absolute bottom-16 left-8 md:left-16">
              <span
                className="
                  inline-block
                  rounded-full
                  bg-orange-500
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                "
              >
                {item.type}
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white">
                {item.title}
              </h2>

              <p className="mt-4 max-w-lg text-white/80">
                Premium architecture and interior design crafted with elegance
                and modern aesthetics.
              </p>

              <button
                className="
                  mt-8
                  rounded-full
                  bg-white
                  px-6
                  py-3

                  text-sm
                  font-semibold
                  text-black

                  transition-all
                  duration-300

                  hover:bg-orange-500
                  hover:text-white
                "
              >
                View Project →
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
