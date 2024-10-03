import React, { useState } from "react";
import style from "@/styles/process.module.css";
import stylesA from "@/styles/aboutSection.module.css";

const AboutProject = ({ sections }) => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const MAX_CHAR_COUNT = 126;

  const ABOUT_PROJECT_DATA = [
    { id: "sub_sections_one", ...sections.sub_sections_one },
    { id: "sub_sections_two", ...sections.sub_sections_two },
    { id: "sub_sections_three", ...sections.sub_sections_three },
  ];

  return (
    <div className={style.processMainContainer}>
      <div className="container">
        <div
          className={stylesA.sectionTitle}
          style={{ justifyContent: "center", alignItems: "center" }}
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
              {sections.mainHeading}
              <hr />
            </div>
          </div>
        </div>

        <div className={style.processInnerItems} style={{ paddingBottom: "0" }}>
          {ABOUT_PROJECT_DATA.map(({ id, title, description }) => {
            const isExpanded = expanded[id];
            const displayDescription = isExpanded
              ? description
              : description.slice(0, MAX_CHAR_COUNT) + "...";

            return (
              <div key={id} className={style.processCard}>
                <h3>{title}</h3>
                <p>{displayDescription}</p>
                {description.length > MAX_CHAR_COUNT && (
                  <button
                    onClick={() => toggleReadMore(id)}
                    className={style.readMoreButton}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
