import { IVenueHost } from "@/interfaces";
import React from "react";

export default function VenueHost({ venuename, reviews, desc }: IVenueHost) {
  console.log("venueName", venuename);
  return (
    <div className=" p-3 leading-8">
      <p className="text-[20px] font-semibold text-black ">{venuename}</p>
      <div className="flex flex-row justify-between">
        <div className="">
          {/* <p className="text-[14px] text-[#26262699]">Sports Available</p> */}
          <div className="flex flex-row gap-4 my-2">
            <i className="fa-solid fa-futbol text-[16px]"></i>
            <i className="fa-solid fa-baseball text-[16px]"></i>
            <i className="fa-solid fa-volleyball text-[16px]"></i>
            <i className="fa-solid fa-baseball-bat-ball text-[16px]"></i>
          </div>
        </div>

        <div className="flex flex-row gap-1">
          <p className="text-[14px] font-semibold ">{reviews}</p>
          <p className="text-[14px] text-[#26262699]">Reviews</p>
        </div>
      </div>
      <p className="text-[14px] text-[#26262699] line-clamp-2">{desc}</p>
    </div>
  );
}
