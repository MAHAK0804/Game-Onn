import { headerLinks } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Sports from "../../public/assets/sportNews.png";
import { logout } from "@/store/slices/authSlice";

import Btn from "@/elements/Btn";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { USER_PROFILE } from "@/constants/app.constants";
import { RootState } from "@/store/store";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const router = useRouter();
  const dispatch = useDispatch();

  const authState = useSelector((state: RootState) => state.auth.authState);
  const [dropdown, setDropDown] = useState<boolean | null | string>(null);
  console.log("auth state", authState);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="  fixed top-0 left-0 right-0 py-2  gap-1 bg-white z-50 shadow-2xl">
      {/* Logo */}
      <div className=" w-[90%] m-auto  flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/4  flex justify-between items-center">
          <Link
            href={"/"}
            className="transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            <Image
              src={Sports}
              alt="Sport News Logo"
              width={160}
              height={50}
              className="object-cover"
            />
          </Link>

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
        <nav className="w-full lg:w-1/2 m-auto">
          <ul
            className={`${
              isOpen ? "flex" : "hidden lg:flex"
            } flex-col gap-10 lg:items-center my-4 lg:my-0 lg:flex-row`}
          >
            {headerLinks.map((link) => (
              <li key={link.route}>
                <Link
                  href={link.route}
                  className="text-md font-bold text-start font-sans:DM"
                >
                  <div className="group relative inline-block">
                    <h4
                      className={`p-1 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 `}
                    >
                      {link.name}
                    </h4>
                    <div
                      className={`${
                        router.pathname === link.route
                          ? "bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5  rounded-md"
                          : "hidden"
                      }`}
                    ></div>
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#262626] to-[#B8C2CE] transition-all duration-300 ease-in-out ${
                        router.pathname === link.route
                          ? "w-0"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {authState ? (
          <>
            <div
              className={`relative ${isOpen ? "block" : "hidden lg:block"}`}
              ref={dropdownRef}
            >
              <div
                className="border-2 p-1 rounded-4xl cursor-pointer"
                onClick={() => {
                  setDropDown((prev) => !prev);
                }}
              >
                <i className="fa-solid fa-circle-user text-3xl"></i>
              </div>
              {dropdown && (
                <div
                  className="absolute mt-2 right-0 w-48 border border-gray-300 bg-white rounded-md shadow-xl z-50"
                  style={{ minWidth: "10rem" }}
                >
                  {USER_PROFILE.map((el) => (
                    <div
                      key={el.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        if (el.link === "Logout") {
                          dispatch(logout());
                          router.push("/");
                        } else {
                          router.push(el.route);
                        }
                        setDropDown(false);
                      }}
                    >
                      {el.link}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <div
            className={`${
              isOpen ? "block" : "hidden lg:block"
            } lg:w-1/10 lg:ml-auto`}
          >
            <Link href={"/login"}>
              <Btn title="Login" />
            </Link>
          </div>
        )}

        {/* Search Button

        <button
          className={`${
            isOpen ? "flex" : "hidden lg:flex"
          } items-center my-4 lg:my-0 gap-2 bg-gray-300 px-10 py-2 rounded-xl text-white text-sm hover:bg-black transition cursor-pointer`}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="hidden sm:inline">Search</span>
        </button> */}
      </div>
    </header>
  );
};

export default Header;
