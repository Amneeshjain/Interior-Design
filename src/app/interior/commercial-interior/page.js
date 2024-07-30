"use client";
import React from "react";
import Contact from "../../../components/About/Contact";
import HeroSection from "../../../components/About/HeroSection";
import AboutMore from "../../../components/aboutMore/AboutMore";
import Services from "../../../components/homepage/Services";
import Process from "@/components/About/Process";
import Faq from "@/components/Faq/Faq";
import AboutFirm from "../../../components/About/AboutFirm";
const textData = [
  {
    image: "/plan.png",
    title: "Innovative and Versatile Design Solutions",
    description:
      "Creative Eye and Attention to Detail: Creating particular, practical designs tailored to commercial areas, ensuring each element is meticulously considered.Keeping Structures Versatile: Designing bendy layouts that can adapt to converting desires and features, that is critical for dynamic industrial environments.",
    
  },
  {
    image: "/interior-design.png",
    title: "Trend Awareness and Technological Integration",
    description:
      "Trend Identification: Staying modern-day with the ultra-modern design developments to keep industrial spaces contemporary and aggressive.Consider Technology Implementation: Integrating advanced technology solutions for progressed functionality, performance, and user experience in business interiors.",
    
  },
  {
    image: "/project-management.png",
    title: "Client-Centric Project Management",
    description:
      "Superior Communication: Effectively speaking with clients and stakeholders to make certain the design meets their needs and expectations.Attention to Detail: Managing all layout and implementation components meticulously to make certain excellent consequences.",
   
  },
  
];
const faqData = [
  {
    question: "1). What does commercial Interior Design involve?",
    answer:
      "Commercial interior designers include spaces, well designs, interior walls and more. Moreover, our services are based on it to maintain commercial interior designs.  ",
  },
  {
    question: "2). How do you determine the design style and functionality for my Commercial Space?",
    answer:
      "Our commercial interior designers maintain style, space and designs to evolve our brand position in the Indian market. Hence, we determine our styles by showing functionality, from decorations and commercial interior decorations.",
  },
  {
    question: "3). What is the typical process for a Commercial Interior Design Project?",
    answer:
      "Our commercial interior decorator makes plans, procurement, design and fit-out to understand each step of construction, designing and architecture for commercial interior design services. ",
  },
  {
    question: "4). How do you manage budget and cost control for Commercial Interior Design Projects?",
    answer:
      "Project management ability is associated with our services, where time plan, structural changes, budget and civil requirements are there. At this point, we maintain budget and cost control by following these areas.",
  },
  {
    question: "5). What should we consider or prepare before starting a commercial interior design project?",
    answer:
      "Cololenz considers plan elaboration before starting the project plan in terms of improving commercial performance. However, among all commercial interior design firms, our company maintains compatibility with clients and project deliverables to accomplish commercial interior design projects. ",
  },
  
];
const page = () => {
  return (
    <div>
      <HeroSection
        text="Interior"
        title="Commercial Interior"
        buttonText="Get in Touch"
        backgroundImage="../../bg-hero.png"
      />
<div className="mt-5">
  <AboutFirm
      imgSrc="/Meeting room.jpg"
      imgAlt="About Firm"
      tagText="About Commercial Interior"
      title="Crafting WorksSpaces that matters"
      description="With Colnelz, your go-to source for a premier commercial interior designer, take a step into a world of inspiration and creativity! Your search for a place of employment that elevates beyond the norm and turns into an innovation hub is over if you've been longing for one."
    />
</div>
      <div style={{ backgroundColor: "#fafafa" }}>
      <Services title="Expertise "
      subtitle="The Designs You Crave " text={textData}/>
      </div>

      <Process />

      <Faq faqData={faqData} />
      <AboutMore
        text="Artistry in Every Detail: Crafting Unique and Inspiring Environments"
        mainText="Infuse your private home with creative flair and bespoke details that set it apart from the regular. We take pleasure in incorporating specific design factors and custom touches that reflect your flavor and inspire creativity. Our approach involves cautiously curating every detail to enhance the overall ambiance and create a truly different environment. Experience a home that is not always just designed but artistically crafted to make a declaration. Our commercial interior design services ensure that every element is thoughtfully chosen.

 As a commercial interior design firm, we strive for excellence. Let our commercial interior decorator bring your vision to life. Our commercial interior design services are unparalleled, providing unique solutions for business interior design needs. Our commercial interior design firm employs expert commercial interior designers who understand the intricacies of crafting inspiring spaces. With our commercial interior decorator, your environment will reflect sophistication and creativity.
"
        content="Experience the difference with our commercial interior design services and see how our business interior design expertise can transform your space. Trust our commercial interior design firm and our talented commercial interior designers to deliver exceptional results. Our commercial interior decorator will ensure every detail is perfect."
      />
      <Contact bg="#fafafa" />
    </div>
  );
};

export default page;
