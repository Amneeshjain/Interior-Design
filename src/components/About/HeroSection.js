"use client";
import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import styles from "../../styles/about.module.css";
import style from "../../styles/home.module.css";
import Link from "next/link";
import hero from "../../styles/innerHero.module.css";

const HeroSection = ({
  title,
  buttonText,
  backgroundImage,
  text,
  color,
  background
}) => {
  const textColorStyle = {
    color: color || "#fff" // Default to black if color prop is not provided
  };
  const bgColorStyle = {
    background: background || "#fff" // Default to black if color prop is not provided
  };

  return (
    <div
      className={`d-flex align-items-center ${styles.heroSection} `}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className={`container ${styles.zIndex100}`}>
        <div className="row" data-aos="fade-up">
          <div className={hero.innerItems}>
            <div className={hero.tag} style={textColorStyle}>
              <hr />
              <p>
                {text}
              </p>
            </div>
            <h2 className="">
              {title}
            </h2>
            {buttonText &&
              <Link href="/">
                <Button variant="secondary">
                  {buttonText}
                </Button>
              </Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string
};

export default HeroSection;
