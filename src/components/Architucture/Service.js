import React from "react";
import styles from "../../styles/home.module.css";
import ArticleCard from "../homepage/ArticleCard";
import Image from "next/image";
import HeaderText from "../homepage/HeaderText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const subTextVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container">
      {/* <div className={`${styles.flex} ${styles.gap20} ${styles.marginTop} ${styles.width100}`}>
        <div
          className={` ${styles.imageHightLarge} ${styles.width50} `} style={{width:"500px"}}
        >
          <Image
            className={styles.padding_image}
            src="/service.png"
            alt="Description"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <HeaderText text="Services" />
          <p className={styles.fs58}>ABOUT THE SERVICE</p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.{" "}
          </p>
          <ul>
            <li>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean
            </li>
            <li>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean
            </li>
            <li>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean
            </li>
          </ul>
        </div>
      </div> */}

      <div className={`row mb-5 ${styles.marginTop}`}>
        <div className="col-lg-5">
          <motion.div
            className={styles.imageContainer}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className={`${styles.blogImage} ${styles.imageHightLarge600}`}>
              <Image
                className={styles.padding_image}
                src="/about-1.png"
                alt="Description"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.overlay}></div>
          </motion.div>
        </div>
        <div className={`col-lg-6 ml-4 ${styles.marginTopSm}`}>
          <HeaderText text="Services" />
          <p className={styles.fs58}>ABOUT THE SERVICE</p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.{" "}
          </p>
          <ul>
            <li>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean
            </li>
            <li>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean
            </li>
            <li>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
