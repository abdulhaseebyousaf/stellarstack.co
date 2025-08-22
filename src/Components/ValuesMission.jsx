import React from 'react'
import Logo1 from '../assets/logo/logos/Innovation.svg'
import Logo2 from '../assets/logo/logos/ShelfQuality.svg'
import Logo3 from '../assets/logo/logos/Focus.svg'
function ValuesMission() {
  const data = [
    {
    src: Logo1,
    name:'Relentless Pursuit of Innovatio',
    text: `Relentless Pursuit of Innovation isn't just our motto — it's our mindset. We push boundaries, embrace new technologies, and deliver impactful, cutting-edge solutions that shape the future.`,
  },
    {
    src: Logo2,
    name:'Top-shelf Quality',
    text: `At StellarStack, we deliver top-quality solutions through innovation, precision, and continuous improvement. Our expert team is committed to exceeding expectations and driving client success.`,
  },
    {
    src: Logo3,
    name:'Exceptional Customer Focus',
    text: `At StellarStack, we prioritize exceptional customer focus through personalized service, clear communication, and unwavering support—going above and beyond to build lasting partnerships.`,
  },
]
    return (
    <>
    <div className='w-full flex items-center justify-center bg-[#F9FAFB] py-16 md:py-24 2xl:py-32' >
        <div className='max-w-[1368px] h-auto flex flex-col justify-between md:px-10 px-6 xl:gap-0 gap-10'>
            <div className='text-center flex flex-col gap-2'>
                <h1 className="2xl:text-[64px] xl:leading-[70px] xl:text-6xl md:text-5xl text-4xl font-bold text-[#204285] uppercase">Values, Mission, Vision</h1>
                <p className="text-[32px] leading-9 font-medium text-[#231F20] ">Manouvering on sky.</p>
                <p className="2xl:text-[36px] xl:text-3xl xl:leading-[44px] lg:text-3xl sm:text-2xl text-xl !font-normal text-[#231F20] mt-6">More than just a slogan, this is our driving principle that guides everything that we do. We have made it our overriding mission to provide superior services and solutions that solve our customer’s needs.</p>
            </div>
            <div className='mt-8 flex flex-col items-center gap-16'>
                <div className='flex flex-wrap justify-center items-center xl:gap-16 gap-10 mx-auto w-fit'>
                        {data.map((items, index) => (
                            <div key={index} className='md:w-[303px] w-full h-auto bg-[#CDD4DF] border border-[#00000014] rounded-2xl px-2 py-4 flex flex-col justify-center items-center gap-2'>
    <div className='w-10 h-10 bg-[#204285] rounded-full flex items-center justify-center shadow-[0_5px_15px_#00000040]' > 
        <img src={items.src} alt="" /> 
         </div>                            
                 <div className='text-center mt-2'>
                    <p className='text-lg text-[#204285] font-semibold'>{items.name}</p>
                    <p className='text-[#231F20] text-[18px] leading-[22px] md:min-h-[154px] mt-2'>{items.text  }</p>

                 </div>
                    </div>
                        ))}
                </div>
                <div className="w-[306px] sm:block hidden border-2 border-[#71717A] rounded-3xl"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ValuesMission