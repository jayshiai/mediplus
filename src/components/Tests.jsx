import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowComp from "./ArrowComp";
const Tests = () => {
  return (
    <div className="w-full lg:w-1/3 h-screen montserrat px-4 py-5">
      <div className=" relative w-full h-[52%] px-4 py-5 rounded-3xl ">
        <div>
          <div className="text-3xl font-bold">Home Collection</div>
          <div className="mt-5 text-base w-4/5 font-semibold leading-tight">
            Many tests require the patient to fast for a certain number of hours
            the night before. And some may require you to drink plenty of water
            and similar other preparations. Hence, it is a good idea to call
            ahead and let them know when you&apos;ll be coming in to avoid
            disappointments.
          </div>
        </div>
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="absolute bottom-10 flex justify-center items-center text-white font-bold w-4/5 h-[50px] bg-[#006D77] rounded-3xl"
        >
          Call us for Home Collection
        </motion.a>
        <Image
          src="/blue_bg.jpg"
          fill={true}
          alt="background image with clinical equipment"
          className="absolute object-cover rounded-3xl -z-10 "
        />
      </div>
      <div className=" w-full h-[35%] grid grid-rows-2 grid-cols-2 gap-3 montserrat text-white mt-5">
        <div className="relative text-2xl font-bold row-span-2 rounded-3xl bg-two p-4">
          <div>Full Body Test</div>
          <div className="mt-5 text-8xl bigShoulderText font-thin">100%</div>
          <ArrowComp />
        </div>
        <div className="relative rounded-3xl bg-one text-2xl font-bold p-4">
          <div>Urine Test</div>

          <ArrowComp />
        </div>
        <div className="relative rounded-3xl bg-black text-2xl font-bold p-4">
          <div>Blood Test</div>

          <ArrowComp />
        </div>
      </div>
    </div>
  );
};

export default Tests;
