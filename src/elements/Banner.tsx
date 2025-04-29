import React from "react";
type BannerProps = {
  video: string;
  text: string;
};

export default function Banner({ video, text }: BannerProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute w-full h-full bg-black opacity-25 top-0 left-0 z-2"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top:10 lg:top-50 left-0 z-3">
        <h1 className=" text-4xl mx-5 lg:text-6xl text-white font-extrabold lg:w-[50%] lg:m-auto text-center pt-60 lg:pt-20 leading-13 lg:leading-18">
          {text}
        </h1>
        <div className="w-[50%] m-auto text-7xl text-white text-center mt-30 lg:mt-40 cursor-pointer">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}
