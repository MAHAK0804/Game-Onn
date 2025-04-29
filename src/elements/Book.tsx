import { IContunieBtn } from "@/interfaces";
import React from "react";

export default function Book({ title }: IContunieBtn) {
  return (
    <div
      className={`bg-black p-2 ${
        title == "Login" ? "w-fit" : "w-35"
      } rounded-md text-white text-center uppercase text-[16px]  my-5 cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105 active:scale-95`}
    >
      {title}
    </div>
  );
}
