const Paragraph = () => {
  return (
    <section className=" bg-gradient-to-b from-white via-orange-50/30 to-white mt-10 w-full">
      <div className="max-w-5xl mx-auto px-5 w-full flex justify-center">

        {/* Card */}
        <div className="relative w-full bg-white rounded-2xl shadow-lg border border-orange-100 p-8 md:p-10 overflow-hidden">

          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />

          {/* Label */}
          <p className="text-xs tracking-[0.3em] uppercase text-orange-500 mb-4 font-medium">
            Customer Story
          </p>

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Our Customer Story section presents a diverse portfolio of
            completed projects, from apartments, villas, resorts, hotels,
            restaurants, offices, and retail showrooms. Each story highlights
            our design approach tailored to every space — residential,
            commercial, and hospitality-focused. Organized into intuitive
            categories, you can explore each project with a simple click and
            experience the depth of our design expertise.
          </p>

          {/* Accent line */}
          <div className="mt-6 w-16 h-[3px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />

        </div>

      </div>
    </section>
  );
};

export default Paragraph;