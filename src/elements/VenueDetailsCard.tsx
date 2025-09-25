import { IVenue } from "@/interfaces";
import React from "react";

export default function VenueDetailsCard({
  name,
  rating,
  loc,
  reviews,
}: // sports,
IVenue) {
  return (
    <>
      <div className=" p-3 leading-8">
        <div className="flex flex-row justify-between">
          <p className="text-[20px] font-semibold">{name}</p>
          <p>
            <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
            {rating}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="">
            <p className="text-[14px] text-[#26262699]">Sports Available</p>
            <div className="flex flex-row gap-4 mb-2">
              {/* {sports.map((el) => (
                <>
                  <p className="text-[12px] ">{el}</p>
                </>
              ))} */}
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
        <p className="text-[14px] text-[#26262699]">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {loc}
        </p>
      </div>
    </>
  );
}
