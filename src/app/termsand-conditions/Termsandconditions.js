
"use client"
import React from 'react';

import styles from "../../styles/home.module.css"
import Termsandconditionscontent from '../../components/Termsandconditions/Termsandconditionscontent';
import HeroSection from "../../components/About/HeroSection"

const Termsandconditions = () => {
  
  
  return (
<div>
<HeroSection
        title="Terms & Conditions"
        buttonText="Get in Touch"
        backgroundImage="../../terms.png" 
        text="Terms & Conditions"
        background={"#fff"}
        color={"#fff"}

      />

    <div className={styles.pdCustomOverall}>
     
      <Termsandconditionscontent/>
      </div>
      
      
      
    
    </div>
  )
}

export default Termsandconditions;