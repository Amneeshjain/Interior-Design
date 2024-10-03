import Carousel from 'react-bootstrap/Carousel';

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
          <div>
            <img
              src={slide.src}
              alt={slide.alt}

            />
          </div>
          <div>
            <Carousel.Caption cl>
              <h3>{slide.label}</h3>
              {/* <p>{slide.caption}</p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))
      }

    </Carousel >
  );
}

export default HeroSection;
