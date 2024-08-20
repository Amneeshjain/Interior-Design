import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "../../styles/home.module.css";
import Button from "../button";
import CircularText from "../../components/homepage/CircularText";


import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  const handleScrollImg = () => {
    const scrollPosition = window.scrollY;
    const scaleCalc = 1 + scrollPosition / window.innerHeight * 1.5;
    const opacityCalc = 1 - scrollPosition / window.innerHeight * 1.5;
    setOpacity(Math.max(0, opacityCalc));
    setScale(scaleCalc);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollImg);
    return () => {
      window.removeEventListener("scroll", handleScrollImg);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <>

      <div className={style.bg}>
        <div className={style.bannerDesignLine} />
        <div className={style.bannerDesignLine} />
        <div className={style.bannerDesignLine} />
        <div className={style.bannerDesignLine} />
        <div className={style.bannerDesignLine} />
        <div className={`container`}>
          <div className={style.banner_items}>
            <div style={{ width: "100%" }} className={`content`}>
              <div
                className={style.starDiv}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <Image
                  src={"/image_2.png"}
                  className={style.rotate}
                  alt="star"
                  height={64}
                  width={64}
                />
              </div>
              <div className={style.textDiv}>
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  Transforming Spaces{" "}
                  {/* <span className={style.textOutline}> Spaces</span> */}
                  <br />
                  <div className={style.bannerIcon}>
                    <figure>
                      <img src="bannerArrow.svg" alt="icon" />
                    </figure>
                    Igniting Emotions
                  </div>
                </h1>
                <p
                  className={style.Lorem}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  We are a team of seasoned interior designers, architects, and
                  contractors, complemented by skilled craftsmen and innovative
                  technicians. Our unique blend of expertise ensures the highest
                  quality, made-to-measure details tailored to your vision.
                </p>
                <div className={style.banner_btn}>
                  <Link href="/get-in-touch">
                    <Button variant="secondary">Get in touch</Button>
                  </Link>
                  <Link href="#services">
                    <Button>Browse services</Button>
                  </Link>
                </div>
              </div>
            </div>
            <Image
              src={"/image_1.png"}
              width={600}
              height={600}
              alt="centerimg"
              className={`${style.centerImg} ${style.centerImgFade}`}
              style={{
                transform: `translate(-50%, 0%) scale(${scale})`,
                opacity: opacity
              }}
            />
          </div>
          {/* <CircularText /> */}
        </div>
      </div>
      <div className={style.social_media_icons}>
        <ul className={style.socialIcons_111}>
          <li style={{ backgroundColor: "#000", padding: "10px" }}>
            <Link href="https://www.facebook.com/ColonelzConstructions" target="_blank">

              <img src="/Facebook.svg" alt="" />

            </Link>
          </li>
          <li style={{ backgroundColor: "#666", padding: "10px" }}>
            <Link href="https://www.instagram.com/colonelzconstructions/" target="_blank">

              <img src="/instagram.svg" alt="" />

            </Link>
          </li>
          <li style={{ backgroundColor: "#000", padding: "10px" }}>
            <Link href="https://www.youtube.com/@ColonelzConstruction" target="_blank">

              <img src="/YouTube.svg" alt="" />

            </Link>
          </li>
          <li style={{ backgroundColor: "#666", padding: "10px" }}>
            <Link href="https://www.linkedin.com/company/colonelz/?originalSubdomain=in" target="_blank">

              <img src="/linked.png" alt="" width="22px" />

            </Link>
          </li>
        </ul>
      </div>
    </>);
};

export default HeroSection;
