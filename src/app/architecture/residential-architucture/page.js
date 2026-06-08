"use client";
import Contact from "@/components/About/Contact";
import HeroSection from "@/components/About/HeroSection";
import Process from "@/components/ResidentialArchitucture/Process";
import Services from "@/components/ResidentialArchitucture/Services";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Articles & news"
        buttonText="Get in Touch"
        backgroundImage="/bg-hero.png" // ✅ fixed path
      />

      {/* Sections with spacing */}
      <div className="py-12 px-4 md:px-10 lg:px-20">
        <Services />
      </div>

      <div className="py-12 px-4 md:px-10 lg:px-20 bg-gray-50">
        <Process />
      </div>

      <div className="py-12 px-4 md:px-10 lg:px-20">
        <Contact />
      </div>
    </div>
  );
};

export default Page;