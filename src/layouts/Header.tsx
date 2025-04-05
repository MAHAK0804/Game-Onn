import { headerLinks } from "@/constants/routes";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 gap-4">
      <span className="text-2xl">LOGO</span>
      <nav className="flex gap-4 list-none">
        {headerLinks.map((link) => (
          <li key={link.route}>
            <Link href={link.route}>{link.name}</Link>
          </li>
        ))}
      </nav>
      <span>Search</span>
    </header>
  );
};

export default Header;
