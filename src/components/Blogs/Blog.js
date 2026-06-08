"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "10 Modern Interior Design Trends for 2026",
    category: "Interior Design",
    date: "June 08, 2026",
    image: "https://picsum.photos/800/600?random=1",
    description:
      "Discover the latest trends transforming modern homes, from warm minimalism to luxury natural materials.",
  },
  {
    id: 2,
    title: "How to Design a Functional Office Space",
    category: "Architecture",
    date: "June 05, 2026",
    image: "https://picsum.photos/800/600?random=2",
    description:
      "A well-designed workspace improves productivity and creates a comfortable environment for teams.",
  },
  {
    id: 3,
    title: "Luxury Living Room Ideas You'll Love",
    category: "Home Decor",
    date: "June 01, 2026",
    image: "https://picsum.photos/800/600?random=3",
    description:
      "Create elegant living spaces with premium furniture, soft lighting, and timeless design elements.",
  },
  {
    id: 4,
    title: "Small Apartment? Big Design Solutions",
    category: "Space Planning",
    date: "May 28, 2026",
    image: "https://picsum.photos/800/600?random=4",
    description:
      "Maximize every square foot using smart layouts, storage ideas, and multifunctional furniture.",
  },
  {
    id: 5,
    title: "Restaurant Interior Ideas That Attract Customers",
    category: "Commercial",
    date: "May 24, 2026",
    image: "https://picsum.photos/800/600?random=5",
    description:
      "Atmosphere matters. Explore creative restaurant interiors that leave lasting impressions.",
  },
  {
    id: 6,
    title: "The Future of Sustainable Architecture",
    category: "Architecture",
    date: "May 20, 2026",
    image: "https://picsum.photos/800/600?random=6",
    description:
      "Eco-friendly materials and sustainable planning are shaping the next generation of buildings.",
  },
];

const Blog = () => {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50/30 py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Our Blog
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Latest Articles & Insights
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Explore ideas, inspiration, and expert advice on architecture,
            interiors, construction, and modern living.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blogs/blogdetail/${article.id}`}
              className="
                group
                block
                overflow-hidden
                rounded
                bg-white
                border
                border-orange-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  unoptimized
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-3 text-sm text-orange-500">{article.date}</p>

                <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500 line-clamp-3">
                  {article.description}
                </p>

                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-orange-500
                    transition-all
                    duration-300
                    group-hover:gap-3
                  "
                >
                  Read Article
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
