"use client";
import React from "react";
import HeroSection from "../../components/About/HeroSection";
import Video from "../../app/projectdetail3/Video"
import GetInTouch from "../../components/homepage/GetInTouch";
import ProjectGallery from "../../app/projectdetail3/ProjectGallery"
import Specification from "../../components/ProjectDetail3/Specification"
import AboutProject from "../../app/projectdetail3/AboutProject"

const page = () => {
    return (
        <div>
            <HeroSection
                title=" Plymaarque"
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