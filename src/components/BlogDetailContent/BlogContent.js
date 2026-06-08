"use client";

import React from "react";
import Image from "next/image";

const BlogContent = ({ title, category, image, content, createdAt }) => {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-4">

        {/* Top Tag */}
        <div className="flex items-center justify-center gap-4 mb-4 mt-6">
          <div className="w-10 h-[1px] bg-white/30"></div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            {category || "About Project"}
          </p>
          <div className="w-10 h-[1px] bg-white/30"></div>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl md:text-4xl font-semibold mb-8">
          {title}
        </h1>

        {/* Image */}
        {image && (
          <div className="relative w-full h-[250px] md:h-[450px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Date (optional) */}
        {createdAt && (
          <p className="text-center text-sm text-gray-400 mb-6">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        )}

        {/* Content */}
        <div
          className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-a:text-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default BlogContent;