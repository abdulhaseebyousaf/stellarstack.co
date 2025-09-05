import React from 'react'
import OfficeTable from '../assets/logo/pictures/OfficeTables.webp'
export default function Technologies() {
  return (
    <div className='bg-[#E4E5DA]'>
<div className='max-w-[1810px] md:min-h-[660px] sm:min-h-[640px] min-h-[580px] sm:gap-0 gap-7 mx-auto w-full px-6 py-12 flex lg:flex-row flex-col-reverse justify-between lg:items-center' >
<div className='2xl:max-w-[630px] lg:max-w-[45%] max-w-[80%] flex flex-col xl:gap-12 md:gap-9 gap-7' >
  
<h1 className="xl:text-[64px] xl:leading-[65px] xl:text-6xl sm:text-5xl text-4xl text-[#204285] font-bold">Our Technologies</h1>
<p className="text-[#231F20] text-[20px] font-normal leading-6">At StellarStack, we aim to be ahead of the game. We work with tech profiles that master the avant-garde technologies that currently shape and enhance the digital acceleration process</p>
</div>
<div>
    <img className='w-[885px]' src={OfficeTable} alt="" />
</div>
</div>
    </div>
  )
}
