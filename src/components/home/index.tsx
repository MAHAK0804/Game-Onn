import React from "react";
import BasketBallPlayer from "./BasketBallPlayer";
import Image from "next/image";
import TodayImage from "./TodayImage";
import Category from "./Category";
import Venues from "./Venues";
import Player from "../../../public/assets/basketPlayer.png";
import about from "../../../public/assets/Aboutus.png";
import ContinueBtn from "@/elements/ContinueBtn";

const Home = () => {
  return (
    <div className="w-full pt-20 border border-red-400">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-[90%]  m-auto min-h-screen sm:flex-wrap">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-2/3 h-auto">
          {/* Text Area */}
          <div className="w-full h-auto lg:h-3/4">
            <div
              className="bg-[url(/assets/bgImg.png)] bg-cover bg-center bg-repeat-x relative w-full lg:max-w-[700px] max-w-[900px]
    h-auto aspect-[7/6] lg:left-[-60px] left-1 mb-10"
            >
              <h1 className="lg:ml-15 lg:pt-40 pt-7 ml-5 lg:text-[75px] text-[55px] font-extrabold bg-gradient-to-b lg:leading-20 leading-17 from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text uppercase text-start">
                Top scorer to the final match
              </h1>
            </div>
          </div>

          {/* Player Name/Info */}
          <div className="">
            <BasketBallPlayer />

            {/* Player Image Positioned */}
            <div
              className="lg:absolute z-20 w-full max-w-[700px] flex justify-center 
                      lg:top-[160px] lg:left-[370px]"
            >
              <Image
                src={Player}
                width={0}
                className="object-cover w-full h-auto"
                height={0}
                alt="Basketball Player"
              />
            </div>
          </div>
        </div>

        {/* Right Side (TodayImage) */}
        <div className=" w-[30%] md:pl-[70px] mt-10 lg:mt-0">
          <TodayImage />
        </div>
      </div>
      {/* Search Section */}
      <div className="w-[90%] m-auto flex flex-wrap shadow-xl border border-gray-50 mb-10 bg-gray-300 rounded-2xl p-10">
        <div className="w-4/5 m-auto flex flex-wrap justify-between items-center bg-white rounded-2xl p-10">
          <div className="w-[1/4] flex flex-row">
            <input type="text" className="border p-2" />
          </div>
          <div className="w-[1/4]">
            <input type="text" className="border" />
          </div>
          <div className="w-[1/4]">
            <input type="text" className="border" />
          </div>
          <div className="w-[1/4]">
            <input type="text" className="border" />
          </div>
        </div>
        <div>
          <ContinueBtn title="Search" />
        </div>
      </div>
      {/* Category Section */}
      <Category />

      {/* Venunes */}
      <Venues />

      {/* About us */}
      <Image
        src={about}
        alt="venunes"
        width={0}
        height={0}
        className="w-[90%] m-auto mt-10"
      />
    </div>
  );
};

export default Home;
