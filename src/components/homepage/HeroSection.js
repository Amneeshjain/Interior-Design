import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/homehero.module.css";

// Array of slide data
const slides = [
  {
    id: 1,
    type: "video",
    src: "/COVER PAGE CAROUSAL-20241009T062547Z-001/COVER PAGE CAROUSAL/Untitled design (1).mp4",
    alt: "First slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    id: 2,
    type: "image",
    src: "/webp/2.webp",
    alt: "Third slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    id: 3,
    type: "image",
    src: "/webp/1.webp",
    alt: "Fourth slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    id: 4,
    type: "image",
    src: "/webp/3.webp",
    alt: "Second slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function HeroSection() {
  return (
    <Carousel interval={3000} controls={true} indicators={false} style={{ overflow: 'hidden' }}>
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
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroSection;
