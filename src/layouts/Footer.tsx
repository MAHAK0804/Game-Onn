import Image from "next/image";
import React from "react";
import sportNews from "../../public/assets/sportsNews.png";
import Link from "next/link";
import { DATA, LINKS } from "@/constants/app.constants";
import { SocialLink, UsefulLink } from "@/interfaces";
import { useRouter } from "next/router";

const Footer = () => {
  const data2 = Object.keys(LINKS) as (keyof typeof LINKS)[];
  const router = useRouter();

  return (
    <footer className="mt-2 bg-black py-5">
      <div className=" w-[90%] m-auto flex flex-col gap-5">
        <div className=" flex flex-wrap justify-between">
          <div className="w-full lg:w-2/5 flex flex-col gap-2">
            <div className="p-2">
              <Image
                src={sportNews}
                alt="sport"
                width={150}
                height={150}
                color="white"
              />
            </div>
            <div className="p-2">
              <p className="text-gray-400 text-[16px] font-serif-Roboto">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>
            <div className="p-3 flex flex-wrap gap-4">
              <input
                type="email"
                className=" w-full md:w-1/2 lg:w-1/2 border border-gray-300 rounded-md text-gray-300 p-2"
                placeholder="Enter Your Email Id"
              />
              <button
                type="submit"
                className="w-full md:w-1/4 cursor-pointer border border-gray-300 rounded-md text-gray-300 p-2"
              >
                Subscribe
              </button>
            </div>
            <div className="p-2">
              <p className="text-gray-700 text-[12px] font-serif-Roboto">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-wrap flex-row gap-3 md:gap-10 ">
            {data2.map((el) => {
              return (
                <>
                  <div className="w-full md:w-1/4 lg:w-1/3 ml-auto p-2">
                    <p className="text-[18px] font-sans-Roboto font-semibold text-white">
                      {el === "UsefullLinks" ? "Usefull Links" : "Follow Us"}
                    </p>
                    <nav className="text-gray-400 text-[14px] list-none mt-2 leading-10">
                      {LINKS[el].map((el2) => {
                        return (
                          <>
                            {el === "FollowUs" ? (
                              <li className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                                <i
                                  className={`fa-brands fa-${el2.text} pr-2`}
                                ></i>
                                {(el2 as SocialLink).media}
                              </li>
                            ) : (
                              <Link
                                href={(el2 as UsefulLink).route}
                                className="cursor-pointer "
                              >
                                <li className="transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                                  {el2.text}
                                </li>
                              </Link>
                            )}
                          </>
                        );
                      })}
                    </nav>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className=" border border-l-0 border-r-0 border-b-0 pb-0 p-3 border-t-gray-600 mt-5 flex flex-wrap justify-between gap-3 text-gray-200">
          <p>2025 SportsNews. All right reserved</p>
          <div className="flex flex-wrap list-none gap-5 ">
            {DATA.map((el) => (
              <>
                <li key={el.link}>
                  <Link
                    href={el.link}
                    className="text-md text-start font-sans:DM"
                  >
                    <div className="group relative inline-block">
                      <p className=" cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                        {el.text}
                      </p>
                      <div
                        className={`${
                          router.pathname === el.link
                            ? "bg-gradient-to-r from-[#fff] to-[#B8C2CE] h-0.5  rounded-md"
                            : "block"
                        }`}
                      ></div>
                      <span
                        className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#fff] to-[#B8C2CE] transition-all duration-300 ease-in-out ${
                          router.pathname === el.link
                            ? "w-0"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </div>
                  </Link>
                </li>
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
