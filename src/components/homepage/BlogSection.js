import Link from "next/link";
import ArticleCard from "../../components/homepage/ArticleCard";

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
      title:
        "Designing the Perfect Haven: Essential Tips for Elevating Your Apartment’s Interior",
      date: "December 6, 2023",
      image: "/R4.webp",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-orange-50/20 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-100 blur-3xl rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            {/* Tag */}
            <span className="inline-flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-orange-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-medium">
                Articles & Insights
              </span>
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ideas that shape <br />
              beautiful spaces
            </h2>

            <p className="mt-4 text-gray-500 max-w-md">
              Discover design inspiration, architecture trends, and interior
              styling tips.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/blogs"
            className="
              inline-flex
              items-center
              gap-2

              px-5 py-2.5

              rounded-full

              border border-orange-200
              bg-white

              text-sm font-medium

              hover:bg-orange-500
              hover:text-white

              transition-all duration-300
              shadow-sm
              hover:shadow-[0_10px_30px_rgba(249,115,22,0.25)]
            "
          >
            Browse all articles →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-orange-100
                rounded-md
                overflow-hidden

                shadow-sm
                hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)]

                transition-all duration-500
                hover:-translate-y-2
              "
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />

                {/* Orange overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Date badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs bg-orange-500 text-white rounded-full">
                    {article.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 line-clamp-3">
                  Explore ideas that elevate your interiors with modern design
                  thinking.
                </p>

                <Link
                  href="/blogs"
                  className="
                    inline-flex
                    mt-5
                    text-sm
                    font-medium
                    text-orange-500
                    hover:underline
                    items-center gap-1
                  "
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
