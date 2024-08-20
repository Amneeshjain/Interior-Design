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
      <div id="about" className={style.aboutMainContainer}>
        <div className="container">
          <div
            className={style.sectionTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={style.left}>
              <div className={style.tag} style={{ display: "flex", justifyContent: "start" }}>
                <hr />
                About the firm
              </div>
              <h2>
                Your Journey <br />
                to Incredible Spaces
              </h2>
            </div>
            <div className={style.right}>
              <Link href="/about">MORE ABOUT US</Link>
            </div>
          </div>
          <div className={style.aboutInnerItems}>
            <div className={style.left}>
              <figure data-aos="zoom-in">
                <img ref={(el) => el && imagesRef.current.push(el)} src="slide-1.jpg" alt="" />
              </figure>
            </div>
            <div className={style.right}>
              <ul>
                <li>
                  <figure data-aos="zoom-in">
                    <img ref={(el) => el && imagesRef.current.push(el)} src="gallery-2.jpg" alt="" />
                  </figure>
                </li>
                <li>
                  <figure data-aos="zoom-in">
                    <img ref={(el) => el && imagesRef.current.push(el)} src="gallery-3.jpg" alt="" />
                  </figure>
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
