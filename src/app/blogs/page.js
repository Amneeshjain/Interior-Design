"use client";
import React from "react";
import pageStyle from "../page.module.css";
import HeroSection from "../../components/About/HeroSection";
import BlogsDetail from "../../components/Blogs/BlogsDetail";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Articles & news"
        buttonText="Get in Touch"
        backgroundImage="../../blog-detail.png"
        text="Articles & news"
        background={"#fff"}
        color={"#fff"}
      />

      <div className={pageStyle.blogPadd}>
        <BlogsDetail />
      </div>
    </div>
  );
};

export default page;
