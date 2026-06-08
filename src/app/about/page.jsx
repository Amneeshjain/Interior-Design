
import BlogSection from "@/components/homepage/BlogSection";
import GetInTouch from "@/components/homepage/GetInTouch";
import HeroSection from "@/components/About/HeroSection";
import Team from "@/components/About/Team";
import Newprocess from "@/components/About/Newprocess"
import CompanyUps from "@/components/About/CompanyUps";
import AboutMore from "@/components/aboutMore/AboutMore";
import AboutCompany from "@/components/About/AboutCompany"
import TwoVideoSection from "@/components/About/TwoVideoSection"
import WhyChooseUs from "@/components/About/WhyChooseUS"


const page = () => {
  return (             
    <div style={{ overflow: "hidden" }}>
      <HeroSection
        style={{ color: "#fff !important" }}
        title="ApageColonelz "
        text="How it Started ?"
        backgroundImage="../../bg-hero.png"
      />
      <TwoVideoSection/>
      <CompanyUps />
      <AboutCompany />
      <WhyChooseUs/>
      <Team />
      <Newprocess />
      <BlogSection />
      <GetInTouch />
      <AboutMore
        text="Decorate Your Interiors: Modern Design Meets Classic Charm"
        content="Our approach combines sleek, present-day factors with classic design capabilities to create interiors that are sparkling and timeless. We are aware of integrating current tendencies with traditional touches, making sure your area stays stylish for years yet to come."
        mainText="Our designs are crafted to offer a harmonious blend of vintage and new, giving your property a unique and fashionable enchantment. Experience a space that feels present-day and enduring, best for any lifestyle."
      />
    </div>
  );
};

export default page;
