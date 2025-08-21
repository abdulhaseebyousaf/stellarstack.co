import React from 'react'
import InnovateCard from './InnovateCard'
import Logo1 from '../assets/logo/logos/WebIcon.89c61c31.svg'
import Logo2 from '../assets/logo/logos/Ui.svg'
import Logo3 from '../assets/logo/logos/MobileDev.svg'
import Logo4 from '../assets/logo/logos/Mologo.svg'
import Logo5 from '../assets/logo/logos/GlobeIcon.svg'
import Logo6 from '../assets/logo/logos/CodeIcon.svg'



function Innovate() {
  return (
    <div className='bg-[#e3e5da]' >
<div id='innovate-together' className='max-w-[1350px] mx-auto px-6 py-16 lg:py-24 2xl:py-32' >
<h2 className='text-[42px] font-normal text-center text-[#020817]'>Let’s Innovate Together</h2>
<p className='max-w-3xl mx-auto text-center text-xl text-[#4B5563]'>We deliver cutting-edge solutions that empower businesses to thrive in competitive markets</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
<InnovateCard 
Image={Logo1}
text={'Web Development'}
firsttext={'Empowering Digital Growth with Tailored Web Solutions — From idea to launch, we build success together.'}
secondtext={'Learn More'}
/>

<InnovateCard 
Image={Logo2}
text={'UI/UX Design'}
firsttext={'Designing intuitive, stunning UI/UX that elevates your brand and delights users.'}
secondtext={'Learn More'}
/>
<InnovateCard 
Image={Logo3}
text={'Mobile App Development'}
firsttext={'Transform ideas into powerful mobile apps — fast, user-friendly, and built to perform.'}
secondtext={'Learn More'}
/>
<InnovateCard 
Image={Logo4}
text={'Technology Modernization'}
firsttext={'Transform your business with smart tech modernization — streamlined, scalable, future-ready.'}
secondtext={'Learn More'}
/>
<InnovateCard 
Image={Logo5}
text={'Staff Augmentation'}
firsttext={'Supercharge your team with expert talent — fast, flexible, and project-ready.'}
secondtext={'Learn More'}
/>
<InnovateCard 
Image={Logo6}
text={'Digital Marketing'}
firsttext={'Elevate your brand with results-driven digital marketing — SEO, social, and strategy that delivers'}
secondtext={'Learn More'}
/>
</div>
</div>
    </div>
  )
}

export default Innovate