import React, { useRef, useState } from "react";
import Image from "../assets/logo/pictures/playbutton.svg";
import Video from "../assets/logo/video/JustinPetaFeedback.mp4";
import { Link } from "react-router-dom";

export default function LeadingProp({
  text,
  secondtext,
  thirdtext,
  forthtext,
  lasttext,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();         
    } else {
      vid.pause();       
    }
    
  };

  return (
    <>
      <h5 className="pt-6 text-2xl font-semibold text-center">
        {text}
        <Link className="underline" to="/our-technologies">{secondtext}</Link>
      </h5>

      <div className="max-w-[1704px] mx-auto px-6 pb-16 md:pb-24 2xl:pb-32 lg:pt-16">
        <h2 className="text-5xl lg:text-6xl 2xl:text-[80px] font-bold text-center text-[#231F20]">
          {thirdtext} <span className="text-[#204285]">{forthtext}</span>
        </h2>
        <p className="pt-5 text-base md:text-lg xl:text-xl text-center text-[#231F20]">
          {lasttext}
        </p>

        <div className="max-w-[80%] mx-auto mt-8 2xl:mt-12 relative flex justify-center items-center rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            className="object-cover"
       
            loop
            playsInline
            src={Video}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            
            onClick={togglePlayPause}
          />
          
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlayPause}
              className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              aria-label="Play video"
            >
              <img
                className="size-20 lg:size-32 2xl:size-48 select-none"
                src={Image}
                alt="playbutton"
                draggable="false"
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
