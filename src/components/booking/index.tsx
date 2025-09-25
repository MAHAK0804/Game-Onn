import {
  sportIcons,
  statusColors,
  VENUES_HISTORY,
} from "@/constants/app.constants";
import { VenueType } from "@/interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Booking() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [openVenueId, setOpenVenueId] = useState<number | string | null>(null);

  const totalPages = Math.ceil(VENUES_HISTORY.length / itemsPerPage);
  const visibleData = VENUES_HISTORY.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page: number) => setCurrentPage(page);
  const handlePrev = () =>
    currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  const handleOpen = (id: number | string) => setOpenVenueId(id);
  const handleClose = () => setOpenVenueId(null);

  const drawerData: VenueType | undefined = VENUES_HISTORY.find(
    (el) => el.id === openVenueId
  );
  console.log("venueID", openVenueId);

  useEffect(() => {
    document.body.style.overflow = openVenueId !== null ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openVenueId]);

  return (
    <div className="max-w-6xl mx-auto px-6 mt-24">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center text-gray-900 mb-12 tracking-tight select-none">
        Venue Booking History
      </h2>

      <div className="space-y-6">
        {visibleData.map((venue) => (
          <div
            key={venue.id}
            onClick={() => handleOpen(venue.id)}
            className="flex gap-6 items-center bg-white rounded-2xl shadow hover:shadow-lg p-4 transition-all duration-300 cursor-pointer"
          >
            <div className="relative min-w-[120px] h-[80px] rounded-xl overflow-hidden border border-amber-300">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-amber-600 text-white text-sm p-2 rounded-full shadow">
                <i className={`${sportIcons[venue.sport]}`}></i>
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {venue.name}
              </h3>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-amber-600"></i>
                {venue.location}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <i className="fa-solid fa-calendar-days text-amber-600"></i>
                {new Date(venue.date).toLocaleDateString()}
              </p>
            </div>

            <div>
              <span
                className={`inline-block px-4 py-1 text-sm font-semibold rounded-full ${
                  statusColors[venue.status]
                }`}
              >
                {venue.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-12 gap-3 flex-wrap select-none">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`rounded-full p-3 text-lg transition-colors duration-200 ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "hover:bg-amber-100 text-amber-600"
          }`}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageClick(i + 1)}
            className={`px-5 py-2 rounded-full font-semibold transition-shadow duration-200 ${
              currentPage === i + 1
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`rounded-full p-3 text-lg transition-colors duration-200 ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "hover:bg-amber-100 text-amber-600"
          }`}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 bg-transparent bg-opacity-20 backdrop-blur-md z-40 transition-opacity duration-300 ${
          openVenueId ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed right-0 top-0 h-full mt-16 w-full lg:w-1/3 bg-white shadow-xl z-50 transition-transform duration-300 transform ${
          openVenueId ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 overflow-y-auto max-h-[83vh] hide-scrollbar">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Booking Details</h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-black text-xl cursor-pointer"
            >
              <i className="fa-solid fa-x "></i>
            </button>
          </div>

          <div className="w-full h-50 mt-5 relative rounded-xl overflow-hidden border border-amber-300 mb-4">
            {drawerData?.image && (
              <Image
                src={drawerData.image}
                alt={drawerData.name}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                {drawerData?.name}
              </h1>
              {drawerData?.status && (
                <span
                  className={`inline-block px-4 py-1 text-sm font-semibold rounded-full ${
                    statusColors[drawerData.status]
                  } w-fit`}
                >
                  {drawerData.status}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-amber-600"></i>
              {drawerData?.location}
            </p>
            <div className="flex flex-wrap gap-4 w-full">
              {drawerData?.timeSlots?.map((el) => (
                <div
                  key={el.id}
                  className="bg-white w-full shadow-lg rounded-2xl p-5 space-y-4 border border-amber-100"
                >
                  <div className="flex justify-between items-center text-base font-semibold text-gray-800">
                    <span className="capitalize">{el.sport}</span>
                    <span className="text-sm text-gray-500">
                      Court-{el.court}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <div>
                      <span className="font-medium text-gray-700">Date:</span>{" "}
                      <span className="text-gray-900">{el.date}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">
                        Duration:
                      </span>{" "}
                      <span className="text-gray-900">{el.time}</span>
                    </div>
                  </div>

                  <div className="border-t pt-3 grid grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                    <div>
                      <span className="block text-gray-500">Check-In</span>
                      <span className="text-amber-600">{el.checkIn}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-gray-500">Check-Out</span>
                      <span className="text-amber-600">{el.checkOut}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Breakdown */}
            {drawerData?.price && (
              <div className="bg-white rounded-2xl shadow-xl p-6 w-full mt-4 space-y-4 border border-amber-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Pricing Breakdown
                </h3>

                <div className="flex justify-between text-gray-600">
                  <span>Sub Total</span>
                  <span>₹{drawerData.price.subTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>₹{drawerData.price.tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Booking Fees</span>
                  <span>₹{drawerData.price.bookingFees.toFixed(2)}</span>
                </div>

                <hr className="border-t my-2" />

                <div className="flex justify-between text-gray-800 font-bold text-base">
                  <span>Total</span>
                  <span>₹{drawerData.price.total.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
