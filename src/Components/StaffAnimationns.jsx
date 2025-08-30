import React from "react";

export default function StaffAnimationns() {
  return (
    <div className="bg-[#e3e5da]">
      <div className="max-w-[1810px] mx-auto px-6 py-16 lg:py-24 2xl:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center">
          <div className="flex items-start gap-5">
            <div className="flex flex-col w-full relative">
              <button
                className="relative pl-4 text-left py-2 text-2xl md:text-4xl font-bold transition-colors duration-300 cursor-pointer
                    text-[#C9C9C9] hover:text-[#204285]"
                
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9C9C9] z-0"></span>
                <span className="relative z-20">
                  75% of our clients hire the first match
                </span>
              </button>
              <button
                className="relative pl-4 text-left py-2 text-2xl md:text-4xl font-bold transition-colors duration-300 cursor-pointer
                    text-[#204285]"
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9C9C9] z-0"></span>
                <span
                  className="absolute left-0 top-0 w-1 h-[22.06%] bg-[#204285] z-10 transition-all duration-[50ms] ease-linear"                  
                ></span>
                <span className="relative z-20">Top 3% world Talent</span>
              </button>
              <button
                className="relative pl-4  text-left text-2xl md:text-4xl font-bold transition-colors duration-300 cursor-pointer
                    text-[#C9C9C9] py-2 hover:text-[#204285]"
                
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9C9C9] z-0"></span>
                <span className="relative z-20">
                  15-day Money-back Trial Period
                </span>
              </button>
            </div>
          </div>
          <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
<div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-cover bg-center rounded-2xl opacity-0" 
></div>
          </div>
        </div>
      </div>
    </div>
  );
}
