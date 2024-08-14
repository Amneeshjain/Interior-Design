"use client"
import style from "../../styles/services.module.css";
import styles from "../../styles/home.module.css";
import styling from "../../styles/serviceScrollSlider.module.css";
import ProjectCard2 from "../../components/Project/ProjectCard2";
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
      <div className="d-flex align-items-center justify-content-center ">
        <div className={styles.lineLeft}></div>
        <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>
          Interior Services
        </p>
        <div className={styles.lineRight}></div>
      </div>
      <h1 className={`text-center col-lg-6 offset-lg-3  ${styles.paad}`}>
        Tailored to fit your space and style
      </h1>
      <div className={`container` }>
      <div className={`row `}>
          {projectData.map((project2, index) =>
            <Link
              href={project2.navigate}
              key={project2.id}
              className={`col-lg-6 col-md-6 col-sm-6 ${style.gapss} ${index % 2 === 0
                ? style.even
                : style.odd}`}
            >
              <ProjectCard2 project2={project2} />
            </Link>
          )}
        </div>
      
      </div>
    </>
  );
};

export default Services;
