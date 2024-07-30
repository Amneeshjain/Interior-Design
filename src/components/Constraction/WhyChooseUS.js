// components/Project/ProjectCard.js
import React from "react";
import styles from "../../styles/home.module.css";
import HeaderText from "../homepage/HeaderText";
import style from "../../styles/about.module.css"

const WhyChooseUS = () => {
  const points = [
    {
      title: 'SMARTLY EXECUTE',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    },
    {
      title: 'FAST BUILDING',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    },
    {
      title: 'CAREFULLY PLANNED',
      description: 'Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus in proin ante sagittis blandit interdum quis mauris, at pharetra quam aliquet donec orci viverra id.',
    },
    {
      title: 'PERFECT DESIGN',
      description: 'Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus in proin ante sagittis blandit interdum quis mauris, at pharetra quam aliquet donec orci viverra id.',
    }
  ];

  return (  
    <div className={`container ${style.relative}`}>
      <HeaderText text="Key Points" />
      <div className={`row`}>
        <h1 className={`col-lg-6 ${styles.fs56} ${styles.fw400} ${styles.uppercase} d-flex align-items-center`}>
          WHAT&#39;S INCLUDED IN THIS SERVICE?
        </h1>
      </div>

      <div className={`row ${style.flexChoose} ${styles.marginNagative}  ${style.absoluteChoose}`}>
        <div className="col-lg-12">
          <div className={`row ${style.flexChoose}`}>
            {points.map((point, index) => (
              <div className="col-lg-9" key={index}>
                <div className={`row ${index % 2 === 0 ? style.even : style.odd}`}>
                  <div className="col-lg-6">
                    <h3 className={style.stepTitle}>{point.title}</h3>
                    <p className={`${style.stepDescription} ${styles.fs18}`}>{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
