import React, { useState, useEffect, useRef } from "react";
import TowerAonUnoImg from "./assets/vajra-west-city-tower-a.webp";
import TowerEkaOdinImg from "./assets/vajra-west-city-towe-b.webp";
import MasterPlanImg from "./assets/vajra-west-city-master-plan.webp";

import Floor1 from "./assets/2.5.webp";
import Floor2 from "./assets/2.5bhk.webp";
import Floor3 from "./assets/3-bhk.webp";
import Floor4 from "./assets/2030-west.webp";
import Floor5 from "./assets/2030-east.webp";

// Floor plan images
const floorPlanImages = [Floor1, Floor2, Floor3, Floor4, Floor5];

// Lightbox Component
const Lightbox = ({ images, index, onClose, onNext, onPrev }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={onClose}
      >
        &times;
      </button>

      <button className="absolute left-4 text-white text-4xl" onClick={onPrev}>
        ‹
      </button>

      <img
        src={images[index]}
        alt="floorplan"
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
      />

      <button className="absolute right-4 text-white text-4xl" onClick={onNext}>
        ›
      </button>
    </div>
  );
};

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("Master Plan");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sliderRef = useRef(null);

  // Infinite Auto-Slider for Floor Plans
  useEffect(() => {
    if (activeTab !== "Floor Plans") return;

    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = setInterval(() => {
      if (!slider) return;
      scrollAmount += 1.5; // speed
      slider.scrollLeft = scrollAmount;

      // reset to infinite loop
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(slide);
  }, [activeTab]);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );

  const scrollToBanner = () => {
    const bannerSection = document.getElementById("banner-section");
    if (bannerSection) bannerSection.scrollIntoView({ behavior: "smooth" });
  };

  const tabs = ["Master Plan", "TOWER A", "TOWER B", "Floor Plans"];

  const tabContent = {
    "TOWER A": {
      image: TowerAonUnoImg,
      images: [TowerAonUnoImg],
      highlights: [
        { title: "Spacious Layouts", desc: "Designed with openness and comfort in mind." },
        { title: "Prime Location", desc: "Located at the heart of the community." },
        { title: "Elegant Interiors", desc: "High-end finishes and fixtures." },
      ],
    },

    "TOWER B": {
      image: TowerEkaOdinImg,
      images: [TowerEkaOdinImg],
      highlights: [
        { title: "Contemporary Design", desc: "Modern layouts and stunning views." },
        { title: "Premium Living", desc: "Crafted to perfection." },
        { title: "Balanced Lifestyle", desc: "Luxury meets functionality." },
      ],
    },

    "Master Plan": {
      image: MasterPlanImg,
      images: [MasterPlanImg],
      highlights: [
        { title: "12.95 Acres of Tranquility", desc: "Thoughtfully planned open spaces." },
        { title: "Holistic Living", desc: "Wellness, lifestyle & convenience." },
        { title: "Connectivity", desc: "Seamless access across the community." },
      ],
    },
  };

  return (
    <section className="scroll-mt-10 py-12 px-4 md:px-16 bg-white" id="master">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
          With harmony in <span style={{ color: "#00b4e6" }}>Nature</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Vajra West City’s elegant blocks offer stunning views and world-class living.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-lg font-medium px-4 py-2 border-b-2 ${
              activeTab === tab
                ? "text-[#4f1021] border-[#4f1021]"
                : "text-gray-600 border-transparent"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ---------------------- */}
      {/* NON-FLOOR-PLAN CONTENT */}
      {/* ---------------------- */}

      {activeTab !== "Floor Plans" && (
        <div className="py-12 px-10 flex flex-col md:flex-row items-start justify-start gap-6">
          
          {/* Main Image */}
          <img
            src={tabContent[activeTab].image}
            alt={`${activeTab} Plan`}
            className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow cursor-pointer"
            onClick={() => openLightbox(tabContent[activeTab].images)}
          />

          {/* Highlights */}
          <div className="text-gray-700 space-y-8 w-full md:w-1/2 xl:w-[45%]">
            {tabContent[activeTab].highlights.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}

            <button
              onClick={scrollToBanner}
              className="border border-[#4f1021] text-[#4f1021] px-5 py-2 rounded hover:bg-[#4f1021]/10 transition"
            >
              Get Pricing
            </button>
          </div>
        </div>
      )}

      {/* ---------------------- */}
      {/* FLOOR PLANS SLIDER ONLY */}
      {/* ---------------------- */}

      {activeTab === "Floor Plans" && (
  <div className="mt-10 overflow-hidden relative">
    <div
      ref={sliderRef}
      className="flex gap-4 overflow-x-hidden w-full"
      style={{ maxWidth: "100%", width: "100%", overflowX: "hidden" }}
    >
      {floorPlanImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`floor-${index}`}
          className="w-1/3 md:w-1/3 lg:w-1/3 h-auto rounded-lg shadow cursor-pointer flex-shrink-0"
          onClick={() => openLightbox(floorPlanImages, index)}
        />
      ))}
    </div>
  </div>
)}


      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};

export default FloorPlans;
