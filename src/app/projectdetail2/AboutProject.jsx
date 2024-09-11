// import style from "../../styles/process.module.css";
import { useState } from "react";
import style from "../../styles/process.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import Link from "next/link";
const ABOUT_PROJECT_DATA = [
  {
    id: 1,
    title: "Client Brief",
    description:
      `The client purchased a national master franchise for a Taiwanese bubble tea brand. She was 
      looking for a team of designers to create a brand concept, tailored branding guidelines i.e.
       logo, colour scheme, etc. keeping in mind the original Taiwanese franchise, in combination with her 
       own vision of the brand in India. The fabrication of the store had to be executed with materials and 
       finishes easily replicable anywhere in the country.`,
  },
  {
    id: 2,
    title: "Concept Brief",
    description:`The main mascot of the brand was a Panda. The concept of the store was inspired by
     Pandas’ original habitat as well as their favourite food, bamboo. A Taiwanese wok with a bain-marie
      was requested to cook fresh boba’s every day, with an angeethi like façade. 
`
  },
  {
    id: 3,
    title: "Design Process",
    description:
`The store was conceptualised from 3 main elements, Panda’s, bamboos and trees. White, 
green and bleached oak were the store’s palette. The kitchen was planned to prioritise the prep 
process, whilst keeping in mind the concept of the store. The kitchen and prep area were open to the 
customers, thus aesthetically planned with a wooden finish floor, white and light oak structure and ceiling.
 The bain-marie with the Taiwanese wok was the USP of the brand, thus planned at the centre. After immense R&D,
  the structure was made in MS frame and cladded with white brick tiles, the bain-marie fitting perfectly within 
  and the wok on top for cooking, achieving the exact look and function envisioned for 
  the store. The façade of the store was in green louvers derived from dense bamboo plants in 
  Southwest China, home to the adorable black and white pandas. The seating was in the same colour theme,
   with bamboo planters creating a barrier between the stores’ seating and the rest of the mall circulation. 
   The feature highlight of the store was the panda on the log, a popular selfie attraction for all customers 
   and mall goers, organically increasing the brand’s social media presence.`

  },
];




const AboutProjects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const MAX_CHAR_COUNT = 120;

  return (
    <>
      <div className={style.processMainContainer}>
        <div className="container">
          <div
            style={{ justifyContent: "center", alignItems: "center" }}
            className={stylesA.sectionTitle}
          >
            <div
              className={stylesA.left}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div className={stylesA.tag}>
                <hr />
                About Project
                <hr />
              </div>
              <h2>The Initial Concepts</h2>
            </div>
          </div>

          <div
            className={style.processInnerItems}
            style={{ paddingBottom: "0" }}
          >
            {ABOUT_PROJECT_DATA.map(({ id, title, description }) => {
              const isExpanded = expanded[id];
              const displayDescription = isExpanded
                ? description
                : description.slice(0, MAX_CHAR_COUNT) + "...";

              return (
                <div key={id} className={style.processCard}>
                  <h3>{title}</h3>
                  <p>{displayDescription}</p>
                  <button
                    onClick={() => toggleReadMore(id)}
                    className={style.readMoreButton}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProjects;
