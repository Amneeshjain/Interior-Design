"use client";

import HeroSection from "@/components/About/HeroSection";
import AboutFirm from "@/components/About/AboutFirm";
import TimelineCard from "@/components/About/TimelineCard";
import Faq from "@/components/Faq/Faq";
import AboutMore from "@/components/aboutMore/AboutMore";
import GetInTouch from "@/components/homepage/GetInTouch";
import ArchitureGallery from "@/components/Architucture/ArchitureGallery";

const items = [
  {
    title: "PRELIMINARY PLANS",
    description:
      "The process of building architecture designs is adeptly put together for easy bidding of the construction documents. Therefore, setting up a strong foundation for the execution phase."
  },
  {
    title: "SCHEMATIC DESIGNS",
    description:
      "Be it house building plans or commercial, the specifications of building plans are made according to your requirements. Your budget is diligently balanced for an effective interior architecture."
  },
  {
    title: "OVERVIEWS",
    description:
      "We arrange overview sessions where schematic designs and preliminary plans are systematically organized. Consequently, you get a clear definition of the scope of the project."
  },
  {
    title: "CLEAR BLUEPRINTS",
    description:
      "Our experts offer comprehensive construction documentation, clearly outlining the roles of all included parties to ensure seamless coordination. This helps in effective project management, fostering smooth and efficient progress."
  }
];

const textData = [
  {
    image: "/arch1.png",
    title: "Innovative Design and Technical Proficiency",
    description:
      "Developing practical designs with a keen attention to details. We prioritise proficiency by using software programs (AutoCAD, Revit, or BIM equipment) to create particular plans and 3D models.",
    buttonText: "View service"
  },
  {
    image: "/arch2.png",
    title: "Sustainable and Integrated Solutions",
    description:
      "We use ecological methods, natural substances, power-green structures, and sustainable strategies. And by integrating superior technologies, we enhance the capability and performance of the architechture.",
    buttonText: "View service"
  },
  {
    image: "/arch3.png",
    title: "Client-Centric Project Management",
    description:
      "We effectively convey architectural concepts and plans to customers and vendors, ensuring concise communication. We manage all elements of the layout responsibly to deliver top-tier results to the client.",
    buttonText: "View service"
  }
];

const faqData = [
  {
    question: "1. What services do we offer as an Architect?",
    answer:
      "As an architect, we provide interior designs with constructions, building plans, modern executives, residential architecture services, and designer furniture."
  },
  {
    question: "2. How do I choose the right Architect for my project?",
    answer:
      "A good architect must have experience in architectural engineering and provide hassle-free project delivery along with technical services."
  },
  {
    question: "3. What should you prepare before starting an Architectural project?",
    answer:
      "Interior architecture must have explicit programs, constraints, sites, goals and concepts to make a strong project."
  },
  {
    question: "4. What is the typical process for an Architectural project?",
    answer:
      "We follow construction documentation, interior designs, and project management processes."
  },
  {
    question: "5. How do Architects charge for their services?",
    answer:
      "Usually, architects charge based on project scope or per sqft depending on requirements."
  }
];

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Architecture"
        backgroundImage="/architecture.png"   // ✅ FIXED
        text="Services"
        background="#fff"
        color="#fff"
      />

      {/* About Section */}
      <div className="pt-24 px-4 md:px-10 lg:px-20">
        <AboutFirm
          imgSrc="/wolf-house-contemporary-modern-residential-design-wolf-featured-e1690276149253.webp" // ✅ FIXED
          imgAlt="About Architecture"
          tagText="Architecture"
          title="Blueprints of Excellence"
          description="Believes in switching vision to visuals, we shape buildings and afterward building shapes our lives. Our team integrates exceptional architectural craftsmen with their innovative designs. We customize an exclusive interior design with your vision for every inch of your space."
        />
      </div>

      {/* Timeline */}
      <TimelineCard />

      {/* Gallery */}
      <ArchitureGallery />

      {/* FAQ */}
      <Faq faqData={faqData} />

      {/* Contact */}
      <GetInTouch />

      {/* About More */}
      <AboutMore
        text="Design with Purpose: Transforming Spaces to Fit Your Lifestyle"
        mainText="We design spaces that suit your unique way of life. Our group creates architectural designs with a clean expertise of your daily routines."
        content="From developing building plans to executing innovative architectural designs, we transform your space into a functional and beautiful environment."
      />
    </div>
  );
};

export default Page;