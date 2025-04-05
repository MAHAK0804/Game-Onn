import { headerLinks } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Sports from "../assets/images/Sport News.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 gap-4 ml-9 mr-15">
      {/* <span className="text-2xl">LOGO</span> */}
      <Image src={Sports} alt="Picture " width={100} height={100} />
      <nav className="flex gap-x-11 list-none">
        {headerLinks.map((link) => (
          <li key={link.route}>
            <Link href={link.route}>{link.name}</Link>
          </li>
        ))}
      </nav>
      {/* <span>Search</span> */}
      <button className="bg-gray-300 p-2 w-30 flex justify-around items-center rounded-xl text-white cursor-pointer">
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
    </header>
  );
};

export default Header;
