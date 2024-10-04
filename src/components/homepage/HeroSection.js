import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Array of slide data
const slides = [
  {
    id: 1,
    src: "/Group 39522.png",
    alt: "First slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    id: 2,
    src: "/Group 39522.png",
    alt: "Second slide",
    label: "INTERIOR | ARCHITECTURE | CONSTRUCTION",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
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
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ objectFit: 'cover', width: "100%", height: "100%" }}
            />
          </div>
          <Carousel.Caption className="d-flex flex-column align-items-center text-center">
            <h3 className="responsive-heading">{slide.label}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroSection;
