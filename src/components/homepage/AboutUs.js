"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import style from "../../styles/aboutSection.module.css";

const AboutUs = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    const validElements = imagesRef.current.filter((img) => img instanceof Element);

    validElements.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      validElements.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div id="about" className={style.aboutMainContainer}>
      <div className="container">
        {/* Section Title */}
        <div className={style.sectionTitle} data-aos="fade-up" data-aos-duration="1000">
          <div className={style.left}>
            <div className={style.tag} style={{ display: "flex", justifyContent: "start" }}>
              <hr />
              Our Projects
            </div>
            <h2>A Variety of Projects</h2>
          </div>
          <div className={style.right}>
            <Link href="/about">MORE ABOUT US</Link>
          </div>
        </div>

        {/* Projects Section */}
        <div className="row mt-4">
          {/* Left Side: Apartment & Villa */}
          <div className="col-lg-7">
            <div className={style.imgdata1}>
              <img
               ref={(el) => el && imagesRef.current.push(el)}
                src="/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/cww_25.jpg"
                alt="Apartment and Villa"
              />
              <div className={style.overlay}>
                <h5 className="text-white">APARTMENT & VILLAS</h5>
              </div>
            </div>
          </div>

          {/* Right Side: Restaurant and Offices */}
          <div className="col-lg-5">
            <div className="row">
              {/* Restaurant and Cafe */}
              <div className={`col-12 ${style.mb}`}>
                <div className={style.imgdata2}>
                  <img
                  ref={(el) => el && imagesRef.current.push(el)}
                    src="/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/tye_144.jpg"
                    alt="Restaurant and Cafe"
                  />
                  <div className={style.overlay1}>
                    <h5 className="text-white">RESTAURANT AND CAFES</h5>
                  </div>
                </div>
              </div>

              {/* Offices & Retail */}
              <div className="col-12 mt-3">
                <div className={style.imgdata2}>
                  <img
                  ref={(el) => el && imagesRef.current.push(el)} 
                    src="/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/DSC_1674.JPG"
                    alt="Offices and Retail"
                  />
                  <div className={style.overlay1}>
                    <h5 className="text-white">OFFICES & RETAIL</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
