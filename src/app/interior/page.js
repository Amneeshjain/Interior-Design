"use client";

import HeroSection from "@/components/About/HeroSection";
import AboutFirm from "@/components/About/AboutFirm";
import Faq from "@/components/Faq/Faq";
import TimelineCard from "@/components/About/TimelineCard";
import AboutMore from "@/components/aboutMore/AboutMore";
import GetInTouch from "@/components/homepage/GetInTouch";

const faqData = [
  {
    question: "1). What is Interior Design?",
    answer:
      "Interior design creates visual themes using space, style and color."
  },
  {
    question: "2). Key Elements?",
    answer:
      "Light, space, patterns, texture, color and forms."
  },
  {
    question: "3). How to choose colors?",
    answer:
      "We help clients select palettes based on their preferences."
  },
  {
    question: "4). Does it increase home value?",
    answer:
      "Yes, good design improves value and aesthetics."
  },
  {
    question: "5). Need a designer?",
    answer:
      "Yes, professionals improve planning and execution."
  }
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="INTERIOR DESIGN"
        backgroundImage="/interior.png"   // ✅ FIXED
        text="Services"
        background="#fff"
        color="#fff"
      />
   
      {/* About */}
      <div className="pt-24 px-4 md:px-10 lg:px-20">
        <AboutFirm
          imgSrc="/32.webp"   // ✅ FIXED
          imgAlt="About Interior"
          tagText="Interior Design"
          title="What We Do?"
          description="We create dream interior spaces tailored to your needs using eco-friendly materials."
        />
      </div>

      {/* Timeline */}
      <TimelineCard />

      {/* FAQ */}
      <Faq faqData={faqData} />

      {/* Contact */}
      <GetInTouch />

      {/* About More */}
      <AboutMore
        text="Create Your Sanctuary"
        mainText="We design spaces that reflect your personality and comfort."
        content="Modern, affordable, and functional interior solutions tailored to your needs."
      />
    </>
  );
};

export default Page;