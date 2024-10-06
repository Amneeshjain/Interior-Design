// components/Timeline.js
import React from "react";
import Image from "next/image";
import styles from "../../styles/timelineCard.module.css";
import style from "../../styles/process.module.css";
import stylesA from "../../styles/aboutSection.module.css";



const timelineData = [
  {
    description:
      "We start by discussing your vision and needs to fully grasp your design preferences and requirements. This helps us create custom design plans.",
    content: "Understanding",
    icon: "/understanding.png"
  },
  {
    description:
      "We present our design ideas and concepts to you, showcasing how they meet your needs. This stage allows you to provide feedback.",
    content: "Pitch Presentation",
    icon: "/presentation.png"

  },
  {
    description:
      " Once you're happy with the design, we finalize the contract and require an advance payment to begin the project.",
    content: "Contract",
    color: "var(--color3)",
    icon: "/contract.png"

  },
  {
    description:
      "We visit your space to take precise measurements and existing conditions. This ensures that our design fits perfectly.",
    content: "Site Measurement",
    color: "var(--color4)",
    icon: "/measuring.png"


  },
  {
    description:
      "We provide a detailed timeline and a tentative estimate for the project. This helps you understand the scope of work.",
    content: " Estimate",
    color: "var(--color5)",
    icon: "/estimation.png"


  },
  {
    description:
      "Our team creates detailed design plans and 3D renderings based on your feedback. This phase focuses on perfecting every detail of your design.",
    content: "Design",
    color: "var(--color6)",
    icon: "/design.png"


  },
  {
    description:
      "We begin the actual work, coordinating with contractors and suppliers to bring your design to life. This involves construction, installation, and final touches.",
    content: "Execution",
    color: "var(--color7)",
    icon: "/execute.png"


  },
  {
    description:
      "After completing the project, we conduct a thorough review with you to ensure everything meets your expectations. We hand over the space ready for you to enjoy.",
    content: "Handover",
    color: "var(--color8)",
    icon: "/completed-task -1.png"


  },

];
const Data = [
  {
    logo: "/understanding.png",
    content: "Understanding",
    icon: "/arrow-down.png"
  },
  {
    logo: "/presentation.png",
    content: "Pitch Presentation",
    icon: "/arrow-down.png"

  },
  {
    logo: "/contract.png",
    content: "Contract",
    icon: "/arrow-down.png"
  },
  {
    logo: "/measuring.png",
    content: "Site Measurement",
    icon: "/arrow-down.png"

  },
  {
    logo: "/estimation.png",
    content: " Estimate",
    icon: "/arrow-down.png"


  },
  {
    logo: "/design.png",
    content: "Design",
    icon: "/arrow-down.png"


  },
  {
    logo: "/execute.png",
    content: "Execution",
    icon: "/arrow-down.png"


  },
  {
    logo: "/completed-task -1.png",
    content: "Handover",
    icon: "/arrow-down.png"


  },

];

const TimelineCard = () => {
  return (
    <>
      <div className={styles.hideinmobile}>
        <div
          style={{ backgroundColor: `#f5f5f5` }}
          className={style.processMainContainer}
        >
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
                  Our Timeline Process
                  <hr />
                </div>
                {/* <h2>
                  A Simple, yet <br />
                  Effective Process
                </h2> */}
              </div>
            </div>

            <div className={styles.timeline_desktop}>
              {timelineData.map((item, index) => (
                <div
                  className={styles.timelineItem_111}

                  key={index}
                >
                  <div className={styles.arrowEnd_no_use} />
                  <div className={styles.contentHalfCircle_no_use} />
                  <div className={styles.greyLine_1} />
                  <div className={styles.bubleContent_1}>
                    <div
                      className={styles.contentYear1}
                    >
                      {item.content}
                    </div>
                    <div className={styles.content1}>
                      <div style={{
                        marginTop: "10px",
                      }}>
                        <Image
                          src={item.icon}
                          alt={`Image `}
                          width="85"
                          height="85"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.circle}
                    style={{ backgroundColor: item.color }}
                  >
                    <div
                      className={styles.innerCircle1}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        border: "3px solid rgb(245, 245, 245)"

                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hideIndesktop}>
        <div
          style={{ backgroundColor: `#f5f5f5`, paddingBottom: "30px" }}
          className={style.processMainContainer}
        >
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
                  Our Timeline Process
                  <hr />
                </div>
                {/* <h2>
                  A Simple, yet <br />
                  Effective Process
                </h2> */}
              </div>
            </div>
            <div className="mb-5">
              {Data.map((item, index) => (
                <div key={index}>
                  <div className={`row d-flex justify-content-center ${styles.md}`}>
                    {index !== 0 && (
                      <figure>
                        <img src={item.icon} alt="icon" style={{ width: "24px", height: "24px" }} />
                      </figure>
                    )}
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <h4 style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
                      {index + 1}
                    </h4>
                  </div>
                  <div className="col-sm-12 mt-3 mb-sm-0">
                    <div className={styles.carddata}>
                      <div className="">
                        <div className="text-white d-flex justify-content-center" style={{ backgroundColor: "#666", padding: "8px", height: "40px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
                          <h5>{item.content}</h5>
                        </div>
                        <figure className="d-flex justify-content-center py-4">
                          <Image
                            src={item.logo}
                            alt={`Image `}
                            width="85"
                            height="85"
                            loading="lazy"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

    </>);
};

export default TimelineCard;
