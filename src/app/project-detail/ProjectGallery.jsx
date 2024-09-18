import { useState, useEffect } from "react";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import styleb from "../../styles/process.module.css";
import styles from "../../styles/gallary.module.css";

const ProjectGallery = () => {
  const images = [
    { id: 1, src: "/T2,TATA PRIMANTI/1.jpg", thumb: "/T2,TATA PRIMANTI/1.jpg", colSpan: 1, rowSpan: 3 },
    { id: 2, src: "/T2,TATA PRIMANTI/2.jpg", thumb: "/T2,TATA PRIMANTI/2.jpg", colSpan: 1, rowSpan: 2 },
    { id: 3, src: "/T2,TATA PRIMANTI/3.jpg", thumb: "/T2,TATA PRIMANTI/3.jpg", colSpan: 1, rowSpan: 2 },
    { id: 4, src: "/T2,TATA PRIMANTI/4.jpg", thumb: "/T2,TATA PRIMANTI/4.jpg", colSpan: 1, rowSpan: 3 },
    { id: 5, src: "/T2,TATA PRIMANTI/5.jpg", thumb: "/T2,TATA PRIMANTI/5.jpg", colSpan: 1, rowSpan: 3 },
    { id: 6, src:"/T2,TATA PRIMANTI/6.jpg", thumb: "/T2,TATA PRIMANTI/6.jpg", colSpan: 1, rowSpan: 3 },
    { id: 7, src: "/T2,TATA PRIMANTI/7.jpg", thumb: "/T2,TATA PRIMANTI/7.jpg", colSpan: 1, rowSpan: 2 },
    { id: 8, src: "/T2,TATA PRIMANTI/8.jpg", thumb: "/T2,TATA PRIMANTI/8.jpg", colSpan: 1, rowSpan: 2 },
    { id: 9, src: "/T2,TATA PRIMANTI/9.jpg", thumb: "/T2,TATA PRIMANTI/9.jpg", colSpan: 1, rowSpan: 3 },
    { id: 10, src: "/T2,TATA PRIMANTI/10.jpg", thumb: "/T2,TATA PRIMANTI/10.jpg", colSpan: 1, rowSpan: 3 },
    { id: 11, src: "/T2,TATA PRIMANTI/11.jpg", thumb: "/T2,TATA PRIMANTI/11.jpg", colSpan: 1, rowSpan: 2 },
    { id: 12, src: "/T2,TATA PRIMANTI/12.jpg", thumb: "/T2,TATA PRIMANTI/12.jpg", colSpan: 1, rowSpan: 2 },
    { id: 13, src: "/T2,TATA PRIMANTI/13.jpg", thumb: "/T2,TATA PRIMANTI/13.jpg", colSpan: 1, rowSpan: 3 },
    { id: 14, src: "/T2,TATA PRIMANTI/14.jpg", thumb: "/T2,TATA PRIMANTI/14.jpg", colSpan: 1, rowSpan: 3 },
    { id: 15, src: "/T2,TATA PRIMANTI/15.jpg", thumb: "/T2,TATA PRIMANTI/15.jpg", colSpan: 1, rowSpan: 2 },
    { id: 16, src: "/T2,TATA PRIMANTI/16.jpg", thumb: "/T2,TATA PRIMANTI/16.jpg", colSpan: 1, rowSpan: 2 },
    { id: 17, src: "/T2,TATA PRIMANTI/17.jpg", thumb: "/T2,TATA PRIMANTI/17.jpg", colSpan: 1, rowSpan: 3 },
    { id: 18, src: "/T2,TATA PRIMANTI/18.jpg", thumb: "/T2,TATA PRIMANTI/18.jpg", colSpan: 1, rowSpan: 3 },
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
              textAlign: "center",
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
                    {images.map((image, index) => (
                      <div
                        className={`carousel-item text-center ${
                          index === activeIndex ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img src={image.src} alt={`image ${index + 1}`} className={`h-100`} />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#lightboxExampleCarousel"
                    data-bs-slide="prev"
                    onClick={() =>
                      handleSelect((activeIndex - 1 + images.length) % images.length)
                    }
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
                      handleSelect((activeIndex + 1) % images.length)
                    }
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
