"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/About/HeroSection";
import AboutProjects from "@/app/project-detail/AboutProjects";
import Video from "@/app/project-detail/Video";
import GetInTouch from "@/app/project-detail/GetInTouch";
import ProjectGallery from "@/app/project-detail/ProjectGallery";
import Specification from "@/app/project-detail/Specification";

const ProjectDetailPage = ({ params }) => {
  const { slug } = params || {};
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://backend-interior.onrender.com/api/project/projects/${slug}`);
        const data = await response.json();
        console.log("data-------", data);

        if (data.success) {
          setProject(data.data);
          console.log(data.data);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setError("Failed to load project details");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!project) return <div>No project found</div>;

  // Get image URL logic
  const getImageUrl = (imagePath) => {
    if (imagePath.startsWith("https://res.cloudinary.com")) {
      return imagePath;
    } else if (imagePath.startsWith("https://backend-interior.onrender.com")) {
      return imagePath;
    } else if (imagePath.startsWith("https://postimg.cc/") || imagePath.startsWith("http")) {
      console.log("Image URL", imagePath)
      return imagePath; // Don't prepend the base URL for postimg.cc or direct URLs
    } else {
      return `https://backend-interior.onrender.com/${imagePath}`; // For other cases, prepend base URL
    }
  };

  return (
    <div>
      <HeroSection
        title={project.projectName}
        backgroundImage={getImageUrl(project.projectImage)}
        text={project.projectType.project_type}
        color="#fff"
        background="#fff"
      />

      <AboutProjects sections={project.sections} />
      {/* <ProjectGallery gallery={project.gallery} /> */}
      <Video projectDetails={project.projectDetails} />
      <Specification
        additionalMedia={project.additionalMedia}
        gallery={{
          ...project.gallery,
          images: project.gallery.images.map((imagePath) => getImageUrl(imagePath)) // Apply getImageUrl to each image in the gallery
        }}
        bgimage={getImageUrl(project.projectImage)}
      />

      <GetInTouch />
    </div>
  );
};

export default ProjectDetailPage;
