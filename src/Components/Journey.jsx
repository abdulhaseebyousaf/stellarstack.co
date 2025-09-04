import React from 'react'
import Image1 from '../assets/logo/logos/UserProfile.svg'
import Image2 from '../assets/logo/logos/PlanDocument.svg'
import Image3 from '../assets/logo/logos/DoubleTick.b5284c16.svg'
export default function Journey() {
    const Data=[
        {
            id:1,
            image:Image1,
            heading:"Let's Begin:",
            Secondhaeding:"All Hands On Deck!",
            description:"Your journey with us begins by sending us the requirements and position description you need to cover. 'It doesnt' matter if you don't have one already, we can craft one together.",
        },
        {
            id:2,
            image:Image2,
            heading:"Next Step:",
            Secondhaeding:"Kicking Off Your Plan!",
            description:"Once we have outlined and tailored our solutions, we move on to the next step: finding the perfect match! We put our sophisticated hiring methodology in motion and source up to three expert candidates within 48 hours only. In case you don't find the right fit for the position, we start over the process taking between 1-2 weeks.",
        },
        {
            id:3,
            image:Image3,
            heading:"Final Stage:",
            Secondhaeding:"It's A Match!",
            description:"Finally, we introduce you to your next hire, handpicked especially to match your project needs. And what's best, you have a 15-day money-back trial period. Wait no longer and save time and money on your next software development project with StellarStack!",
        },
    ]
  return (
    <div className='bg-[#e3e5da]'>
        <div className='max-w-[1527px] mx-auto px-6 pt-16 lg:pt-24 2xl:pt-32'>
            <h2 className="text-lg font-bold text-center text-[#020817]">YOUR IT STAFFING JOURNEY WITH STELLARStack</h2>
<div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mt-12'>
{Data.map((item, index) =>(
<div key={index} className='mainbox bg-[#CDD4DF] px-5 py-6 rounded-2xl hover:scale-105 duration-500 shadow-lg hover:shadow-xl   hover:bg-gradient-to-t from-[#3a66be96] to-[#4a97d2b2]'>
    <div className="flex justify-center items-center size-11 rounded-full bg-[#204285]">
<img src={item.image} alt="" />
    </div>
    <h2 className='py-2 text-2xl font-medium text-[#204285]'>
        {item.heading}
        <br />
  {item.Secondhaeding}
    </h2>
    <p className='name min-h-[72px] text-base text-[#231F20]'>{item.description}</p>
</div>
))}
</div>
        </div>
    </div>
  )
}
