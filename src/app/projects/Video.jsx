"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";

const Video = ({ projectDetails }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-[2px] bg-white/30"></div>
            <p className="uppercase text-sm tracking-widest text-gray-400">
              {projectDetails?.heading}
            </p>
            <div className="w-10 h-[2px] bg-white/30"></div>
          </div>

          <h2 className="text-xl md:text-3xl font-semibold">
            {projectDetails?.subheading}
          </h2>
        </div>

        {/* Video Section */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">

          {!isPlaying ? (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail */}
              <Image
                src="/video.png"
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center animate-pulse">
                  <svg
                    viewBox="0 0 24 24"
                    fill="black"
                    className="w-6 h-6 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <ReactPlayer
              url={projectDetails?.videoURL}
              playing
              controls
              width="100%"
              height="100%"
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/get-in-touch"
            className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Video;