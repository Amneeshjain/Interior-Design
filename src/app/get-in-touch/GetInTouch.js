"use client";
import HeroSection from "@/components/About/HeroSection";
import styles from "../../styles/home.module.css";
import style from "../../styles/gitInTouch.module.css";
import styling from "../../styles/footer.module.css"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const GetInTouch = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event) => {
    const input = event.target;
    const uploadedFileName = input.files[0].name;
    setFileName(uploadedFileName);
  };

  const handleRemoveFile = () => {
    setFileName("");
    document.getElementById("file-upload").value = "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('https://mediadynox.in/interior-design-test/email.php', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      
      const result = await response.json();
      alert(result.message);
      window.location.reload();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      alert('An error occurred: ' + error.message);
    }
  };
  

  return (
    <>
      <div className={style.getInTouch}>
        <div className="container">
          <div className="section-tittle">
            <div className="d-flex align-items-center justify-content-center">
              <div className={styles.lineLeft}></div>
              <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>
                Contact Us
              </p>
              <div className={styles.lineRight}></div>
            </div>

            <h1 className={`text-center col-lg-6 offset-lg-3 mb-5 ${styles.uppercase}`}>
              Hey! Tell us about <br />
              your project
            </h1>
          </div>
        </div>

        <div className="container">
          <div className={style.getInTouchFormContainer}>
            <form onSubmit={handleSubmit}>
              <div className={`row row-gap-4 ${style.cusRow}`}>
               
                <div className="col-lg-6 col-sm-12">
                  <input type="text" name="first_name" placeholder="First Name" required />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <input type="text" name="last_name" placeholder="Last Name" required />
                </div>
                <div className="col-lg-12">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="col-lg-12">
                  <input type="text" name="phone" placeholder="Phone Number" required />
                </div>
                <div className="col-lg-12">
                  <input type="text" name="location" placeholder="Location" required />
                </div>
                <div className="col-lg-12">
                  <select name="category" required>
                    <option value="" disabled selected>Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                  </select>
                </div>
                <div className="d-flex align-items-center column-gap-2 col-lg-6 col-12">
                  <div className={style.file}>
                    <input type="file" name="attachment" id="file-upload" onChange={handleFileChange} required />
                    <label style={{ width: "100%" }} htmlFor="file-upload">
                      Upload Attachments
                    </label>
                  </div>
                  <div id="file-upload-filename">{fileName}</div>
                  {fileName && (
                    <button type="button" className="btn btn-danger" onClick={handleRemoveFile} id="submitButton">
                      &times;
                    </button>
                  )}
                </div>
              </div>
              <div className={`col-lg-12 ${style.submit_btn}`}>
                <input value="Submit" type="submit" />
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className={style.getInTouchMap}>
            <div className={style.getInTouch_MapContainer}>
              <div className={` row ${style.cusRowCon}`}>
                <div className={`col-lg-6 col-md-12 ${style.mapMainCol_container}`}>
                  <div>
                    <div className={style.mapContainer}>
                      <div className={style.mapItems} id="g-mapdisplay">
                        <iframe
                          className={style.mapIframe}
                          frameBorder="0"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.172529196996!2d77.033676773742!3d28.414050493971892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d236a0cf13cc5%3A0x8f739ce50923a065!2sColonelz%20Constructions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721986258818!5m2!1sen!2sin"
                        ></iframe>
                      </div>
                      <a className="googl-ehtml" href="https://www.bootstrapskins.com/themes" id="grab-map-info"></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <ul className={style.getInTouch_detail}>
                    
                    <li>
                      <h4>Address</h4>
                      <p>D-11, Vipul World, Sector-48 Gurugram – 18, Haryana, India</p>
                      <Link className="d-flex" href="tel:+918447500754">
                        <Image width={20} height={20} src="/ph.png" alt="" /> +918447500754
                      </Link>
                    </li>
                    <li>
                      <h4>Social media</h4>
                      <ul className={styling.socialIcons1}>
                  <li>
                    <Link href="https://www.facebook.com/ColonelzConstructions" target="_blank">
                      <figure>
                        <img src="/face.png" alt=""  width="22px"/>
                      </figure>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/colonelzconstructions/" target="_blank">
                      <figure>
                        <img src="/inst.png" alt="" width="22px"/>
                      </figure>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@ColonelzConstruction" target="_blank">
                      <figure>
                        <img src="/you.png" alt="" width="22px"/>
                      </figure>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/colonelz/?originalSubdomain=in" target="_blank">
                      <figure>
                        <img src="/in.png" alt="" width="22px"/>
                      </figure>
                    </Link>
                  </li>
                </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
