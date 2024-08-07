"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import LightGallery from "lightgallery/react";
import Image from "next/image";
import styles from "../../styles/imageGallery.module.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
//import fjGallery from "flickr-justified-gallery";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  { src: "/about-1.png", width: 500, height: 800 },
  { src: "/about-2.png", width: 400, height: 600 },
  { src: "/about-3.png", width: 700, height: 400 },
  { src: "/about-1.png", width: 500, height: 600 },
  { src: "/about-2.png", width: 700, height: 400 },
  { src: "/about-3.png", width: 700, height: 400 },
  { src: "/about-1.png", width: 700, height: 400 },
  { src: "/about-2.png", width: 700, height: 400 },
  { src: "/about-3.png", width: 700, height: 400 },
  { src: "/about-1.png", width: 700, height: 400 },

  // Add more image paths as needed
];

const ImageGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  //   useEffect(() => {
  //     fjGallery(document.querySelectorAll(".gallery"), {
  //       itemSelector: ".gallery__item",
  //       rowHeight: 345,
  //       lastRow: "start",
  //       gutter: 10,
  //       rowHeightTolerance: 0.1,
  //       calculateItemsHeight: false
  //     });
  //   }, []);

  return (

<>

<div className="container-fluid mt-5">
    <ResponsiveMasonry
    columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
>
    <Masonry gutter="15px">
    {images.map((img, index) =>
          <a
            key={index}
            href={img.src}
            data-lg-size={`${img.width}-${img.height}`}
          >
            <Image
              src={img.src}
              alt={`Image ${index + 1}`}
              width={img.width}
              height={img.height}
              className={styles.sliderImage}
              loading="lazy"
            />
          </a>
        )}
    </Masonry>
</ResponsiveMasonry>
    <div className=" mt-4 mb-4  ">
      <LightGallery
        onInit={onInit}
        speed={300}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={"nature"}
        autoplayFirstVideo={false}
        elementClassNames={"gallery"}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false
        }}
      >
       
      </LightGallery>
    </div>
    </div>
    </> );
};

export default ImageGallery;
