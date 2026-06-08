"use client";

import { useState } from "react";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "collect", title: "Information We Collect" },
  { id: "use", title: "How We Use Information" },
  { id: "share", title: "Sharing Information" },
  { id: "cookies", title: "Cookies" },
  { id: "rights", title: "Your Rights" },
  { id: "updates", title: "Updates" },
  { id: "contact", title: "Contact" },
];

const PrivacyTabs = () => {
  const [active, setActive] = useState("intro");

  const activeData = sections.find((s) => s.id === active);

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10 border border-gray-200 rounded-xl p-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Learn how <span className="text-orange-600 font-medium">Colonelz</span> protects your data.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border border-gray-200 rounded-xl p-3 bg-gray-50">

          {sections.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 text-sm rounded-lg transition border
                ${
                  active === tab.id
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-orange-200 hover:text-orange-600"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 border border-gray-200 rounded-xl p-8">

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {activeData?.title}
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            This section explains {activeData?.title.toLowerCase()} in detail.
            We ensure transparency, security, and responsible handling of all user data.
          </p>

          <div className="mt-6 text-sm text-gray-500 space-y-2">
            <p>
              • All information is stored securely.
            </p>
            <p>
              • We do not sell or misuse your data.
            </p>
            <p>
              • Users can request deletion anytime.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyTabs;