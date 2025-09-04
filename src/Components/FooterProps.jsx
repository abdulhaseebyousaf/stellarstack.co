import React from 'react'
import { Link } from 'react-router-dom'

function FooterProps({text, second, third, forth}) {
  return (
    <>
    <ul className='space-y-[18px] list-none'>
<li className='font-bold mb-[18px]'>
{text}
</li>
<li className='mb-[18px]'>
<Link className='hover:text-blue-600  duration-200 transition-all' to="/about-us">
{second}
</Link>
</li>
<li className='mb-[18px]'>
<Link className='hover:text-blue-600  duration-200 transition-all' to="/our-technologies">
{third}
</Link>
</li>
<li >
<Link className='hover:text-blue-600  duration-200 transition-all' to="/caseStudy">
{forth}
</Link>
</li>

</ul>
    </>
  )
}

export default FooterProps