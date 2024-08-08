"use client";
import React, { useRef } from "react";
import styles from "../../styles/portfolio.module.css";
import style from "../../styles/home.module.css";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import whiteButton from "../../../public/button-white.png";
import BgInteriar1 from "../../../public/portfolio-1.png";
import BgInteriar2 from "../../../public/portfolio-2.png";
import BgInteriar3 from "../../../public/bginterior-3.png"
import styleA from "../../styles/aboutSection.module.css";
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
 

  return (
    <>
      <div className={`${styles.blackBg}`}>
        {/* <div className="container"> */}
        <motion.div className="progress-bar" style={{ scaleX }} />

        <div
          style={{ color: "#fff" }}
          className={styleA.sectionTitle}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div style={{ width: "100%" }} className={styleA.left}>
            <div style={{ justifyContent: "center" }} className={styleA.tag}>
              {/* <hr style={{ border: "1px solid #fff" }} /> */}
              Our portfolio
            </div>
            <h2 style={{ color: "#fff", textAlign: "center" }}>
              Explore Our Portfolio <br /> And Ignite Your Inspiration.
            </h2>
          </div>
        </div>
        <div className={styles.slideContainer}>
        <Link href="/projects">
          <div className={` ${styles.greyBg} ${styles.sticky}`}>
            <div className={styles.info}>
              <div>
                <p className={style.colorWhite}>STUDIO APARTMENT
                </p>
                <p className={style.colorWhite}>GURGAON</p>
              </div>

              <div>
                <Image src={whiteButton} alt="Button" height={60} width={60} />
             
              </div>
            </div>
            <motion.div
              className={styles.mtTopCustom}
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
            
                
              <div className={styles.imageHeight} >
                <Image
                  src={BgInteriar3}
                  alt="Description"
                  layout="fill"
                  objectFit="cover"
                  
                   // or 'contain', 'none', etc.
                />
              </div>
            
             
            </motion.div>
          </div>
          </Link>
          <Link href="/projects">
          <div className={`${styles.greenBg} ${styles.sticky}`}>
            <div className={styles.info}>
              <div>
                <p className={style.colorWhite}>EF</p>
                <p className={style.colorWhite}>TATA PRIMANTI
                </p>
              </div>
              <div>
              <Link href="/projects">
                <Image src={whiteButton} alt="Button" height={60} width={60} />
                </Link>
              </div>
            </div>
            <motion.div
              className={styles.mtTopCustom}
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.imageHeight}>
                <Image
                  src={BgInteriar2}
                  alt="Description"
                  layout="fill"
                  objectFit="cover" // or 'contain', 'none', etc.
                />
              </div>
            </motion.div>
          </div>
          </Link>
          <Link href="/projects">
          <div className={` ${styles.greyBg} ${styles.sticky}`}>
            <div className={styles.info}>
              <div>
                <p className={style.colorWhite}>BPTP 
                </p>
                <p className={style.colorWhite}>SECTOR 102</p>
              </div>

              <div>
                <Link href="/projects">
                <Image src={whiteButton} alt="Button" height={60} width={60} />
                </Link>
              </div>
            </div>
            <motion.div
              className={styles.mtTopCustom}
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.imageHeight}>
                <Image
                  src={BgInteriar1}
                  alt="Description"
                  layout="fill"
                  objectFit="cover" // or 'contain', 'none', etc.
                />
              </div>
            </motion.div>
          </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: #000;
          transform-origin: 0%;
        }
      `}</style>
      {/* </div> */}
    </>
  );
};

export default Portfolio;