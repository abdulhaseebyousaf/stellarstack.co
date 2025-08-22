import React from 'react'
import Image from '../assets/logo/pictures/AboutHero.webp'
import Logo1 from '../assets/logo/logos/Foundation-logosvg.svg'
import Logo2 from '../assets/logo/logos/Whatwe.svg'
import Logo3 from '../assets/logo/logos/Core.svg'
import Logo4 from '../assets/logo/logos/Driven.svg'
function Aboutus() {
    const data = [
        { 
      src: Logo1,      
name: 'Our Foundation',
text: 'Established in 2019, Stellar Stack was built with the vision of redefining IT staff augmentation and digital innovation. We began with a tight-knit team of talented engineers from Pakistan and Canada, aiming to deliver meaningful tech solutions with purpose and precision.'
         },
        { 
      src: Logo2,      
name: 'What We Do',
text: 'We specialize in software development services, offering tailored solutions and scaling tech teams based on client needs. Whether it’s full-cycle development or team augmentation, our agile mindset ensures every project is efficient, scalable, and forward-thinking.'
         },
        { 
      src: Logo3,      
name: 'Our Core Values',
text: 'At Stellar Stack, we go beyond just delivering code. We’re a human-centered company, driven by values like teamwork, transparency, and collaboration. We deeply care about client satisfaction and the well-being of our team, making us more than just another tech company.'
         },
        { 
      src: Logo4,      
name: 'Driven by Passion',
text: 'What sets us apart is our resilience, flexibility, and curiosity. Our team is fueled by a constant drive for excellence—ready to explore, create, and innovate with every project we take on. We’re not just building software; we’re building solutions that matter.'
         },
]
  return (
    <>
<div className='bg-[#e4e5da] w-full'>
<div className='bg-[#e4e5da] max-w-[1810px] mx-auto w-full relative h-auto pt-5' >
    <div className='min-h-[550px] sm:min-h-[500px]'>
        <div className='flex flex-col items-center justify-center gap-4 text-center sm:py-16 py-10 px-6'>
            <h1 className='text-5xl lg:text-6xl 2xl:text-[72px] font-bold text-[#204285]'>About Us</h1>
            <p className='sm:text-xl text-lg max-sm:leading-6 text-[#231F20] max-w-[712px]'>
            Providing a more enjoyable life for people and being the company everyone wants to work with.
            </p>
        </div>
    </div>
</div>
<div className='relative'>
    <img className='w-full sm:h-[756px] h-[800px] object-cover rounded-t-[20px] object-center' src={Image} alt="" />
<div className='absolute lg:-top-36 sm:-top-48 -top-[40%] left-1/2 -translate-x-1/2 flex flex-col text-center w-full justify-center'>
<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-fit mx-auto gap-x-8 max-xl:gap-y-10 max-sm:gap-y-9 max-md:px-6'>
    {data.map((shirt, index)=> (
<div key={index} 
    className='md:w-[277px] md:min-h-[257px] max-w-[650px] bg-white rounded-[12px] relative shadow-md flex flex-col items-center text-center px-5 pb-4 sm:pt-8 pt-6'>
       <div className='sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] rounded-full bg-[#204285] absolute flex items-center justify-center -top-7 z-10' >
<img className='sm:w-6 sm:h-6 w-5 h-5' src={shirt.src} alt="" />
       </div>
        <div>
<p className='text-[#204285] font-semibold text-2xl'>{shirt.name}</p>
<p className='mt-1 sm:mt-2 text-[13px] text-[#231F20] leading-5 '>{shirt.text}</p>
    </div>
        </div>
    ))

    }
    
</div>
<p className='sm:text-2xl text-lg leading-7 sm:mt-7 mt-5 font-semibold text-white px-6'>Learn More About Staff Augmentation Services</p>

<div className="sm:border-2 border-1 border-white w-1/2 sm:w-[306px] mx-auto sm:mt-7 mt-3"></div>
</div>
</div>
</div>

    </>
  )
}

export default Aboutus