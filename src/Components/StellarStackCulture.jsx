import React from "react";
import Image from '../assets/logo/pictures/GroupCulture-Image.webp'
function StellarStackCulture() {
  return (
    <>
      <div className="bg-white w-full flex items-center justify-center xl:px-14 md:px-10 px-6 py-16 md:py-24 2xl:py-32">
        <div className="max-w-[1810px] mx-auto flex lg:flex-row flex-col items-center justify-between md:gap-10 sm:gap-8 gap-10">
          <div className="flex flex-col md:gap-6 gap-4 2xl:max-w-[805px] xl:max-w-[50%] lg:max-w-[52%]">
            <h2 className="2xl:text-[64px] xl:leading-[70px] xl:text-6xl md:text-5xl text-4xl font-bold text-[#231F20] ">
              The <span className="text-[#204285]">StellarStack</span>
              <br className="lg:block hidden"></br> Culture
            </h2>

            <p className="2xl:text-[32px] 2xl:leading-10 xl:text-2.5xl xl:leading-9 lg:text-2xl sm:text-xl text-lg text-[#71717A] font-normal">
              Working at StellarStack is a fulfilling experience. We
              foster&nbsp;collaboration among peers and respect everyone’s
              opinion,&nbsp;creating an inviting and creative work environment 
               <span className="font-semibold">
                   .  As team members feel appreciated and valued, StellarStack is the
                company everyone wants to work with.
              </span>
              &nbsp;&nbsp;We are always one step ahead of the game, ready to
              drive change in the right direction and lead companies to their
              next big step in their digital journeys.
            </p>
            <div className="lg:w-[222px] lg:border-2 border border-[#71717A] md:mt-5 mt-3 sm:block hidden"></div>
          </div>
         <div className="flex justify-center relative" >
         <img className="w-full" src={Image} alt="" />
         </div>
        </div>
        
      </div>
    </>
  );
}

export default StellarStackCulture;
