"use client";
import React from "react";
import Contact from "../../components/About/Contact";
import HeroSection from "../../components/About/HeroSection";
import Galary from "../../components/ProjectDetail/Galary";
import AboutProjects from "../../components/AboutProjects";
// import Video from "@/components/homepage/Video";
import GetInTouch from "../../components/homepage/GetInTouch";
import TwoVideoSection from "../../components/About/TwoVideoSection";
import ImageGallery from "@/components/homepage/ImageGallery";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Vasant Kunj Residence"
        //buttonText="Get in Touch"
        backgroundImage="../../project-details.png"
        text="Project Details"
        color={"#fff"}
        background={"#fff"}
      />
      <AboutProjects />

      <TwoVideoSection />
      <ImageGallery />
      {/* <Galary bg="#FAFAFA" /> */}
      {/* <Video /> */}
      {/* <Contact /> */}
      <GetInTouch />
      {/* <ImageGallery /> */}
    </div>
  );
};

export default page;
