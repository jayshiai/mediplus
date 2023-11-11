import React from "react";
import Image from "next/image";
const HomeComp = () => {
  return (
    <div className="w-full h-[90vh]  ">
      <div className="w-full h-[40vh] pt-7 flex flex-col items-center">
        <div className="text-4xl montserrat font-medium  text-center ">
          The Right
        </div>
        <div className="text-4xl montserrat font-medium  text-center ">
          Choice for
        </div>
        <div className="montserrat text-4xl text-center">
          <span className="font-bold tracking-wider">
            <span className="bg-[#83C5BE] rounded-3xl "> your </span>
            health
          </span>{" "}
        </div>
        <div className="montserrat text-4xl font-medium text-center">
          care needs
        </div>

        <div className="flex w-full px-10 justify-between mt-10">
          <div className=" font-mono font-black ">
            <div className="text-2xl text-[#E29578] text-right">Call Us</div>
            <div className="text-lg">+91-8459967632</div>
          </div>
          <div className=" font-mono font-black ">
            <div className="text-2xl text-[#E29578]">Find Us</div>
            <div className="text-lg">Arjunganj, UP</div>
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
