import React from "react";
import HeroSection from "../../components/About/HeroSection";
import BlogContent from "../../components/BlogDetailContent/BlogContent";
import GetInTouch from "../../components/homepage/GetInTouch";

const BlogDetailContent = ({ article }) => {
  return (
    <>
      <HeroSection
        title={article.title}
        text="Blogs"
        backgroundImage="/blog-detail.png"
        background="#fff"
        color="#fff"
      />
      <BlogContent
        slug={article.slug}
        title={article.title}
        date={article.createdAt}
        category={article.category}
        image={article.blog_image}
        content={article.content}
      />
      <GetInTouch />
    </>
  );
};

export default BlogDetailContent;