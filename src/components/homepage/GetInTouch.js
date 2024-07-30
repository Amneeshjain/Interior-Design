// components/GetInTouch.js
import React from "react";
import style from "../../styles/getIntouchScection.module.css";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <>
      <div className={style.getInMain}>
        <div className="container">
          <div className={style.getInItems}>
            <div className={style.content}>
              <h2 data-aos="fade-up" data-aos-duration="1000">
                Ready to make your design
                <br /> journey incredible?
              </h2>
              <p data-aos="fade-up" data-aos-duration="1500">
                Let’s Design Something Ravishing Jointly
              </p>
              <div className={style.btnContainer}>
                <Link href="/get-in-touch">Get in touch Today! </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
