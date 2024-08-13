import React, { useState } from "react";
import styles from "../../styles/video.module.css";
import ReactPlayer from "react-player";
import stylesA from "../../styles/aboutSection.module.css";
import Link from "next/link";

const TwoVideoSection = () => {
  // Manage playing state for each video separately
  const [isPlayingFirstVideo, setIsPlayingFirstVideo] = useState(false);
  const [isPlayingSecondVideo, setIsPlayingSecondVideo] = useState(false);

  const handlePlayFirstVideo = () => {
    setIsPlayingFirstVideo(true);
    setIsPlayingSecondVideo(false); // Stop second video if playing
  };

  const handlePlaySecondVideo = () => {
    setIsPlayingSecondVideo(true);
    setIsPlayingFirstVideo(false); // Stop first video if playing
  };

  const handleEndedFirstVideo = () => {
    setIsPlayingFirstVideo(false);
  };

  const handleEndedSecondVideo = () => {
    setIsPlayingSecondVideo(false);
  };

  return (
    <>
      <div className={styles.videoMainContainer}>
        <div className="container">
          <div
            style={{ justifyContent: "center", alignItems: "center" }}
            className={stylesA.sectionTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
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
                Watch video
                <hr />
              </div>
              <h2>Converging Spaces Into Stunning Reality</h2>
            </div>
          </div>
          <div className={styles.vedioSectionMain}>
            {!isPlayingFirstVideo ? (
              <div className={styles.videoView1}>
                <div className={styles.video_overlay} onClick={handlePlayFirstVideo}>
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
              </div>
            ) : (
              <div className={styles.videoView2}>
                <div className="iframe-container">
                  <ReactPlayer
                    url="https://www.youtube.com/embed/qUOYp0-tm0Y"
                    playing={isPlayingFirstVideo}
                    controls
                    width="100%"
                    height="100%"
                    className={styles.reactPlayer}
                    onEnded={handleEndedFirstVideo}
                  />
                </div>
              </div>
            )}

            {!isPlayingSecondVideo ? (
              <div className={styles.videoView1}>
                <div className={styles.video_overlay} onClick={handlePlaySecondVideo}>
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
              </div>
            ) : (
              <div className={styles.videoView2}>
                <div className="iframe-container">
                  <ReactPlayer
                    url="https://www.youtube.com/embed/qUOYp0-tm0Y"
                    playing={isPlayingSecondVideo}
                    controls
                    width="100%"
                    height="100%"
                    className={styles.reactPlayer}
                    onEnded={handleEndedSecondVideo}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link href="/get-in-touch">Get in touch</Link>
        </div>
      </div>
      <style jsx>{`
        .video-section {
          display: flex;
          flex-direction: row;
          gap: 100px;
          align-items: start;
          text-align: start;
        }

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
    </>
  );
};

export default TwoVideoSection;
