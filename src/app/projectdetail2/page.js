"use client";
import React from "react";
import HeroSection from "../../components/About/HeroSection";
import Video from "@/components/homepage/Video";
import GetInTouch from "../../components/homepage/GetInTouch";
import ProjectGallery from "../../app/projectdetail2/ProjectGallery"
import Specification from "../../components/ProjectDetail2/Specification"
import AboutProject from "@/components/AboutProjects";

const page = () => {
    return (
        <div>
            <HeroSection
                title="Vasant Kunj Residence"
                backgroundImage="../../project-details.png"
                text="Project Details"
                color={"#fff"}
                background={"#fff"}
            />
            <AboutProject />
            <Specification />
            <ProjectGallery />
            <Video />
            <GetInTouch />
        </div>
    );
};
export default page;