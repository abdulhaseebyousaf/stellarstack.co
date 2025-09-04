import { Swiper, SwiperSlide } from "swiper/react";
import Imag from "../assets/logo/pictures/AppDevelopment.webp";
import logo from "../assets/logo/logos/AppDevelopmentt.svg";
import Forthlogo from "../assets/logo/logos/TechMonitoring.fac7e365.svg";
import logosec from "../assets/logo/logos/UiUxDesign.38821dd1.svg";
import logothird from "../assets/logo/logos/WebDevelopment.7007cacd.svg";
import SeconfImage from '../assets/logo/pictures/Ui-Ux-design-image.webp';
import thirdImage from '../assets/logo/pictures/Tech-modernization-image.webp';
import SecondImage from '../assets/logo/pictures/Web-dev-image.webp';
import "swiper/css";
import React, { useRef, useState } from "react";
import Left from "../assets/logo/logos/LeftC.svg";

function Mobile() {
  const Data = [
    {
      image: Imag,
      Logo: logo,
      heading: "Mobile App",
      text: "With our extensive expertise and unwavering commitment, we assure the most agile development process, tailored not only for web but also for mobile app development.",
      descrption:
        "We comprehend the urgency of businesses in obtaining cutting-edge solutions, and our talent pool is primed to deliver excellence in both web and mobile app development.",
    },
    {
      secondsImage: SeconfImage,
      Logo:logosec,
      heading: "UI-UX Design",
      text: "We understand the importance of exceptional UI/UX in creating competitive digital solutions.",
      descrption:
        "Our expert team ensures an agile design process, delivering intuitive and engaging experiences for both web and mobile platforms.",
    },
    {
      Logo:logothird,
      secondsImage:  SecondImage ,
      heading: "Web Development",
      text: "We understand how important it is for businesses to get competitive web solutions.",
      descrption:
        "Our expertise and talent ensures the most agile development process possible.",
    },
    {
     Logo:Forthlogo,
      secondsImage: thirdImage,
      heading: "Tech Modernization",
      text: "At our core, we are driven by a relentless dedication to technology modernization. We understand that in today's fast-paced digital landscape, staying at the forefront of technological advancements is imperative.",
      descrption:
        "Our mission is to provide businesses with cutting-edge solutions that not only meet current needs but also anticipate future challenges.",
    },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="w-full bg-[#F9FAFB] py-16 lg:py-24 2XL:py-36">
        {/* Swiper */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(sw) => {
            swiperRef.current = sw;
            setActiveIndex(sw.activeIndex);
          }}
          onSlideChange={(sw) => setActiveIndex(sw.activeIndex)}
        >
          {Data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[1810px] mx-auto px-6 md:flex items-center gap-10 lg:gap-20 justify-between">
              {item.image &&
                <div className="  md:w-[40%] max-sm:w-[40%] w-[150px] sm:w-[350px] max-md:w-[250px] lg:w-[300px] 2xl:w-[440px] mx-auto">
                  <img className="" src={item.image} alt="" />
                </div>
                // ye ho gya ha 
                }
                {item.secondsImage &&
                  <div className="max-sm:h-[200px] md:w-[40%] max-md:mx-auto max-sm:w-[250px] max-md:w-[550px]">
                  <img src={item.secondsImage} alt="" />
                </div>
                }

                <div className="md:w-[60%]">
                  <div className="size-[53px] mb-3 rounded-full bg-[#204285] flex items-center justify-center">
                   <img src={item.Logo} alt="" />
                  </div>

                  <div className="flex flex-col gap-0 xl:gap-6 2xl:gap-10 max-w-[970px] mb-8 xl:mb-14">
                    <h1 className="text-[#231F20] text-3xl lg:text-4xl xl:text-[64px] leading-[72px] font-bold 2xl:mb-4">
                      {item.heading}
                    </h1>
                    <p className="xl:text-2xl 2xl:text-[40px] xl:leading-tight 2xl:leading-11">
                      {item.text}
                    </p>
                    <p className="max-sm:hidden xl:text-2xl 2xl:text-[40px] xl:leading-tight 2xl:leading-11">
                      {item.descrption}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-xl xl:text-[24px] font-medium px-8 2xl:px-16 py-2 2xl:py-4">
                    <span>Get in Touch</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center gap-4 max-[1029px]:mt-6 max-sm:mt-6 xl:mt-0 2xl:mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={activeIndex === 0}
            className={` z-10 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition bg-[#204285] hover:bg-[#163369] cursor-pointer
              ${
                activeIndex === 0
                  ? "bg-gray-300 text-gray-600 opacity-60 cursor-not-allowed"
                  : "bg-[#204285] text-white hover:bg-[#163369]"
              }`}
            aria-label="Previous slide"
            type="button"
          >
            {/* simple chevron */}
            <img src={Left} alt="prev" className="w-2.5 mr-1" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={activeIndex === Data.length - 1}
            className={`z-10 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition bg-[#204285] hover:bg-[#163369] cursor-pointer
              ${
                activeIndex === Data.length - 1
                  ? "bg-gray-300 text-gray-600 opacity-60 cursor-not-allowed"
                  : "bg-[#204285] text-white hover:bg-[#163369]"
              }`}
            aria-label="Next slide"
            type="button"
          >
            <img src={Left} alt="next" className="w-2.5 ml-1 rotate-180" />
          </button>
        </div>
        <div className="mt-10 hidden mb-2 w-24 h-0.5 mx-auto bg-[#204285]" />
      </div>
    </>
  );
}

export default Mobile;
