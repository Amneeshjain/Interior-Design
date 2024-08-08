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
    color: "var(--color1)",
    icon:"/understanding.png"
  },
  {
    description:
      "We present our design ideas and concepts to you, showcasing how they meet your needs. This stage allows you to provide feedback.",
    content: "Pitch Presentation",
    color: "var(--color2)",
     icon:"/presentation.png"
    
  },
  {
    description:
      " Once you're happy with the design, we finalize the contract and require an advance payment to begin the project.",
    content: "Contract",
    color: "var(--color3)",
    icon:"/contract.png"
   
  },
  {
    description:
      "We visit your space to take precise measurements and existing conditions. This ensures that our design fits perfectly.",
    content: "Site Measurement",
    color: "var(--color4)",
    icon:"/measuring.png"

     
  },
  {
    description:
      "We provide a detailed timeline and a tentative estimate for the project. This helps you understand the scope of work.",
    content: " Estimate",
    color: "var(--color5)",
    icon:"/estimation.png"

     
  },
  {
    description:
      "Our team creates detailed design plans and 3D renderings based on your feedback. This phase focuses on perfecting every detail of your design.",
    content: "Design",
    color: "var(--color6)",
    icon:"/design.png"

    
  },
  {
    description:
      "We begin the actual work, coordinating with contractors and suppliers to bring your design to life. This involves construction, installation, and final touches.",
    content: "Execution",
    color: "var(--color7)",
    icon:"/execute.png"

 
  },
  {
    description:
      "After completing the project, we conduct a thorough review with you to ensure everything meets your expectations. We hand over the space ready for you to enjoy.",
    content: "Handover",
    color: "var(--color8)",
    icon:"/completed-task -1.png"

   
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
                Our Designing Process
                <hr />
              </div>
              <h2>
                A Simple, yet <br />
                Effective Process
              </h2>
            </div>
          </div>
      
      <div className={styles.timeline_desktop}>
        {timelineData.map((item, index) => (
          <div
            className={styles.timelineItem_111}
            style={{ zIndex: 9000 - index }}
            key={index}
          >
            <div className={styles.arrowEnd_no_use} />
            <div className={styles.contentHalfCircle_no_use} />
            <div className={styles.greyLine_1} />
            <div className={styles.bubleContent_1}>
              <div
                className={styles.contentYear1}
                // style={{ backgroundColor: item.color }}
              >
                {item.content}
              </div>
              <div className={styles.content1}>
                <div style={{
                 marginTop:"10px",
                //   width:"30px",
                //   height:"30px",
                  // backgroundColor:"red"
                }}>
               <Image
                src={item.icon}
                alt={`Image `}
                width="85"
                height="85"
                // className={styles.sliderImage}
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
                  fontWeight:"600",
                  // boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1);"
                  border:"3px solid rgb(245, 245, 245)"
                
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
                Our Designing Process
                <hr />
              </div>
              <h2>
                A Simple, yet <br />
                Effective Process
              </h2>
            </div>
          </div>
        <div className={styles.timeline}>
          {timelineData.map((item, index) =>
            <div
              className={styles.timelineItem}
              key={index}
            >
              <div className={styles.arrowEnd} />
              <div className={styles.contentHalfCircle} />
              <div className={styles.greyLine} />
              <div className={styles.bubleContent}>
                {index % 2 === 0 || index % 2 !== 0
                  ? <div className={styles.contentYear}>
                      {item.content}
                    </div>
                  : null}
                <div className={styles.content}>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
              <div
                className={styles.circle}
                style={{ backgroundColor: item.color }}
              >
                <div
                  className={styles.innerCircle}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    color: "black"
                  }}
                >
                  {index + 1}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  
    </>);
};

export default TimelineCard;
