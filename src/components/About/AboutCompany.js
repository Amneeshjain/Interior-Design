"use client"
import React from "react";
import Image from "next/image";
import styles from "../../styles/AboutCompany.module.css";
import styless from "../../styles/home.module.css";

const AboutCompany = () => {
    return (
        <div style={{ backgroundColor: "#f9f9f9", padding: "50px 0" }}>
            <div className="container">
                {/* Section Title */}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">

                        {/* <div className={`d-flex justify-content-center ${styless.lineLeft} ${styles.lineStyling}`}></div> */}
                        <div className="d-flex justify-content-center">
                            <hr />
                            <p className={` ${styless.uppercase} ${styless.textStylingLine} ${styles.title}`}>
                                Meet Our Founder
                            </p>
                            <hr />
                        </div>
                        {/* <div className={`${styless.lineRight} ${styles.lineStyling}`}></div> */}

                        <div className={`${styles.para} py-3 px-5`}>
                            <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.7" }}>
                                We make the client’s preferences our topmost priority. Colonelz strives to provide spaces that meet their needs and surpass their desired visions. Additionally, we prioritize crafting eco-friendly interiors by using non-toxic and environmentally conscious materials handpicked by our experts for your space.
                            </p>
                        </div>
                    </div>



                    {/* Founder Images Section */}
                    <div className="d-flex justify-content-evenly">

                        <figure className={styles.imageContainer}>
                            <Image
                                src="/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-008.jpg"
                                alt="Founder Image"
                                layout="responsive"
                                width={400}
                                height={400}

                            />
                        </figure>



                        <figure className={styles.imageContainer}>
                            <Image
                                src="/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-008.jpg"
                                alt="Founder Image"
                                layout="responsive"
                                width={400}
                                height={400}

                            />
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
