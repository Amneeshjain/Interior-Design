"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/portfolio.module.css";
import style from "../../styles/home.module.css";
import Link from "next/link";
import { motion, useScroll, useSpring, } from "framer-motion";
import Image from "next/image";
import BgInteriar1 from "../../../public/OUR PORTFOLIO/3.jpg";
import BgInteriar2 from "../../../public/OUR PORTFOLIO/2.jpg";
import BgInteriar3 from "../../../public/OUR PORTFOLIO/1.jpg"
import styleA from "../../styles/aboutSection.module.css";
import styless from "../../styles/video.module.css";
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

  const [projectTypes, setProjectTypes] = useState([]);

  useEffect(() => {
    const fetchProjectTypes = async () => {
      try {
        const response = await fetch("https://backend-interior.onrender.com/api/project/project-types");
        const data = await response.json();
        if (data.success) {
          setProjectTypes(data.data);
          console.log("portfolio", data.data);
        } else {
          console.error("Failed to fetch project types:", data.message);
        }
      } catch (error) {
        console.error("Error fetching project types:", error);
      }
    };
    fetchProjectTypes();
  }, []);
  return (
    <>
      <div className={` pb-5 ${styles.blackBg}`}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div
          style={{ color: "#fff" }}
          className={styleA.sectionTitle}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div style={{ width: "100%" }} className={styleA.left}>
            <div style={{ justifyContent: "center" }} className={styleA.tag}>
              Our portfolio
            </div>
            <h2 style={{ color: "#fff", textAlign: "center" }}>
              Explore Our Portfolio <br />
            </h2>
          </div>
        </div>
        <div className={styles.slideContainer}>
          <Link href="/project-detail/house-of-colour,-tata-primanti">
            <div className={` ${styles.greyBg} ${styles.sticky}`}>
              <div className={styles.info}>
                <div>
                  <p className={style.colorWhite}>Apartment
                  </p>
                  <p className={style.colorWhite}>House of Colours,Tata Primanti

                  </p>
                  <p className={style.colorWhite}>Area - 2000 Sqft
                  </p>
                </div>

                <div>
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
          <Link href="/project-detail/panda-18,-ardee-mall-">
            <div className={`${styles.greenBg} ${styles.sticky}`}>
              <div className={styles.info}>
                <div>
                  <p className={style.colorWhite}>RESTAURANT AND CAFE</p>
                  <p className={style.colorWhite}>Panda 18,Ardee Mall
                  </p>
                  <p className={style.colorWhite}>Area - 1050 Sqft
                  </p>
                </div>
                <div>
                  <Link href="/projects">
                    {/* <Image src={whiteButton} alt="Button" height={60} width={60} /> */}
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
          <Link href={`/projects/${projectTypes._id}`}>
            <div className={` ${styles.greyBg} ${styles.sticky}`}>
              <div className={styles.info}>
                <div>
                  <p className={style.colorWhite}>OFFICE</p>
                  <p className={style.colorWhite}>Taggd, Gurugram
                  </p>
                  <p className={style.colorWhite}>Area - 5200 Sqft
                  </p>
                </div>
                <div>
                  <Link href="/projects">
                    {/* <Image src={whiteButton} alt="Button" height={60} width={60} /> */}
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
        <div className={`mb-5 ${styless.btnContainer}`}>
          <Link href="/projects">View More</Link>
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