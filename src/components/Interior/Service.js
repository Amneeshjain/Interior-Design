import style from "../../styles/services.module.css";
import styles from "../../styles/home.module.css";
import styling from "../../styles/serviceScrollSlider.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className={styles.lineLeft}></div>
        <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>
          Interior Services
        </p>
        <div className={styles.lineRight}></div>
      </div>
      <h1 className={`text-center col-lg-6 offset-lg-3`}>
        Tailored to fit your space and style
      </h1>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className={`${style.ServiceBox} ${style.gaping} ${style.displayprop}`}>
              <div>
                <img src="/furbishing.png" width="100px" />
              </div>
              <div>
                <h3 className={`${style.equalSpacing} ${styles.uppercase}`}>Residential Interior</h3>
                <p className={`${style.equalSpacing} ${style.pStyling}`}>
                  At Colonelz, we specialize in transforming residential spaces into stunning sanctuaries that perfectly blend luxury, comfort, and functionality. Our expert designers work closely with you to create bespoke interiors that reflect your personal style, from modern minimalism to classic elegance. With meticulous attention to detail and a passion for innovation, we ensure every corner of your home is both beautiful and practical. Whether it&apos;s a cozy living room or a lavish master suite, Colonelz brings your dream home to life with unparalleled craftsmanship and creativity.
                </p>
                <div className={style.btnContainer}>
                  <Link href="/interior/residential-interior">View service</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${style.spacingFromTop}`}>
            <div className={`${style.ServiceBox} ${style.gaping} ${style.displayprop}`}>
              <div>
                <img src="/residential.png" width="100px" />
              </div>
              <div>
                <h3 className={`${style.equalSpacing} ${styles.uppercase}`}>Commercial Interior</h3>
                <p className={`${style.equalSpacing} ${style.pStyling}`}>
                  Colonelz specializes in designing commercial spaces that inspire success and leave a lasting impression. We understand the importance of creating environments that are both aesthetically pleasing and productive. Our team delivers bespoke solutions tailored to your business, from sleek corporate offices to vibrant retail stores. With a focus on functionality and style, we transform ordinary workplaces into dynamic hubs fostering creativity and collaboration. Trust Colonelz to elevate your commercial space with innovative design and exceptional quality.
                </p>
                <div className={style.btnContainer}>
                  <Link href="/interior/commercial-interior">View service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
