import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-screen         px-20 ">
        <div className="  h-[10vh] flex justify-between items-center">
          <div className="text-4xl font-black inter tracking-wider uppercase">
            MediPlus
          </div>
          <div className="flex justify-between gap-10    inter items-center">
            <div className="text-right">
              Make an appointment with doctor
              <br /> without queue!
            </div>
            <div className="font-black whitespace-nowrap rounded-full px-4 py-2 bg-[#83C5BE] text-white">
              Book Appointment
            </div>
          </div>
        </div>
        <div className="flex w-screen gap-5 items-center">
          <div className=" border-black  border-2 rounded-full px-4 py-1">
            About
          </div>
          <div className=" border-black  border-2 rounded-full px-4 py-1">
            Services
          </div>
          <div className=" border-black  border-2 rounded-full px-4 py-1">
            Contact
          </div>
          <div className="w-[70%] h-[1.5px] rounded-full bg-black"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
