"use client";
import React from "react";
import Contact from "../../components/About/Contact";
import HeroSection from "../../components/About/HeroSection";
import Galary from "../../components/ProjectDetail/Galary";
import AboutProjects from "../../components/AboutProjects";
import Video from "@/components/homepage/Video";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Vasant Kunj Residence"
        buttonText="Get in Touch"
        backgroundImage="../../project-details.png"
        text="Project Details"
        color={"#fff"}
        background={"#fff"}
      />
      <AboutProjects />

      <Galary bg="#FAFAFA" />
      <Video />
      <Contact />
    </div>
  );
};

export default page;
