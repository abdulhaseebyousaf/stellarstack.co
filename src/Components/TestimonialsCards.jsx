import React from 'react'
function TestimonialsCards({image ,text , second, third, Left}) {
  return (
    <>             
                <div className="w-[888px] block mr-8">
                  <div className="bg-[#e4e7ee] rounded-3xl p-10 shadow-md text-gray-800 mx-4 min-h-[321px] flex flex-col items-center justify-center">
                    <img className="mb-6" src={image} alt="" />
                    <div>
                      <p className="italic text-xl font-normal leading-relaxed text-[#4B5563]">
                        <span>
                         {text}
                        </span>
                      </p>
                    </div>
                    <div className=" mt-6 font-medium">
                      {second}
                    </div>
                    <div className=" text-sm italic text-[#4B5563]">
                      {third}
                    </div>
                  </div>
                  <div className="absolute left-0 inset-y-0 my-auto z-10 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md transition bg-gray-400 text-gray-600  opacity-50">
<img className="w-2.5 mr-1" src={Left} alt="" />
                  </div>
                </div>
                <div className=" absolute right-0 inset-y-0 my-auto z-10 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md transition bg-[#204285] text-white hover:bg-[#163369]">
                    <img className="w-2.5 ml-1 rotate-180" src={Left} alt="" />
                </div>
    </>
  )
}

export default TestimonialsCards