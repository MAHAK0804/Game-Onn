import { venues } from "@/constants/Venues";

import React from "react";
import Responsive2 from "@/elements/VenuesSwiper";

export default function Venues() {
  return (
    <div className="w-[90%] md:w-[90%] m-auto overflow-hidden">
      <h4 className="text-[22px] md:text-[28px] bg-gradient-to-r from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text font-bold">
        Venues
      </h4>
      <div className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5 w-20 lg:ml-0 rounded-md mb-4"></div>

      <Responsive2 data={venues} />
    </div>
  );
}
