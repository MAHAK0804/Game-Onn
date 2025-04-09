import { IImageLabels } from "@/interfaces";
import Image from "next/image";
import React from "react";

export default function ImageLabels({ img, text, details }: IImageLabels) {
  return (
    <div className="w-[200px] md:w-[250px] h-[200px] md:h-[220px] rounded-xl relative overflow-hidden shadow-md mb-6">
      {/* Background Image */}
      <Image
        src={img}
        alt="pic"
        fill
        className="absolute z-0 object-cover"
        sizes="(max-width: 768px) 90vw, 340px"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-white/10 to-white/80" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 z-20 px-4 pb-3">
        <p className="text-[11px] md:text-[12px] text-gray-500 font-medium mb-1">
          {text}
        </p>
        <p className="text-[15px] md:text-[16px] text-gray-800 font-semibold leading-snug">
          {details}
        </p>
      </div>
    </div>
  );
}
