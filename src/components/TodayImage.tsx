import ImageLabels from "@/elements/ImageLabels";
import LabelText from "@/elements/LabelText";
import React from "react";
import PlayerImage from "../../public/assets/runnerPlayer.png";
import FastAcc from "../../public/assets/fastAcc.png";

export default function TodayImage() {
  return (
    <>
      <LabelText text="Today" />
      <div className="w-[80%] sm:m-auto  md:mt-3 md:m-auto px-4 md:px-6 lg:px-0 lg:flex lg:flex-col md:flex md:flex-row sm:flex sm:flex-col items-center md:items-start gap-6 md:gap-8">
        {/* Heading */}

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
    </>
  );
}
