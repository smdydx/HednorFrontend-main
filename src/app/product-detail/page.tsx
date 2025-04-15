"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import LikeButton from "@/components/LikeButton";
import { StarIcon } from "@heroicons/react/24/solid";
import BagIcon from "@/components/BagIcon";
import NcInputNumber from "@/components/NcInputNumber";
import { PRODUCTS } from "@/data/data";
import {
  NoSymbolIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "@/components/IconDiscount";
import Prices from "@/components/Prices";
import toast from "react-hot-toast";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import detail1JPG from "@/images/products/detail2-1.jpg";
import detail2JPG from "@/images/products/detail2-2.jpg";
import detail3JPG from "@/images/products/detail2-3.jpg";
import detail4JPG from "@/images/products/detail2-4.jpg";
import detail5JPG from "@/images/products/detail2-5.jpg";
import detail6JPG from "@/images/products/detail3-1.webp";
import detail7JPG from "@/images/products/detail3-2.webp";
import detail8JPG from "@/images/products/detail3-3.webp";
import detail9JPG from "@/images/products/detail3-4.webp";

import Policy from "./Policy";
import ReviewItem from "@/components/ReviewItem";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import SectionPromo2 from "@/components/SectionPromo2";
import ModalViewAllReviews from "./ModalViewAllReviews";
import ModalSubmitReview from "@/components/ModalSubmitReview";
import NotifyAddTocart from "@/components/NotifyAddTocart";
import Image from "next/image";
import AccordionInfo from "@/components/AccordionInfo";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const LIST_IMAGES_DEMO = [
  detail1JPG,
  detail2JPG,
  detail3JPG,
  detail4JPG,
  detail5JPG,
  detail6JPG,
  detail7JPG,
  detail8JPG,
  detail9JPG,
];

const ProductDetailPage = () => {
  const { sizes, variants, status, allOfSizes, image } = PRODUCTS[0];

  const [variantActive, setVariantActive] = useState(0);
  const [sizeSelected, setSizeSelected] = useState(sizes ? sizes[0] : "");
  const [qualitySelected, setQualitySelected] = useState(1);
  const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] = useState(false);
  const [isOpenModalSubmitReview, setIsOpenModalSubmitReview] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef(null);

  const [mainImage, setMainImage] = useState(LIST_IMAGES_DEMO[0]);

  // Function to handle scroll
  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    // Check if we can scroll up or down
    setCanScrollUp(scrollTop > 0); // Show "Up" button if scrollTop is greater than 0
    setCanScrollDown(scrollTop + clientHeight < scrollHeight); // Show "Down" button if not fully scrolled down
  };

  // Scroll up function with smooth scroll
  const scrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ top: -100, behavior: "smooth" });
    }
  };

  // Scroll down function with smooth scroll
  const scrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  // Scroll selected image to the top with smooth scroll
  const handleImageClick = (item: any, index: any): void => {
    setMainImage(item);

    if (containerRef.current) {
      const imageElement = document.getElementById(`image-${index}`);
      const container = containerRef.current;

      // Ensure imageElement is not null before proceeding
      if (imageElement) {
        // Calculate the available scroll space
        const containerTop = container.scrollTop;
        const imageTop = imageElement.offsetTop;

        // Scroll the clicked image to the top only if it's not already at the top and there is enough space to scroll
        if (imageTop > containerTop) {
          const remainingScrollSpace =
            container.scrollHeight -
            container.scrollTop -
            container.clientHeight;

          // Scroll only if there's enough space to bring the image to the top
          if (
            remainingScrollSpace >=
            container.clientHeight - imageElement.clientHeight
          ) {
            imageElement.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            // Scroll as much as possible towards the top with smooth animation
            container.scrollTo({
              top: imageTop - containerTop,
              behavior: "smooth",
            });
          }
        }
      } else {
        console.warn(`Image element with ID "image-${index}" not found.`);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      // Call handleScroll initially to set button visibility
      handleScroll();

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const notifyAddTocart = () => {
    toast.custom(
      (t) => (
        <NotifyAddTocart
          productImage={image}
          qualitySelected={qualitySelected}
          show={t.visible}
          sizeSelected={sizeSelected}
          variantActive={variantActive}
        />
      ),
      { position: "top-right", id: "nc-product-notify", duration: 3000 }
    );
  };

  const renderVariants = () => {
    if (!variants || !variants.length) {
      return null;
    }

    return (
      <div>
        <label htmlFor="">
          <span className="text-sm font-medium">
            Color:
            <span className="ml-1 font-semibold">
              {variants[variantActive].name}
            </span>
          </span>
        </label>
        <div className="flex mt-3">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer ${
                variantActive === index
                  ? "border-primary-6000 dark:border-primary-500"
                  : "border-transparent"
              }`}>
              <div
                className="absolute inset-0.5 rounded-full overflow-hidden z-0 object-cover bg-cover"
                style={{
                  backgroundImage: `url(${
                    // @ts-ignore
                    typeof variant.thumbnail?.src === "string"
                      ? // @ts-ignore
                        variant.thumbnail?.src
                      : typeof variant.thumbnail === "string"
                      ? variant.thumbnail
                      : ""
                  })`,
                }}></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSizeList = () => {
    if (!allOfSizes || !sizes || !sizes.length) {
      return null;
    }
    return (
      <div>
        <div className="flex justify-between font-medium text-sm">
          <label htmlFor="">
            <span className="">
              Size:
              <span className="ml-1 font-semibold">{sizeSelected}</span>
            </span>
          </label>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="##"
            className="text-primary-6000 hover:text-primary-500">
            See sizing chart
          </a>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-3">
          {allOfSizes.map((size, index) => {
            const isActive = size === sizeSelected;
            const sizeOutStock = !sizes.includes(size);
            return (
              <div
                key={index}
                className={`relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 ${
                  sizeOutStock
                    ? "text-opacity-20 dark:text-opacity-20 cursor-not-allowed"
                    : "cursor-pointer"
                } ${
                  isActive
                    ? "bg-primary-6000 border-primary-6000 text-white hover:bg-primary-6000"
                    : "border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                }`}
                onClick={() => {
                  if (sizeOutStock) {
                    return;
                  }
                  setSizeSelected(size);
                }}>
                {size}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSectionContent = () => {
    return (
      <div className="space-y-7 2xl:space-y-8">
        {/* ---------- 1 HEADING ----------  */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Heavy Weight Hoody
          </h2>
          <p className="text-slate-500 mt-1">
            Made from a sheer Belgian power micromesh.
          </p>
          {/* rating */}
          <div className="flex items-center my-3">
            <a
              href="#reviews"
              className="flex items-center text-sm font-medium">
              <StarIcon className="w-5 h-5 pb-[1px] text-yellow-400" />
              <div className="ml-1.5 flex">
                <span>4.9</span>
                <span className="block mx-2">·</span>
                <span className="text-slate-600 dark:text-slate-400 underline">
                  142 reviews
                </span>
              </div>
            </a>
            <span className="hidden sm:block mx-2.5">·</span>
            <div className="hidden sm:flex items-center text-sm">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span className="ml-1 leading-none">{status}</span>
            </div>
          </div>

          {/* price */}
          <div className="flex gap-3">
            <Prices contentClass="text-lg font-semibold" price={112} />
            <div className="text-green-500 ">30% off</div>
          </div>
          <div className="text-[0.8rem] text-slate-500">
            inclusive of all taxes
          </div>
        </div>

        {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}
        <div className="">{renderVariants()}</div>
        <div className="">{renderSizeList()}</div>

        {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
        <div className="flex space-x-3.5">
          <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
            <NcInputNumber
              defaultValue={qualitySelected}
              onChange={setQualitySelected}
            />
          </div>
          <ButtonPrimary
            className="flex-1 flex-shrink-0"
            onClick={notifyAddTocart}>
            <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
            <span className="ml-3">Add to cart</span>
          </ButtonPrimary>
        </div>

        {/*  */}
        <hr className=" 2xl:!my-10 border-slate-200 dark:border-slate-700"></hr>
        {/*  */}

        {/* ---------- 5 ----------  */}
        <AccordionInfo />

        {/* ---------- 6 ----------  */}
        <div className="hidden xl:block">
          <Policy />
        </div>
      </div>
    );
  };

  const renderDetailSection = () => {
    return (
      <div className="">
        <h2 className="text-2xl font-semibold">Product Details</h2>
        <div className="prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl mt-7">
          <p>
            The patented eighteen-inch hardwood Arrowhead deck --- finely
            mortised in, makes this the strongest and most rigid canoe ever
            built. You cannot buy a canoe that will afford greater satisfaction.
          </p>
          <p>
            The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
            1922. Wickett had previously worked for the Old Town Canoe Co from
            1900 to 1914. Manufacturing of the classic wooden canoes in Valley
            Park, Missouri ceased in 1978.
          </p>
          <ul>
            <li>Regular fit, mid-weight t-shirt</li>
            <li>Natural color, 100% premium combed organic cotton</li>
            <li>
              Quality cotton grown without the use of herbicides or pesticides -
              GOTS certified
            </li>
            <li>Soft touch water based printed in the USA</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderReviews = () => {
    return (
      <div className="">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold flex items-center">
          <StarIcon className="w-7 h-7 mb-0.5" />
          <span className="ml-1.5"> 4,87 · 142 Reviews</span>
        </h2>

        {/* comment */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
            <ReviewItem />
            <ReviewItem
              data={{
                comment: `I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. 
                  If you’re unsure which hoodie to pick.`,
                date: "December 22, 2021",
                name: "Stiven Hokinhs",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. 
                Now that it’s colder, my husband wears his all the time. I wear hoodies all the time. `,
                date: "August 15, 2022",
                name: "Gropishta keo",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `Before buying this, I didn't really know how I would tell a "high quality" sweatshirt, but after opening, I was very impressed. 
                The material is super soft and comfortable and the sweatshirt also has a good weight to it.`,
                date: "December 12, 2022",
                name: "Dahon Stiven",
                starPoint: 5,
              }}
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <ButtonSecondary
              onClick={() => setIsOpenModalViewAllReviews(true)}
              className="border border-slate-300 dark:border-slate-700">
              Show me all 142 reviews
            </ButtonSecondary>
            <ButtonPrimary onClick={() => setIsOpenModalSubmitReview(true)}>
              Write a Review
            </ButtonPrimary>
          </div>
        </div>
      </div>
    );
  };

  const glideRef = useRef(null);

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        perView: 1,
        gap: 20,
        // dots: true,
      });

      glide.mount();
    }
  }, []);

  return (
    <div className={`nc-ProductDetailPage `}>
      {/* MAIn */}
      <main className="container mt-5 lg:mt-11">
        <div className="lg:flex">
          {/* CONTENT */}
          <div className="w-full lg:w-[55%]">
            <div className="flex sticky top-40 ">
              {/* HEADING */}
              {/* first div column */}
              <div className="relative w-32 hidden lg:flex sm:h-[27.5rem] lg:h-[34rem] xl:h-[34.5rem] 2xl:h-[37rem]  ">
                {/* Scroll Up Button */}
                {canScrollUp && (
                  <button
                    onClick={scrollUp}
                    className="absolute top-0 right-1/2 transform translate-x-1/2 bg-white text-black shadow-lg p-1 rounded-full z-20">
                    <ChevronUpIcon className="size-6" />
                  </button>
                )}

                {/* Scroll Down Button */}
                {canScrollDown && (
                  <button
                    onClick={scrollDown}
                    className="absolute bottom-0 right-1/2 transform translate-x-1/2 bg-white text-black shadow-lg p-1 rounded-full z-20">
                    <ChevronDownIcon className="size-6" />
                  </button>
                )}

                {/* Image List */}
                <div
                  ref={containerRef}
                  className="flex flex-col overflow-y-scroll overflow-x-hidden whitespace-nowrap mb-4 hide-scrollbar h-full hiddenScrollbar">
                  {LIST_IMAGES_DEMO.map((item, index) => (
                    <div
                      key={index}
                      id={`image-${index}`}
                      onClick={() => handleImageClick(item, index)}
                      className={`flex-shrink-0 w-24 h-24 relative mb-2 cursor-pointer ${
                        mainImage === item ? "border-2 border-primary-500" : ""
                      } rounded-xl`}>
                      <Image
                        sizes="(max-width: 48px) 100vw, 30vw"
                        fill
                        src={item}
                        className="w-full h-full rounded-xl object-cover overflow-hidden"
                        alt={`product detail ${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* main image div */}
              <div className="relative hidden sm:block w-full">
                <PhotoProvider>
                  {/* Main Image  */}
                  <PhotoView src={mainImage.src}>
                    <div className="aspect-w-16 aspect-h-16 relative cursor-pointer">
                      <Image
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        src={mainImage}
                        className="w-full rounded-2xl object-cover"
                        alt="product detail"
                      />
                    </div>
                  </PhotoView>

                  {/* Provide All Images for the Gallery View */}
                  {LIST_IMAGES_DEMO.map((image, index) => (
                    <PhotoView key={index} src={image.src} />
                  ))}
                </PhotoProvider>
                {/* Render Status */}
                {status && (
                  <div className="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    <span className="ml-1 leading-none">{status}</span>
                  </div>
                )}
                {/* META FAVORITES */}
                <LikeButton className="absolute right-3 top-3 " />
              </div>

              {/* Mobile View */}
              <div className="relative w-full sm:hidden">
                <div className="glide" ref={glideRef}>
                  {/* Slider Container */}
                  <div className="glide__track" data-glide-el="track">
                    <PhotoProvider>
                      <ul className="glide__slides">
                        {LIST_IMAGES_DEMO.map((image, index) => (
                          <li key={index} className="glide__slide">
                            <div className="aspect-w-16 aspect-h-16 relative">
                              {/* PhotoView wraps the Image for gallery functionality */}

                              <PhotoView src={image.src}>
                                <Image
                                  fill
                                  sizes="(max-width: 640px) 100vw, 33vw"
                                  src={image.src}
                                  className="w-full rounded-2xl object-cover cursor-pointer"
                                  alt={`product image ${index + 1}`}
                                />
                              </PhotoView>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </PhotoProvider>
                  </div>
                  {/* Dots for navigation */}
                  <div
                    className="glide__bullets absolute left-0 right-0  flex justify-center"
                    data-glide-el="controls[nav]">
                    {LIST_IMAGES_DEMO.map((_, index) => (
                      <button
                        key={index}
                        className="glide__bullet w-2 h-2 rounded-full mx-1"
                        data-glide-dir={`=${index}`}></button>
                    ))}
                  </div>
                </div>
                {/* Render Status */}
                {status && (
                  <div className="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    <span className="ml-1 leading-none">{status}</span>
                  </div>
                )}

                {/* META FAVORITES */}
                <LikeButton className="absolute right-3 top-3" />
              </div>
            </div>
          </div>
          {/* SIDEBAR */}
          <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
            {renderSectionContent()}
          </div>
        </div>

        {/* DETAIL AND REVIEW */}
        <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
          <div className="block xl:hidden">
            <Policy />
          </div>

          {renderDetailSection()}

          <hr className="border-slate-200 dark:border-slate-700" />

          {renderReviews()}

          <hr className="border-slate-200 dark:border-slate-700" />

          {/* OTHER SECTION */}
          <SectionSliderProductCard
            heading="Customers also purchased"
            subHeading=""
            headingFontClassName="text-2xl font-semibold"
            headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
          />

          {/* SECTION */}
          <div className="pb-20 xl:pb-28 lg:pt-14">
            <SectionPromo2 />
          </div>
        </div>
      </main>

      {/* MODAL VIEW ALL REVIEW */}
      <ModalViewAllReviews
        show={isOpenModalViewAllReviews}
        onCloseModalViewAllReviews={() => setIsOpenModalViewAllReviews(false)}
      />
      <ModalSubmitReview
        show={isOpenModalSubmitReview}
        onCloseModal={() => setIsOpenModalSubmitReview(false)}
      />
    </div>
  );
};

export default ProductDetailPage;
