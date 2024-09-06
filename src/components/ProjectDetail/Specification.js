import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "../../styles/specification.module.css";

const Specification = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerHeight, setPlayerHeight] = useState('700px');

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile view
        setPlayerHeight(''); // Remove height
      } else {
        // Desktop view
        setPlayerHeight('700px'); // Set height to 700px
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`container  ${styles.specificationsContainer}`}>
      <div
        className={`row align-items-center ${styles.specificationsContainerRow}`}
      >
        <div className="col-md-6  ">
          <div
            className={styles.sectionTitle2}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={styles.left2}>
              <div className={styles.tag2}>
                <hr />
                <span className={styles.spannn}>REVAMP THE ELEGANCE </span>
              </div>
              <h2>Crafting Luxurious</h2>
            </div>
          </div>
          <p className={styles.videoP}>
            I recently had the pleasure of working with Colonelz, an exceptional
            interior design and construction company. Their team of
            professionals turned my dream space into a reality with their
            impeccable design expertise and flawless execution. From concept to
            completion, Colonelz exceeded my expectations with their attention
            to detail and commitment to quality craftsmanship. I highly
            recommend Colonelz to anyone in need of outstanding interior design
            and construction services.
          </p>

        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  ">
          {!isPlaying
            ? <div className={styles.video_overlay} onClick={handlePlay}>
              <img src="/video.png" alt="Video Thumbnail" />
              <button className="play-button">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="32" fill="white" />
                  <path d="M25 20L45 32L25 44V20Z" fill="black" />
                </svg>
              </button>
            </div>
            : <div className="iframe-container">
              <ReactPlayer
                url="https://www.youtube.com/embed/qUOYp0-tm0Y"
                controls
                playing={isPlaying}
                height={playerHeight}
              // className={styles.reactPlayer}

              />
            </div>}
          <style jsx>{`
            .play-button {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: none;
              border: none;
              cursor: pointer;
              animation: scaleUpDown 1.5s infinite ease-in-out;
            }
            .play-button svg {
              width: 64px;
              height: 64px;
            }
            @keyframes scaleUpDown {
              0%,
              100% {
                transform: translate(-50%, -50%) scale(1);
              }
              50% {
                transform: translate(-50%, -50%) scale(1.2);
              }
            }
            .iframe-container {
              width: 100%;
              position: relative;
              overflow: hidden;
              margin-top: 16px;
            }
            .iframe-container iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0;
            }
          `}</style>
        </div>
      </div>
    </div>

  );
};

export default Specification;
