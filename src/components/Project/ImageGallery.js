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
  "/about-2.png",
  "/about-1.png",
  "/about-2.png"
  // "/about-1.png"
  // "/about-3.png",
  // "/about-2.png"

  // Add more image paths as needed
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const preloadImage = (src, callback) => {
    const img = new window.Image();
    img.src = src;
    img.onload = callback;
    console.log("Preloading image:", img);
  };

  const openLightbox = index => {
    preloadImage(images[index], () => {
      setPhotoIndex(index);
      setIsOpen(true);
    });
  };

  const breakpoints = {
    default: 3,
    1100: 3,
    700: 1
  };

  return (
    <div className="container">
      <div className="row ">
        <div>
          <Masonry
            breakpointCols={breakpoints}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
          >
            {images.map((src, index) =>
              <div
                key={index + 1}
                className={styles.imageWrapper}
                onClick={i => openLightbox(index)}
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
                const newIndex =
                  (photoIndex + images.length - 1) % images.length;
                preloadImage(images[newIndex], () => {
                  setPhotoIndex(newIndex);
                });
              }}
              onMoveNextRequest={() => {
                const newIndex = (photoIndex + 1) % images.length;
                preloadImage(images[newIndex], () => {
                  setPhotoIndex(newIndex);
                });
              }}
            />}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
