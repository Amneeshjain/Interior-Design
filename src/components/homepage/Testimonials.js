import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/testimonials.module.css";
import HeaderText from "./HeaderText";
import style from "../../styles/about.module.css";
import homeStyle from "../../styles/home.module.css";

const Testimonials = () => {
  const settings = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // Settings for screens <= 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600, // Settings for screens <= 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480, // Settings for screens <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      className={`testimonial_main_container ${styles.testimonial_main_container} `}
    >
      <div className="container px-0">
        {/* <div className="row px-0"> */}
        <div
          className={styles.sectionTittle}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <HeaderText text="Testimonials" />
            <h1
              className={`col-lg-7 ${homeStyle.fw400} ${style.uppercase} ${homeStyle.fs58}`}
            >
              What our clients  <br />have to say!

            </h1>
          </div>
        </div>

        <div className={` ${styles.testimonialViewer}`}>
          <div className={styles.TestimonialSlider}>
            <Slider className={style.sliderMain} {...settings}>
              <div className={`col-lg-6 ${styles.testiCard}`}>
                <figure className={styles.slideImg}>
                  <img src="testimonial-1.png" alt="" />
                </figure>
                <div className={styles.cardContent}>
                  <div className={styles.left} />
                  <div className={styles.right}>
                    <h3>&ldquo;They did an amazing work for our home&rdquo;</h3>
                    <p>
                      If you are looking for a dedicated team to
                      look after your interior needs hire Colonelz. They ll
                      beautify your house with contemporary designs and top-notch quality. I have had an amazing
                      experience getting my new house designed by them and
                      it&apos;s been over a year and all the fittings are super
                      sturdy. They also offer services after the completion of the project
                      giving end-to-end solutions to their customers. A big thanks to Colonelz team and
                      hope you guys grow with leaps and bounds.
                    </p>
                    <h4>
                      <hr /> Vineet Gautam
                    </h4>
                  </div>
                </div>
              </div>

              <div className={styles.testiCard}>
                <figure className={styles.slideImg}>
                  <img src="testimonial_2.png" alt="" />
                </figure>
                <div className={styles.cardContent}>
                  <div className={styles.left} />
                  <div className={styles.right}>
                    <h3>&ldquo;Great designs by Colonelz tranformed my home&rdquo;</h3>
                    <p>
                      It was a wonderful experience to see Naomi leading her
                      team for the Interior Designing
                      of my flat in Panchkula. The project was
                      completed successfully within the agreed time and cost.
                      Everyone who visits my flat appreciates the work done. I
                      feel lucky and blessed to have availed services from Naomi
                      and Colonelz Constructions. So, without a second thought, contact Colonelz to transform your house into a beautiful space.
                    </p>
                    <h4>
                      <hr /> Jagrant S Pandher
                    </h4>
                  </div>
                </div>
              </div>

              <div className={styles.testiCard}>
                <figure className={styles.slideImg}>
                  <img src="testimonial_2.png" alt="" />
                </figure>
                <div className={styles.cardContent}>
                  <div className={styles.left} />
                  <div className={styles.right}>
                    <h3>&ldquo;Got my dream home with Colonelz&rdquo;</h3>
                    <p>
                      Colonelz has a unique ability to turn visions into
                      reality. Their team worked closely with me to understand
                      my design preferences and goals, and then brought them to
                      life in the most beautiful and precise way. The
                      creativity, attention to detail, and craftsmanship
                      displayed during the construction
                      project were truly remarkable. Colonelz&apos;s dedication
                      to their craft and commitment to delivering outstanding
                      results make them the ideal choice for anyone seeking a
                      truly personalized and exceptional design experience.
                    </p>
                    <h4>
                      <hr /> Aditi Singh
                    </h4>
                  </div>
                </div>
              </div>

              <div className={styles.testiCard}>
                <figure className={styles.slideImg}>
                  <img src="testimonial-1.png" alt="" />
                </figure>
                <div className={styles.cardContent}>
                  <div className={styles.left} />
                  <div className={styles.right}>
                    <h3>&ldquo;Amazing transformation of my place by Colonelz&rdquo;</h3>
                    <p>
                      Colonelz truly went above and beyond to curate a space
                      that captured my personal style and preferences. Their
                      team of dedicated professionals took the time to
                      understand my needs and tranformed them into customised
                      designs that surpassed my expectations. The commitment to
                      exceptional service, combined with their expertise in
                      interior design and construction, made the entire process
                      enjoyable and stress-free. I am grateful to Colonelz for
                      creating a space I can truly call my own.
                    </p>
                    <h4>
                      <hr /> Satish Pandey
                    </h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Testimonials;
