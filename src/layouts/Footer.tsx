import Image from "next/image";
import React from "react";
import sportNews from "../../public/assets/sportsNews.png";
import { links } from "@/constants/UsefullLinks";
import { data } from "@/constants/Policies";

const Footer = () => {
  const data2 = Object.keys(links);

  return (
    <footer className="mt-2 bg-black py-10">
      <div className=" w-[90%] m-auto flex flex-col gap-5">
        <div className=" flex flex-wrap border gap-10">
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
                className=" w-full md:w-1/2 lg:w-3/4 border border-gray-300 rounded-md text-gray-300 p-2"
                placeholder="Enter Your Email Id"
              />
              <button
                type="submit"
                className="w-full md:w-1/4 cursor-pointer border border-gray-300 rounded-md text-gray-300 p-2"
              >
                Subscribe
                {/* <VenueGame title="Subscribe" /> */}
              </button>
            </div>
            <div className="p-2">
              <p className="text-gray-700 text-[12px] font-serif-Roboto">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-14/25 flex flex-wrap flex-row gap-9 md:gap-10">
            {data2.map((el) => {
              return (
                <>
                  <div className="w-2/5 md:w-1/4 lg:w-1/4 p-2">
                    <p className="text-[18px] font-sans-Roboto font-semibold text-white">
                      {el}
                    </p>
                    <nav className="text-gray-400 text-[14px] list-none mt-2 leading-10">
                      {links[el].map((el2) => {
                        return (
                          <>
                            {el === "FollowUs" ? (
                              <li>
                                <i
                                  className={`fa-brands fa-${el2.text} pr-2`}
                                ></i>
                                {el2.media}
                              </li>
                            ) : (
                              <li>{el2.text}</li>
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
            {data.map((el) => (
              <>
                <li className="border border-l-0 border-r-0 border-b-gray-600 border-t-0">
                  {el.text}
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
