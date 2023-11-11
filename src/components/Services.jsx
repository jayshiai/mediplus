import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ServiceComp from "./ServiceComp";
import ArrowComp from "./ArrowComp";

const Component = React.forwardRef((props, ref) => (
  <Image {...props} ref={ref} />
));
const MotionImage = motion(Component);
const Services = () => {
  return (
    <div className="h-screen w-full lg:w-2/3 montserrat px-4 py-5 ">
      <div className=" relative w-full   h-[90%] overflow-hidden  px-4 py-5 rounded-3xl flex flex-col md:flex-row">
        <div className=" absolute -top-2 right-0 md:max-lg:bottom-0  scale-50">
          <div className="w-full h-full flex justify-center items-center relative">
            <MotionImage
              src="/plus.png"
              height={150}
              width={150}
              alt="plus sign"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-[150px] h-[150px]"
            />
            <MotionImage
              src="/plus.png"
              height={150}
              width={150}
              alt="plus sign"
              initial={{
                x: "-120px",
                y: "30px",
                rotate: "45deg",
              }}
              animate={{
                y: ["30px", "40px", "30px"],
              }}
              transition={{
                duration: 3,
                repeat: "Infinity",
                ease: "linear",
              }}
              className="w-[75px] h-[75px]  absolute top-1/2 left-1/2  "
            />
            <MotionImage
              src="/plus.png"
              height={150}
              width={150}
              alt="plus sign"
              initial={{
                x: "30px",
                y: "40px",
                rotate: "-12deg",
              }}
              animate={{
                rotate: ["-12deg", "360deg", "-12deg"],
              }}
              transition={{
                duration: 6,
                repeat: "Infinity",
                repeatDelay: 2,
                ease: "easeIn",
              }}
              className="w-[40px] h-[40px]  absolute top-1/2 left-1/2 "
            />
            <MotionImage
              src="/plus.png"
              height={150}
              width={150}
              alt="plus sign"
              initial={{
                x: "50px",
                y: "-90px",
                rotate: "-20deg",
              }}
              animate={{
                y: ["-90px", "-100px", "-90px"],
              }}
              transition={{
                duration: 3,
                repeat: "Infinity",
                ease: "linear",
              }}
              className="w-[50px] h-[50px] absolute top-1/2 left-1/2"
            />
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="text-3xl font-bold">Our Services</div>
          <div className="mt-5 text-lg w-2/3 font-medium">
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
        <div className="h-fit md:h-[80%] md:w-1/2 flex flex-col lg:justify-end">
          <div className="w-full   lg:w-[300px] xl:w-[380px]  h-[100px] md:h-[200px] text-white">
            <div className="relative w-full h-full mt-10 bg-[#83C5BE] rounded-2xl p-2">
              <div className="text-xl sm:text-2xl font-bold">
                Covid and Post Covid Care
              </div>
              <div className="mt-1 text-[10px]  lg:text-base">
                Our covid care program includes customised packages according to
                the need of a patient which includes 24 hours home nursing care,
                lab investigation.
              </div>
              <div className="hidden sm:block">
                <ArrowComp />
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
