import React from "react";
import Image from "next/image";
import ServiceComp from "./ServiceComp";
const ChooseUs = () => {
  return (
    <div className="relative h-screen w-full lg:h-[50vh] flex flex-col lg:flex-row lg:justify-between items-center gap-4 monserrat px-4 py-5">
      <div className="relative w-full lg:w-2/3   h-[45%] lg:h-full rounded-3xl px-4 py-5">
        <div className="text-white text-4xl font-bold">Why choose us?</div>
        <div className="mt-6 flex font-bold flex-col gap-5">
          <div className="w-full min-h-[25%] max-h-[40px]">
            <div className="py-2 px-4 w-fit sm:w-[50%] sm:text-xl bg-[#83C5BE] lg:text-2xl text-white rounded-xl">
              <ServiceComp text="Hygienic & Friendly " />
            </div>
          </div>
          <div className="w-full min-h-[25%] max-h-[40px] flex justify-end items-center">
            <div className="py-2 px-4 w-fit sm:w-1/2 sm:text-xl bg-[#E29578] lg:text-2xl text-white rounded-xl">
              <ServiceComp text="Advance Equipments" />
            </div>
          </div>
          <div className="w-full min-h-[25%] max-h-[40px]">
            <div className="py-2 px-4 w-fit sm:w-1/2 sm:text-xl bg-[#EDF6F9] lg:text-2xl text-black rounded-xl">
              <ServiceComp text="Modern Techniques" />
            </div>
          </div>
          <div className="w-full h-fit flex justify-end">
            <div className="py-1 px-4 min-w-[230px] sm:w-1/2 sm:text-xl lg:text-2xl  bg-[#FFDDD2] text-black rounded-xl">
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
      <div className="relative h-[45%] lg:pl-5 lg:h-full w-full lg:1/3  lg:w-1/2 flex flex-col items-start gap-4">
        <div className="w-full lg:w-2/3 h-[21%] lg:h-[25%] bg-gray-300 rounded-xl"></div>
        <div className="w-full lg:w-2/3 lg:translate-x-[50%] h-[21%] lg:h-[25%] bg-gray-300 rounded-xl"></div>
        <div className="w-full lg:w-2/3 h-[21%] lg:h-[25%] bg-gray-300 rounded-xl"></div>
        <div className="w-full lg:w-2/3 lg:translate-x-[50%] h-[21%] lg:h-[25%] bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default ChooseUs;
