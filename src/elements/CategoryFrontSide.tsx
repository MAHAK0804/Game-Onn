import { IBackSide } from "@/interfaces";
import Image from "next/image";
import React from "react";
export default function CategoryFrontSide({ categoryImg }: IBackSide) {
  return (
    <>
      {/*Front Side */}
      {/* <div
        className="absolute w-full h-full bg-gray-300 bg-opacity-90 text-white rounded-xl 
                flex items-center justify-center text-center px-4 backface-hidden"
      >
        <p className="text-[37px] font-extrabold bg-gradient-to-b from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text uppercase">
          {text}
        </p>
      </div> */}
      <Image
        src={categoryImg}
        alt="soccer"
        fill
        className="object-fill rounded-xl w-full sm:w-full md:w-[48%] lg:w-[24%]"
      />
    </>
  );
}
