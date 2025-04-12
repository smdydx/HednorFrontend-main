import React from "react";
import Image from "next/image";
import dicImg from "@/images/discount/extra20.png";

export const Discount = () => {
  return (
    <div className="nc-p-l-container nc-p-r-container mt-28">
      <Image className="w-full" src={dicImg} alt="" priority />
    </div>
  );
};
