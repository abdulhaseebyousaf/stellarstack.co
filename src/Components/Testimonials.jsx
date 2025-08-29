import React, { useRef, useState } from "react";
import Star from "../assets/logo/logos/Stars.svg";
import Left from "../assets/logo/logos/LeftC.svg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const Data = [
    {
      text: "Amish and his team were the perfect fit for our needs. We required a fast website built in Contentful, and they delivered with remarkable speed and excellent communication. If you are in a hurry to get your website up and running, Amish and his team are the ones to call",
      descrption: "Jordan Sternberg",
      referance: "Co-founder at Growthware",
    },
    {
      text: "Amish and his team are a highly talented and hardworking group who consistently deliver excellent work on time. I highly recommend them.",
      descrption: "Fredrico Hakamine",
      referance: "Chief Product Officer at ngrok",
    },
    {
      text: "The team members are skilled and dedicated professionals who are committed to delivering high-quality work and exceeding client expectations. Their willingness to go above and beyond in order to achieve exceptional results is greatly valued. Thank you for all the assistance, and we look forward to future collaborations.",
      descrption: "Murilo Silvestre",
      referance: "Founder at Articolare",
    },
    {
      text: "The team exhibited exceptional communication skills, executing tasks with efficiency and collaborating seamlessly with multiple team members. Their friendly and positive approach contributed to a harmonious team environment, enabling effective collaboration and swift task completion.",
      descrption: "Claudia Ricker",
      referance: "Chief Product Officer at Secret Sauce Partners",
    },
    {
      text: "The team members are skilled and dedicated professionals who are committed to delivering high-quality work and exceeding client expectations. Their willingness to go above and beyond in order to achieve exceptional results is greatly valued. Thank you for all the assistance, and we look forward to future collaborations.",
      descrption: "Murilo Silvestre",
      referance: "Founder at Articolare",
    },
    {
      text: "Outstanding Frontend React Engineer with Excellent Communication and Attention to Detail I recently hired Amish for a frontend UI/UX react development project, and I couldn’t be happier with the results. From the very beginning, he demonstrated a clear understanding of modern UI/UX design and web technologies and...",
      descrption: "Sal Stabler",
      referance: "Founder and CEO at Nexlayer",
    },
    {
      text: "Amish belongs at the head of a major IT company... he's at a completely different level of professionalism than anyone else and has full command of React Remix, Tailwind CSS, Shopify, Hydrogen, Oxygen. Hire him and pay him what ever he wants... smartest move you'll ever make",
      descrption: "Justin Peta",
      referance: "Chairman at HCF",
    },
    {
      text: "Amish was an absolute pleasure to work with — reliable, skilled, proactive, and always bringing a positive attitude to the job. His attention to detail, responsiveness, and the way he handled every challenge with professionalism and integrity is what definitely stood out.Amish has proven himself to be a great asset to our...",
      descrption: "Cressan Trenhaile",
      referance: "Director of People and Culture at AgileIT",
    },
    {
      text: "Amish was very responsive and easy to work with. The outcome met expectations, and he stayed committed throughout the project even with constant changes and adjustments being introduced. He often worked late to meet deadlines and took time to learn new things on his own, without charging extra. He was kind,...",
      descrption: "Alexander Alcoverro",
      referance: "Founder at Bootle",
    },
    {
      text: "We had a great experience working with Amish. He quickly understood the project requirements and delivered high-quality work. His responsiveness and communication throughout the process were excellent. We also appreciated the thorough documentation he provided. I look forward to working together....",
      descrption: "Anna Eggenberger",
      referance: "Marketing Manager at Camping Jungfrau",
    },
    {
      text: "Third time working together, They were always very good and keen to help. It has been a pleasure as always. Thanks again for all the support",
      descrption: "Murilo Silvestre",
      referance: "Founder at Articolare",
    },
    {
      text: "Amish is hands down the best developer I have worked with on upwork - I have been on the platform for more than 10 years. Highly responsive, intelligent and self thinking with a can-do attitude. Very quick and effective developer.",
      descrption: "Andy Curlton",
      referance: "Founder of Prismik(whatcheese)",
    },
    {
      text: "Amazing! Dedicated, driven, and knowledgeable!",
      descrption: "Marius VisserMarius Visser",
      referance: "Founder & CEO at Ashera GmbH",
    },
  ];
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="w-full  bg-[#F9FAFB]  py-16 sm:py-20">
        <div className="max-w-[920px] mx-auto px-4 text-center relative">
          <p className=" text-lg text-[#204285] font-medium">TESTIMONIALS</p>
          <h2 className="text-[40px] font-bold text-[#204285] mt-3 mb-6">
            What Our Clients Say
          </h2>
          <div className="mb-16 w-24 h-0.5 mx-auto bg-[#204285]"></div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(sw) => {
              swiperRef.current = sw;
              setActiveIndex(sw.activeIndex);
            }}
            onSlideChange={(sw) => setActiveIndex(sw.activeIndex)}
          >
            {Data.map((items, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <div
                  key={index}
                  className="bg-[#e4e7ee] rounded-3xl p-10 shadow-md text-gray-800 mx-4 min-h-[321px] flex flex-col items-center justify-center"
                >
                  <div className="mb-6">
                    <img src={Star} alt="error" />
                  </div>
                  <div className="testimonial-container">
                    <p className="italic text-xl font-normal leading-relaxed text-[#4B5563]">
                      <span>{items.text} </span>
                    </p>
                    <div className="mt-6 font-medium">{items.descrption}</div>
                    <div class="text-sm italic text-[#4B5563]">
                      {items.referance}
                    </div>
                  </div>
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={activeIndex === 0}
                    className={`absolute left-0 inset-y-0 my-auto z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md
          ${
            activeIndex === 0
              ? "bg-gray-300 text-gray-600 opacity-60 cursor-not-allowed"
              : "bg-[#204285] text-white cursor-pointer hover:bg-[#163369]"
          }`}
                    aria-label="Previous slide"
                    type="button"
                  >
                    <img src={Left} alt="prev" className="w-2.5 mr-1" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={activeIndex === Data.length - 1}
                    className={`absolute right-0 inset-y-0 my-auto z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md
            ${
              activeIndex === Data.length - 1
                ? "bg-gray-400 opacity-50 cursor-not-allowed"
                : "bg-[#204285] text-white cursor-pointer hover:bg-[#163369]"
            }`}
                  >
                    <img
                      src={Left}
                      alt="next"
                      className="w-2.5 ml-1 rotate-180"
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
     
        </div>
      </section>
    </>
  );
};

export default Testimonials;
