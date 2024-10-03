import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import style from "@/styles/project.module.css";
import Link from "next/link";
import styles from "@/styles/gallary.module.css";

const OurProjects = ({ projects }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  if (!projects || projects.length === 0) {
    return <div className={style.projectMainContainer}>No projects found.</div>;
  }
  const typeDescription = projects[0].projectType.type_description;

  return (
    <div className={style.projectMainContainer}>
      <div className="container">
        <div className="text-center mt-5 fw-4">
          {/* Display the type description */}
          <h4>{typeDescription}</h4>
        </div>
        <div className={`row ${style.projectsCardContainer}`}>
          {projects.slice(0, showMore ? projects.length : 2).map((project, index) => (
            <Link
              href={`/project-detail/${project.project_slug}`}
              key={project.project_slug}
              className={`col-lg-6 col-6 ${style.gap} ${index % 2 === 0 ? style.even : style.odd}`}
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
        </div>
        {projects.length > 2 && (
          <div className={`${styles.loadMore}`}>
            <button
              style={{ margin: "0 auto" }}
              onClick={handleToggle}
              className={styles.toggleButton}
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProjects;
