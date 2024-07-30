import React from "react";
import stylesA from "../../styles/aboutSection.module.css";
import ProjectCard from "../../components/Project/ProjectCard";
import style from "../../styles/project.module.css";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    title: "RESIDENTIAL INTERIOR",
    image: "/project-img.png",
    link: "/interior/residential-interior",
    description: "Luxurious living spaces in Vasant Kunj.",
  },
  {
    id: 2,
    title: "COMMERCIAL INTERIOR",
    image: "/project-img.png",
    link: "/interior/residential-commercial",
    description: "Elegant dining experience at Sun Moon Restaurant.",
  },
];

const CardSection = () => {
  return (
    <div className={style.projectMainContainer}>
      <div className="container">
        <div
          style={{ paddingTop: "0" }}
          className={`row ${style.projectsCardContainer}`}
        >
          {projectData.map((project, index) => (
            <Link
              href={project.link}
              key={project.id}
              className={`col-lg-6 col-6 ${style.gap} ${
                index % 2 === 0 ? style.even : style.odd
              }`}
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
