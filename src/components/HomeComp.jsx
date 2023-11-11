import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Component = React.forwardRef((props, ref) => (
  <Image {...props} ref={ref} />
));
const MotionImage = motion(Component);
const HomeComp = () => {
  return (
    <div className="w-full h-[90vh] sm:h-[50vh]  ">
      <div className="w-full h-[40vh] pt-7 flex flex-col sm:flex-row items-center ">
        <div className="sm:w-[50%] z-10">
          <div className="flex flex-col sm:flex-row sm:gap-4 whitespace-nowrap">
            <div className="text-4xl md:text-5xl xl:text-7xl montserrat font-medium  text-center ">
              The Right
            </div>
            <div className="text-4xl md:text-5xl xl:text-7xl montserrat font-medium  text-center ">
              Choice for
            </div>
          </div>
          <div className="md:mt-4 montserrat text-4xl md:text-5xl xl:text-7xl text-center sm:text-left">
            <span className="font-bold tracking-wider">
              <span className="bg-[#83C5BE] rounded-3xl "> your </span>
              health
            </span>{" "}
          </div>
          <div className="md:mt-4 montserrat text-4xl md:text-5xl xl:text-7xl font-medium text-center sm:text-left">
            care needs
          </div>
        </div>
        <div className="relative hidden sm:block w-[30%]   h-full ">
          <div className=" w-full h-full flex justify-center items-center relative">
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
        <div className="flex flex-row sm:flex-col sm:gap-10 w-full sm:w-[20%] px-10 justify-between mt-10">
          <div className=" font-mono font-black ">
            <div className="text-2xl text-[#E29578]  whitespace-nowrap">
              Call Us
            </div>
            <div className="text-lg whitespace-nowrap">+91-8459967632</div>
          </div>
          <div className=" font-mono font-black ">
            <div className="text-2xl text-[#E29578] whitespace-nowrap">
              Find Us
            </div>
            <div className="text-lg whitespace-nowrap">Arjunganj, UP</div>
          </div>
        </div>
      </div>

      <div className="relative sm:hidden w-full h-[40vh]">
        <div className="absolute top-10 left-2 w-[160px] h-[160px] rounded-3xl bg-[#83C5BE]  montserrat font-bold  text-black p-2">
          <p className="text-2xl ">Home Collection</p>
          <div className="absolute bottom-2 w-[50px] h-[50px] rounded-full bg-white"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-[50%] w-[200px] h-[300px] rounded-3xl bg-black  montserrat font-bold  text-white p-2">
          <p className="text-2xl ">All Test Available</p>
          <div className=" text-[13px] pt-8">
            CBC, ESR, HBA1C
            <br /> and more
          </div>

          <Image
            src="/plus.svg"
            height={50}
            width={50}
            alt="plus sign"
            className="absolute bottom-5 left-5"
          />
        </div>
        <div className="absolute bottom-9 right-2 w-[160px] h-[150px] rounded-3xl bg-[#FFDDD2]  montserrat font-bold  text-black p-2">
          <p className="text-3xl ">Blood Tests</p>
          <p className="absolute bottom-4 text-3xl text-red-500">AB+</p>
          <div className="absolute bottom-2 right-2 w-[50px] h-[50px] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
