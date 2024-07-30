import React from "react";
import styles from "../../styles/home.module.css";

const HeaderText = ({ text, color, background }) => {
  const textColorStyle = {
    color: color || "black", // Default to black if color prop is not provided
  };
  const bgColorStyle = {
    background: background || "black", // Default to black if color prop is not provided
  };
  return (
    <div className={styles.header}>
      <div className={styles.line} style={bgColorStyle}></div>
      <span className={styles.text} style={textColorStyle}>
        {text}
      </span>
    </div>
  );
};

export default HeaderText;
