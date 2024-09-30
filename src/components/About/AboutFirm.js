import React from "react";
import style from "../../styles/aboutFirm.module.css";

const AboutFirm = ({ imgSrc, imgAlt, tagText, title, description }) => {
  return (
    <div className={style.aboutFrimMainContainer}>
      <div className="container">
        <div className={style.aboutFrimInnerItems}>
          <div className={style.left} data-aos="fade-right">
            <div className={style.img}>
              <figure>
                <img src={imgSrc} alt={imgAlt} loading="lazy" />
              </figure>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.content} data-aos="fade-left">
              <div className={style.tag}>
                <hr />
                <p>{tagText}</p>
              </div>
              <h2>{title}</h2>
              <p className={style.descrip}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirm;
// changes