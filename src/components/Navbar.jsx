"use client";
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <>
      <div className="w-full px-10   ">
        <div className="  h-[10vh] flex justify-center sm:justify-between items-center">
          <div className="text-4xl font-black inter tracking-wider uppercase cursor-cell">
            <div>Paras</div>
            <div className="text-lg">Pathology</div>
          </div>
          <div className="hidden sm:flex text-xs lg:text-base justify-between gap-6 md:gap-10    inter items-center">
            <div className="text-right">
              Make an appointment with doctor
              <br /> without queue!
            </div>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              href="#contact"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="font-black whitespace-nowrap rounded-full px-4 py-2 bg-[#83C5BE] text-white"
            >
              Book Appointment
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
