import React from "react";
import Image from "next/image";
import ServiceComp from "./ServiceComp";
const ChooseUs = () => {
  return (
    <div className="relative h-screen w-full sm:h-[50vh] flex flex-col sm:flex-row justify-between items-center gap-4 monserrat px-4 py-5">
      <div className="relative w-full sm:w-1/3  h-[45%] sm:h-full rounded-3xl px-4 py-5">
        <div className="text-white text-4xl font-bold">Why choose us?</div>
        <div className="mt-6 flex font-bold flex-col gap-5">
          <div className="w-full h-[40px]">
            <div className="py-2 px-4 w-fit bg-[#83C5BE] text-white rounded-xl">
              <ServiceComp text="Hygienic & Friendly " />
            </div>
          </div>
          <div className="w-full h-[40px] flex justify-end">
            <div className="py-2 px-4 w-fit bg-[#E29578] text-white rounded-xl">
              <ServiceComp text="Advance Equipments" />
            </div>
          </div>
          <div className="w-full h-[40px]">
            <div className="py-2 px-4 w-fit bg-[#EDF6F9] text-black rounded-xl">
              <ServiceComp text="Modern Techniques" />
            </div>
          </div>
          <div className="w-full h-fit flex justify-end">
            <div className="py-1 px-4 min-w-[230px]   bg-[#FFDDD2] text-black rounded-xl">
              <div className="flex justify-start items-center gap-5">
                <Image
                  src="/plus.png"
                  height={25}
                  width={25}
                  alt="plus sign"
                  className="w-[25px] h-[25px]"
                />
                <div>
                  Experienced and <br /> Qualified Team
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/navy_bg.jpg"
          fill={true}
          alt="background image with clinical equipment"
          className="absolute object-cover rounded-3xl -z-10"
        />
      </div>
      <div className="relative h-[45%] pl-5 sm:h-full w-full sm:w-1/2 flex flex-col items-start gap-4">
        <div className="w-full sm:w-2/3 h-[25%] bg-gray-300 rounded-xl"></div>
        <div className="w-full sm:w-2/3 h-[25%] bg-gray-300 rounded-xl"></div>
        <div className="w-full sm:w-2/3 h-[25%] bg-gray-300 rounded-xl"></div>
        <div className="w-full sm:w-2/3 h-[25%] bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default ChooseUs;
