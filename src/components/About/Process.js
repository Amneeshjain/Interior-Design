'use client'

import style from "../../styles/process.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Process = () => {
  const controls = useAnimation();
  const [threshold, setThreshold] = useState(0.1);
  const { ref, inView } = useInView({ triggerOnce: false, threshold });

  useEffect(() => {
    const updateThreshold = () => {
      if (window.innerWidth <= 768) {
        setThreshold(0.1);
      } else {
        setThreshold(0.4);
      }
    };

    updateThreshold();
    window.addEventListener("resize", updateThreshold);
    return () => window.removeEventListener("resize", updateThreshold);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <>
      <div
        style={{ backgroundColor: `#f5f5f5` }}
        className={style.processMainContainer}
        ref={ref}
      >
        <div className="container">
          <div
            style={{ justifyContent: "center", alignItems: "center" }}
            className={stylesA.sectionTitle}
            data-aos="zoom-out-up"
          >
            <div
              className={stylesA.left}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div className={stylesA.tag}>
                <hr />
                Our Designing Process
                <hr />
              </div>
              <h2>
                A Simple, yet <br />
                Effective Process
              </h2>
            </div>
          </div>

          <div className={`row ${style.mt5}`}>
            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={0}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>1</div>
              <div className={style.content}>
                <h2>Understanding</h2>
                <p>We start by discussing your vision and needs to fully grasp your design preferences and requirements. This helps us create custom design plans.</p>
              </div>
            </motion.div>

            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={1}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>2</div>
              <div className={style.content}>
                <h2>Pitch Presentation</h2>
                <p>We present our design ideas and concepts to you, showcasing how they meet your needs. This stage allows you to provide feedback.</p>
              </div>
            </motion.div>
            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={2}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>3</div>
              <div className={style.content}>
                <h2>Contract Signing + Advance</h2>
                <p>Once you&apos;re happy with the design, we finalize the contract and require an advance payment to begin the project.</p>
              </div>
            </motion.div>

            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={3}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>4</div>
              <div className={style.content}>
                <h2>Site Measurement & Documentation</h2>
                <p>We visit your space to take precise measurements and existing conditions. This ensures that our design fits perfectly.</p>
              </div>
            </motion.div>
          </div>

          <div className="row mt-2">
            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={4}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>5</div>
              <div className={style.content}>
                <h2>Project Timeline & Tentative Estimate</h2>
                <p>We provide a detailed timeline and a tentative estimate for the project. This helps you understand the scope of work.</p>
              </div>
            </motion.div>

            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={5}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>6</div>
              <div className={style.content}>
                <h2>Design</h2>
                <p>Our team creates detailed design plans and 3D renderings based on your feedback. This phase focuses on perfecting every detail of your design.</p>
              </div>
            </motion.div>

            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={6}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>7</div>
              <div className={style.content}>
                <h2>Execution</h2>
                <p>We begin the actual work, coordinating with contractors and suppliers to bring your design to life. This involves construction, installation, and final touches.</p>
              </div>
            </motion.div>

            <motion.div
              className={`col-lg-3 col-6 ${style.box}`}
              custom={7}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className={style.circle}>8</div>
              <div className={style.content}>
                <h2>Handover</h2>
                <p>After completing the project, we conduct a thorough review with you to ensure everything meets your expectations. We hand over the space ready for you to enjoy.</p>
              </div>
            </motion.div>
          </div>
          <div className={style.btnContainer}>
            <Link href="/get-in-touch">Get In Touch</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
