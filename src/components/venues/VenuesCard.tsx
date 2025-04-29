import React from "react";
import { details } from "@/constants/venuesDetails";
import { IFilters } from "@/interfaces";

import Responsive from "@/elements/Slider";
export default function VenuesCard({ filters }: { filters: IFilters }) {
  const filteredDetails = details.filter((item) => {
    return (
      (filters.location ? item.loc.includes(filters.location) : true) &&
      (filters.sport ? item.sport.includes(filters.sport) : true) &&
      (filters.date ? item.date.includes(filters.date) : true) &&
      (filters.timeSlot ? item.timeSlot.includes(filters.timeSlot) : true)
    );
  });

  return (
    <>
      <Responsive data={filteredDetails} />
    </>
  );
}
