import React from "react";

export default function StaffArgument() {
  return (
    <div className="bg-[#f9fafc]">
      <div className="max-w-[1810px] mx-auto grid xl:grid-cols-2 gap-12 xl:gap-6 xl:place-items-center px-6 py-16 md:py-24 2xl:py-36">
        <div>
          <h1 className="text-4xl md:text-5xl 2xl:text-[65px] 2xl:leading-[70px] font-bold tracking-[-1.5px] text-[#231F20]">
            How Our <span className="text-[#204285]">Staff Augmentation</span>{" "}
            Solutions Work
          </h1>
          <p className="pt-6 xl:max-w-[710px] text-lg sm:text-xl 2xl:text-2xl text-[#231F20]">
            SKeep your business agile when developing your next project with our
            dependable IT staffing solutions. At Stellar Stack, we help your
            business deliver value with a&nbsp;team aligned with your ' brands '
            goals and company culture.
            <br></br>
            <br></br>
            We understand the challenges of getting suitable hires on board, and
            ' thats ' why we streamline the hiring process, helping you save
            time and money.
            <br></br> <br></br> Our exclusive methodology focuses on tailoring
            our solutions and creating long-lasting relationships with every
            client.
          </p>
        </div>

        <div className="max-w-[1810px] mx-auto grid sm:grid-cols-2 gap-5 2xl:gap-10">
          <div className="flex flex-col justify-between pt-12 2xl:pt-20 rounded-3xl text-center bg-[#CDD4DF]">
            <h3 className="mb-16 2xl:mb-20 px-3 text-3xl font-semibold text-[#231F20]">
              Every Step Matters Towards the <br /> <br />
              <span className="text-[#204285]">Perfect Fit</span>
            </h3>
            <div className="min-h-[250px] h-full px-3 flex items-center sm:text-2xl font-normal rounded-t-[55px] rounded-b-3xl text-white bg-[#204285]">
              For us, every step of the recruiting process is key to the success
              of your assignment. <br /> <br /> We work together on your idea
              and project needs to kick-start the hiring process by&nbsp;diving
              into our vast talent pool of IT professionals.
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="relative group h-[352px] bg-[#CDD4DF] rounded-3xl  hover:rounded-[55px] overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-500 group-hover:opacity-0 z-10">
                <h3 className="text-3xl xl:text-2xl 2xl:text-3xl font-semibold text-center text-[#204285]">
                  The Result?
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-[330px] group-hover:translate-y-0 transition-transform duration-500 z-10">
                <div className="bg-[#204285] text-white text-center px-3 py-4 2xl:py-8 rounded-t-[55px]  rounded-b-3xl h-[352px] flex items-center justify-center">
                  <p className="text-base lg:text-xl 2xl:text-2xl font-normal">
                    You get access to highly-qualified experts faster and at
                    lower costs. At StellarStack, we help you onboard the best
                    IT hires in World with proficiency in the latest tools and
                    technologies. Avoid the struggle of sourcing, qualifying,
                    and training candidates, and trust the process in our expert
                    hands.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group h-[352px] bg-[#CDD4DF] rounded-3xl overflow-hidden hover:rounded-[55px] transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 z-10">
                <h3 className="text-3xl xl:text-2xl 2xl:text-3xl font-semibold text-center text-[#204285]">
                  How?
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-[330px] group-hover:translate-y-0 transition-transform duration-500 z-10">
                <div className="bg-[#204285] text-white text-center px-3 py-4 2xl:py-8 rounded-t-[55px]  rounded-b-3xl h-[352px] flex items-center justify-center">
                  <p className="text-base lg:text-xl 2xl:text-2xl font-normal">
                    With a team committed to yourbusiness success, working with
                    a seamless IT staffing model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
