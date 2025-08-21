import React from 'react'
function InnovateCard({Image, text, firsttext, secondtext}) {
  return (
    <>
    <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <div className='flex justify-center items-center size-[72px] rounded-full bg-[#204285]'>
            <img className='h-10 w-10' src={Image} alt="web dev" />
        </div>
            <h3 className='mt-6 mb-2.5 text-2xl font-semibold text-[#020817]'>{text}</h3>
            <h4 className='min-h-[72px] text-base text-[#4B5563] font-normal'>{firsttext}</h4>
            <a className='flex items-center gap-2 text-[#204285] rounded-lg border border-[#FFFFFF] mt-3.5 group'
             href="#">
                <div className='text-sm font-medium'>{secondtext}</div>
                <div className='transition-transform group-hover:translate-x-1'>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#204285"></path></svg>
                </div>
             </a>
    </div>
    </>
  )
}

export default InnovateCard