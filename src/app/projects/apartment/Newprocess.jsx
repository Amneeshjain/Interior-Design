import React from "react";
import styles from "../../../styles/newprocess.module.css";

const stages = [
  {
    number: 1,
    title: "Understanding",
    description: "The process of building architecture designs...",
  },
  {
    number: 2,
    title: "Pitch Presentation",
    description: "The process of building architecture designs...",
  },
  {
    number: 3,
    title: "Contract",
    description: "The process of building architecture designs...",
  },
  {
    number: 4,
    title: "Site Measurement",
    description: "The process of building architecture designs...",
  },
  {
    number: 5,
    title: "Estimate",
    description: "The process of building architecture designs...",
  },
  {
    number: 6,
    title: "Design",
    description: "The process of building architecture designs...",
  },
  {
    number: 7,
    title: "Execution",
    description: "The process of building architecture designs...",
  },
  {
    number: 8,
    title: "Handover",
    description: "The process of building architecture designs...",
  },
];

const KeyStages = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Side: Vertical Text & Icon */}
        <div className="col-12 col-lg-2 text-center d-flex align-items-center justify-content-center flex-column">
          <div className={styles.verticalText}>
            <h2>Key Work Stages</h2>
          </div>
          <div className={styles.icon}>
            <span>8</span>
          </div>
        </div>

        {/* Right Side: Stage Information */}
        <div className="col-12 col-lg-10">
          <div className="row gx-5 gy-4">
            {stages.map((stage, index) => (
              <div key={index} className="col-12 col-md-6 position-relative">
                <div className={styles.stageBox}>
                  <h4>
                    <span className={styles.number}>{stage.number}.</span>{" "}
                    {stage.title}
                  </h4>
                  <p>{stage.description}</p>
                </div>
                {/* Add arrow between processes */}
                {index % 2 === 0 && index < stages.length - 1 && (
                  <div className={styles.arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyStages;
