"use client";
import style from "../../styles/whyChoose.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyChooseUs = ({ title = '', tag = '', items = [] }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className={style.whyChooseMainContainer}>
      <div className="container">
        <div className={style.sectionTittle}>
          <div className={style.tag}>
            <hr />
            {tag}
          </div>
          <h2 className="col-lg-7">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>
        <div className={style.chooseItemsWrapper}>
          <div className={style.whyChooseItems}>
            {items.map((item, index) => (
              <div className={style.choosePoints} key={index}>
                <div className={style.items} data-aos="fade-up">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
