import React, { useState } from "react";

export default function Partner() {
  const [hoveredIndex, setHoveredIndex] = useState<boolean | null>(false);
  const [hoveredIndex2, setHoveredIndex2] = useState<boolean | null>(false);

  const [hoveredIndex3, setHoveredIndex3] = useState<boolean | null>(false);

  return (
    <div className="w-[90%] m-auto p-5 flex flex-wrap items-center">
      <div
        className="w-full lg:w-[30%] m-auto cursor-pointer"
        onMouseEnter={() => setHoveredIndex(true)}
        onMouseLeave={() => setHoveredIndex(false)}
      >
        <div
          className={`relative flex ${"flex-col"} w-full  mb-4 h-[30vh] perspective`}
        >
          {/* Text below */}

          <div
            className={`relative w-full h-[100%] rounded-md transition-transform duration-700 transform-style preserve-3d ${
              hoveredIndex ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
              <div
                className={`${
                  hoveredIndex
                    ? "hidden"
                    : "absolute w-full h-full bg-black opacity-25 top-0 left-0 z-2"
                }`}
              ></div>
              <p
                className={`${
                  hoveredIndex
                    ? "hidden"
                    : "absolute z-10  text-[24px] text-white p-5 font-extrabold  uppercase"
                }`}
              >
                Booking System
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover "
              >
                <source
                  src={
                    "https://videos.pexels.com/video-files/6895616/6895616-hd_1920_1080_25fps.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute w-full h-full rotate-y-180 backface-hidden text-center shadow-xl p-5 bg-[#f0f0f0] rounded-lg overflow-hidden">
              <p className="py-10 text-[20px]">
                Simplify your operations with our online booking system for
                streamlined reservation management.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-[30%] m-auto cursor-pointer"
        onMouseEnter={() => setHoveredIndex2(true)}
        onMouseLeave={() => setHoveredIndex2(false)}
      >
        <div
          className={`relative flex ${"flex-col"} w-full  mb-4 h-[30vh] perspective`}
        >
          {/* Text below */}

          <div
            className={`relative w-full h-[100%] transition-transform duration-700 transform-style preserve-3d ${
              hoveredIndex2 ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
              <div
                className={`${
                  hoveredIndex2
                    ? "hidden"
                    : "absolute w-full h-full bg-black opacity-25 top-0 left-0 z-2"
                }`}
              ></div>
              <p
                className={`${
                  hoveredIndex2
                    ? "hidden"
                    : "absolute z-10  text-[24px] text-white p-5 font-extrabold  uppercase "
                }`}
              >
                Custom Pricing
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              >
                <source
                  src={
                    "https://videos.pexels.com/video-files/4873111/4873111-hd_1920_1080_25fps.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute w-full h-full rotate-y-180 backface-hidden text-center shadow-xl p-5 bg-[#f0f0f0] rounded-lg overflow-hidden">
              <p className="py-10 text-[20px]">
                Maximise your earnings with custom pricing options, tailoring
                rates for peak hours, days, and special timings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-[30%] m-auto cursor-pointer"
        onMouseEnter={() => setHoveredIndex3(true)}
        onMouseLeave={() => setHoveredIndex3(false)}
      >
        <div
          className={`relative flex ${"flex-col"} w-full  mb-4 h-[30vh] perspective`}
        >
          {/* Text below */}

          <div
            className={`relative w-full h-[100%] transition-transform duration-700 transform-style preserve-3d ${
              hoveredIndex3 ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
              <div
                className={`${
                  hoveredIndex3
                    ? "hidden"
                    : "absolute w-full h-full bg-black opacity-25 top-0 left-0 z-2"
                }`}
              ></div>
              <p
                className={`${
                  hoveredIndex3
                    ? "hidden"
                    : "absolute z-10  text-[24px] text-white p-5 font-extrabold  uppercase "
                }`}
              >
                Flexible Calendar Management
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              >
                <source
                  src={
                    "https://videos.pexels.com/video-files/7679831/uhd_25fps.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute w-full h-full rotate-y-180 backface-hidden text-center shadow-xl p-5 bg-[#f0f0f0] rounded-lg overflow-hidden">
              <p className="py-10 text-[20px]">
                Organise and access your venue schedule easily to never miss a
                booking with our flexible grid setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
