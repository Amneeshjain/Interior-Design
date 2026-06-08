"use client";

import React from "react";
import Contact from "@/components/About/Contact";
import HeroSection from "@/components/About/HeroSection";
import AboutFirm from "@/components/ResidentialConstruction/AboutFirm";
import Process from "@/components/ResidentialConstruction/Process";
import Services from "@/components/ResidentialConstruction/Services";

const Page = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <HeroSection
        title="Articles & News"
        buttonText="Get in Touch"
        backgroundImage="/bg-hero.png" // ✅ fixed path
      />

      {/* Sections */}
      <div className="space-y-20 py-20">
        <AboutFirm />
        <Services />
        <Process />
        <Contact />
      </div>

    </div>
  );
};

export default Page;