import React, { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { Venues } from "@/interfaces";
import VenueImg from "./VenueImg";
import VenueDetailsCard from "./VenueDetailsCard";
import Btn from "./Btn";
import { DETAILS } from "@/constants/app.constants";

export default function VenuesPreviewCards({ data }: { data: Venues[] }) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = data.slice(startIndex, endIndex);
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const [openVenueId, setOpenVenueId] = useState<number | string | null>(null);

  const handleOpen = (id: number | string) => {
    setOpenVenueId(id);
  };

  const handleClose = () => {
    setOpenVenueId(null);
  };

  const drawerData = DETAILS.find((el) => el.id === openVenueId);
  console.log("data", drawerData);

  useEffect(() => {
    if (openVenueId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openVenueId]);

  return (
    <>
      <div className="my-8 lg:my-10 mx-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleData.map((venue) => (
            <>
              <div
                onClick={() => handleOpen(venue.id)}
                className="cursor-pointer border-1 border-gray-500 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-xl"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={venue.img[0]}
                    alt="Venue"
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <VenueDetailsCard
                  name={venue.venueName}
                  rating={venue.rating}
                  loc={venue.loc}
                  reviews={venue.reviews}
                  sports={venue.sport}
                />
              </div>
            </>
            // </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-2 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="cursor-pointer"
          >
            <i
              className={`fa-solid fa-chevron-left ${
                currentPage === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-black"
              }`}
            ></i>
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageClick(i + 1)}
              className={`px-4 py-2 rounded-full cursor-pointer ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="cursor-pointer"
          >
            <i
              className={`fa-solid fa-chevron-right ${
                currentPage === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-black"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <>
        <div
          className={`fixed inset-0 bg-transparent bg-opacity-20 backdrop-blur-md z-40 transition-opacity duration-300 ${
            openVenueId ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        <div
          className={`fixed right-0 top-0 h-full mt-16 w-full lg:w-1/3 bg-white shadow-xl z-50 transition-transform duration-300 transform ${
            openVenueId ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Venue Details</h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-black text-xl cursor-pointer"
            >
              <i className="fa-solid fa-x "></i>
            </button>
          </div>
          <div className="p-4 overflow-y-auto max-h-[83vh] hide-scrollbar">
            <div className="flex w-full justify-center items-center p-4">
              <VenueImg data={drawerData} />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h1 className="text-2xl font-bold leading-7">
                {drawerData?.venueName}
              </h1>
              <p className="text-sm text-default-500">{drawerData?.loc}</p>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                    <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {/* <p className="text-medium text-foreground font-medium">
                        {formatDate(drawerData?.date)}
                      </p> */}
                    <p className="text-small text-default-500">
                      {drawerData?.timeSlot}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <Link
                      className="group gap-x-0.5 text-medium text-foreground font-medium"
                      href={`https://www.google.com/maps/place/${drawerData?.loc}`}
                      rel="noreferrer noopener"
                    >
                      {drawerData?.loc}
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-3 items-start">
                  <h3 className="font-semibold text-[19px]">About the Venue</h3>
                  <div className="text-medium text-default-500 flex flex-col gap-2 text-justify">
                    <p>{drawerData?.desc}</p>
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-3 items-start">
                  <h3 className="font-semibold text-[19px]">
                    Sports Available
                  </h3>
                  <div className="flex flex-wrap gap-6 ">
                    {drawerData?.sport.map((el) => (
                      <>
                        <div className="border-1 border-amber-600 shadow-xl rounded-md  flex gap-2 items-center p-2 my-4 text-center">
                          <i className="fa-solid fa-futbol text-2xl text-amber-600"></i>
                          <p>{el}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <div className="my-5 w-full  ">
                  <h3 className="font-semibold text-[19px]">Amenties</h3>
                  <div className="flex flex-wrap gap-6 ">
                    {drawerData?.amenties.map((el) => (
                      <>
                        <div className="border-1 border-amber-600 shadow-xl rounded-md  flex gap-2 items-center p-2 my-4 text-center">
                          <i className="fa-solid fa-check-circle text-2xl text-amber-600"></i>
                          <p>{el}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Btn title="Book Venue" />
          </div>
        </div>
      </>
    </>
  );
}
