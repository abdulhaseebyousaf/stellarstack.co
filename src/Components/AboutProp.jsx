import React from 'react'

export default function AboutProp({text, firsttext, second, third,}) {
  return (
    <>
        <h1 className='text-5xl lg:text-6xl 2xl:text-[72px] font-bold text-[#231F20]'>{text} <span className='text-[#204285]'>{firsttext}</span> {second}</h1>
        <p className='pt-9 text-xl md:text-2xl 2xl:text-3xl text-[#231F20]'>{third}</p>
        <div className="mt-20 w-64 sm:w-[580px] mx-auto h-[2px] bg-[#71717A]"></div>
  
    </>
  )
}
