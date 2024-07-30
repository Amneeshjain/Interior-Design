import React from "react";
import styles from "../../styles/home.module.css";
import ArticleCard from "../../components/homepage/ArticleCard";

const BlogsDetail = () => {
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
    
    {
      title: "Exploring the Key Differences in Interior Design: Commercial vs. Residential Properties",
      category: "RESOURCES",
      date: "November 10, 2023",
      image: "/Beige-Minimalist-Interior-Design-Presentation-1-768x540.webp",
    },
    {
      title: "Exploring the Key Elements of Modern Residential Interior Design: A Guide to Creating Contemporary Spaces",
      category: "DESIGN",
      date: "November 17, 2023",
      image: "/Modern-Residential-Interior-Design.webp",
    },
    {
      title: "Small Space, Big Style: Effective Interior Design Ideas for Residential Apartments",
      
      date: "October 25, 2023",
      image: "/R3-1.webp",
    },
  ];

  return (
    <div className="container">
      <div className={`row`}>
        {articles.map((article, index) => (
          <div
            className={`col-lg-4`}
            key={index}
            style={{ marginBottom: "33px" }}
          >
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
  );
};

export default BlogsDetail;
