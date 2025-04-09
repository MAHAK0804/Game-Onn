import BasketBallPlayer from "@/components/BasketBallPlayer";
import FootballText from "@/components/FootballText";
import Image from "next/image";
import Player from "../../public/assets/basketPlayer.png";
import TodayImage from "@/components/TodayImage";
import Category from "@/components/Category";
import about from "../../public/assets/Aboutus.png";
import Footer from "@/layouts/Footer";
import Venues from "@/components/Venues";

export default function Home() {
  return (
    <div className="w-full pt-14">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-[90%] m-auto min-h-screen sm:flex-wrap">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-2/3 h-auto lg:h-full">
          {/* Text Area */}
          <div className="w-full h-auto lg:h-3/4 lg:ml-[-80px]">
            <FootballText />
          </div>

          {/* Player Name/Info */}
          <div className="w-full ml-auto h-auto lg:h-1/4">
            <BasketBallPlayer />

            {/* Player Image Positioned */}
            <div
              className="relative lg:absolute z-20 w-full max-w-[600px] flex justify-center mx-auto 
                      lg:top-[190px] lg:left-[480px] lg:w-[800px]"
            >
              <Image
                src={Player}
                width={600}
                height={850}
                alt="Basketball Player"
                className="object-contain max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Right Side (TodayImage) */}
        <div className="w-full lg:w-1/3 md:pl-[130px] mt-10 lg:mt-0">
          <TodayImage />
        </div>
      </div>

      {/* Category Section */}
      <Category />

      {/* Venunes */}
      <Venues />

      {/* About us */}
      <Image src={about} alt="venunes" className="w-[80%] m-auto mt-10" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
