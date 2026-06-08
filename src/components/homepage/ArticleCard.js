"use client";

import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({
  title,
  category,
  date,
  image,
  description,
  slug,
}) => {
  return (
    <Link
      href={`/blog-detail-content/${slug}`}
      className="block group"
    >
      {/* Image */}
      <div className="relative w-full h-60 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-6 h-[2px] bg-gray-400"></span>
          <span>{date}</span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-black group-hover:text-gray-700 transition">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ArticleCard;