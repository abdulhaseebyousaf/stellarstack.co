import Logo from '../assets/logo/Logo.svg'
import HeaderProp from './HeaderProp'
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [showData, setShowData] = useState(false);
  const toggleData = () => setShowData(v => !v);
  const hideData = () => setShowData(false); 

  const [showHeader, setShowHeader] = useState(true);

  const lastYRef = useRef(0);

  useEffect(() => {
    const THRESHOLD = 5; 
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y <= 0) {
        setShowHeader(true);
      } else {
        const diff = y - lastYRef.current;
        if (diff > THRESHOLD) {
          setShowHeader(false);
        } else if (diff < -THRESHOLD) {
          setShowHeader(true);
        }
      }

      lastYRef.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`header ${showHeader ? 'show' : 'hide'}`}>
      <nav className='bg-[#F9FAFB] fixed w-full top-0 right-0 z-50 shadow-md transition-transform duration-300 will-change-transform'>
        <div className='max-w-[1810px] mx-auto w-full px-4 py-[3.9px] flex justify-between items-center z-50'>
          <Link to="/">
            <img src={Logo} alt="error" />
          </Link>

          <div className='gap-16 hidden items-center  md:flex'>
            <div className='flex gap-6 text-base font-normal text-[#204285] items-center relative'>
              <HeaderProp 
                About='About Us'
                Service='Services'
                our='Our Services'
                Staff='Staff Augmentation'
                How='How we Hire'
                service='Services'
                Technologies='Our Technologies'
              />
            </div>
            <Link to="/">
              <button
                type="button"
                className='flex items-center mr-2 gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-full lg:w-max text-sm font-medium px-3 py-1.5'
              >
                Contact Us
              </button>
            </Link>
          </div>

          <div className='md:hidden pr-2'>
            <div className='menuToggle'>
              <input type="checkbox" className='hidden' id='checkbox' />
              <label
                onClick={toggleData}
                className="toggle open cursor-pointer w-8 h-5 m-auto block relative"
                htmlFor="checkbox"
                aria-label="Toggle menu"
              >
                <div className="h-[4px] text-inherit opacity-100 bg-[#204285] rounded-[2px] transition-[none_.35s_cubic-bezier(.5,-.35,.35,1.5)] absolute left-0 right-0 bar--top"></div>
                <div className="h-[4px] text-inherit opacity-100 bg-[#204285] rounded-[2px] transition-[none_.35s_cubic-bezier(.5,-.35,.35,1.5)] absolute left-0 right-0 bar--middle"></div>
                <div className="h-[4px] text-inherit opacity-100 bg-[#204285] rounded-[2px] transition-[none_.35s_cubic-bezier(.5,-.35,.35,1.5)] absolute left-0 right-0 bar--bottom"></div>
              </label>

              {showData && (
                <div
                  onClick={hideData}
                  id='scroll'
                  className='fixed left-0 right-0 top-[77px] max-sm:h-[102vh] h-screen bg-[#F9FAFB] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 text-[#204285] text-xl font-medium px-6 pb-10 z-40 opacity-100 translate-y-0 pointer-events-auto'
                >
                  <Link className='hover:text-blue-600' to="/about-us">About Us</Link>
                  <Link className='hover:text-blue-600' to="/our-services">Our Services</Link>
                  <Link className='hover:text-blue-600' to="/our-staff">Staff Augmentation</Link>
                  <Link className='hover:text-blue-600' to="how-we-hire">How we Hire</Link>
                  <Link className='hover:text-blue-600' to="/our-technologies">Our Technologies</Link>
                  <button className="flex items-center gap-2 rounded-md text-white bg-[#204285] hover:bg-[#163369] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-max text-sm font-medium px-5 py-2">
                    <span>Contact Us</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
