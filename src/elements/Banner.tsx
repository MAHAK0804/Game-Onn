import React from "react";

type BannerProps = {
  video: string;
  text: string;
};

export default function Banner({ video, text }: BannerProps) {
  const isVenueText =
    text ===
    "Increase your visibility and reach New Audiences by posting your venue on our unique platform, reaching directly to avid players";

  return (
    <div className={`${isVenueText ? "h-[60vh]" : "h-screen"} relative w-full`}>
      {/* Overlay */}
      <div
        className={`absolute top-0 left-0 w-full ${
          isVenueText ? "h-[60vh]" : "h-full"
        } bg-black opacity-50`}
      />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Text Block */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className={`text-2xl mx-5 text-white text-center lg:w-[50%] ${
            isVenueText
              ? "lg:text-4xl leading-9 lg:leading-[3rem] font-semibold"
              : "lg:text-6xl leading-[3.25rem] lg:leading-[4.5rem] font-extrabold"
          }`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}
