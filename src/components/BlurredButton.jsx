import React from 'react';

const BlurredButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-sm sm:text-base md:text-lg text-[#fff] border border-[#FFFFFF33] bg-[#242526]
 px-6 py-2 rounded-lg cursor-pointer transition-all duration-300">
            {children}
        </button>
    );
};

export default BlurredButton;
