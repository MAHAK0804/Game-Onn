import React from "react";
import TopVenuesSlider from "@/elements/TopVenuesSlider";
import { VENUES } from "@/constants/app.constants";

export default function Venues() {
  return (
    <div className="w-[90%] md:w-[90%] h-1/2 m-auto overflow-hidden">
      <h4 className="text-[22px] md:text-[28px] bg-gradient-to-r from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text font-bold">
        Top Venues
      </h4>
      <div className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5 w-37 lg:ml-0 rounded-md mb-4"></div>

      <TopVenuesSlider data={VENUES} />
    </div>
  );
}
