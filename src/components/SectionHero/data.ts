import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right-banner-1.jpg";
import imageRightPng2 from "@/images/hero-right-banner-2.jpg";
import imageRightPng3 from "@/images/hero-right-banner-3.jpg";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
];
