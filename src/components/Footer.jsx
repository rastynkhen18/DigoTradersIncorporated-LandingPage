import React from "react";
import Logo from "../assets/DigoTradersIncorporatedLogo.svg";
import FacebookLogo from "../assets/images/Facebook_Logo_Secondary1.svg";
import InstagramLogo from "../assets/images/Instagram_Glyph_White1.svg";


const Footer = () => {
	return (
		<footer className="bg-[var(--secondary-accent)] text-[var(--white-color)] pt-10 px-6 md:px-20 pb-6">
				<div className="grid md:grid-cols-6 gap-4 border-b border-[var(--gray-accent)] pb-10">

					{/* Logo and description */}
					<div className="col-span-3 md:col-span-2 flex flex-col justify-center items-center text-justify gap-1 w-full md:justify-start md:items-start md:text-left md:max-w-[330px]">
						<img src={Logo} alt="Digo Traders Inc." className="w-36" />
						<h1 className="tracking-[0.3em]">TRADERS INC.</h1>
						<p className="flex text-[var(--gray-color)] text-sm">
							Digo Traders Inc. helps individuals and businesses with local and international import and export, managing everything from paperwork to delivery.
						</p>
					</div>

					{/* Quick Links */}
					<div className="w-full">
						<h2 className="font-semibold text-base text-[var(--primary-color)] mb-2">Quick Links</h2>
						<ul className="space-y-1 text-sm text-[var(--gray-color)]">
							<li>Home</li>
							<li>About</li>
							<li>Services</li>
							<li>Contact</li>
						</ul>
					</div>

					{/* Services */}
					<div className="w-full">
						<h2 className="font-semibold text-base text-[var(--primary-color)] mb-2">Services</h2>
						<ul className="space-y-1 text-sm text-[var(--gray-color)]">
							<li>Air Freight</li>
							<li>Sea Freight</li>
							<li>Land Freight</li>
							<li>FCL / LCL</li>
						</ul>
					</div>

					{/* About */}
					<div className="w-full">
						<h2 className="font-semibold text-base text-[var(--primary-color)] mb-2">About</h2>
						<ul className="space-y-1 text-sm text-[var(--gray-color)]">
							<li>Mission</li>
							<li>Vision</li>
						</ul>
					</div>

					{/* Follow Us */}
					<div className="col-span-3 md:col-span-1 flex flex-col items-center text-center mt-4 md:mt-0 md:items-start md:text-left mx-auto md:mx-0">
						<h2 className="font-semibold text-lg text-[var(--primary-color)] mb-2">Follow Us</h2>
						<div className="flex space-x-4 cursor-pointer">
							<a href="https://www.facebook.com/profile.php?id=61577367794634" target="_blank" aria-label="Facebook">
								<img src={FacebookLogo} alt="Facebook" className="w-6 h-6 hover:opacity-80" />
							</a>
							<a href="#" aria-label="Instagram">
								<img src={InstagramLogo} alt="Instagram" className="w-6 h-6 hover:opacity-80" />
							</a>
						</div>
					</div>

				</div>

			<div className="flex md:flex-row justify-center items-center mt-6 text-xs text-[var(--gray-color)]">
				<p>© 2025 Digo Traders Inc. All rights reserved.</p>
			</div>
		</footer >
	);
};

export default Footer;
