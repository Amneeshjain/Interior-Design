"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/AboutCompany.module.css";

const AboutCompany = () => {
    return (
        <div className={`py-5 ${styles.backgroundSection}`}>
            <div className="container">
                {/* Section Title */}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">

                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <hr className={styles.hrLine} />
                            <p className={`mx-3 mt-3 text-uppercase ${styles.title}`}>
                                Meet Our Founder
                            </p>
                            <hr className={styles.hrLine} />
                        </div>

                        <div className={`py-3 ${styles.para}`}>
                            <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.8" }}>
                                We make the client’s preferences our topmost priority. Colonelz strives to provide spaces that meet their needs and surpass their desired visions. Additionally, we prioritize crafting eco-friendly interiors by using non-toxic and environmentally conscious materials handpicked by our experts for your space.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founder Images Section */}
                <div className="row mt-2">
                    <div className="col-md-6 d-flex justify-content-center">
                        <figure className={styles.imageContainer}>
                            <img
                                src="/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-008.jpg"
                                alt="Founder Image"
                                layout="fill"


                            />
                        </figure>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center ">
                        <figure className={styles.imageContainer}>
                            <img
                                src="/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-008.jpg"
                                alt="Founder Image"
                                layout="fill"


                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
