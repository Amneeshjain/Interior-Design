// components/Project/ProjectCard.js
"use client";
import React from "react";
import style from "../../styles/teamSlider.module.css";
import styles from "../../styles/home.module.css";
import styling from "../../styles/about.module.css";
import Button from "../button";
import Link from "next/link";

const Team = () => {
  return (
    <>
      <div className={`${styling.principalMainContainer}`}>
        <div className={style.sectionTitle} data-aos="zoom-out-up">
          <div className="d-flex align-items-center justify-content-center">
            <div className={styles.lineLeft}></div>
            <p
              className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}
            >
              Meet Our Principal Designer
            </p>
            <div className={styles.lineRight}></div>
          </div>
          <h1
            className={`text-center col-lg-6 offset-lg-3`}
          >
            
            Naomi Sahay
          </h1>
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col-lg-3">
                <img className={styling.imgstyle}
                  src="/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-009.jpg"
                  width="100%"
                />
              </div>
              <div className="col-lg-9">
                <p className={styling.paraStyling}>
                  <span className={styling.fw600}>Naomi Sahay</span> holding,{" "}
                  <span className={styling.fw600}>
                    Masters in Interior Design from Florence
                  </span>{" "}
                  excels in Business & Human Capital Management. infuses
                  international experience into our projects. Her expertise
                  combines Italian design finesse with a global outlook.
                  Passionate about harmonizing aesthetics and functionality, she
                  leads our team in creating spaces that exude timeless elegance
                  and contemporary innovation.
                </p>
                <p className={styling.paraStyling}><span className={styling.fw600}>Colonelz</span> is a brand built with the vision of being the differentiator in space designing, wherein
                your desires and the purse strings have a common meeting ground.</p>
                <p className={styling.paraStyling}>
                  
                  <span className={styling.fw600}>
                  Happy customers- Our Strongest Advertisement.
                  </span><br/>
                  We are a brand, working towards providing people exclusive spaces. Spaces designed to
enhance the everyday life, expressive, and in harmony with the surroundings.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
