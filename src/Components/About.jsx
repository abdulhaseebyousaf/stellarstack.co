import React from 'react'
import AboutProp from './AboutProp'
import BeliefsProp from './BeliefsProp'
import BuildProp from './BuildProp'

function About() {
  return (
    <div className='bg-[#F9FAFB] w-full' >
<div className='max-w-[1810px] mx-auto px-6 pt-16 lg:pt-32 2xl:pt-32'>
<div className='max-w-[1480px] mx-auto text-center'>
    <AboutProp
    text={'About'}
    firsttext={'Stellar'}
    second={'Stack'}
    third={'At Stellar Stack, we believe in the power of collaboration to drive success. Since 2019, we have been connecting innovators with stellar talent. Through transparency, collaboration, and team play, we fuel transformative projects that shape the tech landscape. Join us and be part of a future with limitless possibilities.'}
    />
</div>
<BeliefsProp 
forth={'BELIEFS'}
    fifth={'Honesty &'}
    sixth={'hard work are our beliefs'}
    seven={'Our beliefs are rooted in honesty and hard work, driving us to surpass expectations and deliver exceptional results with unwavering integrity.'}
/>
<BuildProp 
forth={'BUILD'}
    fifth={'Build that'}
    sixth={'great idea that you have'}
    seven={'Build that great idea you have with our expertise and dedication. Let us bring your vision to life and turn it into a reality that surpasses your expectations.'}
/>
</div>
    </div>
  )
}

export default About