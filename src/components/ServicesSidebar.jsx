import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesSidebar = () => {
  const baseClass = "px-4 py-2 rounded transition";
  const activeClass = "bg-[var(--primary-color)] text-[var(--white-color)] rounded-lg";
  const hoverClass = "hover:bg-[var(--gray-accent)] rounded-lg";

  const getLinkClass = ({ isActive }) =>
    `${baseClass} ${isActive ? activeClass : hoverClass}`;

  return (
    <aside className="hidden lg:flex w-[300px] p-6 bg-[#cdcdcd] flex-col gap-10 font-semibold">
      {/* Services Section */}
      <nav className="flex flex-col gap-1">
        <h2 className="text-xl font-bold mb-1">Our Services</h2>
        <NavLink to="/services/seafreight" className={getLinkClass}>Sea Freight</NavLink>
        <NavLink to="/services/airfreight" className={getLinkClass}>Air Freight</NavLink>
        <NavLink to="/services/landfreight" className={getLinkClass}>Land Freight</NavLink>
        <NavLink to="/services/custombrokerage" className={getLinkClass}>Custom Brokerage</NavLink>
        <NavLink to="/services/fcl_lcl" className={getLinkClass}>FCL/LCL</NavLink>
        <NavLink to="/services/domestic-transfer-services" className={getLinkClass}>Domestic Transfer</NavLink>
        <NavLink to="/services/freight-&-tariff-consultation" className={getLinkClass}>Freight & Tariff Consultation</NavLink>
        <NavLink to="/services/amo-certificate" className={getLinkClass}>Renewal of AMO Certificate</NavLink>
        <NavLink to="/services/import-license" className={getLinkClass}>Accreditation of Import License</NavLink>
      </nav>

      {/* About Section */}
      <nav className="flex flex-col gap-1">
        <h2 className="text-xl font-bold mb-1">About</h2>
        <NavLink to="/about" className={getLinkClass}>Mission/Vision</NavLink>
        <NavLink to="/about" className={getLinkClass}>About Digo Traders</NavLink>
      </nav>

      {/* Contact Section */}
      <nav className="flex flex-col gap-1">
        <h2 className="text-xl font-bold mb-1">Contact Us</h2>
        <NavLink to="/contact" className={getLinkClass}>Email</NavLink>
        <NavLink to="/contact" className={getLinkClass}>Facebook</NavLink>
        <NavLink to="/contact" className={getLinkClass}>Tel. No</NavLink>
        <NavLink to="/contact" className={getLinkClass}>Mobile No</NavLink>
      </nav>
    </aside>
  );
};

export default ServicesSidebar;
