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
      `The client, a plywood store owner, sought to create an immersive experience center for their
       products, setting them apart from competitors. They desired a space where customers could engage 
       with their products in an innovative and memorable way. The brief emphasized the need for
       a functional yet aesthetically pleasing design that would elevate the brand's image.`,
  },
  {
    id: 2,
    title: "Concept Brief",
    description:`Plymaarque's experience center is designed to harmonize functionality and aesthetics, creating an immersive environment for customers to explore and interact with unique products. The concept focuses on showcasing the versatility
     and quality of the products, fostering a deeper connection with customers.`
  },
  {
    id: 3,
    title: "Design Process",
    description:
`The design process began with a thorough understanding of the client's
 vision and requirements. Our team conducted site analyses, spatial planning,
  and material research to develop a cohesive design strategy. We employed 3D modeling and
   visualization techniques to communicate the design intent effectively. The final design was 
   refined through iterative feedback sessions with the client, ensuring that the experience center 
   met their expectations.
 The result is a unique and engaging space that redefines the plywood shopping experience.`

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
