import { IVenueHost } from "@/interfaces";
import Image from "next/image";
import React from "react";

export default function VenueHost({
  img,
  name,
  date,
  heading,
  details,
}: IVenueHost) {
  return (
    <div>
      <div className="flex flex-row gap-3 items-center p-4">
        <div className="w-[10%] h-[10%]">
          <Image src={img} alt="person" className="w-full h-full rounded-4xl" />
        </div>
        <p>{name}</p>
      </div>
      <div className="mx-3 mb-5 ">
        <p className="text-[14px] text-[#26262699]">{date}</p>
        <h3 className="text-[18px] font-medium text-[#262626] my-4 line-clamp-2 ">
          {heading}
        </h3>
        <p className="text-[16px] text-[#696868] line-clamp-2 ">{details}</p>
      </div>
    </div>
  );
}
