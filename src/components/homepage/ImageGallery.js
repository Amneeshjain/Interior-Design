import { useState, useEffect } from "react";
import Image from "next/image";
import style from "../../styles/imageGallery.module.css";

const ImageGallery = () => {
  const images = [
    { src: "/about-1.png", thumb: "/about-1.png" },
    { src: "/about-1.png", thumb: "/about-1.png" },

    // { src: "/about-1.png", thumb: "/about-1.png" },
    { src: "/about-2.png", thumb: "/about-2.png" },
    { src: "/about-1.png", thumb: "/about-1.png" },
    { src: "/about-2.png", thumb: "/about-2.png" },
    { src: "/about-1.png", thumb: "/about-1.png" },
    { src: "/about-2.png", thumb: "/about-2.png" },
    { src: "/about-3.png", thumb: "/about-3.png" }
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
              <Image
                src={image.thumb}
                alt={`thumbnail ${index + 1}`}
                className="img-fluid"
                width={700}
                height={500}
              />
            </a>
          )}
        </div>

        <div
          className="modal fade"
          id="exampleLightbox"
          tabIndex="-1"
          aria-labelledby="exampleLightboxLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className={`modal-header ${style.modal_header}`}>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className={`modal-body${style.modalpadding}`}>
                <div id="lightboxExampleCarousel" className="carousel slide">
                  <div className="carousel-inner ratio ratio-16x9 bg-dark">
                    {images.map((image, index) =>
                      <div
                        className={`carousel-item text-center ${index ===
                        activeIndex
                          ? "active"
                          : ""}`}
                        key={index}
                      >
                        <Image
                          src={image.src}
                          alt={`image ${index + 1}`}
                          className="img-fluid mh-100"
                          width={1600}
                          height={900}
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
