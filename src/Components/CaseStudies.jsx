import React from "react";
import Case from '../assets/logo/logos/Case.svg'
function CaseStudies() {
  const data = [
    { id: 1, text: "Case Studies" },
    {
      id: 2,
      text1:
        "Explore our detailed case studies to see how we’ve helped businesses across industries overcome challenges and achieve their goals with our tailored solutions.",
    },
    { id: 3, text2: "Browse Case Studies" },

    { id: 4, text4: "Our Process" },
    {
      id: 5,
      text5:
        "Our proven development methodology ensures timely delivery, transparent communication, and solutions that perfectly align with your business objectives.",
    },
    { id: 6, text6: "Learn About Our Process" },
  ];
  return (
    <>
      <section className="bg-[#e3e5da] py-16 md:py-24 2xl:py-36 px-6">
        <div className="max-w-[1584px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="max-w-[620px]">
            {data.map((item) => (
              <div key={item.id}>
                {item.text && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#204285] mb-4">
                    {item.text}
                  </h2>
                )}

                {item.text1 && (
                  <p className="text-xl md:text-2xl lg:text-3xl font-normal text-[#4B5563] mb-4">
                    {item.text1}
                  </p>
                )}

                {item.text2 && (
                  <a href="" className="text-lg md:text-xl text-[#204285] font-medium inline-flex items-center group">
                    {item.text2}
                     <span className='mt-0.5 ml-2 transition-transform group-hover:translate-x-1'>
                       <img src={Case} alt="" />
                        </span>
                  </a>
                )}

              </div>
            ))}
          </div>
            <div className="max-w-[620px]">
            {data.map((item) => (
              <div key={item.id}>
                {item.text && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#204285] mb-4">
                    {item.text}
                  </h2>
                )}

                {item.text1 && (
                  <p className="text-xl md:text-2xl lg:text-3xl font-normal text-[#4B5563] mb-4">
                    {item.text1}
                  </p>
                )}
                {item.text2 && (
                  <a href="" className="text-lg md:text-xl text-[#204285] font-medium inline-flex items-center group">
                    {item.text2}
                     <span className='mt-0.5 ml-2 transition-transform group-hover:translate-x-1'>
                       <img src={Case} alt="" />
                        </span>
                  </a>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudies;
