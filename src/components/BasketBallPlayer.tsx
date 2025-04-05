import React from "react";
import Player from "../assets/images/basketball-player-action-sunset 1.png";
import Image from "next/image";

export default function BasketBallPlayer() {
  return (
    <>
      <div className="flex-col">
        <Image
          src={Player}
          width={600}
          height={600}
          alt={"Player"}
          className="absolute top-10 left-50"
        />
        <div className="w-2xs ml-110 pt-110">
          <p>
            The EuroLeague Finals Top Scorer is the individual award for the
            player that gained the highest points in the EuroLeague Finals
          </p>
        </div>
      </div>
    </>
  );
}
