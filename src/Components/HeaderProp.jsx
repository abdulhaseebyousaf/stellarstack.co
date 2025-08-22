import React, { useState } from 'react'

const HeaderProp = ({About, our, Staff, How, service, Technologies}) => {
  const [isHoverd, setIsHoverd] = useState(false)
  return (
    <>
      <a  href="/about-us">{About}</a>
      <div  onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
       className='relative'>
{isHoverd && ( <div 
  className='absolute top-full left-0 w-60 z-50 flex flex-col bg-white shadow-md shadow-black/15 rounded-sm '>
<a href="#" className='hover:bg-gray-100  cursor-pointer px-4 py-3 m-0 transition-colors duration-200'>{our}</a>
<a href="#" className='hover:bg-gray-100 cursor-pointer px-4 py-3 m-0 transition-colors duration-200'>{Staff}</a>
<a href="#" className='hover:bg-gray-100 cursor-pointer px-4 py-3 m-0 transition-colors duration-200'>{How}</a>
</div>
)}
<button  type="button" className='text-base  font-normal text-[#204285] hover:text-blue-600 transition-colors duration-200'>{service}</button>
      </div>
      <a href="/our-technologies">{Technologies}</a>
    </>
  )
}

export default HeaderProp
