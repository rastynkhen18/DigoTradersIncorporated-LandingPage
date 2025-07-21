import React from "react";

const clients = [
  "SMEs (Small & Medium Businesses)",
  "Online Sellers & E-commerce Entrepreneurs",
  "Importers / Exporters",
  "Manufacturers",
  "Corporate Clients & Large Enterprises",
  "Walk-in Clients Needing Local Delivery",
];

const WhoWeServeSlideshow = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full bg-gray py-4">
      {/* Left blur overlay */}
      <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-gray-700 to-transparent z-10" />

      {/* Right blur overlay */}
      <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-gray-700 to-transparent z-10" />

      {/* Animation container */}
      <div className="slideshow inline-flex gap-12 text-gray-700 font-semibold text-lg whitespace-nowrap">
        {[...clients, ...clients].map((item, index) => (
          <span key={index} className="shrink-0 hover:text-black">
            {item}
          </span>
        ))}
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        .slideshow {
          animation: slide-left 20s linear infinite;
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-10%);
          }
        }
      `}</style>
    </div>
  );
};

export default WhoWeServeSlideshow;

