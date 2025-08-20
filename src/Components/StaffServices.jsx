import React from 'react'
import Image from '../assets/logo/pictures/StaffAugmentation.webp'
import StaffProp from './StaffProp'
export default function StaffServices() {
  return (
    <>
<div className='bg-[#F9FAFB]'>
    <div className='max-w-[1810px] mx-auto flex flex-col-reverse lg:flex-row lg:items-center gap-[70px] 2xl:gap-40 px-6 py-16 lg:py-24'>
        <img className='w-[856px] h-[856px]' src={Image} alt="" />
        <StaffProp 
        text={'Staff Augmentation'}
        secondtext={'Services'}
        description={'Boost your projects and access on-demand skilled IT talent while reducing costs.'}
        thirdtext={'Learn more about how we build unique teams'}
        learn={'Learn More'}
   />
    </div>
</div>

    </>
  )
}
