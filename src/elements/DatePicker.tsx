import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { IFields } from "@/interfaces/index";
import { IFilters } from "@/interfaces";

export const CalenderDate = ({
  item,
  filters,
  setFilters,
}: {
  item: IFields;
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleChange = (date: Date | null) => {
    if (!date) return;
    const formatted = date.toISOString().split("T")[0];
    setFilters({ ...filters, [item.name]: formatted });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full lg:w-1/4 border border-gray-400 rounded-md p-2 text-sm bg-white shadow-xl flex items-center">
      <DatePicker
        selected={
          filters[item.name] ? new Date(filters[item.name]) : new Date()
        }
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        onClickOutside={() => setIsOpen(false)}
        open={isOpen}
        onSelect={() => setIsOpen(false)}
        ref={ref}
        className="focus:border-0 outline-0 p-1 w-full cursor-pointer bg-transparent z-10"
        wrapperClassName="w-full"
        onFocus={() => setIsOpen(true)}
      />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-4 z-20 text-gray-500 cursor-pointer"
      >
        <Calendar size={16} />
      </button>
    </div>
  );
};
