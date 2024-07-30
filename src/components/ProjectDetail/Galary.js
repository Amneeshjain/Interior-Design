import { useState } from "react";
import style from "../../styles/gallary.module.css";
import stylesA from "../../styles/aboutSection.module.css";

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className={style.gallaryMainContainer}>
        <div className="container">
          <div
            style={{ justifyContent: "center", alignItems: "center" }}
            className={stylesA.sectionTitle}
          >
            <div
              className={stylesA.left}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div className={stylesA.tag}>
                <hr />
                Gallery
                <hr />
              </div>
              <h2>THE INITIAL CONCEPTS</h2>
            </div>
          </div>
          <div className={style.gallaryItems}>
            <div className={style.gallaryCard}>
              <figure>
                <img src="/slide-1.jpg" alt="" width={"100%"} />
              </figure>
            </div>
            <div className={style.gallaryCard}>
              <figure>
                <img src="/slide-2.jpg" alt="" width={"100%"} />
              </figure>
            </div>
            <div className={style.gallaryCard}>
              <figure>
                <img src="/slide-3.jpg" alt="" width={"100%"} />
              </figure>
            </div>
            <div className={style.gallaryCard}>
              <figure>
                <img src="/slide-4.jpg" alt="" width={"100%"} />
              </figure>
            </div>
            {showMore && (
              <>
                <div className={style.gallaryCard}>
                  <figure>
                    <img src="/slide-1.jpg" alt="" width={"100%"} />
                  </figure>
                </div>
                <div className={style.gallaryCard}>
                  <figure>
                    <img src="/slide-2.jpg" alt="" width={"100%"} />
                  </figure>
                </div>
                <div className={style.gallaryCard}>
                  <figure>
                    <img src="/slide-3.jpg" alt="" width={"100%"} />
                  </figure>
                </div>
                <div className={style.gallaryCard}>
                  <figure>
                    <img src="/slide-4.jpg" alt="" width={"100%"} />
                  </figure>
                </div>
              </>
            )}
          </div>
          <div className={style.loadMore}>
            <button
              style={{ margin: "0 auto" }}
              onClick={handleToggle}
              className={`${style.toggleButton}`}
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
