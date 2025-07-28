import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Step 1: Consultation & Requirements Gathering",
    answer: `
  You contact Digo Traders via email or phone.
  
  You explain what kind of goods you're importing, where they're coming from, and your timeline.
  
  Digo Traders will advise you on:
    • The best shipping method (sea or air)
    • Required documents
    • Estimated costs and timeline
  `
  },

  {
    question: "Step 2: Import License & AMO Assistance (if needed)",
    answer: `
  If you’re a new importer:
  
    • Digo helps you apply for an Import License  
    • They assist with renewal of the AMO Certificate if it’s expired
  `
  },
  {
    question: "Step 3: Freight Arrangement",
    answer: `
  If air freight:  
    • They coordinate international air shipment.
  
  If sea freight:  
    • Choose between:  
      – FCL (Full Container Load) — for big shipments  
      – LCL (Less than Container Load) — for small shipments  
    • They consolidate your cargo with others if using LCL to save costs.
  `
  },
  {
    question: "Step 4: Customs Brokerage",
    answer: `
  Digo Traders handles:
    • Import declaration  
    • Customs taxes & tariffs  
    • Permits and paperwork
  
  You don’t have to deal with customs — they handle it for you.
  `
  },
  {
    question: "Step 5: Domestic Transfer & Land Transportation",
    answer: `
  Once cleared, your goods are:
    • Transferred locally (from port to city/province)  
    • Delivered via truck to your warehouse or business location
  `
  },
  {
    question: "Step 6: Final Delivery & Support",
    answer: `
  You receive your goods at your preferred location.
  
  Digo provides post-delivery support or freight consultation for future shipments.
  `
  }

];

const DropdownFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        const height = isOpen
          ? `${contentRefs.current[index]?.scrollHeight}px`
          : "0px";

        return (
          <div
            key={index}
            className="text-[var(--secondary-color)] border-none rounded-xl shadow-sm bg-[var(--white-color)] p-4 sm:p-2 lg:p-4 transition-all duration-300"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex items-center justify-between text-left text-lg font-medium focus:outline-none cursor-pointer"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{ height }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
            >
              <p className="mt-3 text-[var(--gray-accent)]">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownFAQ;
