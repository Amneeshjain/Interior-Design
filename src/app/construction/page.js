"use client";

import HeroSection from "@/components/About/HeroSection";
import AboutFirm from "@/components/About/AboutFirm";
import Faq from "@/components/Faq/Faq";
import AboutMore from "@/components/aboutMore/AboutMore";
import GetInTouch from "@/components/homepage/GetInTouch";
import ConstructionGallery from "@/components/Constraction/ConstructionGallery";

const faqData = [
  {
    question: "1). What types of Construction Services do we provide?",
    answer:
      "We provide architectural, construction, interior designs and execution services."
  },
  {
    question: "2). How do you estimate project costs?",
    answer:
      "We manage budgeting through documentation, projections, and adjustments."
  },
  {
    question: "3). What is the timeline?",
    answer:
      "Projects typically take 6 months to 1 year."
  },
  {
    question: "4). How do you handle issues?",
    answer:
      "We manage issues through planning, budgeting, and proper supervision."
  },
  {
    question: "5). What should be prepared?",
    answer:
      "Permissions, materials, funding, and documentation are required."
  }
];

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Quality Foundations For Lasting Structures"
        backgroundImage="/projectli.png"   // ✅ FIXED
        text="Construction"
        color="#fff"
        background="#fff"
      />

      {/* About Section */}
      <div className="pt-24 px-4 md:px-10 lg:px-20">
        <AboutFirm
          imgSrc="/construction2.webp"   // ✅ FIXED
          imgAlt="About Construction"
          tagText="Construction Services"
          title="Beyond Boundaries and Dimensions"
          description="We make construction hassle-free with expert planning and execution."
        />
      </div>

      {/* Gallery */}
      <ConstructionGallery />

      {/* FAQ */}
      <Faq faqData={faqData} />

      {/* Contact */}
      <GetInTouch />

      {/* About More */}
      <AboutMore
        text="Innovative Interiors: Modern Solutions for Stylish Living"
        mainText="We provide modern solutions combining style with functionality."
        content="Our construction services ensure high-quality execution and modern design."
      />
    </div>
  );
};

export default Page;