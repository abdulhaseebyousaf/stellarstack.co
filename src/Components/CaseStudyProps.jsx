import React from 'react'
import Case from '../assets/logo/logos/Case.svg'
function CaseStudyProps({text, secondText, thirdtext,  }) {
  return (
    <>
    <div className='max-w-[620px]' >
<h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-[#204285] mb-4'>{text}</h1>
<p className='text-xl md:text-2xl lg:text-3xl font-normal text-[#4B5563] mb-4'>{secondText}</p>
<a className='text-lg md:text-xl text-[#204285] font-medium inline-flex items-center group' href="#">
   {thirdtext}
    <span className='mt-0.5 ml-2 transition-transform group-hover:translate-x-1'>
   <img src={Case} alt="" />
    </span>
</a>
    </div>
    </>
  )
}

export default CaseStudyProps