import { useState } from "react";
import { venues } from "@/constants/Venues";
import VenueGame from "@/elements/VenueGame";
import VenueHost from "@/elements/VenueHost";
import Image from "next/image";
import React from "react";

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
    <div className="w-[80%] m-auto">
      <h4 className="text-[28px] mb-5">Venues</h4>
      <div className="mb-2 flex flex-col justify-between items-center">
        <div className="flex flex-wrap gap-5">
          {visibleVenues.map((venue, index) => (
            <div
              key={index}
              className="lg:w-[32%] sm:w-[48%] w-full relative overflow-hidden"
            >
              <Image
                src={venue.img}
                alt="Venue"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-2 lg:left-65 z-10">
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
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + visibleCount >= venues.length}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
