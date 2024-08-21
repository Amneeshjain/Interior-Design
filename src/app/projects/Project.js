"use client";
import React from "react";
import Contact from "../../components/About/Contact";
import HeroSection from "../../components/About/HeroSection";
import OurProjects from "../../components/Project/OurProjects";
import GetInTouch from "../../components/homepage/GetInTouch";
// import ImageGallery from "@/components/homepage/ImageGallery";

const Project = () => {
  return (
    <div>
      <HeroSection
        title="our Projects"
        //buttonText="Get in Touch"
        backgroundImage="../../projectli.png"
        text={"Projects"}
        color={"#fff"}
        background={"#fff"}
      />
      <OurProjects />
      {/* <Contact bg="#FAFAFA" /> */}
      <GetInTouch />
      {/* <ImageGallery /> */}
    </div>
  );
};

export default Project;
