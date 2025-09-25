import React, { useState } from "react";
import { IFilters } from "@/interfaces";
import Banner from "@/elements/Banner";
import { CalenderDate } from "@/elements/DatePicker";
import VenuesListing from "./VenuesListing";
import { INPUT_FIELDS, SPORTS, TIMESLOTS } from "@/constants/app.constants";

const VenuesPage = () => {
  const [filters, setFilters] = useState({} as IFilters);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropDown] = useState<boolean | null | string>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <Banner
        video={
          "https://videos.pexels.com/video-files/4307591/4307591-uhd_2560_1440_30fps.mp4"
        }
        text={"Where passion meets the pitch,and every cheer echoes greatness."}
      />

      <div className="w-[90%] m-auto mt-5 lg:mt-10  rounded-xl">
        {/* Filters  */}
        <div className=" p-4   rounded-2xl">
          {/* text icon */}
          <div className="flex flex-row  justify-between items-center">
            <p className="text-md pb-2 font-semibold">
              Filters
              {/* <i className="fa-solid fa-filter ml-1 hidden lg:visible"></i> */}
            </p>
            <button
              className={`  ${
                isOpen ? "block" : "hidden lg:block"
              } cursor-pointer`}
              onClick={() => {
                console.log("clear");

                setFilters({} as IFilters);
              }}
            >
              <p>Clear Filters</p>
            </button>
            <button className="lg:hidden" onClick={toggleMenu}>
              <i
                className={`  ${
                  isOpen ? "fa-circle-xmark" : "fa-filter"
                } fa-solid `}
              ></i>
            </button>
          </div>

          {/* inputs for filter */}
          <div
            className={`${
              isOpen ? "flex" : "hidden lg:flex"
            } flex-col  lg:flex-row justify-between items-center gap-4`}
          >
            {/* input fields */}
            {INPUT_FIELDS.map((item, index) => (
              <>
                {/* input type-select */}

                {item.type === "select" ? (
                  <div key={index} className="flex flex-col  w-full lg:w-1/4">
                    {/* Dropdown Trigger */}
                    <div
                      className="flex items-center justify-between border border-gray-400 rounded-md p-3 cursor-pointer text-sm bg-white shadow-xl"
                      onClick={() =>
                        setDropDown(dropdown === item.name ? false : item.name)
                      }
                    >
                      <span>
                        {filters[item.name] || `Select ${item.label}`}
                      </span>
                      <i className="fa-solid fa-chevron-down ml-2"></i>
                    </div>

                    {/* Dropdown List */}
                    {dropdown === item.name && (
                      <div className="absolute z-10 mt-13 w-full lg:w-1/5 border border-gray-300 bg-white rounded-md  max-h-40 overflow-y-auto shadow-xl">
                        {item.label === "Sport"
                          ? SPORTS.map((el) => (
                              <div
                                key={el}
                                onClick={() => {
                                  setFilters({
                                    ...filters,
                                    [item.name]: el,
                                  });
                                  setDropDown(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {el}
                              </div>
                            ))
                          : TIMESLOTS.map((slot, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  setFilters({ ...filters, [item.name]: slot });
                                  setDropDown(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {slot}
                              </div>
                            ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // input type date
                  <>
                    {item.type === "date" ? (
                      // <>
                      <CalenderDate
                        item={item}
                        filters={filters}
                        setFilters={setFilters}
                      />
                    ) : (
                      // input type text
                      <div
                        className="flex flex-row justify-between items-center w-full lg:w-1/4 border border-gray-400 rounded-md p-2 text-sm bg-white shadow-xl cursor-pointer"
                        onClick={() => {
                          console.log("input");
                        }}
                      >
                        <input
                          type={item.type}
                          className="focus:border-0 outline-0 p-1 w-full"
                          placeholder={item.label}
                          value={filters[item.name] || ""}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              [item.name]: e.target.value,
                            })
                          }
                        />
                        <i className="fa-solid fa-location-dot mr-1"></i>
                      </div>
                    )}
                  </>
                )}
              </>
            ))}
          </div>
        </div>
        {/* Vennue Cards */}
        <VenuesListing filters={filters} />
      </div>
    </div>
  );
};

export default VenuesPage;
