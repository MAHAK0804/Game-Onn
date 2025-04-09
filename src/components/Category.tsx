import React, { useState } from "react";
import CategoryFrontSide from "@/elements/CategoryFrontSide";
import CategoryBackSide from "@/elements/CategoryBackSide";
import { categoryData } from "@/constants/Category";

export default function Category() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-[80%] m-auto mb-20">
      <div className="mb-2">
        <h4 className="text-[28px]">Category</h4>
      </div>

      <div className="flex flex-wrap gap-2 justify-between w-full h-auto">
        {categoryData.map((cat, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={index}
              className="relative w-full sm:w-full md:w-[48%] lg:w-[24%] mb-4 h-[300px] perspective"
            >
              {isEven ? (
                // Even index: Image first, then text
                <>
                  {/* Flip card */}
                  <div
                    className={`relative w-full h-[70%] transition-transform duration-700 transform-style preserve-3d ${
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
                    className="w-full h-[30%] bg-gray-300 bg-opacity-90 text-white rounded-xl 
            flex items-center justify-center text-center px-4 backface-hidden mt-2"
                  >
                    <p
                      className="text-[24px] font-extrabold bg-gradient-to-b from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text uppercase cursor-pointer text-center"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {cat.text}
                    </p>
                  </div>
                </>
              ) : (
                // Odd index: Text first, then image
                <>
                  {/* Text on top */}
                  <div
                    className="w-full h-[30%] bg-gray-300 bg-opacity-90 text-white rounded-xl 
            flex items-center justify-center text-center px-4 backface-hidden mb-2"
                  >
                    <p
                      className="text-[24px] font-extrabold bg-gradient-to-b from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text uppercase cursor-pointer text-center"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {cat.text}
                    </p>
                  </div>

                  {/* Flip card */}
                  <div
                    className={`relative w-full h-[70%] transition-transform duration-700 transform-style preserve-3d ${
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
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
