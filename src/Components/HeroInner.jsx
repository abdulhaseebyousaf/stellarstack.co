import React from 'react'

const HeroInner = ({text, secondtext, thirdtext, forthtext}) => {
  return (
    <div>
      <h1 className='text-5xl lg:text-6xl 2xl:text-[80px] font-bold 2xl:leading-24 tracking-[-1.5px] text-[#204285]' >
{text} <span className='text-[#231F20]'>{secondtext} </span>{thirdtext}
</h1>
<h2 className='pt-6 pb-8 max-w-[710px] text-xl text-[#231F20]'>{forthtext}</h2>
    <a href="#">
        <button className='flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-lg font-medium px-9 py-2.5' ><span>Let's Talk</span></button>
    </a>
    <div className='mt-16 w-72 h-[2px] bg-[#71717A]'></div>
    </div>
  )
}

export default HeroInner
