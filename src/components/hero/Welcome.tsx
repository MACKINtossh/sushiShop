import { Carousel } from "@material-tailwind/react";
import { carouselprops } from "config/carousel";
import React from "react";
import CarouselItem from "./CarouselItem";
import Link from "next/link";
import { curry, pho, sushi } from "public";
import Image from "next/image";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="h-screen w-full bg-black">
      <div className="absolute z-10 mt-5 flex h-auto  w-full flex-col md:mt-3 ">
        <div className="mx-32 flex max-h-screen flex-col items-center justify-between space-y-5 ">
          <div className="">
            <h1 className="font-xl inline-block text-center font-extrabold text-white md:text-2xl lg:text-4xl">
              WELCOME TO CRAB HOUSE
            </h1>
          </div>
          <div>
            <p className="text-lg font-bold text-white md:text-xl lg:text-2xl">
              See whats on the menu!
            </p>
          </div>
          <div className=" pb-auto flex max-h-screen w-full items-center justify-evenly gap-2 pt-14">
            {/* CARD */}
            <div className="group relative w-auto cursor-pointer items-center overflow-hidden rounded-lg transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="inline-block  h-auto w-72 ">
                <Image
                  src={curry}
                  alt="ship4"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Curry
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Try It!
                </p>
                <Link
                  key={"curry"}
                  href={"/curry"}
                  className="font-com rounded-full bg-neutral-900 px-3.5 py-2 text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More Curry
                </Link>
              </div>
            </div>
            <div className="group relative w-auto cursor-pointer items-center overflow-hidden rounded-lg transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="inline-block h-auto w-72 ">
                <Image
                  src={sushi}
                  alt="ship4"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Sushi
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Try It!
                </p>
                <Link
                  key={"sushi"}
                  href={"/sushi"}
                  className="font-com rounded-full bg-neutral-900 px-3.5 py-2 text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More Sushi
                </Link>
              </div>
            </div>
            <div className="group relative  w-auto cursor-pointer items-center overflow-hidden rounded-lg transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="inline-block h-auto w-72 ">
                <Image
                  src={pho}
                  alt="ship4"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Pho
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Try It!
                </p>
                <Link
                  key={"pho"}
                  href={"/pho"}
                  className="font-com rounded-full bg-neutral-900 px-3.5 py-2 text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More Pho
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
