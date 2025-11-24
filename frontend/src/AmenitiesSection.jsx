import React, { useState, useEffect } from "react";
import amenity1 from "./assets/badminton.webp";
import amenity2 from "./assets/basketball.webp";
import amenity3 from "./assets/gym.webp";
import amenity4 from "./assets/hall.webp";
import amenity5 from "./assets/play_area.webp";
import amenity6 from "./assets/swimming_pool.webp";
import amenity7 from "./assets/walking_area.webp";
import amenity8 from "./assets/spa.webp";
import amenity9 from "./assets/yoga.webp";

// Block-wise amenities based on layout map
const amenities = [
   
  {
    id: "clubhouse",
    label: "1 FLOORS AMENITIES",
    items: [
      "Grand Reception Lobby", "Double-Height Reception Lounge with Informal Seating Area",
      "Double-Height Banquet Hall Pre-Function Lobby",
      "Lounge Rooms",
      "Central Kitchen for Banquet Halls"],
  },
  {
    id: "2nd",
    label: "2 FLOORS AMENITIES",
    items: ["Board Room", "Society Office", "Lounge", "Reading Room", "Cards Room"],
  },
  {
    id: "3rd",
    label: "3 FLOORS AMENITIES",
    items: ["Preview Theatres – 2 Nos", "Party Halls – 2 Nos", "Pre-Function Hall", "Banquet Lawn"],
  },
  {
    id: "4th",
    label: "4 FLOORS AMENITIES",
    items: ["Indoor Games Rooms", "Billiards Room", "Gym", "Outdoor Calisthenics Deck", "Yoga Room", "Aerobics Room"],
  },
  {
    id: "5th",
    label: "5 FLOORS AMENITIES",
    items: ["Co-Working Space with Board Rooms", "Restaurant with Kitchen", "Guest Rooms – 11 Nos"],
  },
  {
    id: "6th",
    label: "6 FLOORS AMENITIES",
    items: ["Preschool", "Tuition Rooms – 3 Nos", "Hobby Rooms – 3 Nos", "Kids’ Play Area / Activity Zone"],
  },
  {
    id: "7th",
    label: "7 FLOORS AMENITIES",
    items: ["Ladies Salon", "Ladies Spa", "Men’s Salon", "Men’s Spa"],
  },
  {
    id: "8th",
    label: "8 FLOORS AMENITIES",
    items: ["175 ft Long Infinity Pool", "Kids Pool", "Covered Seating Lounge", "Pool Deck"],
  },
];

const images = [
  amenity1,
  amenity2,
  amenity3,
  amenity4,
  amenity5,
  amenity6,
  amenity7,
  amenity8,
  amenity9,
];

const AmenitiesSection = () => {
  const [selected, setSelected] = useState("clubhouse");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[currentImageIndex],
    images[(currentImageIndex + 1) % images.length],
    images[(currentImageIndex + 2) % images.length],
  ];

  return (
    <section className="bg-neutral-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
          30+ Awesome Clubhouse Amenities{" "}
          <span style={{ color: "#00b4e6" }}> Await!</span>
        </h2>

        {/* Auto-rotating images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 transition-all duration-500">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Amenity ${index}`}
              className="rounded-xl w-full md:w-1/3 object-cover"
            />
          ))}
        </div>

        {/* Tab buttons for blocks */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
          {amenities.map(({ id, label }) => (
            <button
              key={id}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                selected === id
                  ? "text-white bg-gradient-to-r from-[#002954] to-[#00b4e6]"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
              onClick={() => setSelected(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Amenity items list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          {amenities
            .find((amenity) => amenity.id === selected)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white border border-yellow-200 shadow-sm rounded-lg px-4 py-3 gap-3"
              >
                <i className="fas fa-check-circle text-blue-500"></i>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
