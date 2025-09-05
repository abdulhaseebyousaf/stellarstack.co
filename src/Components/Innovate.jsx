import React from 'react'
import Logo1 from '../assets/logo/logos/WebIcon.89c61c31.svg'
import Logo2 from '../assets/logo/logos/Ui.svg'
import Logo3 from '../assets/logo/logos/MobileDev.svg'
import Logo4 from '../assets/logo/logos/Mologo.svg'
import Logo5 from '../assets/logo/logos/GlobeIcon.svg'
import Logo6 from '../assets/logo/logos/CodeIcon.svg'
import { Link } from 'react-router-dom'



function Innovate() {
const IPLshirts = [
  {
    src: Logo1,
    name: 'Web Development',
    text: 'Empowering Digital Growth with Tailored Web Solutions — From idea to launch, we build success together.',
    brand: 'Learn More'
  },
  {
    src: Logo2,
    name: 'UI/UX Design',
    text: 'Designing intuitive, stunning UI/UX that elevates your brand and delights users.',
    brand: 'Learn More'
  },
  {
    src: Logo3,
    name: 'Mobile App Development',
    text: 'Transform ideas into powerful mobile apps — fast, user-friendly, and built to perform.',
    brand: 'Learn More'
  },
   {
    src: Logo4,
    name: 'Technology Modernization',
    text: 'Transform your business with smart tech modernization — streamlined, scalable, future-ready.',
    brand: 'Learn More'
  },
  {
    src: Logo5,
    name: 'Staff Augmentation',
    text: 'Supercharge your team with expert talent — fast, flexible, and project-ready.',
    brand: 'Learn More'
  },
  {
    src: Logo6,
    name: 'Digital Marketing',
    text: 'Elevate your brand with results-driven digital marketing — SEO, social, and strategy that delivers',
    brand: 'Learn More'
  },
];

  return (
    <div className='bg-[#e3e5da]' >
<div id='innovate-together' className='max-w-[1350px] mx-auto px-6 py-16 lg:py-24 2xl:py-32' >
<h2 className='text-[42px] font-normal text-center text-[#020817]'>Let’s Innovate Together</h2>
<p className='max-w-3xl mx-auto text-center text-xl text-[#4B5563]'>We deliver cutting-edge solutions that empower businesses to thrive in competitive markets</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
  
      {IPLshirts.map((shirt, index) => (
        <div
          key={index}
          className='mainbox bg-white p-6   hover:scale-[1.02] transition-all duration-500  hover:bg-[#3a66be96]   rounded-lg shadow-lg hover:shadow-md'
        >
                  <div className='flex justify-center items-center  size-[72px] rounded-full bg-[#204285]'>
            <img className='h-10 w-10' src={shirt.src} alt="web dev" />
    </div>
          <h3 className='mt-6 mb-2.5 text-2xl font-semibold text-[#020817]'>{shirt.name}</h3>
          <p className='name min-h-[72px] text-base text-[#4B5563]  font-normal'>{shirt.text}</p>
          <Link to='/our-services' className='flex items-center gap-2 text-[#204285] rounded-lg  mt-3.5 group'>
               <div className='text-sm font-medium'>{shirt.brand}</div>
            <div className='transition-transform group-hover:translate-x-1' >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#204285"></path></svg>
            </div>
            </Link>
        </div>
      ))}
   
</div>
</div>
    </div>
  )
}

export default Innovate