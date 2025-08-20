import React from 'react'
import HeroInner from './HeroInner'
import Image from '../assets/logo/heroPic/OfficeEnvirnoment.webp'
const Hero = () => {
  return (
    <div className='bg-[#e3e5da]'>
      <div className='max-w-[1810px] mx-auto grid lg:grid-cols-2 gap-6 px-6 py-16 md:py-24 2xl:py-36' >
<div>
<HeroInner 
text={'Crafting Software'}
secondtext={'Excellence for'}
thirdtext={'Digital Age'}
forthtext={'Trusted Tech Partner for Fast-Growing Startups & Fortune 500 Enterprises'}
/>
</div>
<img className='text-transparent' src={Image}  alt="office Environment" />
      </div>
    </div>
  )
}

export default Hero
