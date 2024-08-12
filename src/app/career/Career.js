"use client";

import HeroSection from "@/components/About/HeroSection";
import styles from "../../styles/home.module.css";
import style from "../../styles/career.module.css";
import { useState } from "react";

const Career = () => {
  const [cvFileName, setCvFileName] = useState("");
  const [documentFileName, setDocumentFileName] = useState("");

  const handleCvFileChange = (event) => {
    const input = event.target;
    const uploadedFileName = input.files[0].name;
    setCvFileName(uploadedFileName);
  };

  const handleDocumentFileChange = (event) => {
    const input = event.target;
    const uploadedFileName = input.files[0].name;
    setDocumentFileName(uploadedFileName);
  };

  const handleRemoveCvFile = () => {
    setCvFileName("");
    document.getElementById("file-upload").value = "";
  };

  const handleRemoveDocumentFile = () => {
    setDocumentFileName("");
    document.getElementById("file-document").value = "";
  };

  return (
    <>
      <HeroSection
        title="Join our Team"
        text="Career"
        //buttonText="Get in Touch"
        backgroundImage="../../career.png"
        color={"#fff"}
        background={"#fff"}
      />

      <div className={style.getJobSection}>
        <div className="container">
          <div className="section-tittle" data-aos="zoom-out-up">
            <div className="d-flex align-items-center justify-content-center">
              <div className={styles.lineLeft}></div>
              <p
                className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}
              >
                Get a Job
              </p>
              <div className={styles.lineRight}></div>
            </div>

            <h1 className={`text-center col-lg-6 offset-lg-3`}>
              Become a Part of our <br />
              organization
            </h1>
          </div>

          <div className={style.registerFormContainer}>
            <h3 className={style.tittle}>register</h3>

            <form>
              <div className={`row row-gap-4 ${style.cusRow}`}>
                <div className="col-lg-12">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <input type="text" placeholder="First Name" required />
                </div>

                <div className="col-lg-6 col-sm-12">
                  <input type="text" placeholder="Last Name" required />
                </div>

                <div className="col-lg-12">
                  <input type="text" placeholder="Phone Number" required />
                </div>

                <div className="col-lg-12">
                  <input type="text" placeholder="Location" required />
                </div>

                <div className="col-lg-12">
                  <input type="text" placeholder="Current/Previous Job Title" />
                </div>

                <div className={`col-lg-12 col-md-12 col-sm-12 d-flex gap-4 `}>
                  <div className={style.file}>
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleCvFileChange}
                      multiple
                      required
                    />
                    <label className={style.withdd} htmlFor="file-upload">
                      Upload Your CV
                    </label>
                  </div>
<div className={`d-flex align-items-center gap-2 ${style.mbView}`}>
                  <div id="file-upload-filename" >{cvFileName}</div>
                  <div>
                  {cvFileName && (
                    <button
                    style={{height:'40px'}}
                      className="btn btn-danger"
                      onClick={handleRemoveCvFile}
                      type="button"
                    >
                      &times;
                    </button>
                  )}
</div>
</div>
                  {/* Document Upload */}
                  <div className={style.file}>
                    <input
                      type="file"
                      id="file-document"
                      onChange={handleDocumentFileChange}
                      multiple
                      required
                    />
                    <label className={style.withdd} htmlFor="file-document">
                      Upload Your Document
                    </label>
                  </div>
                  <div className={`d-flex align-items-center gap-2 ${style.mbView}`}>

                  
                  <div id="file-upload-document" >{documentFileName}</div>
                  <div>
                  {documentFileName && (
                  

                    <button
                    style={{height:'40px'}}
                      className="btn btn-danger"
                      onClick={handleRemoveDocumentFile}
                      type="button"
                    >
                      &times;
                    </button>
                  )}
                  </div>
                  </div>
                </div>
              </div>
              <div className={`col-lg-12 ${style.submit_btn}`}>
                <input value="Submit" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
