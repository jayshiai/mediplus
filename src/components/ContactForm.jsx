import React from "react";

import { BiUpArrowAlt } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("none");

  const handleSubmitData = (data) => {
    setSubmitting(true);
    console.log("Sending");

    fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("SENT");
      if (res.status === 200) {
        console.log("SUCCES");
        setSubmitted(true);
      }
    });
  };

  const onSubmit = (data) => {
    data.type = selectedOption;

    handleSubmitData(data);
  };
  const loadVariant = {
    initial: {
      rotate: 0,
      opacity: 1,
    },
    animate: {
      y: 0,
      rotate: ["0deg", "360deg"],
      transition: {
        duration: 1,
        repeat: "Infinity",
        ease: "linear",
      },
    },
  };
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full h-[55%] lg:h-full flex flex-col justify-center lg:text-xl gap-2 lg:gap-6 bg-white px-4 py-2 rounded-3xl"
    >
      {submitted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          className="text-[25vh] flex justify-center text-green-500"
        >
          <BsCheck2Circle />
        </motion.div>
      ) : (
        <>
          <div className="font-bold text-xl lg:text-3xl">
            Book an appointment
          </div>
          <div>Name</div>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            placeholder="Enter your name"
            className="w-full border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-4 flex items-center "
          />
          <div className="w-full flex justify-between">
            <div className="w-1/2 flex flex-col gap-2 lg:gap-6">
              <div>Date</div>
              <input
                type="date"
                id="date"
                {...register("date", { required: true })}
                min={new Date().toISOString().split("T")[0]}
                className="w-[80%] border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center"
                required
              />
              {/* <div className="w-[80%] border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center">
            <div className="opacity-50">Enter date</div>
          </div> */}
            </div>
            <div className="w-1/2 flex flex-col gap-2 lg:gap-6">
              <div className=" whitespace-nowrap">
                Time{" "}
                <small className="text-xs whitespace-nowrap">
                  (9:00AM to 6:00PM)
                </small>
              </div>
              <input
                type="time"
                id="time"
                {...register("time", { required: true })}
                min="08:00"
                max="22:00"
                className="w-[80%] border-[1.5px] border-black h-[30px] max-w-[350px] lg:h-[45px] rounded-full px-2 flex items-center"
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
            {...register("phone", { required: true })}
            placeholder="Enter your contact number"
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
                    ? "bg-two text-white"
                    : "border-2 border-[#E29578] text-[#E29578]"
                } flex justify-center items-center w-full h-[30px] max-w-[350px] lg:h-[45px]  font-bold  rounded-full cursor-pointer`}
              >
                Appointment
              </div>
            </div>
          </div>
          <button className="w-1/2 relative flex gap-2 justify-between font-bold items-center mt-2 min-w-fit  max-w-[250px] h-[45px] lg:h-[90px] bg-one rounded-full lg:rounded-3xl pl-6 pr-2 lg:pr-6">
            <div> {submitting ? "Submitting" : "Submit"}</div>
            <motion.div
              initial="static"
              whileHover={submitting ? "" : "animate"}
              whileTap="tapped"
              whileInView={submitting ? "animate" : "initial"}
              viewport={{ once: true }}
              className=" overflow-hidden cursor-pointer  text-2xl rotate-45 flex justify-center items-center text-black  bottom-4 right-4 h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] rounded-full bg-white"
            >
              <motion.div variants={submitting ? loadVariant : arrowVariant}>
                {submitting ? <AiOutlineLoading /> : <BiUpArrowAlt />}
              </motion.div>
            </motion.div>
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
