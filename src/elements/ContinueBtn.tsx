import { IContunieBtn } from "@/interfaces";
import React from "react";

export default function ContinueBtn({ title }: IContunieBtn) {
  return (
    <div className="bg-black p-2 w-45 rounded-md text-white uppercase text-[16px]  mt-6">
      {title}
    </div>
  );
}
