"use client";

const WhyChooseUS = () => {
  const points = [
    {
      title: "SMARTLY EXECUTE",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      title: "FAST BUILDING",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      title: "CAREFULLY PLANNED",
      description:
        "Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus.",
    },
    {
      title: "PERFECT DESIGN",
      description:
        "Vestibulum quis nisi condimentum at ac nec ornare morbi in ridiculus ipsum faucibus.",
    },
  ];

  return (
    <div className="w-full py-20 px-4 md:px-10 lg:px-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 text-sm uppercase text-gray-500">
          <span className="w-10 h-[1px] bg-gray-400"></span>
          Key Points
          <span className="w-10 h-[1px] bg-gray-400"></span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mt-4 max-w-2xl mx-auto">
          WHAT’S INCLUDED IN THIS SERVICE?
        </h1>
      </div>

      {/* Points */}
      <div className="flex flex-col gap-10">
        {points.map((point, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Number */}
            <div className="text-5xl font-bold text-gray-200">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUS;