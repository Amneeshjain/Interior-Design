"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../../components/homepage/HeroSection";
import BlogSection from "../../components/homepage/BlogSection";
import GetInTouch from "../../components/homepage/GetInTouch";
import AboutUs from "../../components/homepage/AboutUs";
import Slide from "../../components/homepage/Slide";
import Testimonials from "../../components/homepage/Testimonials";
import Video from "../../components/homepage/Video";
import Portfolio from "../../components/homepage/Portfolio";
import styles from "../../styles/home.module.css";
import Services from "../../components/homepage/Services";
import AboutMore from "../../components/aboutMore/AboutMore";
import ImageGallery from "../../components/homepage/ImageGallery";
// import ThreeSixtyCompo from "../../components/homepage/ThreeSixty";
// import AOS from "aos";
// import "aos/dist/aos.css";
const textData = [
  {
    image: "/fi_10365082.png",
    title: "Architecture",
    description:
      "Architectural services include design, preparation of construction documents,  administration.",
    buttonText: "View service",
    url: "/architecture"
  },
  {
    image: "/fi_8172688.png",
    title: "Interior Design",
    description:
      "Tailored residential and commercial interior services, transforming spaces with style and personalized design.",
    buttonText: "View service",
    url: "/interior"
  },
  {
    image: "/fi_10365450.png",
    title: "Construction",
    description:
      "Expert construction services, delivering exceptional quality, unmatched efficiency, and precise execution.",
    buttonText: "View service",
    url: "/construction"
  }
];
const cards = [
  {
    id: 1,
    image: "/slide-1.jpg",
    tag: "Web Design",
    title: "Color Integration",
    date: 2023
  },
  {
    id: 2,
    image: "/slide-2.jpg",
    tag: "Mobile Software",
    title: "Color Integration",
    date: 2023
  },
  {
    id: 3,
    image: "/slide-3.jpg",
    tag: "Web Design",
    title: "New Gadgets",
    date: 2023
  },
  {
    id: 4,
    image: "/slide-4.jpg",
    tag: "Web Design",
    title: "Digital Platform",
    date: 2023
  },
  {
    id: 5,
    image: "/slide-5.jpg",
    tag: "Web Design",
    title: "Branding Process",
    date: 2023
  },
  {
    id: 6,
    image: "/slide-6.jpg",
    tag: "Web Design",
    title: "Branding Process",
    date: 2023
  }
];
const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div>
      <div className={isScrolled ? "" : "scrolled"}>
        <div className={styles.overflowXCustom}>
          <HeroSection />
        </div>
      </div>

      <AboutUs />
      {/* <Slide cards={cards}/> */}
      <Services
        title="Services We Offer"
        subtitle="Explore Our Specialized Services"
        text={textData}
      />
      <Portfolio />
      <Video />
      <Testimonials />
      <GetInTouch />
      <ImageGallery />
      <BlogSection />
      <AboutMore
        text="Transform Your Space: Timeless Elegance in Every Design"
        content="From costly materials to seamless functionality, we create interiors that stand the check of time and increase your dwelling experience. Discover how our designs can transform your area right into a haven of grace and style."
        mainText="At Colonelz, we turn your imagination and prescience into facts with designs that mix traditional beauty and contemporary sophistication. Our expert crew crafts each area with attention to detail, making sure each detail reflects timeless elegance."
      />
      {/* <ThreeSixtyCompo /> */}
    </div>
  );
};

export default Homepage;
