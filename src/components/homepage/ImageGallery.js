import { useState, useEffect } from "react";
import Image from "next/image";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";

const ImageGallery = () => {
  const images = [
    {
      src:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-236 (1).jpg",
      thumb:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-236 (1).jpg"
    },

    {
      src:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-383.jpg",
      thumb:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-383.jpg"
    },
    {
      src:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-320.jpg",
      thumb:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-320.jpg"
    },
    {
      src:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-324.jpg",
      thumb:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-324.jpg"
    },
    {
      src:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-337.jpg",
      thumb:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-337.jpg"
    },

    {
      src:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-351.jpg",
      thumb:
        "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-351.jpg"
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

  if (!isClient) return null; // Prevent server-side rendering issues

  return (
    <div className={style.imageGalleryContainer}>
      <div className={style.image_row}>
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
            <h2 className="col-lg-8 mb-5">Explore Our Catalogue</h2>
          </div>
        </div>
        <div className={style.masonry}>
          {images.map((image, index) =>
            <a
              href="#"
              key={index}
              onClick={e => {
                e.preventDefault();
                handleSelect(index);
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleLightbox"
              className={style.masonry_item}
            >
              <img
                src={image.thumb}
                alt={`thumbnail ${index + 1}`}
                className={style.image_height}
              />
            </a>
          )}
        </div>

        <div
          className={`modal fade `} // Apply the overlay class here
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
                          className={`mh-100 ${style.cover_image}`}
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
