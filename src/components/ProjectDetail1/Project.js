// components/Project/ProjectCard.js
import React from 'react';
import styles from "../../styles/home.module.css";
import style from "../../styles/about.module.css"

const stepsData = [
    {
        id: 1,
        title: "Space planning",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit."
    },
    {
        id: 2,
        title: "Space planning",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit."
    },
    {
        id: 3,
        title: "Decoration",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit."
    }
];
const Project = () => (

    <div>
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className={styles.lineLeft}></div>
                <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>Our Process</p>
                <div className={styles.lineRight}></div>
            </div>

            <h1 className={`text-center col-lg-6 offset-lg-3 ${styles.uppercase} ${styles.fs58}`}>
                A Simple, yet Effective Process
            </h1>
            <div className={`row ${styles.flex}`}>
                {stepsData.map((step) => (
                    <div key={step.id} className={`col-lg-4 ${style.step} ${style.marginTop}`}>
                        <div className={style.stepNumber}>{step.id.toString().padStart(2, '0')}</div>
                        <h3 className={style.stepTitle}>{step.title}</h3>
                        <p className={`${style.stepDescription} ${styles.fs18}`}>{step.description}</p>
                    </div>
                ))}
            </div>

        </div>

    </div>
);

export default Project;
