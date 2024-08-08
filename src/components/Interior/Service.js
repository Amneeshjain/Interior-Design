"use client"
import style from "../../styles/services.module.css";
import styles from "../../styles/home.module.css";
import styling from "../../styles/serviceScrollSlider.module.css";
import ProjectCard from "../../components/Project/ProjectCard";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    title: "Residential Interior",
    image: "/residentialImage.jpg",
    // description: "Luxurious living spaces in Vasant Kunj.",
    navigate:"/interior/residential-interior"
  },
  {
    id: 2,
    title: "Commercial Interior",
    image: "/residentialimage2.jpg",
    // description: "Elegant dining experience at Sun Moon Restaurant.",
    navigate:"/interior/commercial-interior"
  },
  
];
const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className={styles.lineLeft}></div>
        <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>
          Interior Services
        </p>
        <div className={styles.lineRight}></div>
      </div>
      <h1 className={`text-center col-lg-6 offset-lg-3`}>
        Tailored to fit your space and style
      </h1>
      <div className="container mb-5 mt-5">
      <div className={`row ${style.projectsCardContainer}`}>
          {projectData.map((project, index) =>
            <Link
              href={project.navigate}
              key={project.id}
              className={`col-lg-6 col-6 ${style.gap} ${index % 2 === 0
                ? style.even
                : style.odd}`}
            >
              <ProjectCard project={project} />
            </Link>
          )}
        </div>
        {/* <div className={styles.loadMore}>
          <button
            style={{ margin: "0 auto" }}
            onClick={handleToggle}
            className={`${styles.toggleButton}`}
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Services;
