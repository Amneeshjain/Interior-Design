"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function Team() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-orange-50/40">
      {/* Decorative Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Our Team
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Meet Our Creative Experts
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500 text-lg">
            A talented team of architects, designers, engineers, and
            professionals dedicated to transforming ideas into exceptional
            spaces.
          </p>

          <div className="w-24 h-[3px] bg-orange-500 rounded-full mx-auto mt-8" />
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {TeamSliderData.map(({ id, image, title, profile, descrip }) => (
            <div key={id} className="px-4 py-6">
              <div
                className="
                    group
                    relative
                    max-w-[340px]
                    mx-auto
                    overflow-hidden
                    rounded-xl
                    border
                    border-orange-100
                    bg-white
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-[0_25px_60px_rgba(249,115,22,0.15)]
                  "
              >
                {/* Image */}
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width:768px) 100vw,
                             (max-width:1024px) 50vw,
                             33vw"
                    className="
                        object-cover
                        object-top
                        transition-all
                        duration-700
                        group-hover:scale-105
                      "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <span
                      className="
                          inline-flex
                          rounded-full
                          bg-orange-500/20
                          backdrop-blur-md
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-orange-200
                          border
                          border-orange-300/20
                        "
                    >
                      {profile}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {title}
                    </h3>

                    <div
                      className="
                          overflow-hidden
                          max-h-0
                          opacity-0
                          transition-all
                          duration-500
                          group-hover:max-h-32
                          group-hover:opacity-100
                        "
                    >
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        {descrip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-track {
          display: flex !important;
        }

        .slick-slide {
          height: inherit !important;
        }

        .slick-slide > div {
          height: 100%;
        }

        .slick-dots {
          bottom: -40px;
        }

        .slick-dots li button:before {
          color: #fb923c;
          font-size: 12px;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #f97316;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
