import React from 'react'
import Tick from '../assets/logo/logos/Tick.svg'
import Logo1 from '../assets/logo/logos/SearchIcon.svg'
import Image from '../assets/logo/pictures/Agile.webp'
export default function Agile() {
  const Data = [
    {
      tick:Tick,
      image:Logo1,
      heading:"Discovery",
      Text:'Get to know your needs.',
      Text2:'Evaluate your project’s viability and feasibility.',
      Text3:'Learn about our process in detail.',    
    },
    {
      tick:Tick,
      image:Logo1,
      heading:"Initial Backlog Definition & Estimation",
      Text:'Break down the initial project into clear & understandable work pieces.',
      Text2:'Estimate the initial backlog in joint workshops using techniques like Poker Planning & Magic Estimation.',    
    },
    {
      tick:Tick,
      image:Logo1,
      heading:"Strategy & Planning",
      Text:'Get to know your needs.',
    },
    {
      tick:Tick,
      image:Logo1,
      heading:"Project Starts!",
      Text:'We specialize in Agile Software Development, which is highly collaborative and efficient.',
      Text2:"First functional delivery in the first 2 sprints, guaranteed.",
    },
    {
      tick:Tick,
      image:Logo1,
      heading:"Development",
      Text:'Our engineers build your solution using best practices and modern technologies, with regular updates and demos.',
    },
    {
      tick:Tick,
      image:Logo1,
      heading:"Testing & Launch",
      Text:'We rigorously test your application to ensure quality and performance before supporting you through a smooth launch.',
    },
    
  ] 
  return (
    <>
    <div className='bg-[#f9fafc] py-16 lg:py-24 2xl:py-32'>
        <p className="text-base xl:text-lg font-bold text-center text-[#204285]">AGILE METHADOLOGIES</p>
        <h2 className="pt-1.5 text-4xl lg:text-5xl xl:text-[64px] font-bold text-center text-[#231F20]">Our Process</h2>
        <p className="px-6 pt-8 text-xl font-normal text-center text-[#231F20]">At Stellar Stack we use the Agile methodology to deliver working software every Sprint.</p>
        <div className='max-w-[1737px] mx-auto px-6 lg:flex justify-between gap-[10%] items-center'>
<div>
{/*  */}
    {Data.map((item) =>(
<div className='pt-16 xl:pt-20'>
  <img src={item.image} alt="error" />
    <h3 className='pt-2.5 text-2xl lg:text-[28px] 2xl:text-[40px] font-semibold text-[#204285]'>{item.heading}</h3>
   
   <div  className='relative mt-6 md:ml-24 py-5 xl:py-8 pl-5 custom-border-box border-l-[6px] border-solid border-[#204285] rounded-bl-xl rounded-tl-xl' >
      
{/* box aye ga yaahan  */}
<li className="flex pt-0">
  <img className='mt-1.5 w-6 h-4 flex-shrink-0' src={item.tick} alt="" />
<span className="max-w-[803px] ml-2 text-xl 2xl:text-[28px] font-medium text-[#231F20]">{item.Text}</span>
</li>
{item.Text2 &&
<li className="flex pt-6">
  <img className='mt-1.5 w-6 h-4 flex-shrink-0' src={item.tick} alt="" />
<span className="max-w-[803px] ml-2 text-xl 2xl:text-[28px] font-medium text-[#231F20]">{item.Text2}
</span>
</li>
}

{item.Text3 &&
<li className="flex pt-6">
  <img className='mt-1.5 w-6 h-4 flex-shrink-0' src={item.tick} alt="" />
<span className="max-w-[803px] ml-2 text-xl 2xl:text-[28px] font-medium text-[#231F20]">{item.Text3}
</span>
</li>
}

  </div>
</div>
  ))}
</div>
<div className='max-lg:mt-16 max-lg:mx-auto lg:w-[550px]'>
  <img src={Image} alt="error"  />
</div>
        </div>
    </div>
    </>
  )
}
