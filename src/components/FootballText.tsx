import Image from "next/image";
import React from "react";
// import BasketBall from "../../public/assets/basketball_sport_icon_in_minimalist_3d_render_2 1.png";
import Text from "../../public/assets/text.png";

export default function FootballText() {
  return (
    <div
      className="bg-[url(/assets/bgImg.png)] bg-cover bg-center relative w-full max-w-[700px] 
    h-auto aspect-[7/6] mx-auto"
    >
      {/* Basketball Image Background */}
      {/* <Image
        src={BasketBall}
        alt="Basketball"
        fill
        className="absolute object-contain z-0"
        sizes="(max-width: 768px) 100vw, 700px"
      /> */}

      {/* Overlay Text Image */}
      <Image
        src={Text}
        alt="Top scorer text"
        width={500}
        height={300}
        className="
      absolute z-10
      top-[80px] left-1/2 -translate-x-1/2 w-[90%]

      sm:top-[100px] sm:w-[400px]

      md:top-[120px] md:w-[450px]

      lg:top-[130px] lg:left-[140px] lg:translate-x-0 lg:w-[500px]
    "
      />
    </div>
  );
}
