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
    image: "/T2,TATA PRIMANTI/3.jpg",
    description: "Built-up Area: 2000 sq.ft, Carpet Area: 1650 sq.ft ",
    href: "/project-detail"
  },
  {
    id: 2,
    title: "Panda 18, Ardee Mall ",
    image: "/CAFE-01/tye_299.jpg",
    description: "Built-up Area:200 sq.ft,Carpet Area:1050 sq.ft ",
    href: "/projectdetail1"
  },
  {
    id: 3,
    title: "Panda 18, Ardee Mall",
    image: "/CAFE 02/tye_141 (2).jpg",
    description: "Built-up Area:200 sq.ft,Carpet Area:1050 sq.ft ",
    href: "/projectdetail2"
  },
  {
    id: 4,
    title: "Plymaarque",
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-364.jpg",
    description: "Built-up Area:2400 SQFT,Carpet Area:2200 SQFT",
    href: "/projectdetail3"
  },
  {
    id: 5,
    title: "Another Vasant Kunj Residence",
    image: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-03.jpg",
    description: "Modern living in Vasant Kunj.",
    href: "/projectdetail4"
  }
  , {
    id: 6,
    title: "Sobha City",
    image: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-03.jpg",
    description: "Modern living in Vasant Kunj.",
    href: "/projectdetail5"
  }
];

const OurProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  // Determine how many projects to show based on `showMore` state
  const visibleProjects = showMore ? projectData : projectData.slice(0, 4);

  return (
    <div className={style.projectMainContainer}>
      <div className="container">
        <div className={`row ${style.projectsCardContainer}`}>
          {visibleProjects.map((project, index) => (
            <Link
              href={project.href}
              key={project.id}
              className={`col-lg-6 ${style.gap} ${index % 2 === 0 ? style.even : style.odd
                }`}
            >
              <ProjectCard project={project} />
            </Link>
          ))}
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
