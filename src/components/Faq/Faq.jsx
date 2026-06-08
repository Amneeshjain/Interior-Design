"use client";
import { useState } from "react";
import React from "react";
const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div
      className={`
        group rounded-xl border transition-all duration-300
        bg-white/80 backdrop-blur-md
        border-gray-200
        hover:border-orange-200
        hover:shadow-lg
      `}
    >
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-orange-600 transition">
          {question}
        </span>

        <span
          className={`
            w-7 h-7 flex items-center justify-center rounded-full
            text-orange-500 border border-orange-200
            transition-transform duration-300
            ${isActive ? "rotate-45 bg-orange-50" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* Answer */}
      <div
        className={`
          px-5 text-sm text-gray-600 overflow-hidden transition-all duration-300
          ${isActive ? "max-h-40 pb-4" : "max-h-0"}
        `}
      >
        <div className="border-l-2 border-orange-400 pl-3">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faq = ({ faqData = [] }) => {
  // Explicitly tell React that the state is either number or null for activeIndex
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-5xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-500 mb-2">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4" />
        </div>

        {/* Items */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={index === activeIndex}
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;