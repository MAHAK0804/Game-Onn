import { FEATURE_DATA, FEATURES } from "@/constants/app.constants";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="relative bg-[url(/assets/sportFeature.jpeg)] bg-cover bg-center bg-repeat-x bg-fixed relative w-full ">
      <div
        className={`absolute w-full h-full bg-gray-900 opacity-5 top-0 left-0 z-2
        }`}
      ></div>
      <div className="py-10">
        <h3 className="text-4xl text-white text-center">Our Features</h3>
        <div className="flex flex-wrap justify-between w-full gap-3 lg:gap-0 px-5 lg:px-0 lg:w-[40%] m-auto text-center my-10">
          {FEATURES.map((el) => (
            <>
              <div className="border-2 border-gray-400 bg-gray-400 w-full lg:w-[30%] p-5 rounded-lg overflow-hidden">
                <h2 className="text-6xl text-white">
                  {el.frequency > 10 && el.frequency < 100
                    ? "10+"
                    : el.frequency > 100 && el.frequency < 200
                    ? "100+"
                    : "200+"}
                </h2>
                <p className="text-2xl text-white">{el.feature}</p>
              </div>
            </>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white rounded-4xl w-[90%] m-auto py-2 px-5">
          {/* <h2 className="text-lg lg:text-2xl text-center font-semibold">
            Discover Our Features
          </h2> */}

          <div className="overflow-hidden w-full relative my-2">
            <style jsx>{`
              @keyframes scrollLeft {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              .scrolling-slide {
                animation: scrollLeft 20s linear infinite;
              }
            `}</style>

            <div className="flex whitespace-nowrap scrolling-slide">
              {[...FEATURE_DATA, ...FEATURE_DATA].map((el, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-1 items-center min-w-max  px-5"
                >
                  <Image
                    src={el.img}
                    alt={el.feature}
                    className="w-[40px] h-[40px] border-3"
                  />
                  <p className="text-gray-50">{el.feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
