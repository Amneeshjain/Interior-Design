import Link from "next/link";
// import style from "../../styles/aboutFirm.module.css";
import style from "../../styles/aboutFirm.module.css";
import pageStyle from "../../app/page.module.css";
const AboutFirm = () => {
  return (
    <>
      <div className={`${style.aboutFrimMainContainer} ${pageStyle.frimPadd}`}>
        <div className="container">
          <div className={style.aboutFrimInnerItems}>
            <div className={style.left} data-aos="fade-right">
              <div className={style.img}>
                <figure>
                  <img src="../../7 final.png" alt="" />
                </figure>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.content} data-aos="fade-left">
                <div className={style.tag}>
                  <hr />
                  <p>About Residential Interior</p>
                </div>
                <h2>Transform Your Living Space with Exquisite Design</h2>
                <p className={style.descrip}>
                We believe that your home reflect both your way of life and inclinations. Our obsession with artistry coupled with aspiration for nothing but the best quality assists us in making good-looking places that are well suited for you.
                </p>
                {/* <Link href="/">Read more</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFirm;
