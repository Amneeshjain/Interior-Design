// components/Project/ProjectCard.js
import React from "react";
import Image from "next/image";
import firmBg from "../../../public/image 9.png";
import styles from "../../styles/home.module.css";
import style from "../../styles/about.module.css";
import HeaderText from "../homepage/HeaderText";

const AboutFirm = () => (
  <div className={`container ${style.relative}`}>
    <div className="row">
      <div className="col-lg-6">
        <div
          className={`${styles.imageHight600}`}
          style={{ width: "100%", position: "relative" }}
        >
          <Image src={firmBg} alt="about" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>

    <div
      className={`row d-flex align-items-center justify-content-end ${style.absolute}`}
    >
      <div className={`col-lg-7 d-flex align-items-center `}>
        <div className={` ${style.innerDiv}`}>
          <HeaderText text="About the Firm" />
          <h1 className={`${style.fs58} ${style.uppercase}`}>
            We Started Back in Year 2012
          </h1>
          <p className={`${style.paraColor} ${styles.fs18}`}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          {/* <button className={`${style.button} ${style.mt1}`}>Read More</button> */}
        </div>
      </div>
    </div>
  </div>
);

export default AboutFirm;
