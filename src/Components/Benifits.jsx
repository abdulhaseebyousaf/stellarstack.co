import React from 'react'
import Image from '../assets/logo/pictures/CostIcon.svg'
import Logo1 from '../assets/logo/pictures/FileExplore.svg'
import Logo2 from '../assets/logo/pictures/LanguageIcon.svg'
import Logo3 from '../assets/logo/pictures/Recruitment.svg'
import Logo4 from '../assets/logo/pictures/AgileScale.svg'

export default function Benifits() {
    const Data =[
        {
        Logo:Image,
   text:"Cost and Risk Reduction.",
        },
        {
            Logo:Logo1,
   text:"More Time To Prioritize Your Own Project.",
        },
        {
            Logo:Logo2,
   text:"Highly Skilled, English Proficient Experts.",
        },
        {
            Logo:Logo3,
   text:"No Recruitment Cost.",
        },
        {
            Logo:Logo4,
   text:"Agile Scale Up/Down.",
        },
    ]
  return (
    <div className='bg-[#e3e5da]'>
<div className='pt-16 lg:pt-24 2xl:pt-32'>
    <p className="text-base xl:text-lg font-bold text-center text-[#204285]">KEY FEATURE</p>
    <h2 className="pt-1.5 text-5xl xl:text-[64px] font-bold text-center text-[#231F20]">Benefits</h2>
    <div className='flex justify-center flex-wrap gap-x-[7.5%] gap-y-16 max-w-[1050px] mx-auto px-6 mt-16 md:mt-32'>
{Data.map((item,index) => (
        <div key={index} className='px-2 pt-7 hover:scale-105 duration-500 w-[282px] h-[338px] rounded-t-full rounded-b-2xl bg-[#FFFFFF]'>
            <div className='size-[198px] mx-auto rounded-full bg-[#204285] flex items-center justify-center' >
<img className='w-auto h-auto max-w-full max-h-full' src={item.Logo} alt="" />
            </div>
<p className="pt-8 text-2xl font-semibold text-center text-[#231F20]">{item.text}</p>
        </div>
))}
    </div>
</div>
    </div>
  )
}
