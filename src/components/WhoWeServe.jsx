import React from "react";
import { Package, ShoppingCart, Truck, Factory, Building2 } from "lucide-react";

const clientData = [
  { icon: <Package size={34} />, label: "SMEs" },
  { icon: <ShoppingCart size={34} />, label: "E-Commerce" },
  { icon: <Truck size={34} />, label: "Distributors" },
  { icon: <Factory size={34} />, label: "Manufacturer" },
  { icon: <Building2 size={34} />, label: "Large Enterprises" },
];

const WhoWeServeSlideshow = () => {
  return (
    <div className="overflow-hidden relative w-full bg-[var(--white-color)] py-6 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-4">
        Who We Serve
      </h2>

      <div className="relative w-full">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Sliding track */}
        <div className="slideshow-track flex gap-12 text-[var(--gray-color)] font-semibold text-lg whitespace-nowrap px-6">
          {/* Duplicate the list twice for seamless loop */}
          {[...clientData, ...clientData].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors shrink-0"
            >
              {item.icon}
              <p className="text-sm md:text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs md:text-sm text-[var(--gray-color)] mt-4">
        Trusted by Small Businesses, E-Commerce Stores, and Corporations
      </p>

      {/* Animation */}
      <style jsx>{`
        .slideshow-track {
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default WhoWeServeSlideshow;


// import React from "react";
// import { Package, ShoppingCart, Truck, Factory, Building2 } from "lucide-react";

// const clientData = [
//   { icon: <Package size={34} />, label: "SMEs" },
//   { icon: <ShoppingCart size={34} />, label: "E-Commerce" },
//   { icon: <Truck size={34} />, label: "Distributors" },
//   { icon: <Factory size={34} />, label: "Manufacturer" },
//   { icon: <Building2 size={34} />, label: "Large Enterprises" },
// ];

// const WhoWeServeSlideshow = () => {
//   return (
//     <div className="overflow-hidden relative w-full bg-[var(--white-color)] py-6 flex flex-col items-center text-center">
//       <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-4">
//         Who We Serve
//       </h2>

//       {/* Scroll animation wrapper */}
//       <div className="relative w-full">
//         {/* Left and Right gradient overlays */}
//         <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-white to-transparent z-10" />
//         <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-white to-transparent z-10" />

//         {/* Sliding items */}
//         <div className="slideshow inline-flex gap-12 text-[var(--gray-color)] font-semibold text-lg whitespace-nowrap px-6">
//           {[...clientData, ...clientData].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors shrink-0"
//             >
//               {item.icon}
//               <p className="text-sm md:text-lg">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Caption */}
//       <p className="text-xs md:text-sm text-[var(--gray-color)] mt-4">
//         Trusted by Small Businesses, E-Commerce Stores, and Corporations
//       </p>

//       {/* Animation styling */}
//       <style jsx>{`
//     .slideshow {
//       animation: slide-left 10s linear infinite;
//     }

//     @keyframes slide-left {
//       0% {
//         transform: translateX(0%);
//       }
//       100% {
//         transform: translateX(-10%);
//       }
//     }
//   `}</style>
//     </div>

//   );
// };

// export default WhoWeServeSlideshow;







// import React from "react";

// const clients = [
//   "SMEs (Small & Medium Businesses)",
//   "Online Sellers & E-commerce Entrepreneurs",
//   "Importers / Exporters",
//   "Manufacturers",
//   "Corporate Clients & Large Enterprises",
//   "Walk-in Clients Needing Local Delivery",
// ];

// const WhoWeServeSlideshow = () => {
//   return (
//     <div className="overflow-hidden whitespace-nowrap relative w-full bg-gray py-4">
//       {/* Left blur overlay */}
//       <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-gray-700 to-transparent z-10" />

//       {/* Right blur overlay */}
//       <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-gray-700 to-transparent z-10" />

//       {/* Animation container */}
//       <div className="slideshow inline-flex gap-12 text-gray-700 font-semibold text-lg whitespace-nowrap">
//         {[...clients, ...clients].map((item, index) => (
//           <span key={index} className="shrink-0 hover:text-black">
//             {item}
//           </span>
//         ))}
//       </div>

//       {/* Inline CSS for animation */}
//       <style jsx>{`
//         .slideshow {
//           animation: slide-left 20s linear infinite;
//         }

//         @keyframes slide-left {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-10%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WhoWeServeSlideshow;

