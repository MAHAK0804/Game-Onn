import React, { useState } from "react";
import { categoryData } from "@/constants/Category";
import CategoryFrontSide from "@/elements/CategoryFrontSide";
import CategoryBackSide from "@/elements/CategoryBackSide";

export default function Category() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-[90%] m-auto mb-10 lg:mb-20">
      <div className="mb-2">
        <h4 className="text-[28px]  font-bold">Category</h4>
        <div className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5 w-30 lg:ml-0 rounded-4xl mb-4"></div>
      </div>

      <div className="flex flex-wrap gap-2 justify-between w-full h-auto">
        {categoryData.map((cat, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`relative flex ${
                isEven ? "lg:flex-col-reverse flex-col" : "flex-col"
              } w-full sm:w-full md:w-[48%] gap-5 lg:w-[24%] mb-4 h-[75vh] perspective`}
            >
              <div
                className={`relative w-full h-[73%] transition-transform duration-700 transform-style preserve-3d ${
                  hoveredIndex === index ? "rotate-y-180" : ""
                }`}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <CategoryFrontSide categoryImg={cat.img[0]} />
                </div>
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                  <CategoryBackSide categoryImg={cat.img[1]} />
                </div>
              </div>

              {/* Text below */}
              <div
                className="w-full h-[25%] bg-gray-300 bg-opacity-90 text-white rounded-xl 
            flex items-center justify-center text-center px-4 backface-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="text-[24px] font-extrabold bg-gradient-to-b from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text uppercase text-center">
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
