import BlogDetailContent from "../BlogDetailContent";


const blogs = [
  {
    slug: "modern-interior-design",
    title: "Modern Interior Design",
    createdAt: "2025-01-10",
    category: "Interior",
    blog_image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    content: "This is content for modern interior design...",
  },
  {
    slug: "luxury-villa-design",
    title: "Luxury Villa Design",
    createdAt: "2025-02-15",
    category: "Architecture",
    blog_image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    content: "This is content for luxury villa design...",
  },
];


export default function BlogDetailPage({ params }) {
  const { slug } = params;

  // find blog by slug
  const article = blogs.find((item) => item.slug === slug);

  if (!article) {
    return <p className="text-center py-10">Blog not found</p>;
  }

  return <BlogDetailContent article={article} />;
}