import Image from "next/image";
import React from "react";
import BasketBall from "../assets/images/basketball_sport_icon_in_minimalist_3d_render_2 1.png";

export default function FootballText() {
  return (
    <>
      <div className="">
        <Image
          src={BasketBall}
          alt="Picture"
          width={600}
          height={600}
          className=""
        />
        <h1 className=""> fssdd</h1>
      </div>
    </>
  );
}
