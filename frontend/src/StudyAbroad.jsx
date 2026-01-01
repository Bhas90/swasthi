import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About <span style={{ color: "#fea611" }}>Developer</span>
        </h2>

        {/* Content */}
        <p className="text-gray-700 mt-4 leading-relaxed">
          <strong>Samracana Projects LLP</strong> believes in making dreams come
          true by creating spaces that are innovative, resilient, and tailored
          to individual needs. Specializing in the development of premium
          residential villas and apartments, Samracana is committed to crafting
          homes that set new benchmarks for modern living.
        </p>

        {expanded && (
          <p className="text-gray-700 mt-4 leading-relaxed">
            Every Samracana project goes beyond construction—it is a thoughtful
            blend of design, functionality, and community living. By challenging
            conventions, fostering meaningful connections, and cultivating a
            strong design-led culture, Samracana enables a truly well-lived life
            through its homes.
            <br />
            <br />
            What truly sets <strong>Samracana Projects LLP</strong> apart is its
            unwavering customer-first approach, placing buyers at the heart of
            every decision to ensure lasting value, trust, and satisfaction.
          </p>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-[#fea611] font-semibold hover:underline focus:outline-none"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default StudyAbroad;
