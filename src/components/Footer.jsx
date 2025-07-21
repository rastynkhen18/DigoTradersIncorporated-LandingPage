import React from 'react';
import Logo from '../assets/DigoTradersIncLogo.svg';
import FacebookLogo from '../assets/images/Facebook_Logo_Secondary1.svg';
import InstagramLogo from '../assets/images/Instagram_Glyph_White1.svg';

const Footer = () => {
    return (
        <footer className="bg-[var(--secondary-accent)] text-[var(--white-color)] pt-10 px-6 md:px-20 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 border-b border-[var(--gray-accent)] pb-10">

                {/* Logo and description */}
                <div className="md:col-span-2">
                    <img src={Logo} alt="Digo Traders Inc." className="w-40 mb-4" />
                    <p className="text-[var(--gray-color)] text-sm">
                        Digo Traders Inc. helps individuals and businesses with local and international import and export, managing everything from paperwork to delivery.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="font-semibold text-lg text-[var(--primary-color)] mb-2">Quick Links</h2>
                    <ul className="space-y-1 text-sm text-[var(--gray-color)]">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h2 className="font-semibold text-lg text-[var(--primary-color)] mb-2">Services</h2>
                    <ul className="space-y-1 text-sm text-[var(--gray-color)]">
                        <li>Air Freight</li>
                        <li>Sea Freight</li>
                        <li>Land Freight</li>
                        <li>FCL / LCL</li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h2 className="font-semibold text-lg text-[var(--primary-color)] mb-2">About</h2>
                    <ul className="space-y-1 text-sm text-[var(--gray-color)]">
                        <li>Mission</li>
                        <li>Vision</li>
                    </ul>
                </div>

                <div className="flex flex-col mt-4 md:mt-0">
                    <h2 className="font-semibold text-lg text-[var(--primary-color)] mb-2">Follow Us</h2>

                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook">
                            <img src={FacebookLogo} alt="Facebook" className="w-6 h-6 hover:opacity-80" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img src={InstagramLogo} alt="Instagram" className="w-6 h-6 hover:opacity-80" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Row */}
            <div className="flex md:flex-row justify-center items-center mt-6 text-sm text-[var(--gray-color)]">
                <p>© 2025 Digo Traders Inc. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;
