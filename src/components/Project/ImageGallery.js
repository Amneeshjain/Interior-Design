"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";
import styles from "../../styles/process.module.css";

const images = [
  "/about-1.png",
  "/about-2.png",
  "/about-3.png",
  "/about-1.png",
  "/about-2.png",
  "/about-3.png",
  "/about-1.png",
  "/about-1.png",
  "/about-3.png",
  "/about-2.png"

  // Add more image paths as needed
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = index => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  const preloadImage = src => {
    const img = new window.Image();
    img.src = src;
  };

  const breakpoints = {
    default: 2,
    1100: 2,
    700: 1
  };

  return (
    <div className="container">
      <div className="row bg-dark ">
        <div>
          <Masonry
            breakpointCols={breakpoints}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
          >
            {images.map((src, index) =>
              <div
                key={index}
                className={styles.imageWrapper}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className={styles.image}
                />
              </div>
            )}
          </Masonry>

          {isOpen &&
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => {
                console.log("fkjhfskjdfkdsfhsd");
                setPhotoIndex((photoIndex + images.length - 1) % images.length);
              }}
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)}
            />}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
