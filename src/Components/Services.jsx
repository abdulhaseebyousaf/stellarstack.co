import React from 'react'
import Image from '../assets/logo/pictures/ourServices.webp'    
export default function Services() {
  return (
    <>
      <div className='w-full h-auto 2xl:py-20 lg:py-0 py-10 flex items-center justify-center bg-[#e4e5da]'>
        <div className='flex flex-col-reverse lg:flex-row  items-center px-6 justify-between gap-10 max-w-[1810px] mx-auto min-h-[691px]'>
         <div className='2xl:max-w-[825px]'>
            <h1 className="text-[#204285] md:text-[65px] sm:text-5xl text-[40px] font-bold">Our Services</h1>
            <p className="text-[#231F20] xl:text-2xl text-xl xl:leading-8 font-normal sm:mt-6 mt-4">We specialize in delivering next-generation technology solutions tailored to meet the unique needs of your business. From custom software development and mobile applications to cloud integration and enterprise-grade systems, our team is dedicated to crafting digital experiences that drive results. With a focus on innovation, scalability, and user-centered design, we help companies unlock new opportunities, streamline operations, and stay ahead in a rapidly evolving digital landscape.</p>
            </div>   
            <div className='lg:max-w-[814px] max-w-[500px] ' >
                <img src={Image} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
