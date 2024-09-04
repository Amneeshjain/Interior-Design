import { useState, useEffect } from "react";
import Image from "next/image";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import styles from "../../styles/project.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";

const ImageGallery = () => {
  const images = [
    {
      src:
        "/project1gallary1.jpg",
      thumb:
        "/project1gallary1.jpg"
    },

    {
      src:
        "/project3.jpg",
      thumb:
        "/project3.jpg"
    },
    {
      src:
        "/project2.jpg",
      thumb:
        "/project2.jpg"
    },
    {
      src:
        "/project4.jpg",
      thumb:
        "/project4.jpg"
    },
    {
      src:
        "/project4.jpg",
      thumb:
        "/project4.jpg"
    },

    {
      src:
        "/project1gallary1.jpg",
      thumb:
        "/project1gallary1.jpg"
    },
    {
      src:
        "/project3.jpg",
      thumb:
        "/project3.jpg"
    },
    {
      src:
        "/project1gallary1.jpg",
      thumb:
        "/project1gallary1.jpg"
    },
    // {
    //   src:
    //     "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-236 (1).jpg",
    //   thumb:
    //     "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-236 (1).jpg"
    // },

    // {
    //   src:
    //     "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-383.jpg",
    //   thumb:
    //     "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-383.jpg"
    // }
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
                          style={{ width: "81%", height: "100%", objectFit: "cover" }}
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

export default ImageGallery;
