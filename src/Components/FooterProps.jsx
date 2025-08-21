import React from 'react'

function FooterProps({text, second, third, forth}) {
  return (
    <>
    <ul className='space-y-[18px] list-none'>
<li className='font-bold mb-[18px]'>
{text}
</li>
<li className='mb-[18px]'>
<a href="">
{second}
</a>
</li>
<li className='mb-[18px]'>
<a href="">
{third}
</a>
</li>
<li >
<a href="">
{forth}
</a>
</li>

</ul>
    </>
  )
}

export default FooterProps