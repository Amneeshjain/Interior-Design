"use client"
import React from "react";
import styles from "../../styles/myprocess.module.css";

const data = [
    { number: "01.", title: "Feasibility", description: "This initial phase of the project includes preliminary studies of the site or property. We'll work with you to build a detailed briefly." },
    { number: "02.", title: "Concept", description: "Concept Design is the beginning of the creative process. Through design workshops, we'll develop architectural layouts for your property." },
    { number: "03.", title: "Development", description: "Throughout the design development stage we get into the detail of the scheme, refining layouts, materials, and lighting concepts." },
    { number: "04.", title: "Technical", description: "With the design signed off, we move onto the Technical Design stage where we prepare fully detailed construction packs." },
    { number: "05.", title: "Production", description: "We've completed the construction details, and we develop detailed finishes schedules and specifications for every area." },
    { number: "06.", title: "Tender", description: "As the detailed design stages complete, the tender process begins. We issue the tender pack and develop the construction program." },
    { number: "07.", title: "Mobilisation", description: "Once the contractor is appointed, we'll review the design proposals and assist them in mobilizing resources as required." },
    { number: "08.", title: "Construction", description: "While the project is on-site, we work with contractors to ensure successful implementation of the design." },
    { number: "09.", title: "Post PC", description: "At the project's conclusion, we'll inspect the works and prepare the final certificate for completion." }
];

const Newprocess = () => {
    return (
        <>
            <div className={`${styles.bg_color} py-5`} style={{ backgroundColor: "#000", color: "#fff" }}>
                <div className="container mt-5">
                    <div className="row">
                        {/* Vertical Heading */}
                        <div className="col-lg-2 d-flex align-items-center justify-content-center">
                            <h3 className="vertical-heading text-uppercase" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontWeight: "bold", letterSpacing: "3px", color: "#fff" }}>
                                OUR DESIGN PROCESS
                            </h3>
                        </div>
                        {/* Process Boxes */}
                        <div className="col-lg-10">
                            <div className="row">
                                {data.map((stage, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 p-2">
                                        <div className="process-box p-4" style={{ backgroundColor: "#1a1a1a", borderRadius: "10px", transition: "transform 0.3s ease", cursor: "pointer" }}>
                                            <div className="d-flex justify-content-start align-items-start">
                                                <h4 style={{ color: "#f39c12", fontWeight: "bold", fontSize: "24px", marginRight: "10px" }}>
                                                    {stage.number}
                                                </h4>
                                                <div>
                                                    <h4 style={{ fontWeight: "600", fontSize: "20px" }}>{stage.title}</h4>
                                                    <p style={{ color: "#bbb", fontSize: "16px" }}>{stage.description}</p>
                                                    <hr style={{ borderColor: "#fff" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <h2 className=" text-capitalize text-center mt-4 mb-4" >
                                    Average Timeline of Projects <br />6 To 12 Weeks
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .vertical-heading {
          text-transform: uppercase;
          font-weight: bold;
          color: white;
          letter-spacing: 2px;
        }
        .process-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
        </>
    );
};

export default Newprocess;
