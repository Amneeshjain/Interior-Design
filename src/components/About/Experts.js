// components/Project/ProjectCard.js
"use client";
import React from "react";
import style from "../../styles/teamSlider.module.css";
import styles from "../../styles/home.module.css";
import styling from "../../styles/about.module.css";
import style2 from "../../styles/teamSlider.module.css"
import Button from "../button";
import Link from "next/link";

// Sample data
const TeamSliderData = [
  {
    id: 1,
    image: '/0aff511d32ee080f87577392027d9675.jpg',
    title: 'Ramsanjeevan',
    profile: 'Lead Engineer',
   
  },
  {
    id: 2,
    image: '/image_03@2x .png',
    title: 'Ram Sharma',
    profile: 'Project Manager',
    descrip: 'Specializes in project management and client relations.'
  },
  {
    id: 3,
    image: '/img_02@2x.jpg',
    title: 'Dipak Kumar',
    profile: 'Project Manager',
    descrip: 'Specializes in project management and client relations.'
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <>
      <div className={`${styling.ExpertMainContainer}`} id="experts">
        <div className={style.sectionTitle} data-aos="zoom-out-up">
          <div className="d-flex align-items-center justify-content-center">
            <div className={styles.lineLeft}></div>
            <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>
              Meet Our Experts
            </p>
            <div className={styles.lineRight}></div>
          </div>
          <h1 className={`text-center col-lg-6 offset-lg-3 ${styles.uppercase}`}>
            Innovation for sophistication
          </h1>
          <div className="container mt-5 mb-5">
            <p className={styling.paraStyling}>
              Colonez Construction Pvt. Ltd. takes pride in our Site team, the core of our commitment to construction excellence. Led by seasoned professionals,
              they ensure meticulous project oversight, adherence to timelines, and the highest quality standards from inception to completion. Their pivotal role includes
              efficient on-site coordination, resource management, and fostering collaboration with clients and project teams. With hands-on expertise, our Experts contribute
              significantly to the success of our innovative construction projects.
            </p>
            
          <div className="mt-5">
            <div className={style2.teamSliderContainer}>
              <div className={`row`}>
                {TeamSliderData.map(
                  ({ id, image, title, profile}) => {
                    return (
                      <>
                        <div key={id} className={`col-lg-4 ${style2.expert_card}`}>
                          <figure>
                            <img src={image} alt="" />
                          </figure>
                          

                          <div className={style2.detail_box}>
                            <h3>{title}</h3>
                            <p className={style2.profile}>{profile}</p>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
