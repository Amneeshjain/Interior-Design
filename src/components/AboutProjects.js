// import style from "../../styles/process.module.css";
import style from "../styles/process.module.css";
import stylesA from "../styles/aboutSection.module.css";
import Link from "next/link";
const ABOUT_PROJECT_DATA = [
  {
    id: 1,
    title: "Moodboard & Inspiration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit.",
  },
  {
    id: 2,
    title: "Space Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit.",
  },
  {
    id: 3,
    title: "Decoration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit eu eget egestas velit fermentum quis feugiat non sit.",
  },
];

const AboutProjects = () => {
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
              return (
                <>
                  <div key={id} className={style.processCard}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProjects;
