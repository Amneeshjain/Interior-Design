"use client";

import HeroSection from "@/components/About/HeroSection";
import styles from "../../styles/home.module.css";
import style from "../../styles/career.module.css";
import { useState } from "react";
import Swal from 'sweetalert2';

const Career = () => {
  const [cvFileName, setCvFileName] = useState("");

  const handleCvFileChange = (event) => {
    const input = event.target;
    const uploadedFileName = input.files[0].name;
    setCvFileName(uploadedFileName);
  };

  const handleRemoveCvFile = () => {
    setCvFileName("");
    document.getElementById("file-upload").value = "";
  };

  const handleRemoveDocumentFile = () => {
    setDocumentFileName("");
    document.getElementById("file-document").value = "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log("formdata", formData);
    try {
      const response = await fetch('https://backend-interior.onrender.com/api/career/career-submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }

      Swal.fire({
        title: 'Success!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <>
      <HeroSection
        title="Join our Team"
        text="Career"
        backgroundImage="../../career.png"
        color={"#fff"}
        background={"#fff"}
      />

      <div className={style.getJobSection}>
        <div className="container">
          <div className="section-tittle" data-aos="zoom-out-up">
            <div className="d-flex align-items-center justify-content-center">
            </div>
          </div>

          <div className={style.registerFormContainer}>
            <h3 className={style.tittle}>Work With us</h3>

            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
              <div className={`row row-gap-4 ${style.cusRow}`}>
                <div className="col-lg-12">
                  <input type="text" name="email_address" placeholder="Email Address" required />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <input type="text" name="first_name" placeholder="First Name" required />
                </div>

                <div className="col-lg-6 col-sm-12">
                  <input type="text" name="last_name" placeholder="Last Name" required />
                </div>

                <div className="col-lg-12">
                  <input type="text" name="phone_number" placeholder="Phone Number" required />
                </div>

                <div className="col-lg-12">
                  <input type="text" name="location" placeholder="Location" required />
                </div>

                <div className="col-lg-12">
                  <input type="text" name="job_title" placeholder="Current/Previous Job Title" />
                </div>

                <div className={`col-lg-12 col-md-12 col-sm-12 ${style.mbs}`}>
                  <div className={style.buttonflex}>
                    <div className={style.file}>
                      <input
                        type="file"
                        id="file-upload"
                        name="resume_file"
                        onChange={handleCvFileChange}
                        multiple
                        required
                      />
                      <label className={style.withdd} htmlFor="file-upload">
                        Upload Your CV
                      </label>
                    </div>
                    <div className={`d-flex align-items-center gap-2 mt-3`}>
                      <div id="file-upload-filename">{cvFileName}</div>
                      <div>
                        {cvFileName && (
                          <button
                            style={{ height: "40px" }}
                            className="btn btn-danger"
                            onClick={handleRemoveCvFile}
                            type="button"
                          >
                            &times;
                          </button>
                        )}
                      </div>
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
