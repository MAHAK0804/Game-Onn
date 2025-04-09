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
      <div className="flex flex-row gap-3 items-center m-3">
        <Image src={img} alt="person" />
        <p>{name}</p>
      </div>
      <div className="m-3 ">
        <p className="text-[14px] text-[#26262699]">{date}</p>
        <h3 className="text-[22px] text-[#262626] text-start">{heading}</h3>
        <p className="text-[16px] text-[#696868] text-justify">{details}</p>
      </div>
    </>
  );
}
