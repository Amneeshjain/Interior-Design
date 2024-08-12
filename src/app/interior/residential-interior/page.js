"use client";
import React from "react";
import Contact from "../../../components/About/Contact";
import HeroSection from "../../../components/About/HeroSection";
import AboutFirm from "../../../components/ResidentialInterior/AboutFirm";
import Services from "../../../components/homepage/Services";
// import Process from "@/components/About/Process";
import Faq from "@/components/Faq/Faq";
import AboutMore from "../../../components/aboutMore/AboutMore";
import GetInTouch from "../../../components/homepage/GetInTouch";
import TimelineCard from "@/components/About/TimelineCard";
const textData = [
  {
    image: "/blueprint.png",
    title: "Design Creativity and Technical Skills",
    description:
      "Creative Eye and Attention to Detail: The ability to check particular and cohesive designs whilst paying meticulous interest to each element and its effect on the general aesthetic.Sketching Ability and Computer Knowledge: Proficiency in hand sketching and the use of design software (like AutoCAD, SketchUp, or Revit) to create special plans, renderings, and visualizations."
  },
  {
    image: "/interior-design.png",
    title: "Trend Awareness and Sustainable Practices",
    description:
      "Trend Identification: Staying updated with the brand new layout trends and incorporating contemporary patterns and progressive ideas into tasks.Knowledge of Sustainable Practices: Understanding and implementing green and sustainable layout ideas, consisting of the selection of inexperienced materials and energy-efficient solutions."
  },
  {
    image: "/kitchen.png",
    title: "Communication and Project Management",
    description:
      "Superior Communication: Effectively conveying design concepts and thoughts to clients, contractors, and different stakeholders, ensuring clean and constant communicate all through the challenge.Attention to Detail: Ensuring every aspect of the layout is achieved exactly, from preliminary concept to very last implementation, retaining high standards and client pleasure."
  }
];
const faqData = [
  {
    question: "1). Do you offer eco-friendly Residential Interior Solutions??",
    answer:
      "Our designers always maintain sustainability and that’s why these professionals use natural materials for room decorations. Additonally, natural light, lamp shades with bamboo, internal air quality and freshness are also essential for room decoration and modern interior designs by supporting environmental protection. "
  },
  {
    question:
      "2). What services do you offer for Residential Interior Projects?",
    answer:
      "Our professionals give insights into space to create different and stylish room decorations. Furthermore, Colonelz prioritizes clients’ requirements with a personalization approach to provide an aesthetic residential interior design service. "
  },
  {
    question: "3). Can you help with small Residential Interior Projects?",
    answer:
      "Employees and designers work with small, medium, and large size projects in terms of establishing a brand image in India. Our professionals help with small residential interior decorators to style home and room renovations. "
  },
  {
    question:
      "4).How do you ensure my style is reflected in the Residential Interior Design?",
    answer:
      "Because of the personalized services, our clients feel free to contact us to decorate their rooms as they choose. Thus, our professionals ensure all customers and clients while decorating residential interior designs as per their choices."
  }
];

const page = () => {
  return (
    <div>
      <HeroSection
        text="Interior"
        title="Residential Interior"
        //buttonText="Get in Touch"
        backgroundImage="../../bg-hero.png"
      />

      <AboutFirm />

      <div style={{ backgroundColor: "#fafafa" }}>
        <Services
          title="Expertise "
          subtitle="Welcome to Your Dream Home Transformation"
          text={textData}
        />
      </div>

      <TimelineCard />
      {/* <Process /> */}

      <Faq faqData={faqData} />
      <GetInTouch />
      <AboutMore
        text="Sophisticated Spaces: Where Functionality and Style Unite"
        mainText="Our designs seamlessly blend capability with sophistication, ensuring your area is sensible and beautiful. We attention on creating layouts that decorate usability while retaining a stylish and stylish look.Residential interior design and residential interior design service are integral to our approach."
        content="Every piece of furnishings and décor is selected to complement the overall design, presenting both practicality and visual appeal. Our residential interior design expertise ensures a harmonious balance. Enjoy a space that not only looks beautiful but also supports your day-to-day activities effectively and efficiently. Our residential interior decorator brings creativity to every project.
Residential interior design for residential addresses is at the core of what we do. Our interior design for residential offers tailored solutions. With our residential interior decorator, every detail is thoughtfully considered. Residential interior design transforms your living space. Trust our residential interior design service for exceptional results"
      />
      {/* <Contact bg="#fafafa" /> */}
    </div>
  );
};

export default page;
