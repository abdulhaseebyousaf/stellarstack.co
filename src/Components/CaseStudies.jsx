import React from 'react'
import CaseStudyProps from './CaseStudyProps'

function CaseStudies() {
  return (
    <>
<section className='bg-[#e3e5da] py-16 md:py-24 2xl:py-36 px-6'>
<div className='max-w-[1584px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12' >
    <CaseStudyProps 
    text={'Case Studies'}
    secondText={'Explore our detailed case studies to see how we’ve helped businesses across industries overcome challenges and achieve their goals with our tailored solutions.'}
    thirdtext={'Browse Case Studies'}
    />
    <CaseStudyProps 
    text={'Our Process'}
    secondText={'Our proven development methodology ensures timely delivery, transparent communication, and solutions that perfectly align with your business objectives.'}
    thirdtext={'Learn About Our Process'}
    />
</div>
</section>
    </>
  )
}

export default CaseStudies