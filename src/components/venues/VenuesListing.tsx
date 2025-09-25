import React from "react";
import { IFilters } from "@/interfaces";

import VenuesPreviewCards from "@/elements/VenuesPreviewCards";
import { DETAILS } from "@/constants/app.constants";
export default function VenuesListing({ filters }: { filters: IFilters }) {
  const filteredDetails = DETAILS.filter((item) => {
    return (
      (filters.location ? item.loc.includes(filters.location) : true) &&
      (filters.sport ? item.sport.includes(filters.sport) : true) &&
      (filters.date ? item.date.includes(filters.date) : true) &&
      (filters.timeSlot ? item.timeSlot.includes(filters.timeSlot) : true)
    );
  });

  return (
    <>
      <VenuesPreviewCards data={filteredDetails} />
    </>
  );
}
