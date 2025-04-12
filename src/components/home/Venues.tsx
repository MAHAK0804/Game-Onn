import { useState } from "react";
import { venues } from "@/constants/Venues";
import VenueGame from "@/elements/VenueGame";
import VenueHost from "@/elements/VenueHost";
import Image from "next/image";
import React from "react";
import Btn from "@/elements/Btn";

export default function Venues() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    if (currentIndex + visibleCount < venues.length) {
      setCurrentIndex(currentIndex + visibleCount);
    }
  };

  const prevSlide = () => {
    if (currentIndex - visibleCount >= 0) {
      setCurrentIndex(currentIndex - visibleCount);
    }
  };

  const visibleVenues = venues.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="w-[90%] m-auto">
      <h4 className="text-[28px] bg-gradient-to-r from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text font-bold">
        Venues
      </h4>
      <div className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5 w-23 lg:ml-0  rounded-md mb-4"></div>

      <div className="mb-2 flex flex-col justify-between items-center">
        <div className="flex flex-wrap gap-6">
          {visibleVenues.map((venue, index) => (
            <div
              key={index}
              className="lg:w-[32%] sm:w-[48%] w-full relative rounded-2xl mb-5 shadow-xl border border-gray-50 overflow-hidden "
            >
              <Image
                src={venue.img}
                alt="Venue"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
              <div className="absolute border border-green-800 text-center ml-2 top-2 lg:left-82 z-10">
                <VenueGame title={venue.game} />
              </div>
              <VenueHost
                img={venue.person.pic}
                name={venue.person.name}
                date={venue.date}
                heading={venue.heading}
                details={venue.details}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2 mx-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className=" py-1 rounded-2xl disabled:opacity-50 cursor-pointer"
          >
            <Btn title="Prev" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + visibleCount >= venues.length}
            className=" py-1 rounded-4xl disabled:opacity-50 cursor-pointer"
          >
            <Btn title="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}
