import React from "react";

import HeroSection from "../../components/About/HeroSection";
import BlogContent  from "../../components/BlogDetailContent/BlogContent"
import Contact  from "../../components/About/Contact";


const BlogDetailContent = () => {
  
  return (
    <>
      <HeroSection
        title="Articles & news"
        text="Blogs"
        buttonText="Get in Touch"
        backgroundImage="../../blog-detail.png"
        background={"#fff"}
        color="#fff"
      />
      <BlogContent/>
      <Contact />
    </>
  );
};

export default BlogDetailContent;
