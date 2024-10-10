import Image from "next/image";
import styles from "../../styles/specification.module.css";

const Specification = ({ additionalMedia, gallery }) => {
  const projectData = [
    {
      imageSrc: "/T2,TATA PRIMANTI/1.jpg",
    },
    {
      imageSrc: "/T2,TATA PRIMANTI/1.jpg",
    },
    {
      imageSrc: "/T2,TATA PRIMANTI/1.jpg",
    },
    {
      imageSrc: "/T2,TATA PRIMANTI/1.jpg",
    },
    {
      imageSrc: "/T2,TATA PRIMANTI/1.jpg",
    },
    {
      imageSrc: "/T2,TATA PRIMANTI/1.jpg",
    },
  ];
  console.log(gallery);
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
              src="/T2,TATA PRIMANTI/1.jpg"
              alt="Main image"
              // layout="responsive"
            />
          </figure>
        </div>
      </div>

      <div className="container py-5 px-0">
        <div className="row d-flex justify-content-center">
          {gallery.images.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className={styles.card}>
                <Image
                  src={project}
                  alt={project}
                  layout="responsive"
                  width={300}
                  height={200}
                  className={styles.projectImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specification;
