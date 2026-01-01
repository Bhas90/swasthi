// Master Plan + Floor Plans with manual slider & lightbox
import React, { useState, useRef } from "react";

// Images
import MasterPlanImg from "./assets/samrcana-master-plan.png";

import TowerA from "./assets/samarcana-tower-a.png";
import TowerB from "./assets/samarcana-tower-b.png";
import TowerC from "./assets/samarcana-tower-c.png";

// Floor plan images
const towerPlanImages = [TowerA, TowerB, TowerC];

// Scroll helper
const scrollByImage = (ref, direction) => {
  if (!ref.current) return;
  const imgWidth = ref.current.firstChild?.clientWidth || 300;
  ref.current.scrollBy({
    left: direction === "left" ? -imgWidth : imgWidth,
    behavior: "smooth",
  });
};

// Lightbox
const Lightbox = ({ images, index, onClose, onNext, onPrev }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
    <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose}>
      ×
    </button>
    <button className="absolute left-4 text-white text-4xl" onClick={onPrev}>
      ‹
    </button>

    <img
      src={images[index]}
      alt="Plan View"
      className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
    />

    <button className="absolute right-4 text-white text-4xl" onClick={onNext}>
      ›
    </button>
  </div>
);

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("Master Plan");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sliderRef = useRef(null);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const tabs = ["Master Plan", "Floor Plans"];

  return (
    <section className="scroll-mt-10 py-12 px-4 md:px-16 bg-white" id="master">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
          With harmony in <span style={{ color: "#fea611" }}>Nature</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Samracana Swasthi’s elegant blocks offer stunning views and world-class living.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-medium px-4 py-2 border-b-2 transition ${
              activeTab === tab
                ? "text-[#4f1021] border-[#4f1021]"
                : "text-gray-600 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MASTER PLAN */}
      {activeTab === "Master Plan" && (
        <div className="flex justify-center">
          <img
            src={MasterPlanImg}
            alt="Samracana Swasthi Master Plan"
            className="rounded-lg shadow cursor-pointer max-w-4xl w-full"
            onClick={() => openLightbox([MasterPlanImg])}
          />
        </div>
      )}

      {/* FLOOR PLANS */}
      {activeTab === "Floor Plans" && (
        <div className="relative mt-10">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
            onClick={() => scrollByImage(sliderRef, "left")}
          >
            ‹
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex justify-center gap-6 overflow-x-auto no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {towerPlanImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Tower Plan ${idx + 1}`}
                className="w-[320px] rounded-lg shadow cursor-pointer flex-shrink-0"
                onClick={() => openLightbox(towerPlanImages, idx)}
              />
            ))}
          </div>


          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
            onClick={() => scrollByImage(sliderRef, "right")}
          >
            ›
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((i) => (i + 1) % lightboxImages.length)
          }
          onPrev={() =>
            setLightboxIndex(
              (i) => (i - 1 + lightboxImages.length) % lightboxImages.length
            )
          }
        />
      )}
    </section>
  );
};

export default FloorPlans;
