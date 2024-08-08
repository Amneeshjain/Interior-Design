"use client";

import React from "react";
import Contact from "../../components/About/Contact";
import HeroSection from "../../components/About/HeroSection";
import WhyChooseUs from "../../components/Architucture/WhyChooseUS";
import Services from "../../components/homepage/Services";
// import Process from "@/components/About/Process";
import AboutFirm from "@/components/About/AboutFirm";
import TimelineCard from "../../components/About/TimelineCard";
import Faq from "@/components/Faq/Faq";
import AboutMore from "../../components/aboutMore/AboutMore";
import GetInTouch from "../../components/homepage/GetInTouch";
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
      "Creative Eye and Attention to Detail: Developing particular and practical architectural designs with a eager awareness on aesthetics and meticulous detail. Sketching Ability and Computer Knowledge: Proficiency in hand drawing and the use of architectural software program (which includes AutoCAD, Revit, or BIM equipment) to create particular plans, 3-d models, and renderings.",
    buttonText: "View service"
  },
  {
    image: "/arch2.png",
    title: "Sustainable and Technologically Integrated Solutions",
    description:
      "Knowledge of Sustainable Practices: Implementing eco-friendly and sustainable architectural principles, along with the use of inexperienced substances, power-green structures, and sustainable creation strategies.Consider Technology Implementation: Integrating superior technologies, which include clever building structures and revolutionary creation techniques, to beautify the capability and performance of structures.",
    buttonText: "View service"
  },
  {
    image: "/arch3.png",
    title: "Client-Centric Project Management and Safety",
    description:
      "Superior Communication: Effectively conveying architectural concepts, plans, and development to customers, contractors, and other stakeholders, making sure clean and consistent communique at some point of the task.Attention to Detail: Managing all elements of the layout and construction manner meticulously, from initial concept to very last crowning glory, to make sure terrific results.",
    buttonText: "View service"
  }
];
const faqData = [
  {
    question: "1). What services do we offer as an Architect?",
    answer:
      "As an architect, we provide interior designs with constructions, building plans, modern executives, residential architecture services, and designer furniture. Moreover, we provide room decorations, palace design, electrical supplies, heating and plumbing services. "
  },
  {
    question: "2). How do I choose the right Architect for my project?",
    answer:
      "A good architect must have experience in architectural engineering to include room decoration, electrical and residential room services. We provide a design philosophy, hassle-free project delivery along with technical services. These areas have to be kept in mind while choosing the right architectural projects for the house building plans. "
  },
  {
    question:
      "3). What should you prepare before starting an Architectural project?",
    answer:
      "Interior architecture must have explicit programs, constraints, sites, goals and concepts to make a strong project. Our designers and architects follow their goals, architectural design, interior projects, and designing constraints before starting architecture projects."
  },
  {
    question: "4).  What is the typical process for an Architectural project?",
    answer:
      "Mainly, we follow construction documentation, interior designs, construction administrations and interior function processes for an architectural project. Our happy clients got these architectural facilities from us for building plans."
  },
  {
    question: "5). How do Architects charge for their services?",
    answer:
      "Usually, architects of Colonelz create fixed budget costs for client attraction. Many architects get payment of 10-20% of charges whereas the Colonel's architect's charge is based on 5000 per sqft for housing build plans."
  }
];
const page = () => {
  return (
    <div>
      <HeroSection
        title="Architecture"
        //buttonText="Get in Touch"
        backgroundImage="../../architecture.png"
        text="Services"
        background={"#fff"}
        color={"#fff"}
      />
      <div style={{ paddingTop: "100px" }}>
        <AboutFirm
          imgSrc="wolf-house-contemporary-modern-residential-design-wolf-featured-e1690276149253.webp"
          imgAlt="About Architecture"
          tagText="Architecture"
          title="Blueprints of Excellence"
          description="Believes in switching vision to visuals, we shape buildings and afterward building shapes our lives. Our team integrates exceptional architectural craftsmen with their innovative designs. We customize an exclusive interior design with your vision for every inch of your space. From concept to completion, experience seamless integration of style and functionality. Partner with one of the leading architecture firms to flourish your spaces with luxury."
        />
      </div>
      <WhyChooseUs
        title="COMPREHENSIVE ARCHITECTURE PLANNING"
        tag="EXPERTISE"
        items={items}
      />
      <Services
        title="EXPERTISE"
        subtitle="Shaping Dreams Into Skylines"
        text={textData}
      />
      <TimelineCard />
      {/* <Process bg="#FAFAFA" /> */}
      <Faq faqData={faqData} />
      <GetInTouch />
      <AboutMore
        text="Design with Purpose: Transforming Spaces to Fit Your Lifestyle
"
        mainText="We,As one of the top architecture firms, design spaces that suit your unique way of life. Our group creates architectural designs with a clean expertise of your daily routines, making sure that each element enhances your reports and mirrors your personal style.
We use thoughtful indoors architecture and sensible house building plans to deliver areas which are each practical and beautiful. Our method to building architecture design layout ensures that every room helps your way of life and options.
 
"
        content="From developing building plans to executing innovative architectural designs, our architecture firms focuses on transforming your space right into a sanctuary that fits your way of life. By addressing your precise wishes, we create houses that aren't handiest visually appealing but also fairly purposeful.
"
      />
      {/* <Contact bg="#FAFAFA" /> */}
    </div>
  );
};

export default page;
