import React from 'react'

const CustomButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm sm:text-base md:text-lg lg:text-xl bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[#fff] px-6 py-2 rounded-lg cursor-pointer transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default CustomButton;