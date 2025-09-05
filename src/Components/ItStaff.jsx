import React from "react";
import Image from "../assets/logo/pictures/StaffHero.webp";
import SecondImage from "../assets/logo/pictures/MapImage.webp";
export default function ItStaff() {
  return (
    <div className="bg-[#e3e5da]">
      <div className="max-w-[1810px] mx-auto grid max-md:flex max-md:flex-col md:grid-cols-2 gap-6 md:place-items-center px-6 py-16 md:py-24 2xl:py-36">
        <div className="max-md:order-2">
          <h1 className="text-5xl max-[375px]:text-4xl lg:text-6xl 2xl:text-[80px] font-bold 2xl:leading-24 tracking-[-1.5px] text-[#204285]">
            IT Staff Augmentation
          </h1>
          <p className="pt-6 pb-8 max-w-[710px] text-xl text-[#231F20]">
            Struggling to find talent? <br /> Access a Top-Level talent pool of
            IT professionals.
          </p>
          <a  href="/about-us">
            <button className="flex items-center gap-2 rounded-md  text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-lg font-medium px-9 py-2.5">
              <span>Start Today</span>
            </button>
          </a>
          <div className="mt-16 w-72 h-[2px] bg-[#71717A]"></div>
        </div>
        <img
          className="max-md:mx-auto w-[507px] 2xl:w-[807px] max-md:order-1"
          src={Image}
          alt=""
        />
      </div>
      <img src={SecondImage} alt="" />
    </div>
  );
}
