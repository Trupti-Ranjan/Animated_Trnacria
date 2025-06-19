import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = () => {
  const menuItem = [
    "Home",
    "About",
    "Project",
    "Pricing",
    "News",
    "Contact",
    "Style-Guide",
    "Licences",
    "Changelog",
  ];

  const [active, setActive] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        onClick={() => setShowMenu((prev) => !prev)}
        className="flex gap-2 items-center cursor-pointer text-white hover:bg-[#ffffff33] px-2.5 py-0.5"
      >
        Pages
        <span>
          <FaChevronDown size={12} />
        </span>
      </div>

      {showMenu && (
        <ul className="absolute top-full left-0 bg-black p-2.5 z-20 shadow-md w-[145px]">
          {menuItem.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActive(item);
                setShowMenu(false);
              }}
              className={`px-5 py-1 hover:bg-[#222] cursor-pointer transition-all duration-200 
            ${
              active === item
                ? "bg-[#ce3437] text-black hover:bg-[#ce3437]"
                : "text-gray-300"
            }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
