import React from "react";
import StaffAugmentation from "../assets/logo/pictures/StaffAugment.webp";
import IPhonePro from "../assets/logo/pictures/IPhonePro.webp"
import MacBookAir from "../assets/logo/pictures/MacBookAir.webp"
export default function CasesStellarstack() {
  return (
    <>
      <div className="max-w-[1610px] mx-auto px-6 py-16 md:py-24 2xl:py-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000]">
          What is StellarStack?
        </h2>
        <p className="max-w-[1060px] pt-5 text-xl lg:text-2xl 2xl:text-[28px] font-normal">
          <strong>StellarStack,</strong> founded in <strong>2019,</strong> is a
          <strong>tech-driven company</strong> that connects
          <strong>innovators</strong> with <strong>top talent.</strong> Focused
          on <strong>collaboration</strong> and <strong>innovation,</strong>
          they build <strong>secure</strong> and
          <strong>scalable platforms</strong> that boost
          <strong>user engagement</strong> and drive
          <strong>business success.</strong>
        </p>
        <div className="pt-16 flex flex-col md:flex-row md:items-end gap-8 lg:gap-20">
          <img className="max-md:mx-auto md:size-[374px] lg:size-[474px]" src={StaffAugmentation} alt="" />
        <div className="mb-8">
          <h3 className="text-2xl: lg:text-[32px] font-semibold text-[#000000]">
            Empowering Business Success
          </h3>
          <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-[36px] font-medium pt-4 text-[#4B4747]">
            🚀 Smart, custom tech solutions
          </p>
          <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-[36px] font-medium pt-4 text-[#4B4747]">
            🤝 Connect with top talent
          </p>
          <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-[36px] font-medium pt-4 text-[#4B4747]">
            📈 Scalable digital platforms
          </p>
          <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-[36px] font-medium pt-4 text-[#4B4747]">
            🔒 Secure &amp; reliable systems
          </p>
        </div>
        </div>
        <div className="pt-10 md:pt-16 lg:pt-24 2xl:pt-36 grid lg:grid-cols-2 gap-4" >
            <div className="rounded-[40px] sm:rounded-[80px] bg-gradient-to-br from-[#204285] to-[#141c24] lg:h-[670px] 2xl:h-[970px]">
<img src={IPhonePro} alt="error" />
            </div>
            <div>
                <img src={MacBookAir} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}
