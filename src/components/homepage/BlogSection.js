import React from "react";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import ArticleCard from "../../components/homepage/ArticleCard";
import styleA from "../../styles/aboutSection.module.css";

const BlogSection = () => {
  const articles = [
    {
      title: "Green Elegance: How Plants Can Enhance Your Home Interiors",
      
      date: "December 30, 2023",
      image: "/2-768x540.webp",
    },
    {
      title: "Bringing Nature Indoors: The Power of Plants in Home Décor",
      
      date: "December 20, 2023",
      image: "/1-768x540.webp",
    },
    {
      title: "Designing the Perfect Haven: Essential Tips for Elevating Your Apartment’s Interior",
      
      date: "December 6, 2023",
      image: "/R4.webp",
    },
  ];

  return (
    <>
      <div className={styles.bloSectionMainCon}>
        <div className="container">
          <div
            className={styleA.sectionTitle}
           
          >
            <div className={styleA.left}>
              <div className={styleA.tag}>
                <hr />
                Articles
              </div>
              <h2>
                Browse our <br />
                articles & news
              </h2>
            </div>
            <div className={styleA.right}>
              <Link href="/blogs">Browse all articles</Link>
            </div>
          </div>
          <div className={`row ${styles.bloSectionItems} ${styles.phoneGap}`}>
            {articles.map((article, index) => (
              <div className="col-lg-4" key={index}>
                <ArticleCard
                  title={article.title}
                  category={article.category}
                  date={article.date}
                  image={article.image}
                  description={article.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
