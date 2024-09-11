"use client";
import React from "react";
import HeroSection from "../../components/About/HeroSection";
import Video from "@/components/homepage/Video";
import GetInTouch from "../../components/homepage/GetInTouch";
import ProjectGallery from "../../app/projectdetail1/ProjectGallery"
import Specification from "../../components/ProjectDetail1/Specification"
// import AboutProject from "@/components/AboutProjects";
import AboutProject from "../../app/projectdetail1/AboutProject"

const page = () => {
    return (
        <div>
            <HeroSection
                title="Panda 18, Ardee Mall"
                backgroundImage="../../project-details.png"
                text="Project Details"
                color={"#fff"}
                background={"#fff"}
            />
            <AboutProject />
            <ProjectGallery />
            <Video />
            <Specification />
            <GetInTouch />
        </div>
    );
};

export default page;
