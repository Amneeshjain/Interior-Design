import React, { useState } from "react";
import stylesA from "../../styles/aboutSection.module.css";
import ProjectCard from "../../components/Project/ProjectCard";
import style from "../../styles/project.module.css";
import Link from "next/link";

import styles from "../../styles/gallary.module.css";
const projectData = [
  {
    id: 1,
    title: "Vasant Kunj Residence",
    image: "/project-img.png",
    description: "Luxurious living spaces in Vasant Kunj.",
  },
  {
    id: 2,
    title: "Sun Moon Restaurant",
    image: "/project-img.png",
    description: "Elegant dining experience at Sun Moon Restaurant.",
  },
  {
    id: 3,
    title: "Hotel Udai Niwas",
    image: "/project-img.png",
    description: "Heritage hotel in the heart of the city.",
  },
  {
    id: 4,
    title: "Another Vasant Kunj Residence",
    image: "/project-img.png",
    description: "Modern living in Vasant Kunj.",
  },
];

const OurProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <div className={style.projectMainContainer}>
      <div className="container">
        <div
          style={{ justifyContent: "center", alignItems: "center" }}
          className={stylesA.sectionTitle}
        >
          <div
            className={stylesA.left}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className={stylesA.tag}>
              <hr />
              Our Projects
              <hr />
            </div>
            <h2>
            Browse Our Latest <br />
            Projects
            </h2>
          </div>
        </div>

        <div className={`row ${style.projectsCardContainer}`}>
          {projectData.map((project, index) => (
            <Link
              href="/project-detail"
              key={project.id}
              className={`col-lg-6 col-6 ${style.gap} ${
                index % 2 === 0 ? style.even : style.odd
              }`}
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
        <div className={styles.loadMore}>
          <button
            style={{ margin: "0 auto" }}
            onClick={handleToggle}
            className={`${styles.toggleButton}`}
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
