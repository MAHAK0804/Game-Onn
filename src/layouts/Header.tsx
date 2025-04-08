import { headerLinks } from "@/constants/routes";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Sports from "../assets/images/Sport News.png";
// import { FaBars, FaTimes } from "react-icons/fa"; // Add icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 flex flex-wrap justify-between items-center px-4 py-5 md:px-57 gap-4 bg-white z-50">
      {/* Logo */}
      <div className="w-full sm:w-auto flex justify-between items-center">
        <Image
          src={Sports}
          alt="Sport News Logo"
          width={160}
          height={60}
          className="object-contain"
        />

        {/* Hamburger Button (Mobile Only) */}
        <button className="sm:hidden text-2xl text-black" onClick={toggleMenu}>
          {isOpen ? (
            <i className="fa-solid fa-circle-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } w-full sm:flex sm:w-auto flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-6 text-sm sm:text-base transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-6 text-sm sm:text-base">
          {headerLinks.map((link) => (
            <li key={link.route}>
              <Link href={link.route}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Search Button */}

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } w-full sm:flex sm:w-auto flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-6 text-sm sm:text-base transition-all duration-300 ease-in-out`}
      >
        <button className="flex items-center gap-2 bg-gray-300 px-4 py-2 rounded-xl text-white text-sm hover:bg-black transition">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
