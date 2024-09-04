import { useState, } from "react";
import Image from "next/image";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGallery = () => {
  const imageGroups = [
    [
      {
        src: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-236 (1).jpg",
        width: 500,
        height: 500,
        alt: "Boat on Calm Water",
      },
      {
        src: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-351.jpg",
        width: 500,
        height: 500,
        alt: "Yosemite National Park",
      }
    ],
    [
      {
        src: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-383.jpg",
        width: 500,
        height: 500,
        alt: "Wintry Mountain Landscape",
      }
      ,
      ,
      {
        src: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-324.jpg",
        width: 500,
        height: 500,
        alt: "Boat on Calm Water",
      }
    ],
    [
      {
        src: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-320.jpg",
        width: 500,
        height: 350,
        alt: "Boat on Calm Water",
      },
      {
        src: "/image 25 (2).png",
        width: 500,
        height: 650,
        alt: "Yosemite National Park",
      }
    ],
    [
      {
        src: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-324.jpg",
        width: 500,
        height: 360,
        alt: "Mountains in the Clouds",
      },
      {
        src: "/COLONELZ COMPANY PROFILE _ FOR RESIDENTIAL & COMMERCIAL INTERIOR.pdf-image-383.jpg",
        width: 500,
        height: 640,
        alt: "Boaton Calm Water",
      }
    ]
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelect = (groupIndex, imageIndex) => {
    setSelectedGroup(groupIndex);
    setActiveIndex(imageIndex);
  };

  return (
    <div className={`container-fluid px-0 ${style.imageGalleryContainer}`}>
      <div className={`row ${style.image_row}`}>
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

        {imageGroups.map((group, groupIndex) => (

          <div key={groupIndex} className="col-lg-3 col-md-12 col-sm-12 ">
            {group.map((image, imageIndex) => (
              <a
                key={imageIndex}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(groupIndex, imageIndex);
                }}
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleLightbox"
                className={`mb-3 ${style.masonry_item}`}
                data-aos="zoom-in"
                data-aos-duration="1000"

              >
                <Image
                  src={image.thumb || image.src}
                  width={image.width}
                  height={image.height}
                  layout="responsive"
                  style={{ objectFit: "cover", }}
                  className=" shadow-1-strong  mb-3"
                  alt={image.alt}
                />
              </a>
            ))}
          </div>
        ))}

        <div
          className="modal fade"
          id="exampleLightbox"
          tabIndex="-1"
          aria-labelledby="exampleLightboxLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div id="lightboxExampleCarousel" className="carousel slide">
                  <img
                    src="/close.png"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                  <div className="carousel-inner ratio ratio-16x9 bg-dark">
                    {selectedGroup !== null && imageGroups[selectedGroup].map((image, index) => (
                      <div
                        className={`carousel-item text-center ${index === activeIndex ? "active" : ""}`}
                        key={index}
                      >
                        <Image
                          src={image.src}
                          alt={`image ${index + 1}`}
                          width={1200}
                          height={800}
                          style={{ width: "81%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#lightboxExampleCarousel"
                    data-bs-slide="prev"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + imageGroups[selectedGroup].length) %
                        imageGroups[selectedGroup].length
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
                      setActiveIndex(
                        (activeIndex + 1) % imageGroups[selectedGroup].length
                      )}
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
    </div >

  );
};

export default ImageGallery;
