import React from "react";
import Global from "../assets/logo/logos/Globe.c00f7d8c.svg";
import UI from "../assets/logo/logos/UiUx.0c362196.svg";
import mobileapp from "../assets/logo/logos/Mobile.545ecaf1.svg";
import technologypicture from "../assets/logo/logos/Bulb.9915af15.svg";
import staffPicture from "../assets/logo/logos/User.04116cfa.svg";
import marketingPicture from "../assets/logo/logos/Speaker.bc740edd.svg";
import CaseStudyImg from '../assets/logo/pictures/CaseStudyImg1.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
// Import Swiper styles 
import 'swiper/css';
 import { Autoplay } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/autoplay';
    import { Pagination } from 'swiper/modules'; // Import Pagination module
    import 'swiper/css/pagination'; // Pagination specific styles
export default function InnovateTogether() {
  const Data = [
    {
      image: Global,
      text: "Web",
      secondtext: " Development",
      description:
        "Unleash Digital Excellence with Collaborative Software Web Solutions",
    },
    {
      image: UI,
      text: "UI/UX",
      secondtext: "Design",
    },
    {
      image: mobileapp,
      text: "Mobile App",
      secondtext: " Development",
    },
    {
      image: technologypicture,
      text: "Technology",
      secondtext: " Modernization",
    },
    {
      image: staffPicture,
      text: "Staff",
      secondtext: " Augmentation",
    },
    {
      image: marketingPicture,
      text: "Digital",
      secondtext: " Marketing",
    },
  ];
  const secondData = [
    {
    secondheading:'Unleash Digital Excellence with Collaborative Software Web Solutions',
    secondtext:'Unleashing digital excellence through collaborative software web solutions. From concept to deployment, our expert team delivers tailored solutions that drive your online success.',
  },
  {
  secondheading:'Crafting Intuitive Experiences, Elevate Your Brand with Stunning UI/UX Design',
  secondtext:'Crafting intuitive experiences that elevate your brand. Our skilled designers blend aesthetics with functionality to create visually stunning and user-centric interfaces that leave a lasting impression.',
  },
  {
  secondheading:'Powering Mobile Innovation, Transform Ideas into Dynamic Mobile Applications',
  secondtext:'Powering mobile innovation with dynamic applications. From ideation to launch, our team specializes in creating high-performance, user-friendly mobile apps that connect you with your audience in the mobile-first world.',
  },
  {
  secondheading:'Embrace the future with our transformative technology modernization solutions',
  secondtext:'Unlock the power of digital transformation through our technology modernization expertise. We analyze your existing systems, identify opportunities for improvement, and implement cutting-edge solutions that drive efficiency and propel your business into the future.',
  },
  {
  secondheading:'Boost your team"S capabilities with our skilled staff and team augmentation services',
  secondtext:'Crafting intuitive experiences that elevate your brand. Our skilled designers blend aesthetics with functionality to create visually stunning and user-centric interfaces that leave a lasting impression.',
  },
  {
  secondheading:'Embrace the power of the digital realm with our comprehensive digital marketing services',
  secondtext:'Crafting intuitive experiences that elevate your brand. Our skilled designers blend aesthetics with functionality to create visually stunning and user-centric interfaces that leave a lasting impression.',
  },
];
  return (
    <>
      <div className="max-w-[1030px] mx-auto px-6 pb-16 lg:pb-24 2xl:pb-28">
        <p className="text-lg font-normal text-center text-[#183B72]">
          About Us
        </p>
        <h2 className="text-3xl sm:text-5xl 2xl:text-[65px] font-bold text-center text-[#000000]">
          Let’s Innovate Together
        </h2>
       <div className="pt-12 flex max-sm:flex-wrap justify-between">

          {Data.map((items, index) => (
            <div key={index} className="flex items-center flex-col mb-4 text-[#71717A]">
                <img
                  className="size-10 pb-2"
                  alt="webconnection"
                  src={items.image}
                  />
                <span class="text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold text-center">
                  {items.text} <br /> {items.secondtext}
                </span>
              
              </div>
          ))}
        </div>
        
<Swiper  modules={[Pagination,Autoplay ]} 
autoplay={{
            delay: 2500, // Delay between slides in ms
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
      pagination={{ clickable: true }}>
        {secondData.map((seconditem, secondindex)=>(
          <SwiperSlide  >
          <div key={seconditem} className="mt-6 lg:mt-10 xl:mt-14">
        <img key={secondindex} src={CaseStudyImg} alt="" />
        <h3 class="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-center mt-4 text-[#282828]">{seconditem.secondheading}</h3>
        <p class="pb-14 text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-center text-[#71717A] mt-2">{seconditem.secondtext}</p>
        </div>
        </SwiperSlide>
        ))}
        </Swiper>
        <div>
        </div>
      </div>
    </>
  );
}
