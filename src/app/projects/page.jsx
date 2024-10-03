"use client";
import React from "react";
import HeroSection from "../../components/About/HeroSection";
import OurProjects from "../../components/Project/OurProjects";
import GetInTouch from "../../components/homepage/GetInTouch";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Apartment"
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

export default page;
