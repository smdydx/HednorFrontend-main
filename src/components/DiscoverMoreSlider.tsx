"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Heading from "./Heading/Heading";
import CardCategory3 from "./CardCategories/CardCategory3";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import { CATS_DISCOVER } from "./CardCategories/data";
import Prev from "@/shared/NextPrev/Prev";
import Next from "@/shared/NextPrev/Next";

const DiscoverMoreSlider = () => {
  const sliderRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      // direction: document.querySelector("html")?.getAttribute("dir") || "ltr",
      perView: 2.8,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1279: {
          gap: 20,
          perView: 2.15,
        },
        1023: {
          gap: 20,
          perView: 1.6,
        },
        768: {
          gap: 20,
          perView: 1.2,
        },
        500: {
          gap: 20,
          perView: 1,
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
    <div ref={sliderRef} className={`relative  ${isShow ? "" : "invisible"}`}>
      <Heading
        className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 "
        desc=""
        rightDescText="Good things are waiting for you">
        Discover more
      </Heading>
      <div className="relative">
        <Prev
          className="absolute start-1 sm:-start-6 top-[40%] sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
          btnClassName="w-12 h-12 hover:border-slate-400 dark:hover:border-slate-400"
          svgSize="w-6 h-6"
        />
        <Next
          className="absolute end-1 sm:-end-6 top-[40%] sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
          btnClassName="w-12 h-12 hover:border-slate-500 dark:hover:border-slate-400"
          svgSize="w-6 h-6"
        />

        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {CATS_DISCOVER.map((item, index) => (
              <li key={index} className={`glide__slide`}>
                <CardCategory3
                  name={item.name}
                  desc={item.desc}
                  featuredImage={item.featuredImage}
                  color={item.color}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMoreSlider;
