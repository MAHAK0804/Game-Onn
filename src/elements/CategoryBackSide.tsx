import { IBackSide } from "@/interfaces";
import Image from "next/image";
import React from "react";

export default function CategoryBackSide({ categoryImg }: IBackSide) {
  return (
    <>
      {/* Back Side */}
      <div className="absolute w-full h-full backface-hidden">
        <Image
          src={categoryImg}
          alt="soccer"
          fill
          width={0}
          height={0}
          className="object-cover rounded-xl w-full sm:w-full md:w-[48%] lg:w-[24%]"
        />
      </div>
    </>
  );
}
