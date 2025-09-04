import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderProp = ({ About, our, Staff, How, service, Technologies }) => {
  const [isHoverd, setIsHoverd] = useState(false);

  return (
    <>
      <Link className="hover:text-blue-600 transition-all duration-150" to="/about-us">{About}</Link>

      <div
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
        className="relative inline-block"
      >
        <button
          type="button"
          className="text-base font-normal  text-[#204285] hover:text-blue-600 transition-colors duration-200"
        >
          {service}
        </button>

        {isHoverd && (
          <div className="absolute top-full left-0 w-60 z-50 flex flex-col bg-white shadow-md shadow-black/15 rounded-sm">
            <Link to="/our-services" className="hover:bg-gray-100 hover:text-blue-600 px-4 py-3 transition-colors duration-200">
              {our}
            </Link>
            <Link to="/our-staff" className="hover:bg-gray-100 px-4 hover:text-blue-600 py-3 transition-colors duration-200">
              {Staff}
            </Link>
            <Link to="/how-we-hire" className="hover:bg-gray-100 hover:text-blue-600 px-4 py-3 transition-colors duration-200">
              {How}
            </Link>
          </div>
        )}
      </div>

      <Link className="hover:text-blue-600 transition-all duration-150" to="/our-technologies">{Technologies}</Link>
    </>
  );
};

export default HeaderProp;
