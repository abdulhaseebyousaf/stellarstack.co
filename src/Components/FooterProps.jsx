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
<Link to="/about-us">
{second}
</Link>
</li>
<li className='mb-[18px]'>
<Link to="/our-technologies">
{third}
</Link>
</li>
<li >
<Link to="/caseStudy">
{forth}
</Link>
</li>

</ul>
    </>
  )
}

export default FooterProps