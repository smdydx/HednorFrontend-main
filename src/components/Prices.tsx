import React, { FC } from "react";

export interface PricesProps {
  className?: string;
  price?: number;
  contentClass?: string;
}

const Prices: FC<PricesProps> = ({
  className = "",
  price = 33,
  contentClass = "py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium",
}) => {
  return (
    <div className={`${className} `}>
      <div className={`flex items-center gap-2 ${contentClass}`}>
        <span className="text-black font-semibold text-md lg:text-2xl !leading-none">
          ₹{String(price)}
        </span>
        <del className="text-gray-500 !leading-none text-sm">
          ₹{String(price)}
        </del>
      </div>
    </div>
  );
};

export default Prices;
