import React from 'react'

export default function StaffProp({text, secondtext, description, thirdtext, learn}) {
  return (
    <div>
    <h1 className='text-4xl lg:text-6xl font-bold tracking-[-1.5px] text-[#231F20]'>{text} <span className='text-[#204285]'>{secondtext}</span></h1>
    <h2 className='pt-6 pb-12 max-w-[710px] text-xl text-[#231F20]'>{description}</h2>
    <p className='pb-8 text-lg text-[#231F20] italic'>{thirdtext}</p>
    <a className='flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-lg font-medium px-9 py-2.5' href="#">
    <span>{learn}</span>
    </a>
    <div className="mt-16 w-64 sm:w-72 h-[2px] bg-[#71717A]"></div>
    </div>
  )
}
