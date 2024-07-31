"use client";

import HeroSection from "@/components/About/HeroSection";
import styles from "../../styles/home.module.css";
import style from "../../styles/career.module.css";
import { useState } from "react";

const Career = () => {
  const [fileName, setFileName] = useState("");
  const [videoName, setVideoName] = useState("");

  const handleFileChange = (event) => {
    const input = event.target;
    const uploadedFileName = input.files[0].name;
    setFileName(uploadedFileName);
  };

  const handleVideoChange = (event) => {
    const input = event.target;
    const uploadedVideoName = input.files[0].name;
    setVideoName(uploadedVideoName);
  };

  const handleRemoveFile = (event) => {
    setFileName("");
    document.getElementById("file-upload").value = "";

    if (event.target.files[0] > 0) {
      setFileName(true);
    } else {
      setFileName(false);
    }
  };

  const handleRemoveVideo = (event) => {
    setVideoName("");
    document.getElementById("video-upload").value = "";

    if (event.target.files[0] > 0) {
      setVideoName(true);
    } else {
      setVideoName(false);
    }
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
                Get a JOb
              </p>
              <div className={styles.lineRight}></div>
            </div>

            <h1
              className={`text-center col-lg-6 offset-lg-3`}
            >
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

                <div className="col-lg-3 col-md-6 col-12">
                  <div class={style.file}>
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      multiple
                      required
                    />
                    <label style={{ width: "100%" }} for="file-upload">
                      Upload Your CV
                    </label>
                  </div>
                  <div id="file-upload-filename">{fileName}</div>
                  {fileName && (
                    <button
                      className="btn btn-danger"
                      onClick={handleRemoveFile}
                      id=""
                    >
                      &times;
                    </button>
                  )}
                </div>

                {/* <div className="col-lg-4 col-md-6 col-12">
                  <div class={style.file}>
                    <input
                      type="file"
                      id="video-upload"
                      onChange={handleVideoChange}
                      multiple
                      required
                    />
                    <label style={{ width: "100%" }} for="video-upload">
                      Upload Your Video CV
                    </label>
                  </div>
                  <div id="file-upload-filename">{videoName}</div>
                  {videoName && (
                    <button
                      className="btn btn-danger"
                      onClick={handleRemoveVideo}
                      id=""
                    >
                      &times;
                    </button>
                  )}
                </div> */}
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
