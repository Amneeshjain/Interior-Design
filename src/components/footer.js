import Link from "next/link";
import style from "../styles/footer.module.css";
import Button from "./button";

const Footer = () => {
  return (
    <>
      <div className={style.footerMainContainer}>
        <div className="container">
          <div className={style.footerItems}>
            <div className={style.footerDetails}>
              <div className="py-0">
                <Link className={`py-0 ${style.footerLogo}`} href="/">
                  <figure >
                    <img src="/COLONELZ_22png_artboard16.png" alt="" />
                  </figure>
                </Link>

                <p>
                  Colonelz Constructions offers an array of products & services; from construction to interior designing, architectural services, modern executive/designer furniture.
                </p>

                <ul className={style.socialIcons}>
                  <li>
                    <Link href="https://www.facebook.com/ColonelzConstructions" target="_blank">
                      <figure>
                        <img src="/Facebook.svg" alt="" />
                      </figure>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/colonelzconstructions/" target="_blank">
                      <figure>
                        <img src="/instagram.svg" alt="" />
                      </figure>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@ColonelzConstruction" target="_blank">
                      <figure>
                        <img src="/YouTube.svg" alt="" />
                      </figure>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/colonelz/?originalSubdomain=in" target="_blank">
                      <figure>
                        <img src="/linked.png" alt="" width="22px" />
                      </figure>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.footerLinksContainer}>
              {/* <div className={style.footerRow}>
                <p className={style.tag}>Quick Links</p>
                <ul>
                  <li>
                    <Link href="">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="">Tips & Tricks</Link>
                  </li>
                  <li>
                    <Link href="">Features</Link>
                  </li>
                  <li>
                    <Link href="">Locations</Link>
                  </li>
                </ul>
              </div> */}
              <div className={style.footerRow}>
                <p className={style.tag}>Company</p>
                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blog</Link>
                  </li>
                  <li>
                    <Link href="/termsand-conditions">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className={style.footerRow}>
                <p className={style.tag}>Services</p>
                <ul>
                  <li>
                    <Link href="/interior/residential-interior">Residential Interior</Link>
                  </li>
                  <li>
                    <Link href="/interior/commercial-interior">Commercial Interior</Link>
                  </li>
                  <li>
                    <Link href="/architecture">Architecture</Link>
                  </li>

                  <li>
                    <Link href="/construction">Construction</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                </ul>
              </div>
              <div className={style.footerRow}>
                <p className={style.tag}>Visit Us</p>
                <ul>
                  <Link className={`${style.colorWhite}`} href="/get-in-touch"><Button variant="secondary">Get In Touch</Button></Link>
                  <li>
                    <figure>
                      <img src="/Email.svg" alt="" />
                    </figure>
                    <a href="mailto:info@colonelz.com">
                      info@colonelz.com
                    </a>
                  </li>
                  <li>
                    <figure>
                      <img src="/Phone.png" alt="" />
                    </figure>
                    <Link href="tel:8447500754">+918447500754</Link>
                  </li>
                  <li>
                    <figure>
                      <img src="/Mark.svg" alt="" />
                    </figure>

                    <p>
                      <Link
                        href="https://maps.app.goo.gl/uXjo914FmXRjWFrr9"
                        target="_blank"

                      >
                        D-11, Vipul World, Sector-48 Gurugram – 18, Haryana,
                        India
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className={style.footerStyle}>
            <p className={style.footerText}>© 2024 Colonelz Inc. All rights reserved.</p>
            <p className={style.footerText}>Created and Maintained by <Link href="https://mediadynox.com/">Media Dynox.</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
