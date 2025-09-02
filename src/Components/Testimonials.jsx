// ...existing imports
import React, { useRef, useState, useEffect } from "react";
import Star from "../assets/logo/logos/Stars.svg";
import Left from "../assets/logo/logos/LeftC.svg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { TESTIMONIALS } from "../constants/constants";
import { button, div } from "framer-motion/client";

const Data = TESTIMONIALS;

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShowText, setisShowText] = useState(false);
  // const handelClick = () => {
  // setisShowText(!isShowText)
  // }
  return (
    <section className="w-full bg-[#F9FAFB] py-16 sm:py-20">
      <div className="max-w-[920px] mx-auto px-4 text-center relative">
        <p className="text-lg text-[#204285] font-medium">TESTIMONIALS</p>
        <h2 className="text-[40px] font-bold text-[#204285] mt-3 mb-6">
          What Our Clients Say
        </h2>
        <div className="mb-16 w-24 h-0.5 mx-auto bg-[#204285]" />

        <div className="relative">
          <Swiper
            className="mySwiper"
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(sw) => {
              swiperRef.current = sw;
              setActiveIndex(sw.activeIndex);
            }}
            onSlideChange={(sw) => setActiveIndex(sw.activeIndex)}
          >
            {Data.map((items) => (
              <SwiperSlide key={items.id}>
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={activeIndex === 0}
                  className={`absolute left-0 inset-y-0 my-auto z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
                    activeIndex === 0
                      ? "bg-gray-300 text-gray-600 opacity-60 cursor-not-allowed"
                      : "bg-[#204285] text-white cursor-pointer hover:bg-[#163369]"
                  }`}
                  aria-label="Previous slide"
                  type="button"
                >
                  <img src={Left} alt="prev" className="w-2.5 mr-1" />
                </button>

                <div className="bg-[#e4e7ee] rounded-3xl p-10 shadow-md text-gray-800 mx-4 min-h-[321px] flex flex-col items-center justify-center">
                  <div className="mb-6">
                    <img src={Star} alt="stars" />
                  </div>
                  <div>
                  <span className="italic text-xl font-normal leading-relaxed text-[#4B5563]" dangerouslySetInnerHTML={{ __html: items.text }}>
                  </span>
                  { isShowText &&
                    <span className="italic text-xl font-normal leading-relaxed text-[#4B5563]" dangerouslySetInnerHTML={{ __html: items.textToHide }}></span>
                  }
{ items.textToHide && 
 <button className="text-[#204285] hover:underline focus:outline-none  inline  cursor-pointer" onClick={() => setisShowText(!isShowText)}>
   <p className="text-[#4B5563] hover:underline focus:outline-none  inline  cursor-pointer">... </p>
      {isShowText ? ' See less' : ' See more'}
    </button>
}                    
                  </div>

                  <div className="mt-6 font-medium">{items.descrption}</div>
                  <div className="text-sm italic text-[#4B5563]">
                    {items.referance}
                  </div>
                </div>

                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={activeIndex === Data.length - 1}
                  className={`absolute right-0 inset-y-0 my-auto z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
                    activeIndex === Data.length - 1
                      ? "bg-gray-400 opacity-50 cursor-not-allowed"
                      : "bg-[#204285] text-white cursor-pointer hover:bg-[#163369]"
                  }`}
                  aria-label="Next slide"
                  type="button"
                >
                  <img
                    src={Left}
                    alt="next"
                    className="w-2.5 ml-1 rotate-180"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination OUTSIDE the box with margin-top */}
          <div className="custom-pagination mt-8 relative flex justify-center" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
