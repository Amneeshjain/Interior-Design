// components/GetInTouch.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/home.module.css';
import Button from '../button';

const GetInTouch = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,  // Animation triggers every time it comes into view
    threshold: 0.5       // Trigger animation when 10% of the component is in view
  });

  const leftTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const rightTextVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div ref={ref} className={styles.contactSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={leftTextVariants}
          transition={{ duration: 0.8 }}
        >
          GET IN TOUCH TODAY TO GET A FREE PROJECT QUOTE
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightTextVariants}
          transition={{ duration: 0.8 }}
        >
          Hendrerit augue libero ut sollicitudin velit iaculis mi imperdiet volutpat at aliquet mauris solmer ullamcorper amet commodo commodo arcu gravida ut urna a nec es.
        </motion.p>
        <Button variant='secondary'>Get in touch</Button>
      </div>
    </div>
  );
};

export default GetInTouch;
