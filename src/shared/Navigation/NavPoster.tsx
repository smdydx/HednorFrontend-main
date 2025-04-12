import React, { FC } from "react";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface NavPosterProps {
  item?: {
    featuredImage?: StaticImageData | string;
    name?: string;
    desc?: string;
    color?: string;
  };
}
const NavPoster: FC<NavPosterProps> = ({ item }) => {
  return (
    <Link href={"/collection"} className={`nc-NavPoster block `}>
      <div
        className={`relative w-full aspect-w-16 aspect-h-11 sm:aspect-h-9 h-0 rounded-2xl overflow-hidden group ${item?.color}`}>
        <div>
          <div className="absolute inset-5 sm:inset-8">
            <Image
              alt=""
              src={item?.featuredImage || ""}
              className="absolute end-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
        <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>

        <div>
          <div className="absolute inset-5 sm:inset-8 flex flex-col">
            <div className="max-w-xs">
              <span className={`block mb-2 text-sm text-slate-700`}>
                {item?.name}
              </span>
              {item?.desc && (
                <h2
                  className={`text-xl md:text-2xl text-slate-900 font-semibold`}
                  dangerouslySetInnerHTML={{ __html: item?.desc }}></h2>
              )}
            </div>
            <div className="mt-auto">
              <ButtonSecondary
                sizeClass="py-3 px-4 sm:py-3.5 sm:px-6"
                fontSize="text-sm font-medium"
                className="nc-shadow-lg">
                Show me all
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NavPoster;
