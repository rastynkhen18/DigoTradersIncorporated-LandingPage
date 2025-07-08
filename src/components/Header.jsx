import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/tatakmountaineers_logo.png';
import DarkModeToggle from './DarkModeToggle';
import SearchComponent from "./SearchComponent"
// import Booking from "../pages/Booking";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    // const handleMobileSearch = (e) => {
    //     e.preventDefault()
    //     if (mobileSearchQuery.trim()) {
    //         console.log("Mobile searching for:", mobileSearchQuery)
    //     }
    // }

    return (
        <header className="fixed top-0 left-0 w-full bg-[var(--bg-color)] text-[var(--text-color)] z-50 shadow-md">
            <div className="flex justify-between items-center h-16 px-4 md:px-8">
                <div className='display flex justify-center items-center'>
                    <img src={Logo} alt="Tatak Mountaineers Logo" className="h-12 w-auto mx-5" />
                    <h1 className='text-2xl' >Tatak Mountaineers</h1>
                </div>
                <nav className="hidden md:flex items-center gap-5">
                    <ul className="flex gap-7">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`relative group pb-1 ${location.pathname === link.path ? 'text-[var(--primary-color)]' : ''
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute left-0 bottom-0 h-[2px] bg-[var(--primary-color)] transition-all duration-300 pointer-events-none ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center gap-1'>
                        <SearchComponent />
                        <DarkModeToggle />
                    </div>
                    <Link to="/booking"><button className="bg-[var(--primary-color)] px-5 py-2 rounded-lg shadow-md cursor-pointer">Book Now</button></Link>
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
                <div className="overflow-hidden transition-all duration-300 ease-in-out bg-[var(--bg-color)] px-6 pb-4 pt-2 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={location.pathname === link.path ? 'text-[var(--primary-color)]' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className='flex items-center gap-1'>
                        <SearchComponent />
                        <DarkModeToggle />
                    </div>
                    <Link to="/booking"><button className="bg-[var(--primary-color)] px-4 py-2 rounded-lg shadow-md w-fit cursor-pointer">Book Now</button></Link>
                </div>
            )}
        </header>
    );
};

export default Header;
