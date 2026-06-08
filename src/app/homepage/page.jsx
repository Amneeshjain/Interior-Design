"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/homepage/HeroSection";
import BlogSection from "@/components/homepage/BlogSection";
import GetInTouch from "@/components/homepage/GetInTouch";
import AboutUs from "@/components/homepage/AboutUs";
import Testimonials from "@/components/homepage/Testimonials";
import Video from "@/components/homepage/Video";
import Portfolio from "@/components/homepage/Portfolio";
import Services from "@/components/homepage/Services";
import AboutMore from "@/components/aboutMore/AboutMore";
import ImageGallery from "@/components/homepage/ImageGallery";
import Counter from "@/components/homepage/Counter";
import Para1 from "@/components/homepage/Para1";
import LogoSlider from "@/components/homepage/LogoSlider";

const textData = [
  {
    image: "/fi_8172688.png",
    title: "Interior Design",
    description:
      "Tailored residential and commercial interior services, transforming spaces with style and personalized design.",
    buttonText: "View service",
    url: "/interior",
  },
  {
    image: "/fi_10365082.png",
    title: "Architecture",
    description:
      "Architectural services include design, preparation of construction documents, administration.",
    buttonText: "View service",
    url: "/architecture",
  },
  {
    image: "/fi_10365450.png",
    title: "Construction",
    description:
      "Expert construction services, delivering exceptional quality, unmatched efficiency, and precise execution.",
    buttonText: "View service",
    url: "/construction",
  },
];

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={isScrolled ? "" : "scrolled"}>
        <div>
          <HeroSection />
        </div>
      </div>

      <Para1 />
      <AboutUs />
      <Counter />

      <Services
        title="Services We Offer"
        subtitle="Explore Our Specialized Services"
        text={textData}
      />

      <Portfolio />
      <Video />
      <Testimonials />
      <LogoSlider />
      <GetInTouch />
      <ImageGallery />
      <BlogSection />

      <AboutMore
        text="Transform Your Space: Timeless Elegance in Every Design"
        coxntent="From costly materials to seamless functionality, we create interiors that stand the test of time."
        mainText="At Colonelz, we turn your imagination into reality with designs that blend traditional beauty and modern sophistication."
      />
    </div>
  );
};

export default Homepage;