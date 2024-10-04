import Image from "next/image";
import styles from "../../styles/specification.module.css";

const Specification = ({ additionalMedia }) => {
  // const imageData = [
  //   { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 1" },
  //   { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 2" },
  //   { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 3" },
  //   { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 4" },
  //   { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 5" },
  //   { src: "/T2,TATA PRIMANTI/1.jpg", alt: "Image 6" },
  // ];

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
      {/* 
      <div>
        {Array(2)
          .fill()
          .map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="d-flex justify-content-between gap-3 mt-4"
            >
              {imageData
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((image, index) => (
                  <figure key={index} className={styles.imgclass1}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={200}
                      layout="responsive"
                    />
                  </figure>
                ))}
            </div>
          ))}
      </div> */}

      {/* {additionalMedia.videoLink && (
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="315"
            src={additionalMedia.videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )} */}
    </div>
  );
};

export default Specification;
