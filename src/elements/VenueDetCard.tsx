import { IVenue } from "@/interfaces";
import React from "react";

export default function VenueDetCard({
  name,
  // rating,
  cost,
  loc,
}: IVenue) {
  return (
    <>
      <div className=" p-3 leading-8">
        <p className="text-[20px] font-semibold">{name}</p>
        {/* <p>
          <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
          {rating}
        </p> */}
        <p className="text-[14px] text-[#26262699]">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {loc}
        </p>
        <h3 className="text-[18px] font-medium text-[#262626] ">
          {cost}/1 hour
        </h3>
        {/* <p className="text-[16px] text-[#696868] ">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {distance <= 1 ? `${distance} km` : `${distance} kms`} away from
          location
        </p> */}
      </div>
    </>
  );
}
