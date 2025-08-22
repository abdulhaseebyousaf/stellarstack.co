import React, { useRef, useState } from "react";
import Image from "../assets/logo/pictures/playbutton.svg";
import Video from "../assets/logo/video/JustinPetaFeedback.mp4";
export default function LeadingProp({
  text,
  secondtext,
  thirdtext,
  forthtext,
  lasttext,
}) 
{
  const videoRef = useRef(null); 
      const [isPlaying, setIsPlaying] = useState(false);
          const togglePlayPause = () => {
            if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      };
  return (
    <>
      <h5 className="pt-6 text-2xl font-semibold text-center">
        {text}
        <a className="underline" href="#">
          {secondtext}
        </a>
      </h5>
      <div className="max-w-[1704px] mx-auto px-6 pb-16 md:pb-24 2xl::pb-32 lg:pt-16">
        <h2 className="text-5xl lg:text-6xl 2xl:text-[80px] font-bold text-center text-[#231F20]">
          {thirdtext} <span className="text-[#204285]">{forthtext}</span>
        </h2>
        <p className="pt-5 text-base md:text-lg xl:text-xl text-center text-[#231F20]">
          {lasttext}
        </p>
        <div className="max-w-[80%] mx-auto mt-8 2xl:mt-12 relative flex justify-center items-center rounded-xl overflow-hidden">
          <video
          ref={videoRef}
            className=" object-cover "
            autoPlay
            loop
            src={Video}
          ></video>
        {!isPlaying && (  
          <img onClick={togglePlayPause}
          className="absolute  z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          src={Image}
          alt="playbutton"
          />
        )
        }
        </div>
      </div>
    </>
  );
}
