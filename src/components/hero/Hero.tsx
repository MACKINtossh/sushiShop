import Image from "next/image";
import crab from "public/crab.png";

import React from "react";
import Navbar from "../navbar/Navbar";
import Welcome from "./Welcome";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="border-b-5 overflow-x-hidden border-black">
      <div className=" relative z-0  h-[500px] overflow-hidden">
        <div className="h-50% absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-crab bg-fixed">
          <div className="flex h-full items-center justify-center">
            <Image src={crab} alt="" className="rounded-full" />
          </div>
        </div>
      </div>

      <div className=" z-8 -mt-5 h-[20px] origin-[top_center] scale-[2] text-black md:-mt-6 lg:-mt-6 xl:-mt-10">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <Welcome />
    </div>
  );
};

export default Hero;
