import React from "react";
import BasketBallPlayer from "./BasketBallPlayer";
import Image from "next/image";
import TodayImage from "./TodayImage";
import Category from "./Category";
import Venues from "./Venues";
import Player from "../../../public/assets/basketPlayer.png";
import about from "../../../public/assets/Aboutus.png";

const Home = () => {
  // const authState = useSelector((state) => state.auth.authState);

  return (
    <div className="w-full pt-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-[90%] m-auto min-h-screen sm:flex-wrap">
        {/* Left Section */}
        <div className="flex  flex-col w-full lg:w-2/3 h-auto">
          {/* Text Area */}
          <div className="w-full h-auto lg:h-3/4">
            <div
              className="bg-[url(/assets/bgImg.png)] bg-cover bg-center bg-repeat-x relative w-full lg:max-w-[700px] max-w-[900px]
              h-auto aspect-[7/6] lg:left-[-60px] left-1 mb-10"
            >
              <h1 className="md:ml-15 md:pt-40 pt-7  ml-2 lg:ml-5 md:text-[75px] text-[55px] font-extrabold bg-gradient-to-b lg:leading-20 leading-17 from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text uppercase text-start">
                Top scorer to the final match
              </h1>
              {/* {authState ? "Logged  In" : "Logged Out"} */}
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
        <div className="lg:ps-10 w-full lg:w-1/3 h-full  ">
          <TodayImage />
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
