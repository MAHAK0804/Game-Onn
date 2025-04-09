import { ILabelText } from "@/interfaces";
import React from "react";

export default function LabelText({ text }: ILabelText) {
  return (
    <>
      <h3 className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text text-md font-bold text-start md:m-auto lg:ml-8  lg:mt-15 lg:mb-2 uppercase">
        {text}
      </h3>
      <div className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5 w-23 lg:ml-8  rounded-md mb-4"></div>
    </>
  );
}
