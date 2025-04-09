import { headerLinks } from "@/constants/routes";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Sports from "../../public/assets/sportNews.png";
// import { FaBars, FaTimes } from "react-icons/fa"; // Add icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="  fixed top-0 left-0 right-0 py-2  gap-1 bg-white z-50">
      {/* Logo */}
      <div className=" w-[90%] m-auto  flex flex-wrap justify-between">
        <div className="w-full sm:w-auto flex justify-between items-center">
          <Image
            src={Sports}
            alt="Sport News Logo"
            width={160}
            height={60}
            className="object-cover"
          />

          <button
            className="sm:hidden text-2xl text-black"
            onClick={toggleMenu}
          >
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
                <Link
                  href={link.route}
                  className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text text-md font-bold text-start font-sans:DM"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Search Button */}

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } w-full sm:flex sm:w-auto  flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-6 text-sm sm:text-base transition-all duration-300 ease-in-out`}
        >
          <button className="flex items-center gap-2 bg-gray-300 px-4 py-2 rounded-xl text-white text-sm hover:bg-black transition">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
