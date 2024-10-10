import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.css";
const ArticleCard = ({ title, category, date, image, description, slug }) => {
  console.log("Title:", title);
  console.log("Slug in ArticleCard:", slug);
  return (
    <div>
      <Link
        className={`px-0 ${styles.linkStyling}`}
        href={`/blog-detail-content/${slug}`}
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
            <div className={styles.lineGrey} />
            <div className={styles.date}>
              {date}
            </div>
          </div>
          <div className={styles.cardTitle}>
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
