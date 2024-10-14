"use client"
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
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
      { threshold: 0.5 } // Adjust this value as needed
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
    <>
      <div id="about" className={` ${style.aboutMainContainer}`}>
        <div className="container ">
          <div
            className={style.sectionTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={style.left}>
              <div className={style.tag} style={{ display: "flex", justifyContent: "start" }}>
                <hr />
                Our Projects
              </div>
              <h2>
                A Variety of Projects
              </h2>
            </div>
            <div className={style.right}>
              <Link href="/about">MORE ABOUT US</Link>
            </div>
          </div>
          <div className={style.aboutInnerItems}>
            <div className={style.left} style={{ position: 'relative' }}>
              <figure data-aos="zoom-in" style={{ overflow: 'hidden' }}>
                <img
                  ref={(el) => el && imagesRef.current.push(el)}
                  src="/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/cww_25.jpg"
                  alt=""
                  style={{ width: '100%' }}
                />
              </figure>
              <div className={style.imgContent} style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                <div className={style.contbox}>
                  <p>APARTMENT & VILLA</p>
                </div>
              </div>
            </div>


            <div className={style.right}>
              <ul>
                <li>
                  <div style={{ position: 'relative' }}>

                    <figure data-aos="zoom-in" style={{ overflow: 'hidden' }}>
                      <img ref={(el) => el && imagesRef.current.push(el)} src="/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/tye_144.jpg" alt="" />
                    </figure>
                    <div className={style.imgContent} style={{ position: 'absolute', bottom: 0, left: -7, width: '100%' }}>
                      <div className={style.contbox}>
                        <p>RESTAURANT AND CAFE’S
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div style={{ position: 'relative' }}>


                    <figure data-aos="zoom-in" style={{ overflow: 'hidden' }}>
                      <img ref={(el) => el && imagesRef.current.push(el)} src="/3 photos black to colour -20241009T062338Z-001/3 photos black to colour/DSC_1674.JPG" alt="" />
                    </figure>
                    <div className={style.imgContent} style={{ position: 'absolute', bottom: 0, left: -7, width: '100%' }}>
                      <div className={style.contbox}>
                        <p>OFFICES & RETAIL</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;
