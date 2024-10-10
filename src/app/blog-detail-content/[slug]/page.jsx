import React from "react";
import BlogDetailContent from "../BlogDetailContent";

async function getBlogPost(slug) {
  const response = await fetch(`https://backend-interior.onrender.com/api/blogs/get-blog/${slug}`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  return response.json();
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  console.log("Slug from params:", slug);
  const result = await getBlogPost(slug);

  if (!result.success) {
    return <p>Error loading blog post</p>;
  }

  const article = result.data;

  return <BlogDetailContent article={article} />;
}