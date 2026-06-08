"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import Image from "next/image";

const TwoVideoSection = () => {
  const [playFirst, setPlayFirst] = useState(false);
  const [playSecond, setPlaySecond] = useState(false);

  const VideoCard = ({ active, onClick, title }) => {
    return (
      <div
        onClick={onClick}
        className="relative cursor-pointer overflow-hidden rounded-2xl shadow-md group bg-black"
      >
        {!active ? (
          <>
            <Image
              src="/video.png"
              alt="video"
              fill
              className="object-cover aspect-video group-hover:scale-105 transition duration-500 opacity-90"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <span className="text-black text-lg">▶</span>
              </div>
            </div>

            {/* label */}
            <div className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
              {title}
            </div>
          </>
        ) : (
          <div className="aspect-video w-full">
            <ReactPlayer
              url="https://www.youtube.com/embed/qUOYp0-tm0Y"
              playing
              controls
              width="100%"
              height="100%"
              onEnded={onClick}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Watch Videos
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold">
            Converging Spaces Into Reality
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <VideoCard
            title="Project Walkthrough"
            active={playFirst}
            onClick={() => {
              setPlayFirst(!playFirst);
              setPlaySecond(false);
            }}
          />

          <VideoCard
            title="Client Experience"
            active={playSecond}
            onClick={() => {
              setPlaySecond(!playSecond);
              setPlayFirst(false);
            }}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/get-in-touch"
            className="inline-flex px-5 py-2.5 text-sm rounded-full bg-orange-500 text-white hover:bg-orange-600 transition shadow-md"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TwoVideoSection;