import React, { useEffect, useState } from "react";
import styles from "../../styles/home.module.css";
import ArticleCard from "../../components/homepage/ArticleCard";

const BlogsDetail = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://backend-interior.onrender.com/api/blogs/get-all-blog');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.success) {
          setArticles(result.data);
        } else {
          console.error('Error fetching blogs:', result.message);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <div className={`row`}>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              className={`col-lg-4`}
              key={index}
              style={{ marginBottom: "33px" }}
            >
              <ArticleCard
                title={article.title}
                category={article.category}
                date={new Date(article.createdAt).toLocaleDateString()}
                image={article.blog_image}
                description={article.description}
              />
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
    </div>
  );
};

export default BlogsDetail;
