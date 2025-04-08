import { ILabelText } from "@/interfaces";
import React from "react";

export default function LabelText({ text }: ILabelText) {
  return (
    <div className="bg-gray-200 p-2 w-25 rounded-md text-gray-400 text-[20px] text-center mb-6">
      {text}
    </div>
  );
}
