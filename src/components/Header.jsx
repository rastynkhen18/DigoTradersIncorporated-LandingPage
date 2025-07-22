import React, { useState } from 'react';
import Logo from '../assets/DigoTradersIncLogo.svg';
import { Menu, X, ChevronDown } from 'lucide-react'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative top-0 right-0 flex justify-between md:justify-around items-center w-full h-16 px-5 bg-[var(--pwhite-color)] z-10'>
      <img src={Logo} alt="Digo Traders Incorporated Logo" className='cursor-pointer w-32' />

      {/* Desktop Nav */}
      <nav className='hidden md:flex justify-center items-center gap-10 text-[var(--secondary-color)] font-normal'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="" className="flex items-center gap-1">
          Services <ChevronDown size={16} />
        </a>
      </nav>

      {/* Desktop Button */}
      <div className='hidden md:block'>
        <button className='bg-[var(--primary-color)] text-[var(--white-color)] px-6 py-2 rounded-full cursor-pointer'>
          Learn More
        </button>
      </div>

      {/* Burger Icon */}
      <div className='md:hidden z-20'>
        {isOpen ? (
          <X size={28} onClick={() => setIsOpen(false)} className="text-[var(--secondary-color)] cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setIsOpen(true)} className="text-[var(--secondary-color)] cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[var(--white-color)] flex flex-col items-center gap-6 py-8 text-[var(--secondary-color)] font-bold transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[100%] opacity-0 pointer-events-none'
        }`}
      >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="" className="flex items-center gap-1">
          Services <ChevronDown size={16} />
        </a>
        <button className='bg-[var(--primary-color)] text-[var(--white-color)] px-6 py-2 rounded-full cursor-pointer'>
          Learn More
        </button>
      </div>
    </header>
  );
};

export default Header;
