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
    <>
      <div className="flex flex-row gap-3 items-center p-4">
        <Image src={img} alt="person" width={0} height={0} />
        <p>{name}</p>
      </div>
      <div className="m-3 ">
        <p className="text-[14px] text-[#26262699]">{date}</p>
        <h3 className="text-[18px] font-medium text-[#262626] ">{heading}</h3>
        <p className="text-[16px] text-[#696868] ">{details}</p>
      </div>
    </>
  );
}
