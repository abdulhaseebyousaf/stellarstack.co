import React, { useState } from 'react'
import Logo from '../assets/logo/Logo.svg'
import HeaderProp from './HeaderProp'
import { Link } from 'react-router-dom';
const Header = () => {
  const [showData, setShowData] = useState(false);
  const toggleData = () => {
setShowData(!showData)
  }
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
<div  className='md:hidden pr-2' >
<div className='menuToggle' >
<input type="checkbox" className='hidden' id='checkbox' />
<label onClick={toggleData} className="toggle open cursor-pointer w-8 h-5 m-auto block relative " htmlFor="checkbox" aria-label="Toggle menu">
<div className="h-[4px] text-inherit opacity-100 bg-[#204285] rounded-[2px] transition-[none_.35s_cubic-bezier(.5,-.35,.35,1.5)] absolute left-0 right-0  bar--top"></div>
<div className="h-[4px] text-inherit opacity-100 bg-[#204285] rounded-[2px] transition-[none_.35s_cubic-bezier(.5,-.35,.35,1.5)] absolute left-0 right-0 bar--middle"></div>
<div className="h-[4px] text-inherit opacity-100 bg-[#204285] rounded-[2px] transition-[none_.35s_cubic-bezier(.5,-.35,.35,1.5)] absolute left-0 right-0 bar--bottom"></div>
</label>
{showData && (
<div id='scroll' className='fixed left-0  right-0 top-[77px] h-[calc(100vh-77px)] bg-[#F9FAFB] transition-all duration-500 ease-in-out 
md:hidden flex flex-col items-center justify-center space-y-8 text-[#204285] text-xl font-medium px-6 pb-10 z-40 opacity-100 translate-y-0 pointer-events-auto'>
   <Link to="/about-us">About Us</Link>
   <Link to="/our-services">Our Services</Link>
   <Link to="/our-staff">Staff Augmentation</Link>  
   <Link to="how-we-hire">How we Hire</Link>
   <Link to="/our-technologies">Our Technologies</Link>
   <button className="flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-sm font-medium px-5 py-2"><span>Contact Us</span></button>
        </div>
)} 
</div>
</div>
</div>
    </nav>
    </div>
  )
}

export default Header
