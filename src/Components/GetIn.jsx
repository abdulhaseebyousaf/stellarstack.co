import React from "react";
import GetInProp from "./GetInProp";
import Logo1 from "../assets/logo/logos/LocationIcon.svg";
import Logo2 from "../assets/logo/logos/MessageIcon.svg";
import Logo3 from "../assets/logo/logos/PhoneIcon.svg";
function GetIn() {
  return (
    <>
      <section className="bg-[#e3e5da] py-16 lg:py-24 px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-[#204285] font-bold uppercase">Get in touch</p>
          <h2 className="text-2xl md:text-3xl font-medium text-[#020817] mt-2">
            Ready to discuss your project? Contact us today for a consultation
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto flex lg:flex-row flex-col max-lg:items-center max-lg:justify-center gap-8">
          <div className="w-full sm:w-[70%] lg:w-[40%] bg-[#204285] text-white rounded-[20px] py-8 sm:py-12 px-6 sm:px-8 shadow-md">
            <h3 className="text-3xl font-medium mb-4">Contact Information</h3>
            <div className="py-5 space-y-5">
              <GetInProp
                Image={Logo1}
                text={"Location:"}
                second={"San Francisco Bay Area, United States."}
                third={"Kingsway #2600-4720, Burnaby, BC V5H 4N2, Canada."}
                forth={"Islamabad, Pakistan."}
              />
              <GetInProp
                Image={Logo2}
                text={"Emails:"}
                second={"info@stellarstack.co"}
                third={"support@stellarstack.co"}
              />
              <GetInProp
                Image={Logo3}
                text={"Phone:"}
                second={"+1 (604) 555-1234"}
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Office Hours:</p>
              <p className="text-base">Monday - Friday, 9am – 6pm PST</p>
              <p className="text-base">Remote support available 24/7</p>
            </div>
          </div>
          <div className="w-full sm:w-[70%] lg:w-[60%] bg-white rounded-[20px] p-8 shadow-md">
            <h3 className="text-3xl text-[#204285] font-medium mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
                <div>
                  <label
                    className="pb-2 text-lg font-normal text-[#71717A]"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="border border-[#71717A] rounded-md px-4 py-2 text-sm w-full bg-[#e3e5da]"
                    name="name"
                  ></input>
                </div>
                <div>
                  <label
                    className="pb-2 text-lg font-normal text-[#71717A]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="border border-[#71717A] rounded-md px-4 py-2 text-sm w-full bg-[#e3e5da]"
                    name="email"
                  ></input>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="pb-2 text-lg font-normal text-[#71717A]"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="border border-[#71717A] rounded-md px-4 py-2 text-sm w-full bg-[#e3e5da]"
                  name="company"
                ></input>
              </div>
              <div className="mb-4">
                <label
                  className="pb-2 text-lg font-normal text-[#71717A]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="border border-[#71717A] rounded-md px-4 py-2 text-sm w-full h-32 resize-none bg-[#e3e5da]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#204285] text-white text-sm px-3.5 py-2.5 rounded hover:bg-[#163369] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetIn;
