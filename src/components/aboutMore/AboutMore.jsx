"use client";

import React from "react";
import styles from "../../styles/aboutMore.module.css";
import Button from "../button";

const AboutMore = ({ content, mainText, text }) => {
  const [isTruncated, setIsTruncated] = React.useState(true);

  const toggleReadMore = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className={styles.bgGrey}>
    <div className="container">
      <h2 className="mb-4">{text}</h2>
      <p className={styles.readMoreText}>
        { mainText} {/* Adjust the slice value as needed */}
      </p>
      {!isTruncated && (
        <div className={`${styles.readMoreText} flex flex-col gap-4`}>
          {content}
        </div>
      )}
      <div className={styles.readMoreButton} onClick={toggleReadMore}>
        {isTruncated ? "Read More" : "Show Less"}
      </div>
    </div>
    </div>
  );
};

export default AboutMore;
