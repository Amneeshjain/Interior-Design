import React from "react";
import styles from "../../styles/home.module.css";




const BlogContent = () => {
  
  return (
    <>
      
      <div className="d-flex align-items-center justify-content-center mt-5">
          <div className={styles.lineLeft}></div>
          <p
            className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}
          >
            About Project
          </p>
          <div className={styles.lineRight}></div>
        </div>

        <h1 className={`text-center col-lg-6 offset-lg-3`}>
        18 useful online research resources for student architects
        </h1>
        <div className="container">
        <figure className="mt-5">
                <img src="detail.png" alt="" width="100%" height="100%"/>
        </figure>
        <h1>INTERESTING ARCHITECTURE TRENDS</h1>
        <p>Dignissim adipiscing velit nam velit donec feugiat quis sociis. Fusce in vitae nibh lectus. Faucibus dictum ut in nec, convallis urna metus, gravida urna cum placerat non amet nam odio lacus mattis. Ultrices facilisis volutpat mi molestie at tempor etiam. Velit malesuada cursus a porttitor accumsan, sit scelerisque interdum tellus amet diam elementum, nunc consectetur diam aliquet ipsum ut lobortis cursus nisl lectus suspendisse ac facilisis feugiat leo pretium id rutrum urna auctor sit nunc turpis.</p>
        </div>
    </>
  );
};

export default BlogContent;
