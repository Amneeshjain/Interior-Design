import { useState, useEffect } from "react";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const ArchitureGallery = () => {
    const images = [
        {
            src:
                "/969e29466c4040aa181f7d80e6cac331.jpg",
            thumb:
                "/969e29466c4040aa181f7d80e6cac331.jpg"
        },

        {
            src:
                "/0bd07155c428cb7d7c832a757bcccccc.jpg",
            thumb:
                "/0bd07155c428cb7d7c832a757bcccccc.jpg"
        },
        {
            src:
                "/24bef507d7592b7399108b7a6c670170.jpg",
            thumb:
                "/24bef507d7592b7399108b7a6c670170.jpg"
        },
        {
            src:
                "/4aa359d22fe14b635b082924943b54fc.jpg",
            thumb:
                "/4aa359d22fe14b635b082924943b54fc.jpg"
        },
        {
            src:
                "/caa692263b6916d9bec795a2ec2f2c47.jpg",
            thumb:
                "/caa692263b6916d9bec795a2ec2f2c47.jpg"
        },

        {
            src:
                "/78bedd051c61eb7249c919f47118c30b.jpg",
            thumb:
                "/78bedd051c61eb7249c919f47118c30b.jpg"
        },
        {
            src: "/842d03e68c671aa86ad7a3ec54b1f2b4 1.png",
            thumb: "/842d03e68c671aa86ad7a3ec54b1f2b4 1.png"
        },
        {
            src:
                "/09aa1442b06bd93cf690177daa80c487 1.png",
            thumb:
                "/09aa1442b06bd93cf690177daa80c487 1.png"
        }

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
            <div className={`container-fluid px-0  ${style.imageGalleryContainer}`}>
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
                            {images.map(
                                (image, index) =>
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
                                            src={image.thumb} alt={`thumbnail ${index + 1}`} className={`${style.imagesss}`}
                                        />
                                    </a>

                            )}

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
                                                        className={`mh-100 `}
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

export default ArchitureGallery