import Image from "next/image";
import React from "react";
import BasketBall from "../assets/images/basketball_sport_icon_in_minimalist_3d_render_2 1.png";
import Text from "../assets/images/Top scorer to the final match.png";

export default function FootballText() {
  return (
    <>
      <div>
        <Image
          src={BasketBall}
          alt="Picture"
          width={500}
          height={500}
          className="absolute z-0 left-0 top-0"
        />
        <Image
          src={Text}
          alt="Text"
          width={370}
          height={370}
          className="absolute z-10 top-20 left-25"
        />
      </div>
    </>
  );
}
