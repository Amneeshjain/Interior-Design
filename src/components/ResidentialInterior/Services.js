import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from '../../styles/home.module.css';
import Button from '../button';

const Services = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <div className="container">
      <section ref={targetRef} className="position-relative" style={{ height: '200vh'}}>
        <div className='d-flex align-items-center justify-content-center'>
          <div className={styles.lineLeft}></div>
          <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>Our services</p>
          <div className={styles.lineRight}></div>
        </div>

        <h1 className={`text-center col-lg-6 offset-lg-3 ${styles.uppercase}`}>Browse our set of services</h1>
        <div className="position-sticky top-0 d-flex align-items-center overflow-hidden" style={{ height: '100vh',marginTop:"-18vh" }}>
          <motion.div style={{ x }} className="d-flex gap-4">
            {text.map((item, index) => {
              return <Card item={item} key={index} />;
            })}
          </motion.div>
        </div>
      </section>
      <div className={`d-flex justify-content-center align-items-baseline  ${styles.gap20} ${styles.mtTopCustomOne}`} style={{marginTop:"-20vh"}}>
        <Button>Get in touch</Button>
        <p className={styles.subText}>Browse all services</p>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="position-relative overflow-hidden" style={{ width: '350px', height: '380px' }}>
      <div className="position-absolute w-100 h-100 transition-transform scale">
        <div className={`col-lg-12`}>
          <div className={`${styles.customCard} mx-2`}>
            <Image src={item.image} alt={item.title} width={100} height={100} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className={styles.subText}>{item.buttonText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const text = [
  {
    image: '/archui.png',
    title: 'Architectural',
    description: 'Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus in proin ante sagittis blandit interdum quis mauris, at pharetra quam aliquet donec orci viverra id.',
    buttonText: 'View service',
  },
  {
    image: '/archui.png',
    title: 'Interior Design',
    description: 'Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus in proin ante sagittis blandit interdum quis mauris, at pharetra quam aliquet donec orci viverra id.',
    buttonText: 'View service',
  },
  {
    image: '/archui.png',
    title: 'Space planning',
    description: 'Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus in proin ante sagittis blandit interdum quis mauris, at pharetra quam aliquet donec orci viverra id.',
    buttonText: 'View service',
  },
  
  
];
