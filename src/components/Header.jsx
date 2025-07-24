import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/DigoTradersIncLogo.svg';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-[var(--pwhite-color)] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between md:justify-around items-center h-16 px-5'>
        <img
          src={Logo}
          alt="Digo Traders Incorporated Logo"
          className='cursor-pointer w-32'
        />

        {/* Desktop Nav */}
        <nav className='hidden md:flex justify-center items-center gap-10 text-[var(--secondary-color)] font-normal'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services" className="flex items-center gap-1">
            Services <ChevronDown size={16} />
          </Link>
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
            <X
              size={28}
              onClick={() => setIsOpen(false)}
              className="text-[var(--secondary-color)] cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setIsOpen(true)}
              className="text-[var(--secondary-color)] cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-40 top-16 left-0 w-full bg-[var(--white-color)] flex flex-col items-center gap-6 py-8 text-[var(--secondary-color)] font-bold transition-transform duration-300 md:hidden ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-[100%] opacity-0 pointer-events-none'
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/services" className="flex items-center gap-1" onClick={() => setIsOpen(false)}>
          Services <ChevronDown size={16} />
        </Link>
        <button className='bg-[var(--primary-color)] text-[var(--white-color)] px-6 py-2 rounded-full cursor-pointer'>
          Learn More
        </button>
      </div>
    </header>
  );
};

export default Header;
