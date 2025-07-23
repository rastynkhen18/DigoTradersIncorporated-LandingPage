import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const baseClass = "px-4 py-2 rounded transition";
  const activeClass = "bg-[var(--primary-color)]";
  const hoverClass = "hover:bg-[var(--gray-accent)]";

  const getLinkClass = ({ isActive }) =>
    `${baseClass} ${isActive ? activeClass : hoverClass}`;

  return (
    <aside className="w-[500px] p-6 bg-[var(--gray-color)] flex flex-col gap-10">
      {/* Services Section */}
      <nav className="flex flex-col gap-1">
        <h2 className="text-xl font-bold mb-1">Our Services</h2>
        <NavLink to="/services/seafreight" className={getLinkClass}>Sea Freight</NavLink>
        <NavLink to="/services/airfreight" className={getLinkClass}>Air Freight</NavLink>
        <NavLink to="/services/landfreight" className={getLinkClass}>Land Freight</NavLink>
        <NavLink to="/services/customs" className={getLinkClass}>Custom Brokerage</NavLink>
        <NavLink to="/services/fcl-lcl" className={getLinkClass}>FCL/LCL</NavLink>
        <NavLink to="/services/domestic" className={getLinkClass}>Domestic Transfer</NavLink>
        <NavLink to="/services/amo-certificate" className={getLinkClass}>Renewal of AMO Certificate</NavLink>
        <NavLink to="/services/import-license" className={getLinkClass}>Accreditation of Import License</NavLink>
      </nav>

      {/* About Section */}
      <nav className="flex flex-col gap-1">
        <h2 className="text-xl font-bold mb-1">About</h2>
        <NavLink to="/mission" className={getLinkClass}>Mission/Vision</NavLink>
        <NavLink to="/about" className={getLinkClass}>About Digo Traders</NavLink>
      </nav>

      {/* Contact Section */}
      <nav className="flex flex-col gap-1">
        <h2 className="text-xl font-bold mb-1">Contact Us</h2>
        <NavLink to="/email" className={getLinkClass}>Email</NavLink>
        <NavLink to="/facebook" className={getLinkClass}>Facebook</NavLink>
        <NavLink to="/tel" className={getLinkClass}>Tel. No</NavLink>
        <NavLink to="/mobile" className={getLinkClass}>Mobile No</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
