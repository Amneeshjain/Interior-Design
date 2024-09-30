import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/specification.module.css";

const Specification = () => {
    const [playerHeight, setPlayerHeight] = useState('700px');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Mobile view
                setPlayerHeight(''); // Remove height
            } else {
                // Desktop view
                setPlayerHeight('700px');
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const imageData = [
        { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 1" },
        { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 2" },
        { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 3" },
        { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 4" },
        { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 5" },
        { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 6" }
    ];

    return (
        <div className={`container ${styles.specificationsContainer}`}>
            <div className={`row align-items-center ${styles.specificationsContainerRow}`}>
                <div className="col-lg-6">
                    <div
                        className={styles.sectionTitle2}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className={styles.left2}>
                            <div className={styles.tag2}>
                                <hr />
                                <span className={styles.spannn}>Design Process </span>
                            </div>
                            <h2 className={styles.h2}>Crafting Luxurious</h2>
                        </div>
                    </div>
                    <p className={styles.videoP}>
                        Each space has been designed with a feature colour, varying between the furniture and walls, with rest of the space allowing the signature to capture the attention. The ceilings were designed simple, throwing focus on the highlights of the space.
                        The living room was an expression of simplicity with colour, with the walls panelled in a geometric grey pattern and the vibrant furniture capturing all the attention.The same detail was carried to the powder room for the guests.
                        The parents’ room was in soft ivory and youthful sky- blue tones.The puja was designed to aid circulation in the entertainment room with pocket doors that looked seamless when closed, combining well with the rest of the theme, seeming one with the storage.
                        The master bedroom was with strong hues of blue and wood with a concrete texture highlighting the bedroom wall.
                    </p>
                </div>
                <div className="col-lg-6">
                    <figure className={styles.imgclass}>
                        <Image src="/T2,TATA PRIMANTI/1.jpg" alt="img" width={700} height={500} />
                    </figure>
                </div>
            </div>

            <div>
                {Array(2).fill().map((_, rowIndex) => (
                    <div key={rowIndex} className="d-flex justify-content-between gap-3 mt-4">
                        {imageData.slice(rowIndex * 3, rowIndex * 3 + 3).map((image, index) => (
                            <figure key={index} className={styles.imgclass1}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={200}
                                    layout="responsive"
                                />
                            </figure>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specification;
