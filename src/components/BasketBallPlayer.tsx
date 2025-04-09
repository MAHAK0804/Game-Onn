import React from "react";
import ContinueBtn from "@/elements/ContinueBtn";

export default function BasketBallPlayer() {
  return (
    <div>
      {/* Text Section */}
      <div
        className="
      w-full max-w-md px-4
      sm:w-[80%] 
      md:w-[80%] md:ml-auto 
      lg:w-[40%] lg:ml-auto lg:mt-0
    "
      >
        <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
          The EuroLeague Finals Top Scorer is the individual award for the
          player that gained the highest points in the EuroLeague Finals.
        </p>
        <ContinueBtn title="Continue Reading" />
      </div>
    </div>
  );
}
