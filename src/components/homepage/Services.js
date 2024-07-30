"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/serviceScrollSlider.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import Link from "next/link";

const Services = ({ title, subtitle, text }) => {
  return (
    <div>
      <HorizontalScrollCarousel title={title} subtitle={subtitle} text={text} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ title, subtitle, text }) => {
  return (
    <>
      <div id="services" className={styles.servicesMainContiner}>
        <div className="container">
          <section className="position-relative">
            <div
              style={{ justifyContent: "center", alignItems: "center" }}
              className={stylesA.sectionTitle}
              data-aos="fade-up"
              data-aos-duration="1000"
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
                  {title}
                  <hr />
                </div>
                <h2 className="col-lg-8">
                  {subtitle}
                </h2>
              </div>
            </div>
            <div
              className={`position-sticky d-flex align-items-center ${styles.mainCon}`}
              style={{ top: "180px", marginTop: "50px" }}
            >
              <div className={`${styles.display} pt-5`}>
                {text.map((item, index) => (
                  <Card item={item} key={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const Card = ({ item }) => {
  return (
    <div className={`${styles.serviceSliderCard} col-lg-4`}>
      <div className="transition-transform scale">
        <div>
          <div className={`${styles.customCard}`}>
            <figure>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
            </figure>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.url && <Link href={item.url}><button className={styles.servicesButton}>View services</button></Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
