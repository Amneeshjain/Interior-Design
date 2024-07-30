import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.css";
const ArticleCard = ({ title, category, date, image, description }) => {
  return (
    <div>
      <Link
        className={styles.linkStyling}
        href="/blog-detail-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Image
          src={image}
          alt={title}
          className={styles.cardImage}
          width={400}
          height={100}
        />
        <div className={styles.cardContent}>
          <div className={styles.cardCategoryDate}>
            
            <div className={styles.lineGrey}></div>
            <div className={styles.date}>{date}</div>
          </div>
          <div className={styles.cardTitle}>{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
