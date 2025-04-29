import { IContunieBtn } from "@/interfaces";
import React from "react";

export default function VenueGame({ title }: IContunieBtn) {
  return (
    <div className="bg-gray-300 cursor-pointer  border border-white rounded-md w-1/4 ml-auto mr-5 p-2">
      {title}
    </div>
  );
}
