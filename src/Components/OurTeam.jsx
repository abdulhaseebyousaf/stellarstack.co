import React from 'react'
import Image from '../assets/logo/pictures/GroupDiscussion.webp'
function OurTeam() {
  return (
    <>
    <div className='bg-[#F9FAFB]'>
<div className='max-w-[1810px] mx-auto grid lg:grid-cols-2 place-items-center gap-6 px-6 py-16 lg:py-24'>
    <div>
        <h1 className='max-w-[800px] text-5xl lg:text-6xl 2xl:text-[80px] font-bold 2xl:leading-24 tracking-[-1.5px] text-[#231F20]'>Our <span className='text-[#204285]'>team believes</span> you deserve only the <span className='text-[#204285]'>best</span></h1>
        <p className='pt-6 lg:pb-8 max-w-[710px] text-xl text-[#231F20]'>Unleashing Excellence, Delivering the Best with Unwavering Dedication.</p>
        <div className="max-lg:mb-8 mt-10 lg:mt-16 w-60 sm:w-72 h-[2px] bg-[#71717A]"></div>
    </div>
    <img src={Image} alt="eror" />
</div>
    </div>
    </>
  )
}

export default OurTeam