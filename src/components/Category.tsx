import React from "react";

import CategoryFrontSide from "@/elements/CategoryFrontSide";
import CategoryBackSide from "@/elements/CategoryBackSide";
import { categoryData } from "@/constants/Category";

export default function Category() {
  return (
    <div className="w-[80%] m-auto">
      <div className="mb-2">
        <h4 className="text-[28px]">Category</h4>
      </div>
      <div className="flex flex-wrap justify-between w-full h-auto">
        {categoryData.map((cat) => {
          return (
            <>
              <div className="relative group w-full sm:w-full md:w-[48%] lg:w-[24%] mb-4 h-85 perspective">
                {/* Flip Card Inner */}
                <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  {/*Front Side */}
                  <CategoryFrontSide text={cat.text} />
                  {/* Back Side */}
                  <CategoryBackSide categoryImg={cat.img} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
