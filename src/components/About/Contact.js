import Link from "next/link";
import style from "../../styles/contactSection.module.css";
import styles from "../../styles/gitInTouch.module.css"
import styling from "../../styles/footer.module.css";
const Contact = (props) => {
  return (
    <>
      <div
        style={{ backgroundColor: `${props.bg}` }}
        className={style.contactMainContainer}
      >
        <div className="container">
          <div className={style.contactItems}>
            <div className={style.left}>
              <div className={style.tag}>
                <hr />
                <p>Visit Us</p>
              </div>
              

              <div className={style.contactDetailContainer}>
                

                <ul>
                  <p className={style.pTag}>Meet us Colonelz Interior Design, where innovation meets elegance. Our doors are open for you to explore the finest in residential and commercial interior design, architecture, and construction solutions.</p>
                  <li>
                    <figure>
                      <img src="/call.svg" alt="" />
                    </figure>
                    <Link href="tel:8447500754">+91-8447500754</Link>
                  </li>
                  <li>
                    <figure>
                      <img src="/mail.svg" alt="" />
                    </figure>
                    <Link href="mailto:info@colonelz.com">
                      info@colonelz.com
                    </Link>
                  </li>
                  <li className="d-flex align-items-baseline">
                    <figure>
                      <img src="/location.svg" alt="" />
                    </figure>
                    <p>
                    <Link href="https://maps.app.goo.gl/uXjo914FmXRjWFrr9"
                        target="_blank">
                      D-11, Vipul World, Sector-48 Gurugram – 18,<br/> Haryana, India
                      </Link>
                    </p>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className={style.right}>
            <div className={styles.mapContainer}>
            <div className={styles.mapItems} id="g-mapdisplay">
            <iframe
                          className={styles.mapIframe}
                          frameBorder="0"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.172529196996!2d77.033676773742!3d28.414050493971892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d236a0cf13cc5%3A0x8f739ce50923a065!2sColonelz%20Constructions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721986258818!5m2!1sen!2sin"
                        ></iframe>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
