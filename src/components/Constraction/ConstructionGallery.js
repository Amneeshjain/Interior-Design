import { useState, useEffect } from "react";
import Image from "next/image";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import styles from "../../styles/project.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";

const ConstructionGallery = () => {
    const images = [
        {
            src:
                "/photo-1542336391-ae2936d8efe4.jpg",
            thumb:
                "/photo-1542336391-ae2936d8efe4.jpg"
        },
        {
            src:
                "/photo-1531834685032-c34bf0d84c77.jpg",
            thumb:
                "/photo-1531834685032-c34bf0d84c77.jpg"
        },

        {
            src:
                "/photo-1508450859948-4e04fabaa4ea.jpg",
            thumb:
                "/photo-1508450859948-4e04fabaa4ea.jpg"
        },

        {
            src:
                "/photo-1517089152318-42ec560349c0.jpg",
            thumb:
                "/photo-1517089152318-42ec560349c0.jpg"
        },



        {
            src: "/9b61b85bab638b4201341c10fd74531a.jpg",
            thumb: "/9b61b85bab638b4201341c10fd74531a.jpg"
        },
        {
            src: "/c5f0ee042932f2859af24f3f86290f3c 1.png",
            thumb: "/c5f0ee042932f2859af24f3f86290f3c 1.png"
        },
        {
            src: "/4d306add51e83a085fc556b0909309d4 1.png",
            thumb: "/4d306add51e83a085fc556b0909309d4 1.png"
        },

        {
            src: "/503dd92be683387f685361f1f6035696 1.png",
            thumb: "/503dd92be683387f685361f1f6035696 1.png"
        },




    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSelect = index => {
        setActiveIndex(index);
    };

    if (!isClient) return null;

    return (
        <>

            <div className={`container-fluid px-0  ${style.imageGalleryContainer1}`}>
                <div className={` ${style.image_row}`}>
                    <div
                        style={{ justifyContent: "center", alignItems: "center" }}
                        className={stylesA.sectionTitle}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div
                            className={stylesA.left}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center"
                            }}
                        >
                            <div className={stylesA.tag}>
                                <hr />
                                Our Gallery
                                <hr />
                            </div>
                            <h2 className="col-lg-12 mt-4 mb-5">Explore Our Catalogue</h2>
                        </div>
                    </div>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                        <Masonry gutter="15px">
                            {/* <div className={`${styles.cardImageContainer}`}> */}
                            {/* <div className={`${style.masonry} `}> */}
                            {images.map(
                                (image, index) =>
                                    // <div className={style.card1} key={index}>
                                    // {/* <div className={style.cardImageContainer1}> */}
                                    <a
                                        key={index}
                                        onClick={e => {
                                            e.preventDefault();
                                            handleSelect(index);
                                        }}
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleLightbox"
                                        className={style.masonry_item}
                                        data-aos="zoom-in"
                                        data-aos-duration="1000"
                                    >
                                        <img
                                            src={image.thumb}
                                            alt={`thumbnail ${index + 1}`}
                                            className={`${style.imagesss}`}
                                        />
                                    </a>
                                // </div>
                                // </div>
                            )}
                            {/* </div> */}
                            {/* </div> */}
                        </Masonry>
                    </ResponsiveMasonry>
                    <div
                        className={`modal fade `}
                        id="exampleLightbox"
                        tabIndex="-1"
                        aria-labelledby="exampleLightboxLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                                <div className={`modal-body `}>
                                    <div id="lightboxExampleCarousel" className="carousel slide">
                                        <img
                                            src="/close.png"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                        <div className="carousel-inner ratio ratio-16x9 bg-dark">
                                            {images.map((image, index) =>
                                                <div
                                                    className={`carousel-item text-center ${index ===
                                                        activeIndex
                                                        ? "active"
                                                        : ""}`}
                                                    key={index}
                                                >
                                                    <img
                                                        src={image.src}
                                                        alt={`image ${index + 1}`}
                                                        className={`h-100`}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#lightboxExampleCarousel"
                                            data-bs-slide="prev"
                                            onClick={() =>
                                                handleSelect(
                                                    (activeIndex - 1 + images.length) % images.length
                                                )}
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#lightboxExampleCarousel"
                                            data-bs-slide="next"
                                            onClick={() =>
                                                handleSelect((activeIndex + 1) % images.length)}
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ConstructionGallery