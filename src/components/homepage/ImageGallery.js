"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import styles from "../../styles/imageGallery.module.css";
// import CloseIcon from "../../public/close-icon.svg"; // Adjust the path as necessary

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
  { src: "/about-1.png", width: 700, height: 400 }
  // Add more image paths as needed
];

const ImageGallery = () => {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpen = index => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container-fluid mt-5">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry gutter="15px">
          {images.map((img, index) =>
            <div key={index} onClick={() => handleOpen(index)}>
              <Image
                src={img.src}
                alt={`Image ${index + 1}`}
                width={img.width}
                height={img.height}
                className={styles.sliderImage}
                loading="lazy"
              />
            </div>
          )}
        </Masonry>
      </ResponsiveMasonry>

      {isOpen &&
        <Lightbox
          controller={{ ref }}
          on={{ click: () => ref.current?.close() }}
          slides={images.map(img => ({ src: img.src }))}
          index={photoIndex}
          open={true}
          close={() => setIsOpen(false)}
          plugins={[Fullscreen, Thumbnails, Zoom]}
          // render={{
          //   iconClose: () => <img src={CloseIcon} alt="Close" />
          // }}
        />}
    </div>
  );
};

export default ImageGallery;
