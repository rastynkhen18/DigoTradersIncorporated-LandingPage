import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/DigoTradersIncLogo.svg";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
	{ to: "/services/airfreight", label: "Air Freight" },
	{ to: "/services/seafreight", label: "Sea Freight" },
	{ to: "/services/landfreight", label: "Land Freight" },
	{ to: "/services/custombrokerage", label: "Custom Brokerage" },
	{ to: "/services/trucking-services", label: "Trucking Services" },
	{ to: "/services/domestic-transfer-services", label: "Domestic Transport" },
	{ to: "/services/fcl_lcl", label: "FCL/LCL" },
	{ to: "/services/amo-certificate", label: "Renewal of AMO Certificate" },
	{ to: "/services/import-license", label: "Accreditation of Import License" },
];

const getLinkClass = ({ isActive }) => (isActive ? "border-b-2 border-[var(--primary-color)] m-0 p-0" : "text-inherit");

const getDropdownLinkClass = ({ isActive }) =>
	`block w-full text-left py-2 transition-colors ${
		isActive ? "text-[var(--primary-color)] bg-gray-50 font-bold text-sm px-5" : "text-[#1e1e1e] hover:bg-gray-100 font-normal text-sm leading-[1] px-5"
	}`;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion

	const mobileMenuRef = useRef(null);
	const desktopServicesRef = useRef(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);

		const handleClickOutside = (e) => {
			// Close mobile menu
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
			// Close desktop services dropdown
			if (servicesOpen && desktopServicesRef.current && !desktopServicesRef.current.contains(e.target) && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setServicesOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [servicesOpen]);

	return (
		<header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[var(--white-color)] text-[var(--secondary-color)] shadow-md" : "text-[var(--white-color)]"}`}>
			<div className="flex justify-between md:justify-around items-center h-16 px-5">
				<div>
					<Link to="/" reloadDocument>
						<img src={Logo} alt="Digo Traders Incorporated Logo" className="cursor-pointer w-18" />
					</Link>
				</div>

				{/* Desktop Nav */}
				<nav className={`hidden md:flex justify-center items-center gap-10 ${scrolled ? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"}`}>
					<NavLink to="/" className={getLinkClass} reloadDocument>
						Home
					</NavLink>
					<NavLink to="/about" className={getLinkClass} reloadDocument>
						About
					</NavLink>
					<NavLink to="/contact" className={getLinkClass} reloadDocument>
						Contact
					</NavLink>

					{/* Services dropdown (desktop) */}
					<div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} ref={desktopServicesRef}>
						<button type="button" className={`flex items-center gap-1 focus:outline-none ${servicesOpen ? "text-[var(--primary-color)]" : ""}`}>
							<NavLink to="/services" className={getLinkClass} reloadDocument>
								Services
							</NavLink>
							<ChevronDown size={16} className={`transition-transform duration-200 cursor-pointer ${servicesOpen ? "rotate-180" : ""}`} />
						</button>

						<AnimatePresence>
							{servicesOpen && (
								<motion.div
									ref={dropdownRef}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}
									className="absolute left-0 w-72 bg-[var(--white-color)] shadow-lg rounded-md overflow-hidden py-2 z-50"
								>
									{services.map((s) => (
										<NavLink key={s.to} to={s.to} className={getDropdownLinkClass} onClick={() => setServicesOpen(false)} reloadDocument>
											{s.label}
										</NavLink>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</nav>

				{/* Desktop Button */}
				<div className="hidden md:block">
					<Link to="/about" reloadDocument>
						<button
							className="text-[var(--white-color)] px-6 py-2 rounded-full cursor-pointer"
							style={{
								background: "linear-gradient(to left, var(--primary-accent), var(--primary-color))",
							}}
						>
							Learn More
						</button>
					</Link>
				</div>

				{/* Burger Icon */}
				<div className="md:hidden z-20">
					{isOpen ? (
						<X size={28} onClick={() => setIsOpen(false)} className={`cursor-pointer ${scrolled ? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"}`} />
					) : (
						<Menu size={28} onClick={() => setIsOpen(true)} className={`cursor-pointer ${scrolled ? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"}`} />
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				ref={mobileMenuRef}
				className={`absolute z-40 top-16 left-0 w-full ${
					scrolled ? "bg-[var(--white-color)] text-[var(--secondary-color)]" : "bg-[var(--white-color)] text-[var(--secondary-color)]"
				} flex flex-col items-start gap-6 px-10 py-5  transition-all duration-300 md:hidden ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-[-130%] opacity-0 pointer-events-none"} ${
					scrolled ? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"
				}`}
			>
				<NavLink to="/" className={getLinkClass} onClick={() => setIsOpen(false)} reloadDocument>
					Home
				</NavLink>
				<NavLink to="/about" className={getLinkClass} onClick={() => setIsOpen(false)} reloadDocument>
					About
				</NavLink>
				<NavLink to="/contact" className={getLinkClass} onClick={() => setIsOpen(false)} reloadDocument>
					Contact
				</NavLink>

				<button type="button" className="flex items-center justify-between gap-1 w-full" onClick={() => setMobileServicesOpen((p) => !p)}>
					<span className="flex-1 text-left">
						<NavLink to="/services" className={getLinkClass} reloadDocument>
							Services
						</NavLink>
					</span>
					<ChevronDown size={16} className={`transition-transform duration-200 cursor-pointer ${mobileServicesOpen ? "rotate-180" : ""}`} />
				</button>

				<AnimatePresence>
					{mobileServicesOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="w-full flex flex-col gap-1 overflow-hidden"
						>
							{services.map((s) => (
								<NavLink
									key={s.to}
									to={s.to}
									className={getDropdownLinkClass}
									onClick={() => {
										setIsOpen(false);
										setMobileServicesOpen(false);
										reloadDocument;
									}}
								>
									{s.label}
								</NavLink>
							))}
						</motion.div>
					)}
				</AnimatePresence>

				<Link to="/about" reloadDocument>
					<button
						className="text-[var(--white-color)] px-6 py-2 rounded-full cursor-pointer"
						style={{
							background: "linear-gradient(to left, var(--primary-accent), var(--primary-color))",
						}}
					>
						Learn More
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
