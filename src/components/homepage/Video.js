import React, { useState } from "react";
import styles from "../../styles/video.module.css";
import ReactPlayer from "react-player";
import stylesA from "../../styles/aboutSection.module.css";
import Link from "next/link";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
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
              <h2>Converting Spaces Into Stunning Reality</h2>
            </div>
          </div>
          <div className={styles.vedioSectionMain}>
            {!isPlaying ? (
              <div className="video-overlay" onClick={handlePlay}>
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


            ) : (
              <div className="iframe-container">
                <ReactPlayer
                  url="https://www.youtube.com/embed/qUOYp0-tm0Y"
                  playing={isPlaying}
                  controls
                  width="100%"
                  height="700px"
                  className={styles.reactPlayer}
                  onEnded={handleEnded}
                />
              </div>
            )}
            <style jsx>{`
              .video-section {
             
                display: flex;
                flex-direction: row;
                gap:100px;
                align-items: start;
                text-align: start;
              }
              .video-overlay {
                position: relative;
                cursor: pointer;
              
               
              }
              .video-overlay img {
                width: 100%;
                height: auto;
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
        <div className={styles.btnContainer}>
          <Link href="/get-in-touch">Get in touch</Link>
        </div>
      </div>
    </>
  );
};

export default Video;
