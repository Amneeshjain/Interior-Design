"use client";
import styles from "../../styles/home.module.css";
import style from "../../styles/gitInTouch.module.css";
import { useState } from "react";
import Contact from "../../components/About/Contact";
import Swal from 'sweetalert2';

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
      const response = await fetch('https://backend-interior.onrender.com/api/contact/submit', {
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

      const result = await response.json();
      alert(result.message);
      window.location.reload();

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
      <div className={style.getInTouch}>
        <div className="container">
          <div className="section-tittle">
            <div className="d-flex align-items-center justify-content-center">
              <div className={styles.lineLeft}></div>
              <p className={`text-center ${styles.uppercase} ${styles.textStylingLine}`}>
                Get In Touch
              </p>
              <div className={styles.lineRight}></div>
            </div>

            <h1 className={`text-center col-lg-6 offset-lg-3 mb-5 `}>
              Hey! Tell us about <br />
              your project
            </h1>
          </div>
        </div>

        <div className="container">
          <div className={style.getInTouchFormContainer}>
            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
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
                    <option value="Category 1">Residential interior</option>
                    <option value="Category 2">Commercial Interior</option>
                    <option value="Category 3">Architecture</option>
                    <option value="Category 3">Construction</option>
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
        <Contact />

      </div>
    </>
  );
};

export default GetInTouch;
