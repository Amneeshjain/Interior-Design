import React from "react";
import Image from "next/image";
import styles from "../../styles/projectcard2.module.css";
import style from "../../styles/home.module.css";

const ProjectCard2 = ({ project2 }) => {
  return (
    <div>
      <div className={styles.card1}>
        {/* <Image src={project.image} alt={project.title} className={styles.image} /> */}
        <div className={styles.cardImageContainer1}>
          <Image
            src={project2.image}
            alt={project2.title}
            // className={styles.image}
            layout="fill"
          />
        </div>

        <div className={styles.content1}>
          <div className={styles.contentText1}>
            <h2 className={`${style.fs26} ${style.fw300}`}>
              {project2.title}
            </h2>
            <p className={`${style.fs16} ${style.fw300}`}>
              {project2.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;
