import Image from "next/image";
import styles from "../../styles/specification.module.css";

const Specification = ({ additionalMedia, gallery, bgimage }) => {

  // console.log(gallery);
  return (
    <div className={`container ${styles.specificationsContainer}`}>
      <div
        className={`row align-items-center ${styles.specificationsContainerRow}`}
      >
        <div className="col-lg-6">
          <div
            className={styles.sectionTitle2}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={styles.left2}>
              <div className={styles.tag2}>
                <hr />
                <span className={styles.spannn}>{additionalMedia.title}</span>
              </div>
              <h2 className={styles.h2}>
                {additionalMedia.headingDescription}
              </h2>
            </div>
          </div>
          <p className={styles.videoP}>{additionalMedia.description}</p>
        </div>
        <div className="col-lg-6">
          <figure className={styles.imgclass}>
            <img
              src={bgimage}
              alt="Main image"
            // layout="responsive"
            />
          </figure>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "40px" }}>
        {gallery.images.map((project) => (
          <div key={project.id} className="col-lg-4 py-2">
            <div className={styles.card}>
              <img
                src={
                  project.startsWith("https://res.cloudinary.com")
                    ? project
                    : `https://backend-interior.onrender.com/${project}`
                }
                alt="Project Image"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Specification;
