import React from 'react'
import Logo from '../assets/logo/logos/Tick.svg'
function KeyFeature() {
 const data = [
    {
        src:Logo,
        text:'Project Management'
    },
    {
        src:Logo,
        text:'UX Research'
    },
    {
        src:Logo,
        text:'UI/UX Design'
    },
    {
        src:Logo,
        text:'End to End Development'
    },
    {
        src:Logo,
        text:'QA'
    },
    {
        src:Logo,
        text:'Maintenance'
    },
    {
        src:Logo,
        text:'Business Analysis'
    },
 ]
    return (
    <>
<div className='bg-[#e3e5da]'>
<div className='max-w-[1810px] mx-auto px-6 py-16 lg:24 2xl:py-32' >
<p className="pb-1 text-lg font-bold text-[#204285]">KEY FEATURE</p>
<h2 className="text-5xl xl:text-[64px] font-bold text-[#231F20]">Service Details</h2>
<p className="pt-6 pb-16 text-xl font-normal text-[#231F20]">Custom Web Services, from basic informational websites to complex web applications.</p>
<div className='flex max-md:flex-col-reverse 2xl:mr-[155px]'>
    <div className='flex flex-col justify-center bg-[#204285] rounded-lg px-8 lg:px-14 py-8 z-10'>
     <p className='pb-6 lg:pb-10 xl:pb-16 text-xl xl:text-2xl 2xl:text-[32px] font-medium text-white'>Agile Web Development, no waste, continuous improvement, collaboration, and respect for people. <br></br> <br></br>  Whether you need a new website, a web portal to help your employees, or an app to automate processes, our developers have the expertise and experience to build it quickly and keep it aligned with your vision.</p>
     <a href="https://calendly.com/amishmaqbool/project-discussion?month=2025-08" target="_blank" rel="noopener noreferrer">
     <button className='px-6 py-2 text-xl lg:text-2xl font-medium rounded-md w-max bg-white cursor-pointer'>Get in Touch</button>
     </a>
    </div>
    <div className='flex-shrink-0 md:w-[320px] lg:w-[450px] 2xl:w-[559px] max-md:-mb-14 md:-ml-14 pl-6 md:pl-20 2xl:pl-32 pt-10 2xl:pt-14 pb-16 md:pb-4 pr-4 max-md:border-x-4 max-md:border-t-4 md:border-y-4 md:border-r-4 rounded-[56px] border-[#231F20] z-0' >
{data.map((items, index) => (
<div key={index} className='pb-3 2xl:pb-6 flex gap-2 items-center'>
    <img className='w-6 h-4 flex-shrink-0' src={items.src} alt="" />
    <p className='flex-shrink-0 lg:text-2xl 2xl:text-[28px] font-medium text-[#231F20] cursor-pointer'>{items.text}</p>
    </div>
))}

    </div>
</div>
</div>
</div>
    </>
  )
}

export default KeyFeature