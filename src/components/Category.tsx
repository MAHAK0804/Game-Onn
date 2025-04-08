import React from "react";
import soccer from "../../public/assets/soccerBall.png";
import closeUpBasket from "../../public/assets/closeBasketBall.png";
import sportCar from "../../public/assets/sportCar.png";
import redPing from "../../public/assets/redPing.png";
import CategoryFrontSide from "@/elements/CategoryFrontSide";
import CategoryBackSide from "@/elements/CategoryBackSide";

export default function Category() {
  return (
    <div className="w-[80%] m-auto">
      <div className="mb-2">
        <h4 className="text-[28px]">Category</h4>
      </div>
      <div className="flex flex-wrap justify-between w-full h-auto">
        <div className="relative group w-full sm:w-full md:w-[48%] lg:w-[24%] mb-4 h-64 perspective">
          {/* Flip Card Inner */}
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
            {/*Front Side */}
            <CategoryFrontSide text="football" />
            {/* Back Side */}
            <CategoryBackSide categoryImg={soccer} />
          </div>
        </div>
        <div className="relative group w-full sm:w-full md:w-[48%] lg:w-[24%] mb-4 h-64 perspective">
          {/* Flip Card Inner */}
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
            {/*Front Side */}
            <CategoryFrontSide text="BasketBall" />
            {/* Back Side */}
            <CategoryBackSide categoryImg={closeUpBasket} />
          </div>
        </div>
        <div className="relative group w-full sm:w-full md:w-[48%] lg:w-[24%] mb-4 h-64 perspective">
          {/* Flip Card Inner */}
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
            {/*Front Side */}
            <CategoryFrontSide text="Car sport" />
            {/* Back Side */}
            <CategoryBackSide categoryImg={sportCar} />
          </div>
        </div>
        <div className="relative group w-full sm:w-full md:w-[48%] lg:w-[24%] mb-4 h-64 perspective">
          {/* Flip Card Inner */}
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
            {/*Front Side */}
            <CategoryFrontSide text="Table Tennis" />
            {/* Back Side */}
            <CategoryBackSide categoryImg={redPing} />
          </div>
        </div>
      </div>
    </div>
  );
}
