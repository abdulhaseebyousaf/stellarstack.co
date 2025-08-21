import React from 'react'

function GetInProp({Image, text, second, third, forth}) {
  return (
    <>
 
                    <div className='flex items-start space-x-4'>
                        <div className='flex-shrink-0 size-8 flex justify-center items-center rounded-full bg-white'>
                            <img className='h-5 w-5' src={Image} alt="" />
                        </div>
                        <div>
                          <p className='text-lg font-medium leading-5' >{text}</p>
                          <p className='text-base font-normal'> <a   href="">{second}</a> <br></br> <a  href="">{third}</a> <br></br> <a href="">{forth}</a>
                          </p>
                        </div>
                    </div>
             
    </>
  )
}

export default GetInProp