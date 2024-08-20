"use client";
import React from "react";
import styles from "../../styles/home.module.css";
import Contact from "../../components/About/Contact";
import HeroSection from "../../components/About/HeroSection";
import Service from "../../components/Interior/Service";
import WhyChooseUs from "../../components/Architucture/WhyChooseUS";
import AboutFirm from "@/components/About/AboutFirm";
import Faq from "../../components/Faq/Faq";
// import cardSection from "../../app/interior/cardSection"
import AboutMore from "../../components/aboutMore/AboutMore";
import GetInTouch from "../../components/homepage/GetInTouch";
const items = [
  {
    title: "PRELIMINARY PLANS",
    description:
      "The process of building architecture designs is adeptly put together for easy bidding of the construction documents. Therefore, setting up a strong foundation for the execution phase.",
  },
  {
    title: "SCHEMATIC DESIGNS",
    description:
      "Be it house building plans or commercial, the specifications of building plans are made according to your requirements. Your budget is diligently balanced for an effective interior architecture.",
  },
  {
    title: "OVERVIEWS",
    description:
      "We arrange overview sessions where schematic designs and preliminary plans are systematically organized. Consequently, you get a clear definition of the scope of the project.",
  },
  {
    title: "CLEAR BLUEPRINTS",
    description:
      "Our experts offer comprehensive construction documentation, clearly outlining the roles of all included parties to ensure seamless coordination. This helps in effective project management, fostering smooth and efficient progress.",
  },
];

const faqData = [
  {
    question: "1). What is Interior Design?",
    answer:
      "The concept of interior design creates visual themes to evoke room decorations strategically by using space, style and color. Colonelz, the most renowned interior design company transforms the spaces in the room with living room decor ideas. However, our designers make home interior design and modern interior design to evolve the room decoration styles by making sufficient spaces in the bedroom, kitchen, living room and bathrooms. ",
  },
  {
    question: "2). What are the Key Elements of Interior Design?",
    answer:
      "Some key elements must be considered for affordable interior design and decorations. For example, light, space, patterns, texture, color and forms are needed in interior decoration. Therefore, our designers utilize these elements in their interior design ideas. ",
  },
  {
    question: "3). How do I choose a Color Scheme for my Interior Design Project?",
    answer:
      "Our designers allow clients or customers to choose their favorite color for the room based on their vibes. In addition, Colonelz also considers determining a color palette that is chosen by a client. Based on that, our experts advise color schemes for interior decoration. ",
  },
  {
    question: "4). Can Interior Design increase the value of my home?",
    answer:
      "Colonelz never fails to satisfy clients or customers because interior designers suggest a superior level of home styling. Renovation interior design, 3D rendering, technology installation and final designing touch are included in this interior design service. Hence, it makes our design pattern more valuable for a home.",
  },
  {
    question: "5). Do I need a professional Interior Designer for my project?",
    answer:
      "Of course, a professional designer is required to decorate rooms that make a home more stylish. After a few months or years, the value of that home would increase. In addition, the budget plan, professional insights, color choosing and space of the room evoke the value of a room. Thus, Colonelz decides to provide affordable interior design to all customers.",
  },

];

const page = () => {
  return (
    <>
      <HeroSection
        title="INTERIOR DESIGN"
        //buttonText="Get in Touch"
        backgroundImage="../../interior.png"
        text="Services"
        background={"#fff"}
        color={"#fff"}
      />


      <div style={{ paddingTop: "100px" }}>
        <AboutFirm
          imgSrc="COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-156.jpg"
          imgAlt="About Interior"
          tagText="Interior Design"
          title="What We Do?"
          description="Working towards creating dream interior spaces for our clients. As per their preferences, Colonelz take top priority in providing spaces that meet their needs and surpass their desires. Plus, we prioritize crafting eco-friendly interiors by using non-toxic and environmentally conscious materials handpicked by our experts for your space."
        />
      </div>

      {/* <cardSection /> */}
      <Service />
      <WhyChooseUs
        title="Comprehensive Architecture Planning"
        tag="EXPERTISE"
        items={items}
      />
      <Faq faqData={faqData} />
      <GetInTouch />
      <AboutMore
        text="Create Your Sanctuary: Personalized Comfort in Every Corner"
        mainText="Transform your house into a non-public haven with the best interior design company with each detail caters to your consolation and style. We paint closely with you to recognize your alternatives and wishes, making sure every nook of your area feels like a retreat. From comfortable nooks to fashionable living areas, we are cognizant of growing surroundings that display your character and promote rest. Our designs prioritize comfort without compromising on aesthetic attraction, making your private home a real sanctuary. "
        content="Our interior design company provides interior design services that cater to all your needs. With our interior decorator, you can explore living room decor ideas that enhance your space. Our home interior design solutions are tailored to your preferences. Discover new interior design ideas to create your perfect haven. Modern interior design elements are incorporated to give your home a contemporary feel. We offer affordable interior design options to suit any budget. Trust our interior design company for all your interior design services. Our interior decorator will work closely with you to bring your living room decor ideas to life. Experience home interior design that reflects your style. Our interior design ideas will transform your space. Embrace modern interior design for a chic look. Enjoy affordable interior design solutions for every corner of your home."
      />

      {/* <Contact bg="#fafafa" /> */}
    </>
  );
};

export default page;
