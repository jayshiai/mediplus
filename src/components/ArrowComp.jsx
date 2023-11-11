import React from "react";
import { motion } from "framer-motion";

import { BiUpArrowAlt } from "react-icons/bi";
const ArrowComp = () => {
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
    <motion.div
      initial="static"
      whileHover="animate"
      whileTap="tapped"
      whileInView="initial"
      viewport={{ once: true }}
      className=" overflow-hidden cursor-pointer absolute text-4xl rotate-45 flex justify-center items-center text-black  bottom-4 right-4 h-[50px] w-[50px] rounded-full bg-white"
    >
      <motion.div variants={arrowVariant}>
        <BiUpArrowAlt />
      </motion.div>
    </motion.div>
  );
};

export default ArrowComp;
