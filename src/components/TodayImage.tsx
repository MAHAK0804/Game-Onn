import ImageLabels from "@/elements/ImageLabels";
import LabelText from "@/elements/LabelText";
import React from "react";
import PlayerImage from "../assets/images/beautiful-young-african-woman-sports-clothing-running-against-gray-background 1.png";
import FastAcc from "../assets/images/fastaccelerating-race-car-formula-one-racing-amid-sunset-generative-ai 1.png";

export default function TodayImage() {
  return (
    <div className="w-full md:mt-15 px-4 md:px-6 lg:px-0 flex flex-col items-center md:items-start gap-6 md:gap-8">
      {/* Heading */}
      <LabelText text="Today" />

      {/* First Card */}
      <ImageLabels
        text="Race98 - 03 June 2023"
        img={PlayerImage}
        details="Ethiopian runners took the top four spots."
      />

      {/* Second Card */}
      <ImageLabels
        text="INDYCAR - 03 June 2023"
        img={FastAcc}
        details="IndyCar Detroit: Dixon quickest in second practice"
      />
    </div>
  );
}
