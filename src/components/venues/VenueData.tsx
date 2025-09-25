/* eslint-disable react/jsx-key */
import React, { ReactNode } from "react";

import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Banner from "@/elements/Banner";
import Btn from "@/elements/Btn";

type VenueType = {
  distance: number;

  cost: ReactNode;
  img: string | StaticImport;
  desc: ReactNode;
  loc: ReactNode;
  venueName: string;
  sport: string[];
  multiImg: StaticImageData[];
};

export default function VenueData({ data }: { data: VenueType }) {
  return (
    <>
      <Banner
        video={
          "https://videos.pexels.com/video-files/2249402/2249402-sd_640_360_24fps.mp4"
        }
        text={"More than a match, it’s a moment, and this is where it happens."}
      />
      <div className="w-[90%] m-auto my-24 rounded-xl">
        <div className="w-full flex flex-col lg:flex-row gap-1 ">
          {/* Image  */}

          <div className="w-full h-[400px]  lg:w-2/5 lg:h-[570px]">
            <Image
              src={data.img}
              alt={`Venue image `}
              className="object-cover rounded-xl w-full h-full"
            />
          </div>

          {/* Venue Name */}
          <div className="w-full  lg:w-2/5 p-2 lg:p-10">
            <h2 className="font-bold text-2xl">{data.venueName}</h2>
            {/* <div className="flex flex-row gap-2 items-center"> */}
            <p className="text-gray-400">
              <i className="fa-solid fa-location-dot mr-2"></i>

              {data.loc}
            </p>
            {/* </div> */}
            <h4 className="font-bold mt-5">Description</h4>
            <p className="text-justify mb-5">{data.desc}</p>
            <h4 className="font-bold">Cost</h4>
            <p className="mb-2">{data.cost}/1 hour</p>
            <h4 className="font-bold">Distance</h4>
            <p className="mb-2">
              <i className="fa-solid fa-location-dot mr-1"></i>
              {data?.distance <= 1
                ? `${data.distance} km`
                : `${data.distance} kms`}{" "}
              away from location
            </p>
            <Btn title="Book Venue" />
          </div>
          <div className="w-full  lg:w-1/5 flex flex-col gap-2">
            <div className="text-xl font-bold p-2 lg:p-5">
              Venue Available for Sports
            </div>
            {data.sport.map((el) => (
              <div className=" bg-gray-300 cursor-pointer  border border-white text-center rounded-md w-2/5 mr-auto m-3  p-2">
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
