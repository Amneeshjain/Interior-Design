"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const articles = [
    {
        id: 1,
        title: "10 Modern Interior Design Trends for 2026",
        category: "Interior Design",
        date: "June 08, 2026",
        image: "https://picsum.photos/1600/900?random=1",
        description:
            "Discover the latest trends transforming modern homes, from warm minimalism to luxury natural materials.",
        content: `
Modern interior design is evolving rapidly. Warm earthy palettes,
natural stones, handcrafted furniture, and sustainable materials
are becoming the center of luxury homes.

Minimalism is no longer about empty spaces—it's about creating
functional environments filled with texture and personality.

Large windows, organic shapes, and layered lighting create
comfortable spaces that feel elegant and timeless.

Whether you are renovating your home or designing a new one,
these trends can help you create interiors that are both modern
and inviting.
    `,
    },
    {
        id: 2,
        title: "How to Design a Functional Office Space",
        category: "Architecture",
        date: "June 05, 2026",
        image: "https://picsum.photos/1600/900?random=2",
        description:
            "A well-designed workspace improves productivity and creates a comfortable environment for teams.",
        content:
            "A productive office begins with smart planning. Open collaboration zones, natural lighting, ergonomic furniture, and flexible meeting spaces improve both creativity and efficiency.",
    },
    {
        id: 3,
        title: "Luxury Living Room Ideas You'll Love",
        category: "Home Decor",
        date: "June 01, 2026",
        image: "https://picsum.photos/1600/900?random=3",
        description:
            "Create elegant living spaces with premium furniture, soft lighting, and timeless design elements.",
        content:
            "Luxury interiors combine comfort with sophistication. Neutral palettes, premium textures, statement lighting, and custom furniture help create unforgettable spaces.",
    },
];

export default function BlogDetail() {
    const params = useParams();

    const blog = articles.find((item) => item.id === Number(params.id));

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-3xl font-bold">Blog Not Found</h2>
            </div>
        );
    }

    return (
        <section className="bg-white pb-20">
            {/* Hero Image */}
            <div className="relative h-[55vh] md:h-[75vh] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    unoptimized
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-5 pb-16">
                    <span className="inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white">
                        {blog.category}
                    </span>

                    <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
                        {blog.title}
                    </h1>

                    <p className="mt-4 text-orange-200">Published on {blog.date}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-5 -mt-16 relative z-10">
                <div className="rounded-[32px] bg-white p-8 md:p-12 shadow-2xl border border-orange-100">
                    <p className="text-xl text-gray-700 leading-9 font-light">
                        {blog.description}
                    </p>

                    <div className="w-24 h-[3px] bg-orange-500 rounded-full my-8"></div>

                    <div className="space-y-6 text-gray-600 leading-8 text-lg">
                        <p>{blog.content}</p>

                        <p>
                            Great design is about balancing aesthetics, functionality, and
                            human experience. Every carefully planned detail contributes to
                            spaces that inspire and improve everyday life.
                        </p>

                        <blockquote className="border-l-4 border-orange-500 pl-6 py-2 italic text-2xl text-gray-900 font-medium">
                            {` Design is not just what it looks like and feels like. Design is
              how it works.`}
                        </blockquote>

                        <p>
                            At Colonelz, we believe every project should tell a story through
                            thoughtful architecture and timeless interior design.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 flex flex-wrap gap-3">
                        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-600">
                            Interior
                        </span>

                        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-600">
                            Architecture
                        </span>

                        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-600">
                            Design
                        </span>
                    </div>

                    {/* Back Button */}
                    <Link
                        href="/blogs"
                        className="
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-orange-500
              px-6
              py-3
              text-white
              font-medium
              transition-all
              duration-300
              hover:bg-orange-600
              hover:-translate-y-1
            "
                    >
                        ← Back to Blogs
                    </Link>
                </div>
            </div>
        </section>
    );
}
