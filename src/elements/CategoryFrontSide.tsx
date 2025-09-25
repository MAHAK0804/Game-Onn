import { IBackSide } from "@/interfaces";
import Image from "next/image";
import React from "react";
export default function CategoryFrontSide({ categoryImg }: IBackSide) {
  return (
    <>
      {/*Front Side */}

      <Image
        src={categoryImg}
        alt="soccer"
        fill
        className="object-cover rounded-xl w-full sm:w-full md:w-[48%] lg:w-[24%]"
      />
    </>
  );
}
