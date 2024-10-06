import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import style from "@/styles/project.module.css";
import Link from "next/link";
import styles from "@/styles/gallary.module.css";
import Para from "@/components/Project/Para"

const OurProjects = ({ projects }) => {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
    console.log("Show More toggled:", showMore);
  };

  if (!projects || projects.length === 0) {
    return <div className={style.projectMainContainer}>No projects found.</div>;
  }

  const typeDescription = projects[0]?.projectType?.type_description || "";

  return (
    <div className={style.projectMainContainer}>
      <div className="container">
        <Para textdata={typeDescription} />
        <div className={`row ${style.projectsCardContainer}`}>
          {projects.slice(0, showMore ? projects.length : 2).map((project, index) => (
            <Link
              href={`/project-detail/${project.project_slug}`}
              key={project.project_slug}
              className={`col-lg-6  ${style.gap} ${index % 2 === 0 ? style.even : style.odd}`}
            >
              <ProjectCard
                project={{
                  id: project.project_slug,
                  title: project.projectName,
                  image: project.projectImage,
                  description: project.projectShortDescription,
                }}
              />
            </Link>
          ))}
          <div className={`${styles.loadMore}`}>
            <button
              style={{ margin: "0 auto", display: "block" }}
              onClick={handleToggle}
              className={styles.toggleButton}
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default OurProjects;
