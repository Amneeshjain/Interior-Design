import React from "react";
import styles from "../../styles/home.module.css";

const BlogContent = ({ title, category, image, content, createdAt }) => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className={styles.lineLeft}></div>
        <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>
          {/* {category} */}
          About PROJECT
        </p>
        <div className={styles.lineRight}></div>
      </div>

      <h1 className={`text-center col-lg-6 offset-lg-3`}>{title}</h1>
      <figure className="mt-5">
        <img src={image} alt={title} width="100%" height="auto" style={{ maxWidth: "100%" }} />
      </figure>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogContent;