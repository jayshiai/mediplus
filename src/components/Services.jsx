import React from "react";
import Image from "next/image";
import ServiceComp from "./ServiceComp";
import { BiUpArrowAlt } from "react-icons/bi";
const Services = () => {
  return (
    <div className="h-screen w-full sm:w-2/3 montserrat px-4 py-5 ">
      <div className=" relative w-full h-[90%]  px-4 py-5 rounded-3xl flex flex-col sm:flex-row">
        <div className="sm:w-1/2">
          <div className="text-3xl font-bold">Our Services</div>
          <div className="mt-5 text-xl w-2/3 font-medium">
            Our team includes highly qualified and registered medical
            professional with professional integrity and compassionate care.
          </div>
          <div className="mt-10 flex flex-col gap-4 font-semibold">
            <ServiceComp text="Diabetic Care Program" />
            <ServiceComp text="Swasth Fit" />
            <ServiceComp text="Pregnancy Packages" />
            <ServiceComp text="Allergy" />
            <ServiceComp text="Oncopro" />
            <ServiceComp text="Radiology" />
          </div>
        </div>
        <div className="h-fit sm:h-[80%] sm:w-1/2 flex flex-col justify-end">
          <div className="w-full sm:w-[400px] sm:ml-[-80px] h-[100px] sm:h-[200px] text-white">
            <div className="relative w-full h-full mt-10 bg-[#83C5BE] rounded-2xl p-2">
              <div className="text-xl sm:text-2xl font-bold">
                Covid and Post Covid Care
              </div>
              <div className="mt-1 text-[10px] sm:text-base">
                Our covid care program includes customised packages according to
                the need of a patient which includes 24 hours home nursing care,
                lab investigation.
              </div>
              <div className="hidden absolute text-4xl rotate-45 sm:flex justify-center items-center text-black  bottom-4 right-4 h-[50px] w-[50px] rounded-full bg-white">
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/white_bg.jpg"
          fill={true}
          alt="background image with clinical equipment"
          className="absolute object-cover rounded-3xl -z-10"
        />
      </div>
    </div>
  );
};

export default Services;
