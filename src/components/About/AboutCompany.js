"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/AboutCompany.module.css";

const AboutCompany = () => {
    return (
        <div className={` ${styles.backgroundSection}`}>
            <div className="container mt-0 py-0">
                {/* Section Title */}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <hr className={styles.hrLine} />
                            <p className={`mx-3 mt-3 text-uppercase ${styles.title}`}>
                                Founders
                            </p>
                            <hr className={styles.hrLine} />
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center  px-0">
                                <figure className={styles.imageContainer}>
                                    <Image
                                        src="/TEAM PHOTOS/Col Biraj Sahay-Managing Director.png"
                                        alt="Founder Image"
                                        width={800}
                                        height={500}

                                    />
                                </figure>
                            </div>
                            <div className="col-lg-8 px-4 mt-3">
                                <div className={styles.ppp}>
                                    <p>
                                        <b>Colonelz Constructions Pvt. Limited</b>  was founded by <b>Col Sahay,</b> whose journey began with humble beginnings in Jharkhand. Educated at <b> Sainik School Tilaiya</b> and later the prestigious <b> National Defence Academy (NDA),</b> Col Sahay s career in the Indian Armed Forces instilled in him the values of discipline, integrity, and a deep sense of duty. Having served a distinguished tenure in the United Nations and commanded his parent unit, Col Sahay is recognized for his leadership and commitment to excellence.

                                        However, it was his lifelong passion for architecture and building that eventually drew him back to his childhood aspirations. What started as personal projects for friends and family in the early 2000s evolved into the establishment of < b> Colonelz Constructions</b> in 2013.
                                    </p>
                                    <p>
                                        The company s name pays homage to his olive greens, embodying the resilience, adaptability, and service ethos of the armed forces.

                                        Since its inception, Colonelz has worked with several leading corporations such as <b>Fiserv, Reliance, and Rolta,</b>  while also delivering custom-designed homes across India. Much like the Army, <b>Colonelz</b> is versatile, embracing projects in diverse locations and environments, always committed to providing top-quality service tailored to the specific needs of each client.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-12 ">
                        <div className="row">

                            <div className="col-lg-8 px-4 mt-3">
                                <div className={styles.ppp}>
                                    <p>
                                        Carrying forward the legacy of <b>Colonelz Constructions,</b> the next generation is led by <b>Ms. Naomi Sahay,</b> the company’s <b>Principal Designer.</b> Initially pursuing conventional academics, she completed her <b> B.Com</b> <b> Hons</b> from <b>Delhi University.</b> However, while working alongside her father in building the fledgling company, Naomi discovered her true passion for design and art.

                                        Taking a bold step, she shifted her focus to interior design, eventually earning a<b> Master s in Interior Design</b> from <b> Florence, Italy,</b> renowned as the art capital of the world. Her education and exposure to global design trends deeply influence her work, bringing a unique blend of creativity and functionality to every project.

                                        Today, Naomi leads the <b> design team </b>and shapes the creative culture of the company, drawing inspiration from her father’s values of discipline and precision. Under her guidance and mentorship from Col Sahay,<b>Colonelz</b>  continues to craft beautiful, functional spaces with the same ethos of integrity, service, and adaptability that defines the company s fauji roots.
                                    </p>
                                    <p>
                                        Today, Naomi leads the design team and shapes the creative culture of the company, drawing inspiration from her father’s values of discipline and precision. Under her guidance and mentorship from Col Sahay, Colonelz continues to craft beautiful, functional spaces with the same ethos of integrity, service, and adaptability that defines the company s fauji roots.

                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center  px-0">
                                <figure className={styles.imageContainer}>
                                    <Image
                                        src="/TEAM PHOTOS/Naomi Sahay-Principle Designer.png"
                                        alt="Founder Image"
                                        width={800}
                                        height={500}
                                    />
                                </figure>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutCompany;
