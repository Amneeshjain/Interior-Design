
"use client"
import React from 'react';
import styles from '../../../styles/home.module.css'
import Contact from "../../../components/About/Contact"
import HeroSection from '../../../components/About/HeroSection'
import AboutFirm from '../../../components/ResidentialConstruction/AboutFirm'
import Process from '../../../components/ResidentialConstruction/Process'
import Services from '../../../components/ResidentialConstruction/Services'
const page = () => {
  
  return (
<div>
<HeroSection
        title="Articles & news"
        buttonText="Get in Touch"
        backgroundImage="../../bg-hero.png" 
      />

    <div className={styles.pdCustomOverall}>
     <AboutFirm />
      </div>

      <div className={styles.pdCustomOverall}>
     <Services />
      </div>

      <div className={styles.pdCustomOverall}>
     <Process />
      </div>


      <div className={styles.pdCustomOverall}>
     <Contact/>
      
      </div>
      
    
    </div>
  )
}

export default page;