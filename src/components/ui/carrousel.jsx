// carrousel.jsx
import React, { useState } from "react";

const Carrousel = ({ assetImage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicators = [0, 1, 2]; // Example indicator array

  // Example images for the carousel (you can modify or pass your own)
  const images = [assetImage, assetImage, assetImage]; // Just using the same image for now

  return (
    <div className="relative border overflow-hidden rounded-lg mx-auto">
      {/* Display image based on active index */}
      <img
        src={images[activeIndex]}
        alt="Image du produit"
        width={350}
        height={350}
        className="object-cover p-3 flex items-center justify-center"
      />

      {/* Arrows */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() =>
          setActiveIndex((activeIndex - 1 + images.length) % images.length)
        }
      >
        <span>&lt;</span> {/* You can replace with an SVG or font icon */}
      </div>

      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
      >
        <span>&gt;</span> {/* You can replace with an SVG or font icon */}
      </div>

      {/* Bottom indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel; // Default export
