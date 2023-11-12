import React from "react";

import { BiUpArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState("none");
  const arrowVariant = {
    initial: {
      x: 0,
      y: [50, 0],
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
    static: {
      y: 0,
    },

    animate: {
      y: [0, -50, 50, 0],
      opacity: [1, 0, 0, 1],

      transition: {
        duration: 1,
        ease: "linear",
      },
    },
    tapped: {
      y: [0, -50],
      opacity: [1, 0],

      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };
  return (
    <form className="w-full h-[55%] lg:h-full flex flex-col lg:text-xl gap-2 lg:gap-6 bg-white px-4 py-2 rounded-3xl">
      <div className="font-bold text-xl lg:text-3xl">Book an appointment</div>
      <div>Name</div>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
        className="w-full border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-4 flex items-center "
      />
      <div className="w-full flex justify-between">
        <div className="w-1/2 flex flex-col gap-2 lg:gap-6">
          <div>Date</div>
          <input
            type="date"
            id="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            className="w-[80%] border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center"
            required
          />
          {/* <div className="w-[80%] border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center">
            <div className="opacity-50">Enter date</div>
          </div> */}
        </div>
        <div className="w-1/2 flex flex-col gap-2 lg:gap-6">
          <div>
            Time <small>(9:00AM to 6:00PM)</small>
          </div>
          <input
            type="time"
            id="time"
            name="time"
            min="9:00"
            max="18:00"
            className="w-[80%] border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center"
            required
          />
          {/* <div className="w-[80%] border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center">
            <div className="opacity-50">Enter time</div>
          </div> */}
        </div>
      </div>
      <div>Contact no.</div>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your contact number"
        required
        className="w-full border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-4 flex items-center "
      />
      {/* <div className="w-full border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center ">
        <div className="opacity-50">Enter your contact no.</div>
      </div> */}
      <div className="w-full mt-2 flex justify-between items-center ">
        <div className="w-[45%]">
          <div
            onClick={() => setSelectedOption("HomeVisit")}
            className={`${
              selectedOption === "HomeVisit"
                ? "bg-[#006D77] text-white"
                : "border-2 border-[#006D77] text-[#006D77]"
            } flex justify-center items-center w-full h-[30px] max-w-[350px] lg:h-[45px]  font-bold  rounded-full cursor-pointer`}
          >
            Home visit
          </div>
        </div>
        OR
        <div className="w-[45%]">
          <div
            onClick={() => setSelectedOption("Appointment")}
            className={`${
              selectedOption === "Appointment"
                ? "bg-[#E29578] text-white"
                : "border-2 border-[#E29578] text-[#E29578]"
            } flex justify-center items-center w-full h-[30px] max-w-[350px] lg:h-[45px]  font-bold  rounded-full cursor-pointer`}
          >
            Appointment
          </div>
        </div>
      </div>
      <div className="w-1/2 relative flex justify-between font-bold items-center mt-2 max-w-[250px] h-[45px] lg:h-[90px] bg-[#83C5BE] rounded-full lg:rounded-3xl pl-6 pr-2 lg:pr-6">
        <div> Submit</div>
        <motion.div
          initial="static"
          whileHover="animate"
          whileTap="tapped"
          whileInView="initial"
          viewport={{ once: true }}
          className=" overflow-hidden cursor-pointer  text-2xl rotate-45 flex justify-center items-center text-black  bottom-4 right-4 h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] rounded-full bg-white"
        >
          <motion.div variants={arrowVariant}>
            <BiUpArrowAlt />
          </motion.div>
        </motion.div>
      </div>
    </form>
  );
};

export default ContactForm;
