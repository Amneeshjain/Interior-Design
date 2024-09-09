import { useState } from "react";
import style from "../styles/process.module.css";
import stylesA from "../styles/aboutSection.module.css";
import Link from "next/link";

const ABOUT_PROJECT_DATA = [
  {
    id: 1,
    title: "Client Brief",
    description: `A colourful minimalistic home with the walls designed to be the art in the space. 
    The young couple sought to transform their apartment into a personal homage, to the journey they embarked on as college mates to becoming a successful vibrant couple in business and corporate. With a unique vision and aspiration for an abode personifying their individual contrasting personalities and also comfortable for their elderly parents.`,
  },
  {
    id: 2,
    title: "Concept Brief",
    description: `The home was designed to depict the clear straightforward personality of the husband, highlighting the bold and vibrance of the lady. Each space was tailored to provide its own specific function and utility, uplifting the aesthetics and concept for the residence.`,
  },
  {
    id: 3,
    title: "Design Process",
    description: `Space transformation and architecture rejuvenation thrive on the excellent look for all residential rooms to decore creatively.`,
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

  const MAX_CHAR_COUNT = 150;

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
