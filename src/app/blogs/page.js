"use client";
import React from "react";
import HeroSection from "@/components/About/HeroSection";
import Blog from "@/components/Blogs/Blog";
const page = () => {
  return (
    <div>
      <HeroSection
        title="Articles & news"
        // buttonText="Get in Touch"
        backgroundImage="../../blog-detail.png"
        text="Articles & news"
        background={"#fff"}
        color={"#fff"}
      />

      <Blog />
    </div>
  );
};

export default page;
