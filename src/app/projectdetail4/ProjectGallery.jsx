import { useState,useEffect  } from "react";
import Image from "next/image";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../../styles/gallary.module.css";


const ProjectGallery = () => {
  
    const images = [
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/1.png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/1.png", // Same as src
          colSpan: 1, // Number of columns to span
          rowSpan: 3, // Number of rows to span
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/2-0.jpg",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/2-0.jpg", // Same as src
          colSpan: 1,
          rowSpan: 2,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/3 (1).png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/3 (1).png", // Same as src
          colSpan: 1,
          rowSpan: 2,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/3-0.jpg",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/3-0.jpg", // Same as src
          colSpan: 1,
          rowSpan: 3,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/3.png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/3.png", // Same as src
          colSpan: 1,
          rowSpan: 3,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/4 (1).png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/4 (1).png", // Same as src
          colSpan: 1,
          rowSpan: 3,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/4 (2).png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/4 (2).png", // Same as src
          colSpan: 1,
          rowSpan: 2,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/4.png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/4.png", // Same as src
          colSpan: 1,
          rowSpan: 2,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/13.png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/13.png", // Same as src
          colSpan: 1,
          rowSpan: 2,
        },
        {
          src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/14.png",
          thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/14.png", // Same as src
          colSpan: 1,
          rowSpan: 2,
        },
        {
            src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-01.jpg",
            thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-01.jpg", // Same as src
            colSpan: 1, // Number of columns to span
            rowSpan: 2, // Number of rows to span
          },
          {
            src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-02.jpg",
            thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-02.jpg", // Same as src
            colSpan: 1,
            rowSpan: 2,
          },
          {
            src: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-03.jpg",
            thumb: "/C3 SOBHA CITY-20240911T070417Z-001/C3 SOBHA CITY/View-03.jpg", // Same as src
            colSpan: 1,
            rowSpan: 2,
          },
          
      ];
      const [activeIndex, setActiveIndex] = useState(0);
      const [isClient, setIsClient] = useState(false);
      const [showMore, setShowMore] = useState(false);

useEffect(() => {
    setIsClient(true);
}, []);

const handleSelect = (index) => {
  setActiveIndex(index);
};

const toggleShowMore = () => {
  setShowMore(!showMore);
};
if (!isClient) return null;
  return (
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
        <div className={style.imageGalleryContainer}>
        {images
            .slice(0, showMore ? images.length : 8) // Show 8 initially, or all if showMore is true
            .map((image, index) => (
              <div
                key={index}
                className={`${style.gallery_container} ${style[`w_${image.colSpan}`]} ${style[`h_${image.rowSpan}`]}`}
              >
                <div className={style.gallery_item}>
                  <div className={style.image}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelect(index);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleLightbox"
                      className={style.masonry_item}
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <img src={image.thumb} alt={`thumbnail ${index + 1}`} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
    </div>
   
    <div className={`${styles.loadMore}`}>
          <button
            style={{ margin: "0 auto" }}
            onClick={toggleShowMore}
            className={`${styles.toggleButton}`}
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
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
  );
};

export default ProjectGallery;
