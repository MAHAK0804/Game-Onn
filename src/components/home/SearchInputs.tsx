import game from "../../../public/assets/Path.png";
import calender from "../../../public/assets/calendar-event.png";
import loc from "../../../public/assets/map-2.png";
import Image from "next/image";
import React from "react";
import Btn from "@/elements/Btn";
import { CATEGORY_DATA } from "@/constants/app.constants";
// import { categoryData } from "@/constants/Category";

const SearchInputs = () => {
  return (
    <div className="w-[90%] m-auto shadow-xl items-center border border-gray-50 mb-10 bg-gray-300 rounded-2xl p-5 lg:p-7">
      <div className="w-full  m-auto flex flex-wrap justify-between items-center bg-white rounded-2xl p-5 lg:p-5">
        <div className=" w-full lg:w-1/5 flex flex-row items-center gap-2">
          <div>
            <Image src={game} alt="game" />
          </div>
          <div className="flex flex-col w-full">
            <h5 className="text-[14px] ">Games</h5>
            <select className="p-2 w-full">
              <option value="Select Sport">Select</option>
              {CATEGORY_DATA.map(
                (el: {
                  text:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<unknown>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<unknown>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }) => (
                  <>
                    <option value={`${el.text}`}>{el.text}</option>
                  </>
                )
              )}
            </select>
          </div>
        </div>

        <div className="w-full lg:w-1/5 flex flex-row items-center gap-2">
          <div>
            <Image src={calender} alt="calender" />
          </div>
          <div className="flex flex-col w-full">
            <h5 className="text-[14px]">Years</h5>
            <h5 className="text-[14px] py-1 w-full">2022-2023</h5>
          </div>
        </div>
        <div className="w-full lg:w-1/5 flex flex-row  items-center gap-2">
          <div>
            <Image src={calender} alt="calender" />
          </div>
          <div className="flex flex-col w-full">
            <h5 className="text-[14px]">Date</h5>
            <div className="py-1 w-full">
              {/* <DatePickerEle /> */}
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/5 flex flex-row  items-center gap-2">
          <div>
            <Image src={loc} alt="loc" />
          </div>
          <div className="flex flex-col w-full">
            <h5 className="text-[14px]">Locations</h5>
            <select className="py-2 w-full">
              <option value="HongKong Stadium">HongKong Stadium</option>
              <option value="India">India</option>
              <option value="New York">New York</option>
              <option value="Swizterland">Swizterland</option>
            </select>
          </div>
        </div>
        <div>
          <Btn title="Search" />
        </div>
      </div>
    </div>
  );
};

export default SearchInputs;
