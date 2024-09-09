import React, { useState } from "react";
import stylesA from "../../styles/aboutSection.module.css";
import ProjectCard from "../../components/Project/ProjectCard";
import style from "../../styles/project.module.css";
import Link from "next/link";

import styles from "../../styles/gallary.module.css";
const projectData = [
  {
    id: 1,
    title: "House of Colour, Tata Primanti",
    image: "/project1gallary6 (1).jpg",
    description: "Built-up Area: 2000 sq.ft, Carpet Area: 1650 sq.ft ",
    href: "/project-detail"
  },
  {
    id: 2,
    title: "Sun Moon Restaurant",
    image: "/CAFE-01/tye_274.jpg",
    description: "Elegant dining experience at Sun Moon Restaurant.",
    href: "/projectdetail1"
  },
  {
    id: 3,
    title: "Hotel Udai Niwas",
    image: "/CAFE 02/tye_141 (2).jpg",
    description: "Heritage hotel in the heart of the city.",
    href: "/projectdetail2"
  },
  {
    id: 4,
    title: "Another Vasant Kunj Residence",
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-364.jpg",
    description: "Modern living in Vasant Kunj.",
    href: "/projectdetail3"
  }
];

const OurProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <div className={style.projectMainContainer}>
      <div className="container">
        <div className={`row ${style.projectsCardContainer}`}>
          {projectData.map((project, index) =>
            <Link
              href={project.href}
              key={project.id}
              className={`col-lg-6  ${style.gap} ${index % 2 === 0
                ? style.even
                : style.odd}`}
            >
              <ProjectCard project={project} />
            </Link>
          )}
        </div>
        <div className={`${styles.loadMore}`}>
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
