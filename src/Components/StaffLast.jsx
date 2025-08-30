import React from "react";
import imageFinal from "../assets/logo/pictures/FinalCta.webp";
export default function StaffLast() {
  return (
    <div className="bg-[#e3e5da]">
      <div className="px-6 flex flex-col justify-center items-center pt-16 md:pt-36 xl:pt-40 text-center">
        <p className="text-base xl:text-lg font-bold text-[#204285]">CONTACT US</p>
        <h2 className="max-w-[840px] pt-1.5 text-5xl xl:text-[64px] font-bold px-6">
          <span className="text-[#204285]">Get </span>
          <span className="text-[rgb(35, 31, 32)];">
            a TOP-Performing team on board
          </span>
        </h2>
        <p className="pt-8 pb-12">
          We’ll map out your project in just a few meetings using our proven
          Agile estimation technique.
        </p>
        <a
          className="flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-sm font-medium px-5 py-3"
           href="/about-us"
        >
          <span>Let's build my team</span>
        </a>
      </div>
      <img alt="error" src={imageFinal}></img>
    </div>
  );
}
