
import React from "react";
import BlogSection from "../../components/homepage/BlogSection";
import GetInTouch from "../../components/homepage/GetInTouch";
import HeroSection from "../../components/About/HeroSection";
import AboutFirm from "../../components/About/AboutFirm";
import Team from "../../components/About/Team";
import Newprocess from "../../components/About/Newprocess"
import CompanyUps from "../../components/About/CompanyUps";
import AboutMore from "../../components/aboutMore/AboutMore";
import AboutCompany from "../../components/About/AboutCompany"
import Counter from "@/components/homepage/Counter";
// import Process from "../../components/About/Process";
// import Contact from "../../components/About/Contact";
// import WhyChooseUS from "../../components/About/WhyChooseUS";
// import Founder from "../../components/About/Founder";
// import PrincipalDesigner from "../../components/About/PrincipalDesigner";
// import TimelineCard from "../../components/About/TimelineCard";
// import TwoVideoSection from "../../components/About/TwoVideoSection";
// import Video from "../../components/homepage/Video";
// import Experts from "../../components/About/Experts";

const About = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeroSection
        style={{ color: "#fff !important" }}
        title="About Colonelz "
        text="How it Started ?"
        backgroundImage="../../bg-hero.png"
      />
      <CompanyUps />
      <AboutFirm
        imgSrc="aboutFirm.png"
        imgAlt="About Firm"
        tagText="Our Legacy"
        title="Fabricating Finesse Since 2004"
        description=" We make the client's preferences our top most priority. Colonelz strives to provide spaces that meet their needs and surpass their desired visions. Additionally, we prioritize crafting eco-friendly interiors by using non-toxic and environmentally conscious materials handpicked by our experts for your space."
      />
      <Counter />
      <AboutCompany />
      <Team />
      {/* <Process /> */}
      <Newprocess />
      <BlogSection />
      <GetInTouch />
      {/* <Experts /> */}
      {/* <TimelineCard /> */}
      {/* <PrincipalDesigner /> */}
      {/* <Founder /> */}
      {/* <WhyChooseUS /> */}
      {/* <TwoVideoSection /> */}
      {/* <Contact bg="#fafafa" /> */}
      {/* <Video /> */}
      <AboutMore
        text="Decorate Your Interiors: Modern Design Meets Classic Charm"
        content="Our approach combines sleek, present-day factors with classic design capabilities to create interiors that are sparkling and timeless. We are aware of integrating current tendencies with traditional touches, making sure your area stays stylish for years yet to come."
        mainText="Our designs are crafted to offer a harmonious blend of vintage and new, giving your property a unique and fashionable enchantment. Experience a space that feels present-day and enduring, best for any lifestyle."
      />
    </div>
  );
};

export default About;
