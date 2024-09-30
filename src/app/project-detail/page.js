"use client";
import React from "react";
import Contact from "../../components/About/Contact";
import HeroSection from "../../components/About/HeroSection";
import AboutProjects from "../../components/AboutProjects";
import Video from "@/components/homepage/Video";
import GetInTouch from "../../components/homepage/GetInTouch";

import ProjectGallery from "./ProjectGallery";
import Specification from "../../components/ProjectDetail/Specification";

const page = () => {
  return (
    <div>
      <HeroSection
        title="House of Colour, Tata Primanti"
        backgroundImage="../../project-details.png"
        text="Apartments"
        color={"#fff"}
        background={"#fff"}
      />
      <AboutProjects />
      <ProjectGallery />
      <Video />
      <Specification />
      <GetInTouch />
    </div>
  );
};

export default page;
