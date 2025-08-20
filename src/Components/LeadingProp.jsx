import React from 'react'
import Image from '../assets/logo/pictures/playbutton.svg'
export default function LeadingProp({text, secondtext, thirdtext, forthtext, lasttext}) {
  return (
    <>
<h5 className='pt-6 text-2xl font-semibold text-center'>{text} <a className='underline' href="#">{secondtext}</a> </h5> 
<div className='max-w-[1704px] mx-auto px-6 pb-16 md:pb-24 2xl::pb-32 lg:pt-16' >
<h2 className='text-5xl lg:text-6xl 2xl:text-[80px] font-bold text-center text-[#231F20]'>{thirdtext} <span className='text-[#204285]'>{forthtext}</span></h2>
<p className='pt-5 text-base md:text-lg xl:text-xl text-center text-[#231F20]'>{lasttext}</p>
<div className='max-w-[80%] mx-auto mt-8 2xl:mt-12 relative flex justify-center items-center rounded-xl overflow-hidden' >
    <button className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' type="button">
    <img src={Image} alt="playbutton" />
    </button>
    {/* <video className='object-cover' src="/JustinPetaFeedback.mp4"></video> */}
</div>
</div>
    </>
  )
}
