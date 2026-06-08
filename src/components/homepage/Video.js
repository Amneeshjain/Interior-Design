"use client";

import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import Link from "next/link";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-8">
          <span
            className="
            inline-flex
            rounded-full
            bg-orange-100
            px-4 py-1.5
            text-xs
            font-medium
            text-orange-600
          "
          >
            Customer Stories
          </span>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900">
            Hear From Our Customers
          </h2>

          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
            Real experiences from clients who trusted us with their dream
            spaces.
          </p>
        </div>

        {/* Video */}
        <div
          className="
          relative
          overflow-hidden
          rounded-lg
          border
          bg-white
          shadow-xl
          shadow-orange-100
        "
        >
          {!isPlaying ? (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative aspect-video cursor-pointer group"
            >
              <Image
                src="/video.png"
                alt="Video Thumbnail"
                fill
                className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="
                  w-16 h-16
                  rounded-full
                  bg-orange-500
                  text-white
                  flex
                  items-center
                  justify-center
  
                  shadow-lg
                  shadow-orange-500/30
  
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
                >
                  ▶
                </div>
              </div>
            </div>
          ) : (
            <ReactPlayer
              url="/video/2904 WT.mov"
              playing
              controls
              width="100%"
              height="100%"
            />
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Link
            href="/get-in-touch"
            className="
            inline-flex
            items-center
            gap-2
  
            rounded-full
            bg-orange-500
  
            px-5
            py-2.5
  
            text-sm
            font-medium
            text-white
  
            hover:bg-orange-600
            transition
          "
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Video;
