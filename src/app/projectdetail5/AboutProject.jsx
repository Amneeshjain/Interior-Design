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
      `The clients desired a residential flat that exuded uniqueness,
       blending contemporary and industrial elements. They sought a design that 
       would reflect their personality and create a distinctive living space.
`,
  },
  {
    id: 2,
    title: "Concept Note",
    description:`Inspired by the clients' brief, our design incorporated contemporary
     and industrial touches, crafting a one-of-a-kind residence. A standout feature is the
         specially designed daughter's bedroom, which showcases a perfect blend of style and functionality.
`
  },
  {
    id: 3,
    title: "Design Process",
    description:
`Our design journey began with understanding the clients' vision and preferences.
 We combined industrial elements, such as metal accents, with contemporary features 
 like sleek lines and minimalistic decor. The result is a harmonious balance of styles,
  creating a unique and functional living space. Through careful planning and execution, we 
  transformed the clients' vision into a reality, exceeding their expectations.

`

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

  const MAX_CHAR_COUNT = 105;

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
