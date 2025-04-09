import { trending } from "@/constants/Trending";
import ImageLabels from "@/elements/ImageLabels";
import LabelText from "@/elements/LabelText";
import React from "react";

export default function TodayImage() {
  return (
    <>
      <LabelText text="Trending" />
      <div className="w-[80%] sm:m-auto  md:mt-3 md:m-auto px-4 md:px-6 lg:px-0 lg:flex lg:flex-col md:flex md:flex-row sm:flex sm:flex-col items-center md:items-start gap-6 md:gap-8">
        {trending.map((trend) => (
          <>
            <ImageLabels
              text={trend.text}
              img={trend.img}
              details={trend.details}
            />
          </>
        ))}
      </div>
    </>
  );
}
