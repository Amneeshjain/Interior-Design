"use client";

import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Center Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-orange-500/20 -translate-x-1/2" />

      {/* Founder 1 */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 mt-16">
        {/* Image */}
        <div className="relative">
          <div className="hidden lg:block absolute right-[-40px] top-1/2 h-5 w-5 rounded-full bg-orange-500 -translate-y-1/2 z-20" />

          <div className="relative h-[670px] overflow-hidden rounded-md">
            <Image
              src="/TEAM PHOTOS/Col Biraj Sahay-Managing Director.png"
              alt="Col Biraj Sahay"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-orange-400 uppercase tracking-[0.3em] text-xs">
            Founder & Managing Director
          </span>

          <h3 className="mt-4 text-4xl font-bold">Col. Biraj Sahay</h3>

          <p className="mt-6 text-gray-400 leading-8">
            Founder of Colonelz Constructions Pvt. Limited, Col. Sahay&aposs
            journey began with discipline and leadership shaped through Sainik
            School Tilaiya and the National Defence Academy.
          </p>

          <p className="mt-5 text-gray-400 leading-8">
            His years in the Indian Armed Forces and the United Nations
            established the values of integrity, precision, and excellence that
            define Colonelz today.
          </p>

          <div className="mt-8 border-l-2 border-orange-500 pl-5">
            <p className="italic text-gray-300">
              {
                "Built on discipline, driven by passion, committed to excellence."
              }
            </p>
          </div>
        </div>
      </div>

      {/* Founder 2 */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1 text-right">
          <span className="text-orange-400 uppercase tracking-[0.3em] text-xs">
            Principal Designer
          </span>

          <h3 className="mt-4 text-4xl font-bold">Naomi Sahay</h3>

          <p className="mt-6 text-gray-400 leading-8">
            Naomi brings an international perspective after completing her
            Master&aposs in Interior Design from Florence, Italy.
          </p>

          <p className="mt-5 text-gray-400 leading-8">
            Her philosophy blends artistic creativity with functionality,
            creating timeless spaces that inspire people every day.
          </p>

          <div className="mt-8 border-r-2 border-orange-500 pr-5">
            <p className="italic text-gray-300">
              {
                "Design is not just aesthetics—it&apos how spaces make you feel."
              }
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="hidden lg:block absolute left-[-40px] top-1/2 h-5 w-5 rounded-full bg-orange-500 -translate-y-1/2 z-20" />

          <div className="relative h-[670px] overflow-hidden rounded-md">
            <Image
              src="/TEAM PHOTOS/Naomi Sahay-Principle Designer.png"
              alt="Naomi Sahay"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
