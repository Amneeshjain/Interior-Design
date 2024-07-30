import style from "../../styles/services.module.css";
import styles from "../../styles/home.module.css";
import styling from "../../styles/serviceScrollSlider.module.css";
import Link from "next/link";
const Services = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className={styles.lineLeft}></div>
        <p
          className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}
        >
          Interior Services
        </p>
        <div className={styles.lineRight}></div>
      </div>
      <h1 className={`text-center col-lg-6 offset-lg-3 ${styles.uppercase}`}>
        Tailored to fit your space and style
      </h1>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className={`${style.ServiceBox} ${style.gaping} ${style.displayprop}`}>
              <div>
                <img src="/furbishing.png" width="100px"/>
              </div>
              <div>
                <h3 className={`${style.equalSpacing}`}>Residential Interior</h3>
                <p className={`${style.equalSpacing}`}>
                  Colonelz is one of the best residential construction companies
                  who are finest at preparing these frames with a team of
                  skilled and experienced constructors. They are the providers
                  of residential building construction services with all their
                  efficiency.
                </p>
                <Link href={"/interior/residential-interior"}><button className={styling.servicesButton1}>View service</button></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className={`${style.ServiceBox} ${style.gaping} ${style.displayprop}`}>
              <div>
                <img src="/residential.png" width="100px"/>
              </div>
              <div>
                <h3 className={`${style.equalSpacing}`}>Commercial Interior</h3>
                <p className={`${style.equalSpacing}`}>
                  At Colonelz, you get all this to ensure you that you are in
                  safe hands. We have commercial building contractors and all
                  the work is done under their surveillance as they are the
                  experts who make sure that the work.
                </p>
                <Link href={"/interior/commercial-interior"}><button className={styling.servicesButton1}>View service</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
