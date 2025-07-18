import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/DigoTradersIncorporated_logo.png";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      subLinks: [
        {
          name: "Import/Export Consolidation by sea",
          path: "/services/Import/Export-Consolidation-by-sea",
        },
        {
          name: "Import/Export by air",
          path: "/services/Import/Export-by-air",
        },
        { name: "Trucking Services", path: "/services/Trucking-Services" },
        { name: "Intl FCL/LCL", path: "/services/Intl-FCL/LCL" },
        { name: "Custom Brokerage", path: "/services/Custom-Brokerage" },
        { name: "Land Transportation", path: "/services/Land-Transportation" },
        { name: "Domestic Transfer", path: "/services/Domestic-Transfer" },
        {
          name: "Freight & Tariff Consultaion",
          path: "/services/Freight-and-Tariff-Consultaion",
        },
        {
          name: "Renewal of Amo Certificate",
          path: "/services/Renewal-of-Amo-Certificate",
        },
        {
          name: "Accreditaion of Import License",
          path: "/services/Accreditaion-of-Import-License",
        },
      ],
    },
    { name: "Contacts", path: "/contacts" },
    { name: "Galley", path: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--secondary-color)] text-[#fff] z-50 shadow-md">
      <div className="flex justify-between items-center h-16 px-4 md:px-8">
        <div className="display flex justify-center items-center">
          <img
            src={Logo}
            alt="Digo Traders Incorporated Logo"
            className="h-12 w-auto mx-5"
          />
          <h1 className='text-base text-[var(--primary-color)] md:text-2xl' >DiGO Traders Inc,</h1>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          <ul className="flex gap-7">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <div className="flex items-center gap-1">
                  <Link
                    to={link.path}
                    className={`relative group pb-1 ${
                      location.pathname === link.path
                        ? "text-[var(--primary-color)]"
                        : ""
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[var(--primary-color)] transition-all duration-300 pointer-events-none ${
                        location.pathname === link.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                  {link.subLinks && <span className="text-md">&#9662;</span>}
                </div>

                {link.subLinks && (
                  <ul className="absolute hidden group-hover:block bg-[var(--secondary-color)] text-[#fff] shadow-lg py-2 rounded-md min-w-[285px] z-50 text-justify">
                    {link.subLinks.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 cursor-pointer hover:text-[var(--primary-color)] transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-1">
            <DarkModeToggle />
          </div>
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
        <div className="overflow-hidden transition-all duration-300 ease-in-out bg-[var(--secondary-color)] px-6 pb-4 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div
                onClick={() =>
                  link.subLinks
                    ? setActiveDropdown(
                        activeDropdown === link.name ? null : link.name
                      )
                    : setIsOpen(false)
                }
                className={`cursor-pointer flex items-center justify-start ${
                  location.pathname === link.path
                    ? "text-[var(--primary-color)]"
                    : ""
                }`}
              >
                <span>{link.name}</span>
                {link.subLinks && (
                  <span className="text-xs ml-2">
                    {activeDropdown === link.name ? "\u25B2" : "\u25BC"}{" "}
                    {/* ▲ ▼ */}
                  </span>
                )}
              </div>
              {link.subLinks && activeDropdown === link.name && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className="text-sm hover:text-[var(--primary-color)]"
                    >
                      {" "}
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-1">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
