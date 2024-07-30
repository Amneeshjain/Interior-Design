"use client";
import style from "../../styles/whyChoose.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <>
      <div className={style.whyChooseMainContainer}>
        <div className="container">
          <div className={style.sectionTittle}>
            <div className={style.tag}>
              <hr />
              Key Points
            </div>

            <h2>
            Why Colonelz for<br/> Interior Designing? 
            </h2>
          </div>
          <div className={style.chooseItemsWrapper}>
            <div className={style.whyChooseItems}>
              <div className={style.choosePoints}>
                <div className={style.items} data-aos="fade-up">
                  <h4>Impeccable Service</h4>
                  <p>
                  We aim to provide the best possible service to our clients for their services and deliver what we promise in the committed timeframe. 
                  </p>
                </div>
              </div>
              <div className={style.choosePoints}>
                <div className={style.items} data-aos="fade-up">
                  <h4>Commitment to Excellence</h4>
                  <p>
                  We strive to excel in everything and give the best possible results with innovative ideas, advanced technology, and ecological concepts. 
                  </p>
                </div>
              </div>
              <div className={style.choosePoints}>
                <div className={style.items} data-aos="fade-up">
                  <h4>Work Ethics</h4>
                  <p>
                  We adhere to principles of integrity that demonstrate respect for the profession, colleagues, and clients, as a whole.
                  </p>
                </div>
              </div>
              <div className={style.choosePoints}>
                <div className={style.items} data-aos="fade-up">
                  <h4>Leadership</h4>
                  <p>
                  With years of experience, we exemplify excellence. We believe in making every member of our team become a leader in their own way.   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
