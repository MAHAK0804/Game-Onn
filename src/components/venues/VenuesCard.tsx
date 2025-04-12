import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { details } from "@/constants/venuesDetails";
import VenueDetCard from "@/elements/VenueDetCard";
import { IFilters } from "@/interfaces";

export default function VenuesCard({ filters }: { filters: IFilters }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  // filter list from details json

  const filteredDetails = details.filter((item) => {
    return (
      (filters.location ? item.loc.includes(filters.location) : true) &&
      (filters.sport ? item.sport.includes(filters.sport) : true) &&
      (filters.date ? item.date.includes(filters.date) : true) &&
      (filters.timeSlot ? item.timeSlot.includes(filters.timeSlot) : true)
    );
  });

  // // Reset pagination when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [filters]);

  const nextSlide = () => {
    if (currentIndex + visibleCount < filteredDetails.length) {
      setCurrentIndex(currentIndex + visibleCount);
    }
  };

  const prevSlide = () => {
    if (currentIndex - visibleCount >= 0) {
      setCurrentIndex(currentIndex - visibleCount);
    }
  };

  const visibleVenues = filteredDetails.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="mt-10">
      <div className="flex justify-between gap-2">
        <h4 className="text-[28px] bg-gradient-to-r from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text font-bold">
          Venues
          <div className="bg-gradient-to-r from-[#262626] to-[#B8C2CE] h-0.5 w-23 lg:ml-0 rounded-md mb-4"></div>
        </h4>
        <div className="flex justify-center gap-2 mx-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="py-1 rounded-2xl disabled:opacity-50 cursor-pointer"
          >
            <i className="fa-solid fa-caret-left text-3xl"></i>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + visibleCount >= filteredDetails.length}
            className="py-1 rounded-4xl disabled:opacity-50 cursor-pointer"
          >
            {/* <Btn title="Next" /> */}
            <i className="fa-solid fa-caret-right text-3xl"></i>
          </button>
        </div>
      </div>

      {filteredDetails.length > 0 ? (
        <div className="mt-4 mb-9 ">
          <div className="flex  w-full flex-wrap gap-6">
            {visibleVenues.map((venue, index) => (
              <div
                key={index}
                className="lg:w-[23.6%] h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer 
                transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-100"
              >
                <div className="w-full h-1/2 ">
                  <Image
                    src={venue.img}
                    alt="Venue"
                    width={400}
                    height={150}
                    className="w-full h-full border object-cover"
                  />
                </div>

                <VenueDetCard
                  name={venue.venueName}
                  rating={venue.rating}
                  cost={venue.cost}
                  time={venue.time}
                  distance={venue.distance}
                  loc={venue.loc}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-5">
          No venues found matching your filters.
        </p>
      )}
    </div>
  );
}
