import React from 'react'
import Logo from "../assets/DigoTradersIncorporated_logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#222] text-[#fff] px-8 py-10">
            <div className="grid md:grid-cols-3 gap-10">
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="Digo Traders Logo" className="w-12 mb-3" />
                    <div><h1 className='text-base text-[var(--primary-color)] md:text-2xl' >DiGO Traders Inc,</h1>
                        <p className="text-sm">
                            Your trusted partner in customs brokerage and international trade facilitation.
                        </p></div>
                </div>

                <div>
                    <h1 className="font-semibold text-lg mb-2">Quick Links</h1>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:text-[var(--primary-color)]">Home</a></li>
                        <li><a href="/about" className="hover:text-[var(--primary-color)]">About</a></li>
                        <li><a href="/services" className="hover:text-[var(--primary-color)]">Services</a></li>
                        <li><a href="/contact" className="hover:text-[var(--primary-color)]">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-semibold text-lg mb-2">Contact Info</h1>
                    <p className="text-sm">2442 Park Avenue, Torres Bldg.</p>
                    <p className="text-sm">Pasay City</p>
                    <p className="text-sm">Tel: (02) 835 6789</p>
                    <p className="text-sm">Mobile: 0976-590-9243</p>
                </div>
            </div>

            <div className="mt-10 text-center text-base text-gray-400">
                © 2025 Digo Traders Incorporated. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
