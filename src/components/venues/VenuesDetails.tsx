import Btn from "@/elements/Btn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Venues from "../home/Venues";
import TopVenuesSlider from "@/elements/TopVenuesSlider";
import venuesImg from "../../../public/assets/Venuegame.png";
import { Venues } from "@/interfaces";
import VenueImg from "@/elements/VenueImg";
import { VENUES } from "@/constants/app.constants";

export default function VenuesDetailsData({ data }: { data: Venues }) {
  return (
    <>
      <div className="w-[90%] m-auto mt-30">
        <div className="flex flex-row items-center gap-5 text-md mb-10">
          <Link href={"/"}>Home</Link>
          <i className="fa-solid fa-chevron-right"></i>
          <Link href={"/venues"}>Venues</Link>
          <i className="fa-solid fa-chevron-right"></i>
          <p>{data.venueName}</p>
        </div>

        <div className="mb-5">
          <div className="flex flex-wrap w-[95%] justify-between">
            <h2 className="text-2xl font-semibold">{data.venueName}</h2>
            <div className="flex flex-row items-center text-gray-700 text-xl">
              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
              {data.rating}
            </div>
          </div>
          <div className="flex flex-row gap-10 mt-3">
            <div className="flex flex-row items-center text-gray-700">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <p>{data.loc}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-15">
          <VenueImg data={data} />
          <div className="w-full lg:w-2/5">
            <div className="flex flex-wrap"></div>
            <Btn title="Book Venue" />
            <div className="border-1 border-amber-600 rounded-md p-2 my-5 leading-8">
              <h3 className="font-semibold text-[19px]">Timing</h3>
              <p>{data.timeSlot}</p>
            </div>
            <div className="border-1 border-amber-600 rounded-md p-2 my-5 leading-8">
              <h3 className="font-semibold text-[19px]">Location</h3>
              <p>{data.loc}</p>
              <div className="mt-3">
                <iframe
                  width="100%"
                  height="250"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    data.loc?.toString()
                  )}&output=embed`}
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="p-5  my-20 w-full  lg:w-1/2 leading-8 text-justify">
            <h3 className="font-semibold text-[19px]">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              dolores repellat corporis sunt rerum fugiat exercitationem?
              Excepturi, consequatur. Quia illum nobis molestiae eos maiores
              debitis ab asperiores iure deleniti magnam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos culpa quo consequatur
              soluta iusto fuga neque eligendi maxime laboriosam quas, est,
              consectetur maiores harum reprehenderit sapiente illum ipsa
              perspiciatis laborum.
            </p>
            <div className="my-5 w-full  ">
              <h3 className="font-semibold text-[19px]">Amenties</h3>
              <div className="flex flex-wrap gap-6 ">
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-check-circle text-2xl text-amber-600"></i>
                  <p>Parking</p>
                </div>
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-check-circle text-2xl text-amber-600"></i>

                  <p>Warm Up Area</p>
                </div>
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-check-circle text-2xl text-amber-600"></i>

                  <p>Flood Light</p>
                </div>
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-check-circle text-2xl text-amber-600"></i>

                  <p>Washroom</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 mt-20 mb-10 p-4">
            <Image
              src={venuesImg}
              className="w-full h-auto rounded-lg"
              alt={""}
            />
            <div className="mt-10 w-full  ">
              <h3 className="font-semibold text-[19px]">Sports Available</h3>
              <div className="flex flex-wrap gap-6 ">
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-futbol text-2xl text-amber-600"></i>
                  <p>Football</p>
                </div>
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-baseball text-2xl text-amber-600"></i>

                  <p>Basketball</p>
                </div>
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-volleyball text-2xl text-amber-600"></i>

                  <p>Baseball</p>
                </div>
                <div className="border-1 border-amber-600 shadow-xl rounded-md lg:w-[30%] w-[30%] flex gap-2 items-center p-2 my-4 text-center">
                  <i className="fa-solid fa-baseball-bat-ball text-2xl text-amber-600"></i>

                  <p>Circket</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" font-semibold  p-2 text-4xl">
          <p>Reviews</p>
        </div>
        <TopVenuesSlider data={VENUES} />
      </div>
    </>
  );
}
