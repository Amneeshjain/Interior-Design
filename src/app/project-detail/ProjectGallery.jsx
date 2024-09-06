import { useState,useEffect  } from "react";
import Image from "next/image";
import style from "../../styles/imageGallery.module.css";
import stylesA from "../../styles/aboutSection.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ProjectGallery = () => {
  // const imageGroups = [
  //   [
  //     {
  //       src: "/project1gallary1.jpg",
     
  //       alt: "Boat on Calm Water",
  //     },
  //     {
  //       src: "/project1gallary5.jpg",
     
     
  //       alt: "Yosemite National Park",
  //     },
  //   ],
  //   [
  //     {
  //       src: "/project1gallary2.jpg",
      
  //       alt: "Wintry Mountain Landscape",
  //     },
  //     {
  //       src: "/project1gallary6.jpg",
     
  //       alt: "Boat on Calm Water",
  //     },
  //   ],
  //   [
  //     {
  //       src: "/project1gallary3.jpg",
       
  //       alt: "Boat on Calm Water",
  //     },
  //     {
  //       src: "/project1gallary7.jpg",
     
      
  //       alt: "Yosemite National Park",
  //     },
  //   ],
  //   [
  //     {
  //       src: "/project1gallary4.jpg",
      
  //       alt: "Mountains in the Clouds",
  //     },
  //     {
  //       src: "/project1gallary8.jpg",
      
  //       alt: "Boaton Calm Water",
  //     },
  //   ],
  // ];
  const images = [
    {
      src: "/project1gallary1.jpg",
        thumb:
            "/project1gallary1.jpg"
    },
    {
      src: "/project1gallary2.jpg",
        thumb:
             "/project1gallary2.jpg"
    },

    {
      src: "/project1gallary3.jpg",
        thumb:
           "/project1gallary3.jpg"
    },

    {
      src: "/project1gallary4 (3).jpg",
        thumb:
           "/project1gallary4 (3).jpg"
    },
    {
      src: "/project1gallary5.jpg",
        thumb:"/project1gallary5.jpg"
    },
    {
      src: "/project1gallary6.jpg",
        thumb:  "/project1gallary6.jpg"
    },
    {
      src: "/projectgallery7.jpg",
        thumb: "/projectgallery7.jpg"
    },

    {
      src: "/project1gallary8.jpg",
        thumb:"/project1gallary8.jpg"
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
                                src={image.thumb}
                                alt={`thumbnail ${index + 1}`}
                                className={`${style.imagesss}`}
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
