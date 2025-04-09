import { ILabelText } from "@/interfaces";
import React from "react";

export default function LabelText({ text }: ILabelText) {
  return (
    <div className="bg-gray-200 p-2 w-25 rounded-md text-gray-400 text-[20px] text-center md:m-auto lg:ml-8 lg:mt-15 mb-6">
      {text}
    </div>
  );
}
