import { IBtnTitle } from "@/interfaces";
import React from "react";

export default function VenueGame({ title }: IBtnTitle) {
  return (
    <div className="bg-gray-300 cursor-pointer  border border-white rounded-md w-2/5 ml-auto mr-5 p-2">
      {title}
    </div>
  );
}
