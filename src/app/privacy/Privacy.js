"use client";
import React from "react";

import styles from "../../styles/home.module.css";
import PrivacyContent from "../../components/Privacy/PrivacyContent";
import HeroSection from "../../components/About/HeroSection";

const Termsandconditions = () => {
  return (
    <div>
      <HeroSection
        title="Privacy"
        buttonText="Get in Touch"
        backgroundImage="../../privacy.png"
        text="Privacy"
        background={"#fff"}
        color={"#fff"}
      />

      <div className={styles.pdCustomOverall}>
        <PrivacyContent/>
      </div>
    </div>
  );
};

export default Termsandconditions;
