import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/tatakmountaineers_logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-[#333] text-white z-50 shadow-md">
            <div className="flex justify-between items-center h-16 px-4 md:px-8">
                <img src={Logo} alt="Tatak Mountaineers Logo" className="h-12 w-auto mx-5" />

                <nav className="hidden md:flex items-center gap-5 mx-16">
                    <ul className="flex gap-7">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`relative group pb-1 ${
                                        location.pathname === link.path ? 'text-green-400' : ''
                                    }`}
                                >
                                    {link.name}
                                    <span className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-green-500 px-5 py-2 rounded-lg shadow-md">Login</button>
                </nav>

                {/* Burger Menu Button */}
                <button
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? String.fromCharCode(10005) : String.fromCharCode(9776)}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="overflow-hidden transition-all duration-300 ease-in-out bg-[#333] px-6 pb-4 pt-2 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={location.pathname === link.path ? 'text-green-400' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="bg-green-500 px-4 py-2 rounded-lg shadow-md w-fit">Login</button>
                </div>
            )}
        </header>
    );
};

export default Header;
