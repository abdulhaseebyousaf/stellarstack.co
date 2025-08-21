import React from 'react'
import Logo from '../assets/logo/Logo.svg'
import HeaderProp from './HeaderProp'
const Header = () => {
  return (
    <div>
    <nav className='bg-[#F9FAFB] fixed w-full top-0 right-0 z-50 shadow-md'>
<div className='max-w-[1810px] mx-auto w-full px-4 py-1 flex justify-between items-center z-50'>
<a href="#">
    <img src={Logo} alt="error" />
</a>
<div className='gap-16 hidden items-center md:flex'>
<div className='flex gap-6 text-base font-normal text-[#204285] items-center relative'>
<HeaderProp 
About={'About Us'}
Service={'Services'}
our={'Our Services'}
Staff={'Staff Augmentation'}
How={'How we Hire'}
service={'Services'}
Technologies={'Our Technologies'}
/>
</div>
<a href="#">
    <button type="button" className='flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-full lg:w-max text-sm font-medium px-3 py-1.5'>Contact Us</button>
</a>
</div>
</div>
    </nav>
    </div>
  )
}

export default Header
