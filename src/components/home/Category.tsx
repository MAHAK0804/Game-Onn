import React, { useState } from "react";
import { categoryData } from "@/constants/Category";
import Image from "next/image";

export default function Category() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-[90%] m-auto mb-20">
      <div className="mb-2">
        <h4 className="text-[28px] bg-gradient-to-r from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text font-bold">
          Category
        </h4>
        <div className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5 w-30 lg:ml-0 rounded-md mb-4"></div>
      </div>

      <div className="flex flex-wrap gap-2 justify-between w-full h-auto">
        {categoryData.map((cat, index) => {
          const even = index % 2 === 0;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className={`relative flex  gap-4 ${
                even ? "flex-col" : "flex-col-reverse"
              } w-full sm:w-full md:w-[48%] lg:w-[24%] h-[60vh]`}
            >
              {/* Rotating Image Container */}
              <div
                className={`relative w-full h-2/3 transition-transform duration-700 ${
                  isHovered ? "rotate-y-180" : ""
                }`}
              >
                <Image
                  src={isHovered ? cat.img[1] : cat.img[0]}
                  alt="category"
                  className="object-cover rounded-xl w-full h-full"
                  width={0}
                  height={0}
                />
              </div>

              {/* Text Section */}
              <div
                className="w-full h-1/3 bg-gray-300 bg-opacity-90 text-white rounded-xl 
                flex items-center justify-center text-center px-4"
              >
                <p
                  className="text-[24px] font-extrabold bg-gradient-to-b from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text uppercase cursor-pointer text-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {cat.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
