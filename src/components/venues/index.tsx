import React, { useState } from "react";
import VenuesCard from "./VenuesCard";
import { categoryData } from "@/constants/Category";
import { timeSlots } from "@/constants/timeSlots";
import { inputFIeld } from "@/constants/inputFields";
import { IFilters } from "@/interfaces";
import Banner from "@/elements/Banner";

const VenuesPage = () => {
  const [filters, setFilters] = useState({} as IFilters);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropDown] = useState<boolean | null | string>(null);
  console.log(dropdown);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
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
            {inputFIeld.map((item) => (
              <>
                {/* input type-select */}

                {item.type === "select" ? (
                  <div className="flex flex-col relative w-full lg:w-1/4">
                    {/* Dropdown Trigger */}
                    <div
                      className="flex items-center justify-between border border-gray-400 rounded-md p-2 cursor-pointer text-sm bg-white shadow-xl"
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
                      <div className="absolute z-10 mt-1 w-full border border-gray-300 bg-white rounded-md shadow-md max-h-40 overflow-y-auto shadow-xl">
                        {item.label === "Sport"
                          ? categoryData.map((el) => (
                              <div
                                key={el.text}
                                onClick={() => {
                                  setFilters({
                                    ...filters,
                                    [item.name]: el.text,
                                  });
                                  setDropDown(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {el.text}
                              </div>
                            ))
                          : timeSlots.map((slot, index) => (
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
                  // handle date/text inputs...
                  // input type date
                  <>
                    {item.type == "date" ? (
                      <div className=" w-full lg:w-1/4 border border-gray-400 rounded-md p-2 cursor-pointer text-sm bg-white shadow-xl">
                        <input
                          type={item.type}
                          className="focus: border-0 outline-0 w-full cursor-pointer"
                          placeholder={item.label}
                          // value={location}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              [item.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                    ) : (
                      // input type text
                      <div className="flex flex-row justify-between items-center w-full lg:w-1/4 border border-gray-400 rounded-md p-2 text-sm bg-white shadow-xl ">
                        <input
                          type={item.type}
                          className="focus: border-0 outline-0 w-full"
                          placeholder={item.label}
                          // value={location}
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
        <VenuesCard filters={filters} />
      </div>
    </>
  );
};

export default VenuesPage;
