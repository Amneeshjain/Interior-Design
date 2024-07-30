import Link from "next/link";
import style from "../../styles/contactSection.module.css";

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
                <p>Contact Us</p>
              </div>
              <h2>Get in touch</h2>

              <div className={style.contactDetailContainer}>
                {/* <ul>
                  <h3>Ubud, Bali</h3>
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
                  <li>
                    <figure>
                      <img src="/location.svg" alt="" />
                    </figure>
                    <p>
                      D-11, Vipul World, Sector-48 Gurugram – 18, Haryana, India
                    </p>
                  </li>
                </ul> */}

                <ul>
                  <h3>Vipul World, Sector-48 Gurugram</h3>
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
                  <li>
                    <figure>
                      <img src="/location.svg" alt="" />
                    </figure>
                    <p>
                      D-11, Vipul World, Sector-48 Gurugram – 18, Haryana, India
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.formContainer}>
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <input type="text" placeholder="Your Subject" required />
                  <textarea rows="5"></textarea>

                  <input type="submit" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
