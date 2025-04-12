import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerEle = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className="w-full p-2 cursor-pointer"
      placeholderText="DD-MM-YY"
    />
  );
};
