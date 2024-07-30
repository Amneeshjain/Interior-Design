import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import style from '../../styles/style.module.css';

function Slide({ cards }) {
  const panelsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      panelsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <section className={`${style.works} ${style.thecontainer}`}>
      {cards.map((item, index) => (
        <div
          className={`${style.panel} ${style.mt30}`}
          key={item.id}
          ref={el => (panelsRef.current[index] = el)}
        >
          <div className={`${style.item}`}>
            <div className={`${style.img}`}>
              <img src={item.image} alt="" />
            </div>
            <div className={`${style.cont} ${style.dFlex} ${style.alignItemsEnd}`}>
              <div>
                <span>{item.tag}</span>
                <h5>{item.title}</h5>
              </div>
              <div className={`${style.mlAuto}`}>
                <h6>{item.date}</h6>
              </div>
            </div>
            <a href="#0" className={`${style.linkOverlay}`}></a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Slide;
