// components/Project/ProjectCard.js
"use client";
import React from "react";
import style from "../../styles/teamSlider.module.css";
import styles from "../../styles/home.module.css";
import styling from "../../styles/about.module.css"
import Button from "../button";
import Link from "next/link";

const Team = () => {

  return (
    <>
      <div className={`${style.FounderMainContainer}`}>
        <div className={style.sectionTitle} data-aos="zoom-out-up">
          <div className="d-flex align-items-center justify-content-center">
            <div className={styles.lineLeft}></div>
            <p
              className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}
            >
              Meet Our Founder
            </p>
            <div className={styles.lineRight}></div>
          </div>
          <h1
            className={`text-center col-lg-6 offset-lg-3`}
          >
            Col. Biraj Sahay
          </h1>
          <div className={`${styling.hideinmobile}`}>
            <div className="container mt-5 mb-5">
              <div className="row ">
                <div className={`col-lg-9 mt-5 ${styling.pdRight}`}>
                  <p className={styling.paraStyling}>
                    <span className={styling.fw600}>Col. Biraj Sahay,</span> a distinguished leader with over four
                    decades of experience, <span className={styling.fw600}>including 23 years in the Army  and
                      international service with the United Nations,</span> excels in
                    Business & Human Capital Management. Transitioning from senior
                    roles at <span className={styling.fw600}>Jindal Steel & Power Ltd., SREI Group,</span> and <span className={styling.fw600}>Supertech
                      Limited,</span> he is now a successful entrepreneur leading Colonelz
                    Group of Companies.
                  </p>
                  {/* <br/> */}
                  <p className={`py-1 ${styling.paraStyling}`}>
                    Under his guidance, <span className={styling.fw600}>Colonelz Constructions Pvt. Ltd.</span>
                    specializes in Architecture, Construction, Interior Designing,
                    and flawless execution. We set a benchmark for excellence in
                    every project, with designs that reflect individual taste,
                    comfort, and style. Focused on uniqueness and customization,
                    we guarantee that each project stands out distinctly.
                  </p>
                  {/* <p className={styling.paraStyling}>Our designs are an expression of YOU in Real Estate.</p> */}

                </div>
                <div className="col-lg-3">
                  <img className={styling.imgstyle} src="/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-008.jpg" width="100%" />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styling.hideindesktop}`}>
            <div className="container mb-5">
              <div className="row">
                <div className="col-lg-3 mt-5">
                  <img className={styling.imgstyle} src="/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-008.jpg" width="100%" />
                </div>
                <div className={`col-lg-9 ${styling.pdRight}`}>
                  <p className={styling.paraStyling}>
                    <span className={styling.fw600}>Col. Biraj Sahay,</span> a distinguished leader with over four
                    decades of experience, <span className={styling.fw600}>including 23 years in the Army  and
                      international service with the United Nations,</span> excels in
                    Business & Human Capital Management. Transitioning from senior
                    roles at <span className={styling.fw600}>Jindal Steel & Power Ltd., SREI Group,</span> and <span className={styling.fw600}>Supertech
                      Limited,</span> he is now a successful entrepreneur leading Colonelz
                    Group of Companies.
                  </p>
                  <p className={styling.paraStyling}>
                    Under his guidance, <span className={styling.fw600}>Colonelz Constructions Pvt. Ltd.</span>
                    specializes in Architecture, Construction, Interior Designing,
                    and flawless execution. We set a benchmark for excellence in
                    every project, with designs that reflect individual taste,
                    comfort, and style. Focused on uniqueness and customization,
                    we guarantee that each project stands out distinctly.
                  </p>
                  {/* <p className={styling.paraStyling}>Our designs are an expression of YOU in Real Estate.</p> */}

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
