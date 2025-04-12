"use client";

import React, { FC, useEffect, useId, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import ProductCard from "./ProductCard";
import { Product, PRODUCTS } from "@/data/data";
import Prev from "@/shared/NextPrev/Prev";
import Next from "@/shared/NextPrev/Next";

export interface SectionSliderProductCardProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  headingFontClassName?: string;
  headingClassName?: string;
  subHeading?: string;
  data?: Product[];
}

const SectionSliderProductCard: FC<SectionSliderProductCardProps> = ({
  className = "",
  itemClassName = "",
  headingFontClassName,
  headingClassName,
  heading,
  subHeading = "Just for You",
  data = PRODUCTS.filter((_, i) => i < 8 && i > 2),
}) => {
  const sliderRef = useRef(null);

  //
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      // direction: document.querySelector("html")?.getAttribute("dir") || "ltr",
      perView: 4,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: 4 - 1,
        },
        1024: {
          gap: 20,
          perView: 4 - 1,
        },
        768: {
          gap: 20,
          perView: 4 - 2,
        },
        640: {
          gap: 20,
          perView: 1.5,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    };
    if (!sliderRef.current) return;

    let slider = new Glide(sliderRef.current, OPTIONS);
    slider.mount();
    setIsShow(true);
    return () => {
      slider.destroy();
    };
  }, [sliderRef]);

  return (
    <div className={`nc-SectionSliderProductCard ${className}`}>
      <div ref={sliderRef} className={`flow-root ${isShow ? "" : "invisible"}`}>
        <Heading
          className={headingClassName}
          fontClass={headingFontClassName}
          rightDescText={subHeading}>
          {heading || `New Arrivals`}
        </Heading>
        <div className="relative">
          <Prev
            className="absolute start-1 sm:-start-6 top-[40%] sm:-translate-y-1/2 z-10 !text-slate-700"
            btnClassName="w-12 h-12 hover:border-slate-400 dark:hover:border-slate-400"
            svgSize="w-6 h-6"
          />
          <Next
            className="absolute end-1 sm:-end-6 top-[40%] sm:-translate-y-1/2 z-10 !text-slate-700"
            btnClassName="w-12 h-12 hover:border-slate-500 dark:hover:border-slate-400"
            svgSize="w-6 h-6"
          />

          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {data.map((item, index) => (
                <li key={index} className={`glide__slide ${itemClassName}`}>
                  <ProductCard data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderProductCard;
