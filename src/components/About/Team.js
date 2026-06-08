"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const TeamSliderData = [
  {
    id: 1,
    image: "/TEAM PHOTOS/01 VARTIKA-Sr.Architect.JPG",
    title: "VARTIKA SHARMA",
    profile: "Sr. Architect",
    descrip:
      "Seasoned architect and project manager ensuring seamless execution and client satisfaction.",
  },
  {
    id: 2,
    image: "/TEAM PHOTOS/01 SHAILY-Project Architect.JPG",
    title: "SHAILY",
    profile: "Project Architect",
    descrip:
      "Expert in space planning and innovative design with meticulous attention to detail.",
  },
  {
    id: 3,
    image: "/TEAM PHOTOS/01 AKASHDEEP- Project Architect.JPG",
    title: "AKASHDEEP SINGH",
    profile: "Project Architect",
    descrip:
      "Transforming visions into reality with practical and aesthetically appealing design solutions.",
  },
  {
    id: 4,
    image: "/TEAM PHOTOS/01 KUSHAL-3d Visualizer.JPG",
    title: "KUSHAL YAMUJALA",
    profile: "3D Visualizer",
    descrip:
      "Creating immersive 3D walkthroughs and leading marketing efforts with visual excellence.",
  },
  {
    id: 5,
    image: "/TEAM PHOTOS/01 PRIYANKA.JPG",
    title: "PRIYANKA YADAV",
    profile: "HR Executive & Admin",
    descrip:
      "Efficiently managing operations, HR, and team support for outstanding results.",
  },
  {
    id: 6,
    image: "/TEAM PHOTOS/01 TARUSH-Jr.Architect.JPG",
    title: "TARUSH MEHTANI",
    profile: "Jr. Architect",
    descrip:
      "Crafting spaces with precision, bridging client expectations and project delivery.",
  },
  {
    id: 7,
    image: "/TEAM PHOTOS/01 SHIVANSHI-Jr.Designer.JPG",
    title: "SHIVANSHI VERMA",
    profile: "Jr. Designer",
    descrip:
      "Crafting personalized interior spaces reflecting clients' unique styles.",
  },
  {
    id: 8,
    image: "/TEAM PHOTOS/01 JATIN-Site Engineer.JPG",
    title: "JATIN KUMAR",
    profile: "Site Engineer",
    descrip:
      "Ensuring on-site execution meets design standards with precision and quality.",
  },
  {
    id: 9,
    image: "/TEAM PHOTOS/01 ARPITA-Jr.Designer Intern.JPG",
    title: "ARPITA CHAUHAN",
    profile: "Designer Intern",
    descrip:
      "Supporting architects and designers with fresh ideas and enthusiasm.",
  },
];
const Team = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "40px",
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 ">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-500 mb-3">
          Our Team
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Meet Our Creative Experts
        </h2>

        <div className="w-20 h-[2px] bg-orange-400/60 mx-auto mt-6" />
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {TeamSliderData.map(({ id, image, title, profile, descrip }) => (
          <div key={id} className="px-2 md:px-3">
            <div
              className="
          group
          relative
          overflow-hidden

          rounded

          border
          border-orange-100

          bg-white

          shadow-md

          transition-all
          duration-500

          hover:-translate-y-2
          hover:shadow-2xl
        "
            >
              {/* Image */}
              <div
                className="
            relative

            h-[420px]
            sm:h-[480px]
            md:h-[520px]
            lg:h-[580px]
          "
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div
                className="
            absolute
            bottom-0
            left-0
            w-full

            p-4
            md:p-6

            z-10
          "
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-1 text-sm md:text-base text-orange-300">
                  {profile}
                </p>

                <p
                  className="
              mt-3

              text-xs
              md:text-sm

              leading-6

              text-white/80

              opacity-0
              translate-y-4

              group-hover:opacity-100
              group-hover:translate-y-0

              transition-all
              duration-500
            "
                >
                  {descrip}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Dots */}
      <style jsx global>{`
        .slick-dots li button:before {
          color: #fb923c;
          font-size: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: #f97316;
        }
      `}</style>
    </section>
  );
};

export default Team;
