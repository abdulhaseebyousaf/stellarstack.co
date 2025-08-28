import React from "react";
import Image from '../assets/logo/pictures/OurCultureThumbnail.webp'
export default function OurCulture() {
  return (
    <div>
        <div className="max-w-[1575px] mx-auto px-6 py-16 lg:py-24 2xl:py-36 lg:flex  gap-12 justify-between items-center" >
      <div>
        <h1 class="text-5xl lg:text-[64px] font-bold 2xl:leading-24 tracking-[-1.5px] text-[#231F20]">
          Our <span class="text-[#204285]">Culture</span>
        </h1>
        <p class="pt-5 pb-14 lg:w-[455px] text-2xl text-[#231F20]">
          Here at StellarStack, we pride ourselves on being more than your
          average tech company.
        </p>
        <a
          target="_blank"
           href="#"
        >
          <button class="flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-lg font-medium px-7 py-3">
            <span>Get in Touch</span>
          </button>
        </a>
      </div>
      <div class="lg:max-w-[700px] 2xl:max-w-[824px] max-lg:mt-12">
        <p class="text-lg md:text-xl 2xl:text-2xl font-normal text-[#4B5563] mb-4">
          The Stellar Stack community stands out for loving what we do. Our
          inquisitive nature sets us ahead of the game and enables us to stay on
          edge. Our indomitable spirits and relentlessness have us seeking out
          excellence. With our always-be-learning mindset, mistakes become
          opportunities to grow and learn. <br /> <br /> There is no “I” in
          “team” here at Stellar Stack, as we work as a Dream Team. And there is
          no better team than one that creates room for all ideas and empowering
          all voices. Equity and inclusion mark our way, and everyone is a key
          player.
        </p>
        <a
          class="text-lg md:text-xl text-[#204285] font-medium inline-flex items-center group"
          href="/about-us"
        >
          See more
          <span class="mt-0.5 ml-2 transition-transform group-hover:translate-x-1">
            <svg
              width="8"
              height="12"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 9L5 5L1 1" stroke="#204285" stroke-width="1.5"></path>
            </svg>
          </span>
        </a>
      </div>
        </div>

      <div className="max-w-[1810px] mx-auto px-6" >
      <img src={Image} alt="" />
      </div>
    </div>
  );
}
