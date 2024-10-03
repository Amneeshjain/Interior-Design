"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "@/components/About/HeroSection";
import OurProjects from "@/components/Project/OurProjects";
import GetInTouch from "@/components/homepage/GetInTouch";
import Allprojectlist from "@/components/Apartment/Allprojectlist";
import TimelineCard from "@/components/About/TimelineCard";

const ProjectTypePage = ({ params }) => {
  const { id } = params;
  const [projects, setProjects] = useState([]);
  const [projectTypeName, setProjectTypeName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <TimelineCard />
      <Allprojectlist />
      <GetInTouch />
    </div>
  );
};

export default ProjectTypePage;
