import React from "react";
import Image from "../assets/logo/pictures/Onboarding1.webp";
import Imagetwo from "../assets/logo/pictures/Onboarding2.webp";
export default function Onboarding() {
  const Data = [
    {
      image: Image,
      heading: "Hiring &amp; Onboarding",
      description: "Even though the hiring process is finished, our service is not over. Our Customer Success Manager will work closely with your team during the ramp-up period, as the new member sets up their development environment and gets acquainted with the project tools, teammates, and workplace etiquette. We are even willing to help the person learn any new tool or technology needed.",
    },
        {
        image: Imagetwo,
        heading: "Customer Service",
        description: "We are a personalized customer-centric company. Your feedback will be key, and if you think our service did not meet your expectations, we will work with a 15-days trial period. In that stage, you can choose a new resource until you are happy with our services. It comes with no extra cost and at the same hourly rate.",
        },
  ];
  return (
    <div className="bg-[#e3e5da] overflow-x-hidden">
      <div className="max-w-[1810px] mx-auto px-11 sm:px-16 py-28 2xl:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px]">
          {Data.map((index) => (
            <div className="group relative rounded-[20px] lg:mr-4 ">
              <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 lg:-top-5 2xl:-top-8 lg:-left-5 2xl:-left-8 size-[100px] sm:size-[183px] lg:size-[120px] 2xl:size-[183px] bg-[#231F20] rounded-[20px] z-0"></div>
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 lg:-bottom-5 2xl:-bottom-8 lg:-right-5 2xl:-right-8 size-[100px] sm:size-[183px] lg:size-[120px] 2xl:size-[183px] bg-[#231F20] rounded-[20px] z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-[20px] shadow-lg">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  src={index.image}
                  alt="error"
                />
                <div class="absolute inset-0 px-4 sm:px-10 2xl:px-[105px] bg-[#204285]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center text-white text-center">
                  <h3 class="max-[460px]:text-xl text-2xl sm:text-3xl md:text-[40px] lg:text-3xl xl:text-[40px] font-bold">
              {index.heading}
                  </h3>
                  <p class="mt-2 max-[460px]:text-xs max-[530px]:text-sm text-base sm:text-xl md:text-2xl lg:text-xl xl:text-[22px] 2xl:text-[28px] font-medium leading-tight">
                    {index.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a class="flex justify-center items-center mt-20" target="_blank"  href="/about-us"><button class="flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-lg font-medium px-7 py-3"><span>Let's grow your team today!</span></button></a>
      </div>
    </div>
  );
}
