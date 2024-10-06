"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "@/components/About/HeroSection";
import OurProjects from "@/components/Project/OurProjects";
import GetInTouch from "@/components/homepage/GetInTouch";
// import Allprojectlist from "@/components/Apartment/Allprojectlist";
import TimelineCard from "@/components/About/TimelineCard";
import AboutMore from "@/components/aboutMore/AboutMore";
import Faq from "@/components/Faq/Faq";
import ArchitureGallery from "@/components/Architucture/ArchitureGallery";
import AllProjects from "@/components/homepage/AllProjects";
const ProjectTypePage = ({ params }) => {
  const { id } = params || "";
  const [projects, setProjects] = useState([]);
  const [projectTypeName, setProjectTypeName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const faqData = [
    {
      question: "1). What services do we offer as an Architect?",
      answer:
        "As an architect, we provide interior designs with constructions, building plans, modern executives, residential architecture services, and designer furniture. Moreover, we provide room decorations, palace design, electrical supplies, heating and plumbing services. ",
    },
    {
      question: "2). How do I choose the right Architect for my project?",
      answer:
        "A good architect must have experience in architectural engineering to include room decoration, electrical and residential room services. We provide a design philosophy, hassle-free project delivery along with technical services. These areas have to be kept in mind while choosing the right architectural projects for the house building plans. ",
    },
    {
      question:
        "3). What should you prepare before starting an Architectural project?",
      answer:
        "Interior architecture must have explicit programs, constraints, sites, goals and concepts to make a strong project. Our designers and architects follow their goals, architectural design, interior projects, and designing constraints before starting architecture projects.",
    },
    {
      question:
        "4).  What is the typical process for an Architectural project?",
      answer:
        "Mainly, we follow construction documentation, interior designs, construction administrations and interior function processes for an architectural project. Our happy clients got these architectural facilities from us for building plans.",
    },
    {
      question: "5). How do Architects charge for their services?",
      answer:
        "Usually, architects of Colonelz create fixed budget costs for client attraction. Many architects get payment of 10-20% of charges whereas the Colonel's architect's charge is based on 5000 per sqft for housing build plans.",
    },
  ];
  useEffect(() => {
    if (id) {
      const fetchProjects = async () => {
        try {
          const response = await fetch(
            `https://backend-interior.onrender.com/api/project/projects/type/${id}`
          );
          const data = await response.json();

          if (data.success) {
            setProjects(data.data);
            // Extract project type name from the first project
            if (data.data.length > 0) {
              setProjectTypeName(data.data[0].projectType.project_type);
            }
          } else {
            console.error("Failed to fetch projects:", data.message);
            setError(data.message);
          }
        } catch (error) {
          console.error("Error fetching projects:", error);
          setError("Error fetching projects");
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <HeroSection
        title={projectTypeName ? ` ${projectTypeName}` : "Projects"}
        backgroundImage="/projectli.png"
        text="Projects"
        color="#fff"
        background="#fff"
      />
      {loading ? <div>Loading...</div> : <OurProjects projects={projects} />}

      <AllProjects />
      <TimelineCard />

      <ArchitureGallery />
      {/* <Allprojectlist /> */}
      <Faq faqData={faqData} />
      <GetInTouch />
      <AboutMore
        text="Transform Your Space: Timeless Elegance in Every Design"
        content="From costly materials to seamless functionality, we create interiors that stand the check of time and increase your dwelling experience. Discover how our designs can transform your area right into a haven of grace and style."
        mainText="At Colonelz, we turn your imagination and prescience into facts with designs that mix traditional beauty and contemporary sophistication. Our expert crew crafts each area with attention to detail, making sure each detail reflects timeless elegance."
      />
    </div>
  );
};

export default ProjectTypePage;
