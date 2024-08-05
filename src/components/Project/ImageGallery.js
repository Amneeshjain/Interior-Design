"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";

const images = [
  { src: "/about-1.png", width: 800, height: 600 },
  { src: "/about-2.png", width: 800, height: 600 },
  { src: "/about-3.png", width: 800, height: 600 },
  { src: "/about-1.png", width: 800, height: 600 },
  { src: "/about-2.png", width: 800, height: 600 },
  { src: "/about-3.png", width: 800, height: 600 },
  { src: "/about-1.png", width: 800, height: 600 },
  { src: "/about-2.png", width: 800, height: 600 },
  { src: "/about-3.png", width: 800, height: 600 }
  // Add more image paths as needed
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    image: images,
    index: 0
  });

  useEffect(() => {
    const rootElement = document.querySelector("#__next");
    if (rootElement) {
      Modal.setAppElement(rootElement);
    }
  }, []);

  const openModal = (image, index) => {
    console.log("hihiihh", image);
    // return;
    setSelectedImage(image[index]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="gallery">
          {images.map((image, index) =>
            <Image
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              onClick={() => openModal(image, index)}
              className="gallery-image"
            />
          )}
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
          {selectedImage && <Image src={selectedImage.image} alt="Selected" />}
        </Modal>

        <style jsx>{`
          .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .gallery-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            cursor: pointer;
          }
          .modal {
            position: absolute;
            top: 50%;
            left: 50%;
            right: auto;
            bottom: auto;
            transform: translate(-50%, -50%);
            max-width: 90%;
            max-height: 90%;
          }
          .overlay {
            background: rgba(0, 0, 0, 0.75);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ImageGallery;
