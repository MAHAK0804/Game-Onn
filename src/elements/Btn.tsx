import { IBtnTitle } from "@/interfaces";
import React from "react";

export default function Btn({ title }: IBtnTitle) {
  return (
    <div
      className={`${title == "Book Venue" ? "bg-amber-600" : "bg-black"} p-2 ${
        title == "Login"
          ? "w-25"
          : `${title == "Book Venue" ? "w-full" : "w-35"}`
      } rounded-md text-white text-center uppercase text-[16px] lg:m-auto mt-5 cursor-pointer transition-all 
      duration-300 ease-in-out transform ${
        title == "Book Venue" ? "hover:bg-amber-500" : "hover:bg-gray-800"
      }  hover:scale-105 active:scale-95
      
      `}
    >
      {title}
    </div>
  );
}
