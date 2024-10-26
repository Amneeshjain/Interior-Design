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
    image: "/TEAM PHOTOS/01 VARTIKA-Sr.Architect.JPG",
    title: "VARTIKA SHARMA",
    profile: "Sr.Architect",
    descrip:
      "Seasoned architect and project manager ensuring seamless execution and client satisfaction.",
  },
  {
    id: 2,
    image: "/TEAM PHOTOS/01 SHAILY-Project Architect.JPG",
    title: "SHAILY",
    profile: "Project Architect",
    descrip:
      "Expert in space planning and innovative design with meticulous attention to detail."
  },
  {
    id: 3,
    image: "/TEAM PHOTOS/01 AKASHDEEP- Project Architect.JPG",
    title: "AKASHDEEP SINGH",
    // profile: "PROJECT ARCHITECT",
    profile: "Project Architect",
    descrip:
      "Transforming visions into reality with practical and aesthetically appealing design solutions."
  },
  {
    id: 4,
    image: "/TEAM PHOTOS/01 KUSHAL-3d Visualizer.JPG",
    title: "KUSHAL YAMUJALA",
    profile: "3d Visualizer",
    descrip:
      "Creating immersive 3D walkthroughs and leading marketing efforts with visual excellence."
  },
  {
    id: 5,
    image: "/TEAM PHOTOS/01 PRIYANKA.JPG",
    title: " PRIYANKA YADAV",
    profile: "Hr Executive & Admin",
    descrip:
      "Efficiently managing operations, HR, and team support for outstanding results."
  },
  {
    id: 6,
    image: "/TEAM PHOTOS/01 TARUSH-Jr.Architect.JPG",
    title: "TARUSH MEHTANI",
    profile: "Jr.Architect",
    descrip:
      "Crafting spaces with precision, bridging client expectations and project delivery."
  },
   
  {
    id: 7,
    image: "/TEAM PHOTOS/01 SHIVANSHI-Jr.Designer.JPG",
    title: "SHIVANSHI VERMA",
    profile: "Jr.  Designer",
    descrip:
      "Crafting personalized interior spaces reflecting clients' unique styles with creative flair."
  },

  {
    id: 8,
    image: "/TEAM PHOTOS/01 JATIN-Site Engineer.JPG",
    title: "JATIN KUMAR",
    profile: " Site-Engineer",
    descrip:
      "Ensuring on-site execution meets design standards with precision and quality."
  },
  {
    id: 9,
    image: "/TEAM PHOTOS/01 ARPITA-Jr.Designer Intern.JPG",
    title: "ARPITA CHAUHAN",
    profile: "Jr.Designer Intern",
    descrip:
      "Supporting architects and designers with fresh ideas and enthusiasm."
  },
  
];


const Team = () => {
  const settings = {

    infinite: true,
    autoplay: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,

    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    // nextArrow: leftIcon,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
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
        className={`${style.teamSliderMainContainer}`}
      >
        <div className={style.sectionTitle} data-aos="zoom-out-up">
          <div className="d-flex  align-items-center justify-content-center ">
            <div className={styles.lineLeft}></div>
            <p
              className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}
            >
              The Team
            </p>
            <div className={styles.lineRight}></div>
          </div>
          <h1
            className={`text-center col-lg-6 offset-lg-3`}
          >
            They turn your Imagination into Reality
          </h1>
        </div>
        <div className="container  py-4 px-0">
          <div className={style.teamSliderItems}>
            <div className={style.teamSliderContainer}>
              <Slider className={style.sliderDiv} {...settings}>
                {TeamSliderData.map(({ id, image, title, profile, descrip }) => (
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
                ))}
              </Slider>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
