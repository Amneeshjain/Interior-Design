import React from "react";

import HeroSection from "../../components/About/HeroSection";
import BlogContent  from "../../components/BlogDetailContent/BlogContent"
import Contact  from "../../components/About/Contact";
import GetInTouch from "../../components/homepage/GetInTouch";


const BlogDetailContent = () => {
  
  return (
    <>
      <HeroSection
        title="Articles & news"
        text="Blogs"
        //buttonText="Get in Touch"
        backgroundImage="../../blog-detail.png"
        background={"#fff"}
        color="#fff"
      />
      <BlogContent/>
      <GetInTouch/>
      {/* <Contact /> */}
    </>
  );
};

export default BlogDetailContent;
