import React from "react";

const cardData = [
  {
    image:
      "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1",
    category: "Apartment",
    title: "Cozy Apartment",
    description: "A cozy apartment with modern amenities.",
  },
  {
    image:
      "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/IMG_5589.jpg?w=1600&ssl=1",
    category: "Villas",
    title: "Luxury Villa",
    description: "A luxury villa with stunning views.",
  },
  {
    image:
      "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/03/Positano-Weather.jpg?w=1600&ssl=1",
    category: "Offices",
    title: "Modern Office Space",
    description: "A modern office space for productive work.",
  },
  {
    image:
      "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1",
    category: "Resorts & Hotels",
    title: "Beach Resort",
    description: "A beach resort with all-inclusive packages.",
  },
  {
    image:
      "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/IMG_5589.jpg?w=1600&ssl=1",
    category: "Restaurants & Cafes",
    title: "Charming Cafe",
    description: "A charming cafe serving delicious coffee.",
  },
  {
    image:
      "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/03/Positano-Weather.jpg?w=1600&ssl=1",
    category: "Retail & Showroom",
    title: "Modern Showroom",
    description: "A modern showroom with the latest products.",
  },
];

const Allprojectlist = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Apartment Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative h-72 rounded-2xl overflow-hidden group shadow-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white z-10">
                <p className="text-xs uppercase tracking-widest text-gray-300 mb-1">
                  {card.category}
                </p>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-200 mt-1">
                  {card.description}
                </p>
              </div>

              {/* Clickable overlay */}
              <a href="#" className="absolute inset-0 z-20"></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allprojectlist;