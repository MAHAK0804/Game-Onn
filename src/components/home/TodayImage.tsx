import { TRENDING } from "@/constants/app.constants";
import ImageLabels from "@/elements/ImageLabels";
import LabelText from "@/elements/LabelText";
import React from "react";

export default function TodayImage() {
  return (
    <>
      <LabelText text="Trending" />
      <div className=" h-full  flex flex-col md:flex-row lg:flex-col gap-4 lg:gap-0  ">
        {TRENDING.map((trend) => (
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
