import React from 'react';

const BlurredButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-sm sm:text-base md:text-lg text-[var(--text-color)] border-1 border-[rgba(255,255,255,0.2)] bg-white/10 backdrop-blur-md px-6 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
            {children}
        </button>
    );
};

export default BlurredButton;
