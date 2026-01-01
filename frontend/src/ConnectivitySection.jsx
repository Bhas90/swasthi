import React, { useState } from "react";
import {
  GraduationCap,
  Hospital,
  Network,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import map from "./assets/loc.webp";

const connectivityItems = [
  {
    title: "Education",
    icon: <GraduationCap className="w-6 h-6 text-maroon-600" />,
    short:
      "Top international schools within minutes for quality education.",
    details: [
      "The Gaudium School – < 1 Min",
      "Samashti international school – < 5 Mins",
      "Candidus international school – < 5 Mins",
    ],
  },
  {
    title: "Healthcare",
    icon: <Hospital className="w-6 h-6 text-maroon-600" />,
    short:
      "Easy access to reputed hospitals and wellness centers.",
    details: [
      "Multi-speciality hospitals within 15–20 mins drive",
      "24/7 emergency healthcare nearby",
    ],
  },
  {
    title: "Business & IT Hubs",
    icon: <Network className="w-6 h-6 text-maroon-600" />,
    short:
      "Seamless connectivity to Hyderabad’s major IT corridors.",
    details: [
      "Kondakal SEZ – < 5 Mins",
      "Kokapet SEZ – < 15 Mins",
      "Financial District – < 20 Mins",
    ],
  },
  {
    title: "Connected Living",
    icon: <MapPin className="w-6 h-6 text-maroon-600" />,
    short:
      "Well-connected location for work, leisure, and daily needs.",
    details: [
      "Abutting ORR Service Road",
      "Quick access to ORR Exit 2 & 3",
      "Smooth connectivity to Gachibowli & Hitech City",
    ],
  },
];

const ConnectivitySection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-maroon-800">
          Seamlessly Connected,{" "}
          <span style={{ color: "#fea611" }}>Ideally Positioned</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          SAMRACANA SWASTHI is located in Kardanur Village near ORR Exit 2 & 3,
          Kollur, offering unmatched access to education, healthcare, IT hubs,
          and lifestyle destinations.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Accordion Cards */}
        <div className="space-y-4">
          {connectivityItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border bg-gradient-to-br from-white to-gray-50 shadow-sm"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between p-5 text-left focus:outline-none"
              >
                <div className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-maroon-700">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.short}
                    </p>
                  </div>
                </div>

                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#fea611] mt-1" />
                ) : (
                  <Plus className="w-5 h-5 text-[#fea611] mt-1" />
                )}
              </button>

              {/* Expanded Content */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-700 text-sm space-y-2">
                  {item.details.map((line, i) => (
                    <p key={i}>• {line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Map */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <img
            src={map}
            alt="Samracana Swasthi Location Map"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
