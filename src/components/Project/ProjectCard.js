// components/Project/ProjectCard.js
import React from "react";
import Image from "next/image";
import styles from "../../styles/project.module.css";
import style from "../../styles/home.module.css";

const ProjectCard = ({ project }) => (
  <div className={styles.card}>
    {/* <Image src={project.image} alt={project.title} className={styles.image} /> */}

    <div className={styles.cardImageContainer}>
      <Image
        src={project.image}
        alt={project.title}
        className={styles.image}
        layout="fill"
      />
    </div>

    <div className={styles.content}>
      <div className={styles.contentText}>
        <h2 className={`${style.fs26} ${style.fw300}`}>{project.title}</h2>
        <p className={`${style.fs16} ${style.fw300}`}>{project.description}</p>
      </div>
    </div>
  </div>
);

export default ProjectCard;
