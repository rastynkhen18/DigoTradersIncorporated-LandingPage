import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is React JS?",
    answer:
      "React JS is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
  },
  {
    question: "What are components in React?",
    answer:
      "Components are the building blocks of a React application. They can be functional or class-based and help to split the UI into independent, reusable pieces.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows us to write HTML in React and makes it easier to write and add HTML in React components.",
  },
];

const DropdownFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        const height = isOpen
          ? `${contentRefs.current[index]?.scrollHeight}px`
          : "0px";

        return (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-white p-4 transition-all duration-300"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex items-center justify-between text-left text-lg font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{ height }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
            >
              <p className="mt-3 text-[#4a5565]">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownFAQ;
