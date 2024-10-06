import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/homehero.module.css"

// Array of slide data
const slides = [
  {
    id: 1,
    type: "video",
    src: "/video/animation-video.mp4",
    alt: "First slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    id: 2,
    type: "image",
    src: "/Group 39522.png",
    alt: "Second slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    type: "image",
    src: "/Group 39522.png",
    alt: "Third slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

function HeroSection() {
  return (
    <Carousel interval={3000} controls={true} indicators={false}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.carousel_media_container}`}
          >
            {slide.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.carousel_video}
              >
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className={styles.carousel_image}
              />
            )}
          </div>
          {/* <Carousel.Caption className="d-flex flex-column align-items-center text-center">
            <h3 className="responsive-heading">{slide.label}</h3>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroSection;
