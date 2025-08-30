import React from 'react'
import Logo from '../assets/logo/RightChevron.svg'
import Image from '../assets/logo/beliefPic/EvolutionGroup.webp'
import { Link } from 'react-router-dom'
export default function BuildProp({forth, fifth, sixth, seven}) {
  return (
    <>
    <div className='flex flex-col lg:flex-row-reverse max-lg:mb-16 gap-6 md:gap-20 py-0 lg:py-24 2xl:py-36  lg:items-center' >
        <div className="md:w-[45%]">
            <img src={Image} alt="EvolutionGroup" />
        </div>
        <div className='lg:w-[55%] text-left'>
            <p className='text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-[#204285]'>{forth}</p>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl 2xl:text-[80px] font-bold 2xl:leading-[88px] tracking-[-1.5px] py-6 md:py-12 text-[#231F20]'> <span className='text-[#204285]'>{fifth}</span> {sixth}</h2>
        <p className='text-[#231F20] text-2xl md:text-3xl 2xl:text-[40px] w-full'>{seven}</p>
        <div className='pt-12 md:pt-[102px]'>
            <Link href="#" className='flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-xl md:text-2xl font-medium px-3.5 py-2 md:py-3'><span>Learn More</span>
            <img src={Logo} alt="" />
            </Link>
        </div>
        </div>
    </div>
    </>
  )
}
