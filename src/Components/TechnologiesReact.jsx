import React from 'react'
import Logo1 from '../assets/logo/pictures/react.webp'
import Logo2 from '../assets/logo/pictures/nodejs.webp'
import Logo3 from '../assets/logo/pictures/javaScript.webp'
import Logo4 from '../assets/logo/pictures/python.webp'
import Logo5 from '../assets/logo/pictures/aws.webp'
import Logo6 from '../assets/logo/pictures/reactNative.webp'
function TechnologiesReact() {
    const data = [
        {
            backgroundColor:'bg-[#61DAFB]',
            src:Logo1,
            text:'React'
        },
        {
            backgroundColor:'bg-[#539E43]',
            src:Logo2,
            text:'Node.js'
        },
        {
            backgroundColor:'bg-[#F5DE19]',
            src:Logo3,
            text:'JavaScript'
        },
        {
            backgroundColor:'bg-white',
            src:Logo4,
            text:'Python'
        },
        {
            backgroundColor:'bg-white',
            src:Logo5,
            text:'Amazon Web Services'
        },
        {
             backgroundColor:'bg-white',
            src:Logo6,
            text:'React Native'
        },
        
    ]

  return (
    <>
<div className='flex justify-center min-h-[908px] xl:py-0 py-10 items-center w-full px-6'>
    <div className='grid xl:grid-cols-3 sm:grid-cols-2 lg:gap-x-12 2xl:gap-x-16 sm:gap-12 gap-5 lg:gap-y-14  2xl:gap-y-24 sm:mt-28 mt-14' >

{data.map((items, index) => (
<div key={index}
     className='relative 2xl:w-[360px] md:w-[320px] w-full sm:min-h-[287px] min-h-[250px]' >
<div className=' absolute 2xl:-top-16 md:-top-14 -top-12 w-full flex justify-center left-1/2 -translate-x-1/2 z-20 ' >
<div   className={` rounded-full drop-shadow-[0px_-2px_4px_#b7bbc0] flex justify-center items-center 2xl:w-[118px] md:w-[100px] md:h-[100px] 2xl:h-[118px] w-[90px] h-[90px] ${items.backgroundColor}`} >
<img className='2xl:w-auto 2xl:h-auto w-[36px]' src={items.src} alt="" />
</div>
</div>
<div className='bg-[#CDD4DF]  rounded-[15px] px-5 2xl:h-[228px] h-[190px] flex justify-center items-center text-center drop-shadow-md shadow-lg shadow-[#A0A0A01F]'>
    <p className='text-[#204285] font-bold 2xl:text-[50px] xl:text-[40px] lg:text-[37px] md:text-[32px] text-[28px] lg:leading-14 leading-none pt-8 ' >{items.text}</p>
</div>
</div>
))}
    </div>
</div>
    </>
  )
}

export default TechnologiesReact