import React from "react";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import Link from "next/link";

const CircularText = () => {
  return (
    <div>
      <Link
        className={styles.videoFrame}
        href="#about"
        target=""
        rel="noopener noreferrer"
      >
        <Image
          className={styles.videoImg}
          src="/Group.png"
          alt="Rotating Image"
          width={100}
          height={100}
        />
        <Image
          src="/Animated Icon.png"
          className={styles.scale}
          width={50}
          height={60}
          alt="Static Image"
          style={{ position: "relative", zIndex: 1, width: "50px" }}
        />
      </Link>
    </div>
  );
};

export default CircularText;
