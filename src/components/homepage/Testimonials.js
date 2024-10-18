import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "../../styles/testimonials.module.css";
import HeaderText from "./HeaderText";
import style from "../../styles/about.module.css";
import homeStyle from "../../styles/home.module.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      image: "/testimonial-1.png",
      quote: "Exceptional Design, Reliable Support",
      description: "I highly recommend Colonelz for their exceptional interior design services. Their team's dedication resulted in a stunning home featuring contemporary designs and top-notch quality. A year later, the fittings remain sturdy, showcasing their craftsmanship. What impresses me most is their unwavering support even after project completion, providing invaluable peace of mind. Thank you, Colonelz, for an outstanding experience! Wishing you continued success!.",
      author: "Vineet Gautam",
    },
    {
      image: "/testimonial_2.png",
      quote: "Flawless Interior Design Execution",
      description: "It was a wonderful experience to see Naomi leading her team on the interior design project at my flat in Panchkula. The project was completed successfully within the agreed time and budget. Everyone who visits appreciates the work done. I feel lucky to have availed myself of the services of Naomi and Colonelz Constructions. Wishing Naomi and Colonelz all the best in their future endeavors",
      author: "Jagrant S Pandher",
    },
    {
      image: "/testimonial_2.png",
      quote: "Dream Home, Exceptional Experience",
      description: "We collaborated with Naomi and the Colonelz team to bring our dream home to life. Their innovative design suggestions, from strategic wardrobe placement to expert civil modifications, exceeded our expectations. The vendors they introduced us to, particularly the lighting specialist, delivered outstanding services. What truly impresses us is Colonelz's long-term commitment to customer satisfaction, providing seamless after-sales support even a year after project completion. Their exceptional design expertise and reliability have led us to enthusiastically recommend Colonelz to friends and family.",
      author: "RATIKA WADHWA",
    },
    {
      image: "/testimonial-1.png",
      quote: "Transforming Business with Immersive Design",
      description: "I chose Colonelz for my showroom interiors because Principal Designer Naomi understood my vision perfectly. Post-renovation, my business has flourished. Now, East Delhi's most unique showroom, Plymaarque, stands out. Customers and architects appreciate the immersive experience, easily visualizing products in their spaces.Working with Colonelz was seamless: well-managed teams, timely execution, and transparent payment structures. I highly recommend Colonelz for exceptional design and service.",
      author: "RISHAB JAIN",
    },
    {
      image: "/testimonial-1.png",
      quote: "Harmonious Blend of Form and Function",
      description: "Colonel Sahay's team expertly translated our desire for a naturally lit, simple yet functional home into reality. Their design process was marked by openness, commitment, and a genuine understanding of our needs. The result: a harmonious blend of form and function. We enthusiastically endorse Colonelz for their outstanding expertise and client-centric approach.",
      author: "TEJINDER SINGH DHILLON",
    },
  ];

  const imageUrls = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  ];

  return (
    <>
      <div className={`testimonial_main_container ${styles.testimonial_main_container}`}>
        <div className="container px-0">
          <div className={styles.sectionTittle} data-aos="fade-up" data-aos-duration="1000">
            <div>
              <HeaderText text="Testimonials" />
              <h1 className={`col-lg-7 ${homeStyle.fw400} ${style.uppercase} ${homeStyle.fs58}`}>
                What our clients <br />
                have to say!
              </h1>
            </div>
          </div>

          <div className={`${styles.testimonialViewer}`}>
            <div className={styles.TestimonialSlider}>
              <Slider className={style.sliderMain} {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`col-lg-6 px-0 ${styles.testiCard}`}>
                    <figure className={styles.slideImg}>
                      <Image
                        src={testimonial.image}
                        alt={`Testimonial ${index + 1}`}
                        width={1200}
                        height={900}
                        layout="responsive"
                      />
                    </figure>
                    <div className={styles.cardContent}>
                      <div className={styles.left} />
                      <div className={styles.right}>
                        <h3>{testimonial.quote}</h3>
                        <p>{testimonial.description}</p>
                        <h4>
                          <hr /> {testimonial.author}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Testimonials;
