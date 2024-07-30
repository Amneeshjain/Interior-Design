// components/Project/ProjectCard.js
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../../styles/teamSlider.module.css";
import styles from "../../styles/home.module.css";

const TeamSliderData = [
  {
    id: 1,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-015.jpg",
    title: "Vartika Sharma",
    profile: "SR. ARCHITECT",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-018.jpg",
    title: "Priyanshu Prajapati",
    profile: "PROJECT ARCHITECT",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-017.jpg",
    title: "Shaily",
    profile: "PROJECT ARCHITECT",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-016.jpg",
    title: "Kushal Yamujala",
    profile: "3D VISUALIZER",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-019.jpg",
    title: "Akshita Kalia",
    profile: "JR. INTERIOR DESIGNER",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-021.jpg",
    title: "Anubhav Sharma",
    profile: "EXECUTIVE ASSISTANT",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 7,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-020.jpg",
    title: "Shivanshi Verma",
    profile: "JR. INTERIOR DESIGNER",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 8,
    image: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-012.jpg",
    title: "Priyanka Yadav",
    profile: "JR. EXECUTIVE HR & MARKETING",
    descrip:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Team = () => {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots:true,
    // nextArrow: leftIcon,
    responsive: [
      {
        breakpoint: 1024, // Settings for screens <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Settings for screens <= 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480, // Settings for screens <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="Team"
        className={`${style.teamSliderMainContainer} teamSliderMainContainer`}
      >
        <div className={style.sectionTitle} data-aos="zoom-out-up">
          <div className="d-flex align-items-center justify-content-center">
            <div className={styles.lineLeft}></div>
            <p
              className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}
            >
              Meet Our Team 
            </p>
            <div className={styles.lineRight}></div>
          </div>
          <h1
            className={`text-center col-lg-6 offset-lg-3 ${styles.uppercase}`}
          >
            Your Imagination into Immersence
          </h1>
        </div>
        <div className="container">
          <div className={style.teamSliderItems}>
            <div className={style.teamSliderContainer}>
              <Slider className={style.sliderDiv} {...settings}>
                {TeamSliderData.map(
                  ({ id, image, title, profile, descrip }) => {
                    return (
                      <>
                        <div key={id} className={style.team_card}>
                          <figure>
                            <img src={image} alt="" />
                          </figure>
                          <div className={style.detail_boxhover}>
                            <h3>{title}</h3>
                            <p className={style.profile}>{profile}</p>
                            <p className={style.descrip}>{descrip}</p>
                          </div>

                          <div className={style.detail_box}>
                            <h3>{title}</h3>
                            <p className={style.profile}>{profile}</p>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
