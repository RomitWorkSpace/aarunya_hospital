import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { title: "Home", link: "#" },
    {
      title: "Products",
      link: "#",
      dropdownItems: ["Electronics", "Clothing", "Books"],
    },
    {
      title: "Services",
      link: "#",
      dropdownItems: ["Consulting", "Design", "Development"],
    },
    { title: "About", link: "#" },
    { title: "Contact", link: "#" },
  ];

  const NavItem = ({ item, index }) => (
    <li className="relative group">
      <button
        className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
        onClick={() => item.dropdownItems && toggleDropdown(index)}
        aria-haspopup={item.dropdownItems ? "true" : "false"}
        aria-expanded={activeDropdown === index ? "true" : "false"}
      >
        {item.title}
        {item.dropdownItems && (
          <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />
        )}
      </button>
      {item.dropdownItems && (
        <ul
          className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out ${
            activeDropdown === index
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {item.dropdownItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {subItem}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">
                Brand
              </span>
            </a>
          </div>
          {isMobile ? (
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Open menu"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          ) : (
            <div className="hidden md:flex md:items-center">
              <ul className="flex space-x-4" ref={dropdownRef}>
                {navItems.map((item, index) => (
                  <NavItem key={index} item={item} index={index} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
            sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          <div
            className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
              <span className="text-xl font-bold text-gray-800">Menu</span>
              <button
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      onClick={() =>
                        item.dropdownItems && toggleDropdown(index)
                      }
                      aria-haspopup={item.dropdownItems ? "true" : "false"}
                      aria-expanded={
                        activeDropdown === index ? "true" : "false"
                      }
                    >
                      {item.title}
                      {item.dropdownItems && (
                        <FaChevronDown className="float-right mt-1" />
                      )}
                    </button>
                    {item.dropdownItems && (
                      <ul
                        className={`pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                          activeDropdown === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        {item.dropdownItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href="#"
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
