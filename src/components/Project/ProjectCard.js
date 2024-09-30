import React from "react";
import Image from "next/image";
import styles from "../../styles/project.module.css";
import style from "../../styles/home.module.css";

const ProjectCard = ({ project }) => (
  <>
    <div className={styles.desktopView}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover" 
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h2 className={`${style.fs26} ${style.fw300}`}>
              {project.title}
            </h2>
            <p className={`${style.fs16} ${style.fw300} `}>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* ================================================================================ */}
    <div className={styles.mobileView}>
      <div className={styles.card2}>
        <div className={styles.cardImageContainer2}>
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            className={styles.image}
            objectFit="cover" 
          />
          <div className={styles.titleOverlay}>
            {project.title}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProjectCard;
