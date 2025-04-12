import { headerLinks } from "@/constants/routes";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Sports from "../../public/assets/sportNews.png";
// import { FaBars, FaTimes } from "react-icons/fa"; // Add icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(isOpen);

  return (
    <header className="  fixed top-0 left-0 right-0 py-2  gap-1 bg-white z-50">
      {/* Logo */}
      <div className=" w-[90%] m-auto  flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/4  flex justify-between items-center">
          <Image
            src={Sports}
            alt="Sport News Logo"
            width={160}
            height={60}
            className="object-cover"
          />

          <button
            className="lg:hidden text-2xl text-black"
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
        <nav className="w-full lg:w-2/5">
          <ul
            className={`${
              isOpen ? "flex" : "hidden lg:flex"
            } flex-col my-4 lg:my-0 lg:flex-row gap-3 lg:gap-5`}
          >
            {headerLinks.map((link) => (
              <li key={link.route}>
                <Link
                  href={link.route}
                  className=" text-md font-bold text-start font-sans:DM"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Search Button */}

        <button
          className={`${
            isOpen ? "flex" : "hidden lg:flex"
          } items-center my-4 lg:my-0 gap-2 bg-gray-300 px-10 py-2 rounded-xl text-white text-sm hover:bg-black transition`}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
