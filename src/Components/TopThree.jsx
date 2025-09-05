import React from "react";
import Image from "../assets/logo/pictures/LineImage.webp";
import LineImageMobile from '../assets/logo/pictures/LineImageMobile.webp'
export default function TopThree() {
  const Data = [
    {
      id: 1,
      Text: "To understand your specific needs, we will assign your business to our Customer Success Manager that will follow your case closely to make sure we met your expectations. During this stage we will review the profiles needed and sign an NDA.",
    },
    {
      id: 2,
      Text: "Our tech expert in the Talent Acquisition will be in charge of checking with a Live Technical Assessment the level of the candidate to make sure it fits your needs.",
      secondtext:"Our tech expert in the Talent Acquisition will be in charge of checking with a Live Technical Assessment the level of the candidate to make sure it fits your needs."
    },
    {
      id: 3,
      Text: "Of course the english level and the culture fit is a relevant part of the process. We make sure the english level is advanced and that the candidate is aligned and a good culture fit for your company.",
    },
  ];

  return (
    <>
      <div className="pt-16 lg:pt-24 xl:pt-36 max-w-[1184px] mx-auto px-6">
        <p className="text-lg font-normal text-center text-[#204285]">
          THE TOP <span className="text-[32px]">3%</span>
        </p>
        <p className="max-w-[900px] mx-auto text-xl text-center text-[#204285]">
          We've iterated our Vetting Process to make it agile and efficient, so
          that we can guarantee that you get the best LATAM talent!
        </p>
        <div className=" relative mt-12 md:mt-20">
          <div className="max-[1080px]:mr-4 ml-4 lg:ml-0 absolute top-20 2xl:top-[120px] max-[1180px]:left-0 left-6">
            <img
              className="max-[1180px]:w-[1080px] w-[590px] 2xl:w-[500px] h-[700px] 2xl:h-[850px] hidden md:block"
              src={Image}
              alt=""
            />
          </div>
          <div className="mr-4 absolute top-[214px] sm:top-[200px] left-6 md:hidden">
            <img className="w-[670px] h-[485px]" src={LineImageMobile} alt="error" />
          </div>
          <div>
            {Data.map((item, index) => (
              <div key={index}>
                <div
                  className={`${
                    index === 1 ? "flex justify-end " : "flex items-center"
                  }`}
                >
                  <p className="flex  items-center max-w-[600px] 2xl:max-w-[680px] min-h-[251px] md:min-h-52 2xl:min-h-[245px] max-md:px-7 pr-3 mb-20 sm:mb-16 md:mb-24 2xl:mb-36 text-base md:text-xl 2xl:text-2xl font-normal border-b rounded-[45px] text-white bg-[#204285] shadow-[0px_6px_0px_#000000] max-[1180px]:pl-24 pl-20">{item.Text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
