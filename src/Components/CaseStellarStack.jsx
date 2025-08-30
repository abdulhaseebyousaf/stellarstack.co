import React from 'react'
import CaseStudy from '../assets/logo/pictures/CaseStudiesHero.webp'
export default function CaseStellarStack() {
  return (
    <>
<div className='rounded-b-[40px] sm:rounded-b-[108px] bg-[#204285]'>
<div className='pt-7'>
<div className="flex justify-center items-center w-max mx-auto px-6 lg:px-8 2xl:px-10 py-2 lg:py-3 2xl:py-5 text-3xl sm:text-4xl font-normal border rounded-full bg-[#91a1c2] text-white">Case Study</div>
<h1 className="px-3 pt-12 pb-10 sm:pb-20 text-3xl sm:text-5xl lg:text-6xl 2xl:text-[72px] font-bold 2xl:leading-[80px] text-center text-white">StellarStack <br /> Connecting Innovators with <br className='hidden md:block'/> Stellar Talent</h1>
</div>
<div className='max-w-[1250px] mx-auto px-6' >
<img src={CaseStudy} alt="" />
</div>
</div>
    </>
  )
}
