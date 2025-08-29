import React from "react";
import Image from "../assets/logo/pictures/FInalCta.webp"
export default function HireLast() {
  return (
    <div>
      <div class="bg-[#e3e5da]">
        <div class="px-6 flex flex-col justify-center items-center pt-16 md:pt-36 xl:pt-40 text-center">
          <p class="text-base xl:text-lg font-bold text-[#204285]">
            GET IN TOUCH
          </p>
          <h2 class="max-w-[840px] pt-1.5 text-5xl xl:text-[64px] font-bold px-6">
            <span className="text-[#204285]">Hire</span>
            <span> your new</span>
          </h2>
          <p class="pt-8 pb-12">
            Get a free quote within the hour. Get ready to take your team to the
            next level.
          </p>
          <a
            class="flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-sm font-medium px-5 py-3"
            href="#"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      <img src={Image} alt=""  />
      </div>
    </div>
  );
}
