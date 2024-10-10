"use client"
import React from "react";
import styles from "../../styles/myprocess.module.css";

const data = [
    { number: "01.", title: "Understanding the Client's Requirements", description: "We prioritize understanding the client’s vision and needs through detailed discussions, defining the project scope, and assessing spaces to ensure alignment with the client’s goals from the start." },
    { number: "02.", title: "Pitch Presentation & Tentative Estimate", description: "We present a curated mood board and a ballpark cost estimate to gauge the client’s design preferences and budget." },
    { number: "03.", title: "Contract Signing & Advance Payment", description: "A formal contract is signed outlining the project scope, terms, and conditions. An advance payment is collected to officially start the project." },
    { number: "04.", title: " Site Measurements & Documentation", description: "Within 48 hours of signing the contract, we conduct a site visit to take detailed measurements and document existing conditions, ensuring transparency." },
    { number: "05.", title: " Project Timeline & Detailed Estimate", description: "We provide a project timeline and a comprehensive estimate based on the final scope of work, keeping clients informed and organized." },
    { number: "06.", title: "Design Phase", description: "Our design team creates 3D models and layouts, incorporating client feedback to ensure the design captures the client’s vision perfectly." },
    { number: "07.", title: "Execution Phase", description: "Upon client approval, on-site work begins within 3-4 working days, with regular updates provided to ensure efficient execution." },
    { number: "08.", title: " Handover", description: "The project concludes with a handover certificate, support documents, warranty information, and final design boards, ensuring the client has all necessary references." },
    // { number: "09.", title: "Post PC", description: "At the project's conclusion, we'll inspect the works and prepare the final certificate for completion." }
];

const Newprocess = () => {
    return (
        <>
            <div className={`${styles.bg_color} py-5`} style={{ backgroundColor: "#000", color: "#fff" }}>
                <div className="container ">
                    <div className="row">
                        <div className="text-center py-4">
                            <h2>OUR DESIGN PROCESS</h2>
                        </div>

                        <div className="row">
                            {data.map((stage, index) => (
                                <div key={index} className="col-lg-6 col-md-6 p-2">
                                    <div className="process-box py-4" style={{ backgroundColor: "#1a1a1a", borderRadius: "10px", transition: "transform 0.3s ease", cursor: "pointer" }}>
                                        <div className="d-flex justify-content-start align-items-start">
                                            <h4 style={{ color: "red", fontWeight: "bold", fontSize: "24px", marginRight: "10px" }}>

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
                            <h2 className=" text-uppercase text-center mt-4 mb-4" >
                                Average Timeline of Projects <br />6 To 12 Weeks
                            </h2>
                        </div>

                    </div>
                </div>
            </div >
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
