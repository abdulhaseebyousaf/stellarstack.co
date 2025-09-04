import React from "react";
import Logo from "../assets/logo/Logo.svg";
import FooterProps from "./FooterProps";
import { Link } from "react-router-dom";
import LinkedIn from "../icons/LinkedIn";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";

function Footer() {
  return (
    <div className="bg-[#F9FAFB] border-t border-gray-300 text-sm text-gray-700">
      <div className="max-w-[1810px] mx-auto px-4 py-6 sm:py-9">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6">
          <div>
            <Link to="/">
              <img className="w-[193px]" src={Logo} alt="error" />
            </Link>
            <div className="pl-2">
              <p className="pt-1  text-[#204285]">
                Imagine, Innovate, Implement.
              </p>
              <div className="pr-2 pt-2.5 flex gap-4 text-blue-500 text-lg items-center">
                <Link
                  to="https://www.linkedin.com/company/stellar-stack/posts/?feedView=all"
                  className="group"
                >
                  <LinkedIn />
                </Link>
                <Link
                  to="https://www.facebook.com/stellarstackltd?rdid=U7CaOzaYldUEstK5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19VVoiZjSt%2F#"
                  className="group"
                >
                  <Facebook />
                </Link>
                <Link to="https://github.com/StellarStack" className="group">
                  <Github />
                </Link>
                <Link
                  to="https://www.instagram.com/p/DLFEWJ5I6bd/?igsh=MWZvbHBxbThldWVrOQ%3D%3D"
                  className="group"
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="px-2 md:col-span-2 flex max-sm:justify-between sm:gap-16 flex-wrap pr-1 text-[#204285]">
            <FooterProps
              text={"Home"}
              second={"About Us"}
              third={"Our Technologies"}
              forth={"Case Studies"}
            />
            <ul className="space-y-[18px] list-none">
              <li className="font-bold   mb-[18px]">
                <h6>Services</h6>
              </li>
              <li className="cursor-pointer mb-[18px]">
                <Link
                  className="hover:text-blue-600  duration-200 transition-all"
                  to="/our-services"
                >
                  Our Services
                </Link>
              </li>
              <li className="cursor-pointer mb-[18px]">
                <Link
                  className="hover:text-blue-600  duration-200 transition-all"
                  to="/our-staff"
                >
                  Staff Augmentation
                </Link>
              </li>
              <li className="cursor-pointer ">
                <Link
                  className="hover:text-blue-600  duration-200 transition-all"
                  to="/how-we-hire"
                >
                  How We Hire
                </Link>
              </li>
            </ul>
          </div>
          <div class="pl-2 max-[550px]:block hidden">
            <p class="text-xs text-[#204285] leading-5">
              <a href="/privacy-policy">Privacy Policy</a> |
              <a href="/terms-&amp;-conditions">Terms &amp; Conditions</a>
            </p>
            <a href="tel:+17782270782">
              <p class="text-xs text-[#204285] leading-5">+1 778 227 0782</p>
            </a>
          </div>
        </div>
        <div className="px-1 pt-3.5 flex max-[550px]:flex-col-reverse justify-between items-start border-t border-[#71717A] mt-8 sm:mt-14">
          <p className="text-xs text-[#204285] leading-5">
            ©2025 – All Rights Reserved by StellarStack Ltd <br></br> Kingsway
            #2600-4720, Burnaby, BC V5H 4N2, Canada
          </p>
          <div className="max-[550px]:hidden">
            <p className="text-xs text-[#204285] leading-5">
              <Link
                className="hover:text-blue-600  duration-200 transition-all"
                to="/privacy-Policy"
              >
                Privacy Policy
              </Link>
              |
              <Link
                className="hover:text-blue-600  duration-200 transition-all"
                to="/termsandConditions"
              >
                Terms & Conditions
              </Link>
            </p>
            <p className="text-xs text-[#204285] leading-5">+1 778 227 0782</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
