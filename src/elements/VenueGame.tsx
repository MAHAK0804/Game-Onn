import { IContunieBtn } from "@/interfaces";
import React from "react";

export default function VenueGame({ title }: IContunieBtn) {
  return (
    <div className="bg-transparent border border-white rounded-md w-full m-auto text-white p-2">
      {title}
    </div>
  );
}
