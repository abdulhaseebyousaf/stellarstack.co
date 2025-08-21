import React from "react";
import Star from "../assets/logo/logos/Stars.svg";
import Left from "../assets/logo/logos/LeftC.svg";
import TestimonialsCards from "./TestimonialsCards";
const Testimonials = () => {
  return (
    <>
      <section className="w-full  bg-[#F9FAFB] hidden py-16 sm:py-20">
        <div className="max-w-[920px] mx-auto px-4 text-center relative">
          <p className=" text-lg text-[#204285] font-medium">TESTIMONIALS</p>
          <h2 className="text-[40px] font-bold text-[#204285] mt-3 mb-6">
            What Our Clients Say
          </h2>
          <div className="mb-16 w-24 h-0.5 mx-auto bg-[#204285]"></div>
          <div className="relative">
            <div className="h-auto relative">
              <div className="h-[321px] relative w-full z-10  box-content  transform translate-x-0 translate-y-0 transition-none">
                <TestimonialsCards
                  image={Star}
                  text={
                    "Amish and his team were the perfect fit for our needs. We required a fast website built in Contentful, and they delivered with remarkable speed and excellent communication. If you are in a hurry to get your website up and running, Amish and his team are the ones to call"
                  }
                  second={"Jordan Sternberg"}
                  third={"Co-founder at Growthware"}
                  Left={Left}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
