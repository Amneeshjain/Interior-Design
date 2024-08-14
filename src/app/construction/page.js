"use client";
import React from "react";
import Contact from "../../components/About/Contact";
import HeroSection from "../../components/About/HeroSection";
import WhyChooseUs from "../../components/Architucture/WhyChooseUS";
import Services from "../../components/homepage/Services";
// import Process from "../../components/About/Process";
import TimelineCard from "../../components/About/TimelineCard";
import AboutFirm from "../../components/About/AboutFirm";
import Faq from "../../components/Faq/Faq";
import AboutMore from "../../components/aboutMore/AboutMore";
import GetInTouch from "../../components/homepage/GetInTouch";
import ImageGallery from "@/components/homepage/ImageGallery";
const items = [
  {
    title: "Turnkey ",
    description:
      "From sketching designs to selecting the final nail, our team handles every aspect of the project. We ensure to offer a seamless journey with our comprehensive approach. "
  },
  {
    title: "Field Expertise ",
    description:
      "Our experts seamlessly blend creative designs with construction prowess. With this combination, we ensure that your vision is transformed into reality with structural integrity and aesthetics."
  },
  {
    title: "Custom Craftsmanship",
    description:
      "Our team excels in crafting bespoke elements personalised to your preference. They design spaces with unique features. Ensuring that every inch of it reflects your personality and functional needs.  "
  },
  {
    title: "Budget-Friendly",
    description:
      "Our integrated design-build approach optimizes resources and eliminates the gap between the designers and builders. With this, we offer you a streamlined process reducing the costs and delay errors. "
  }
];
const textData = [
  {
    image: "/tools.png",
    title: "Technical Expertise and Innovation",
    description:
      "Creative Eye and Attention to Detail: Ensuring precision and accuracy in each thing of production, from preliminary blueprints to the final touches.Sketching Ability and Computer Knowledge: Proficiency in using production software (which includes CAD, BIM tools) for planning, modeling, and coping with production tasks.",
    buttonText: "View service"
  },

  {
    image: "/maintenance.png",
    title: "Sustainable Practices and Adaptability",
    description:
      "Knowledge of Sustainable Practices: Implementing green creation strategies, the usage of sustainable substances, and making sure power-green constructing practices.Keeping Structures Versatile: Designing and constructing adaptable structures which can meet converting desires and uses, incorporating flexibility into the construction procedure.",
    buttonText: "View service"
  },
  {
    image: "/construction.png",
    title: "Client-Focused Project Management and Safety",
    description:
      "Superior Communication: Maintaining clear and powerful communique with clients, architects, and subcontractors to make certain project goals and timelines are met.Attention to Detail: Overseeing every section of the construction procedure meticulously to ensure extraordinary workmanship and adherence to specs.",
    buttonText: "View service"
  }
];
const faqData = [
  {
    question: "1).  What types of Construction Services do we provide?",
    answer:
      "There are several types of construction planning, such as construction, residential management, architecture, and electrical services. Among them, our designers provide architectural, construction, designer furniture, interior designs and modern interior execution."
  },
  {
    question: "2). How do you estimate project costs and manage budgets?",
    answer:
      "Our professionals manage budgeting plans by making documentation, projection of constructions and adjustments. Thus, our budgeting plans help clients to understand our professional construction services. "
  },
  {
    question:
      "3). What is the typical timeline for completing a Construction Project?",
    answer:
      "Our project takes time from six to one year to complete the entire project. We value our clients, so our construction projects are based on construction planning to evolve our plans. "
  },
  {
    question:
      "4). How do you handle changes or unexpected issues during Construction?",
    answer:
      "Among all home construction companies, Colonelz has become the most renowned company in India due to providing hassle-free and eco-friendly services. Furthermore, our constructors manage the project issues by maintaining project equipment, planning and budgeting processes to be the best building construction company. "
  },
  {
    question:
      "5). What should you prepare or provide before starting a Construction Project?",
    answer:
      "We never ignore permissions from the residential authorities to start our construction projects. In addition, tools, materials, funding, documentations and safety areas are majorly highlighted before starting our construction projects. "
  }
];
const page = () => {
  return (
    <div>
      <HeroSection
        title="Quality Foundations For Lasting Structures"
        //buttonText="Get in Touch"
        backgroundImage="../../projectli.png"
        text={"Construction"}
        color={"#fff"}
        background={"#fff"}
      />

      <div style={{ paddingTop: "100px" }}>
        <AboutFirm
          imgSrc="construction2.webp"
          imgAlt="About Construction"
          tagText="Construction Services "
          title="Exceed of Boundaries of Dimensions "
          description="Building a new house or Crafting a new workplace, Colonelz is dedicated to making construction convenient. Our expertise lies in providing the best of all. Nowadays, where people opt to purchase flats or commercial places to save themselves from the trouble of construction. We are here for you. With our experts from the field, we try our best to make your dream space’s construction hassle-free"
        />
      </div>

      {/* <WhyChooseUs
      title="Constructing Excellence, Delivering Results"
      tag="Why Colonelz?"
      items={items}
    /> */}

      <Services
        title="Expertise "
        subtitle="Our Construction Capabilities"
        text={textData}
      />

      {/* <Process bg="#FAFAFA" /> */}
      <TimelineCard />
      <ImageGallery />
      <Faq faqData={faqData} />
      <GetInTouch />
      <AboutMore
        text="Innovative Interiors: Modern Solutions for Stylish Living
"
        mainText="As a top building construction company, we provide modern-day solutions that blend style with functionality. Our expertise in construction services ensures that your property is each lovely and sensible, tailor-made to fulfill your precise needs.
Our home construction businesses method combines present day layout with effective production making plans. We consciousness on revolutionary domestic creation techniques that deliver fashionable and useful interiors, transforming your space right into a cutting-edge haven. 
"
        content="By leveraging our knowledge as a leading building construction company, we make certain that every factor of your own home aligns together with your lifestyle. Our construction services provide you with the latest developments in interior layout, all even as adhering to the highest requirements of best and efficiency.
Choose us for your next undertaking and revel in how our cutting-edge domestic creation solutions can raise your residing area. Our commitment to super construction planning and execution will convey your imaginative and prescient to life with fashion and precision."
      />
      {/* <Contact bg="#FAFAFA" /> */}
    </div>
  );
};

export default page;
