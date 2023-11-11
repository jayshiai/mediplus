import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full px-10   ">
        <div className="  h-[10vh] flex justify-center sm:justify-between items-center">
          <div className="text-4xl font-black inter tracking-wider uppercase">
            Paras
          </div>
          <div className="hidden sm:flex text-xs lg:text-base justify-between gap-6 md:gap-10    inter items-center">
            <div className="text-right">
              Make an appointment with doctor
              <br /> without queue!
            </div>
            <div className="font-black whitespace-nowrap rounded-full px-4 py-2 bg-[#83C5BE] text-white">
              Book Appointment
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
