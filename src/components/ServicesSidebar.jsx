import React from "react";
import { NavLink } from "react-router-dom";

const ServicesSidebar = () => {
	const baseClass = "px-4 py-2 rounded transition";
	const activeClass = "text-[var(--white-color)] rounded-lg bg-gradient-to-r from-[var(--primary-accent)] to-[var(--primary-color)]";
	const hoverClass = "hover:bg-[#cdcdcd] rounded-lg";

	const getLinkClass = ({ isActive }) => `${baseClass} ${isActive ? activeClass : hoverClass}`;

	return (
		<aside className="hidden lg:flex w-[300px] p-5 bg-[#e2e2e2] flex-col gap-10 font-normal text-sm">
			{/* Services Section */}
			<nav className="flex flex-col gap-1 ">
				<h2 className="text-base font-bold mb-3 ">Our Services</h2>

				<NavLink to="/services/airfreight" className={getLinkClass} reloadDocument>
					Air Freight
				</NavLink>
				<NavLink to="/services/seafreight" className={getLinkClass} reloadDocument>
					Sea Freight
				</NavLink>
				{/* <NavLink to="/services/landfreight" className={getLinkClass} reloadDocument>
					Land Freight
				</NavLink> */}
				<NavLink to="/services/custombrokerage" className={getLinkClass} reloadDocument>
					Custom Brokerage
				</NavLink>
				<NavLink to="/services/trucking-services" className={getLinkClass} reloadDocument>
					Trucking Services
				</NavLink>
				<NavLink to="/services/domestic-transfer-services" className={getLinkClass} reloadDocument>
					Domestic Transport
				</NavLink>
				{/* <NavLink to="/services/fcl_lcl" className={getLinkClass} reloadDocument>
					FCL/LCL
				</NavLink> */}
				<NavLink to="/services/amo-certificate" className={getLinkClass} reloadDocument>
					Renewal of AMO Certificate
				</NavLink>
				<NavLink to="/services/import-license" className={getLinkClass} reloadDocument>
					Accreditation of Import License
				</NavLink>
			</nav>

			{/* About Section */}
			<nav className="flex flex-col gap-1">
				<h2 className="text-base font-bold mb-1">About</h2>
				<NavLink to="/about" className={getLinkClass} reloadDocument>
					Mission/Vision
				</NavLink>
				<NavLink to="/about" className={getLinkClass} reloadDocument>
					About Digo Traders
				</NavLink>
			</nav>

			{/* Contact Section */}
			<nav className="flex flex-col gap-1">
				<h2 className="text-base font-bold mb-1">Contact Us</h2>
				<NavLink to="/contact" className={getLinkClass} reloadDocument>
					Email
				</NavLink>
				<NavLink to="/contact" className={getLinkClass} reloadDocument>
					Facebook
				</NavLink>
				<NavLink to="/contact" className={getLinkClass} reloadDocument>
					Tel. No
				</NavLink>
				<NavLink to="/contact" className={getLinkClass} reloadDocument>
					Mobile No
				</NavLink>
			</nav>
		</aside>
	);
};

export default ServicesSidebar;
