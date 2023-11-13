import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div id="contact" className="h-screen min-h-[900px] w-full px-4 py-5">
      <div className="w-full h-[95%] flex flex-col lg:flex-row-reverse gap-4 bg-[#EDF6F9] px-4 py-5 montserrat rounded-3xl">
        <div className="text-3xl font-bold lg:hidden">Contact Us</div>
        <ContactForm />
        <div className="flex flex-col gap-4 w-full">
          <div className="text-3xl font-bold hidden lg:block">Contact Us</div>
          <div className="w-full max-w-[500px] h-[70px] bg-[#83C5BE] rounded-3xl px-4 py-2">
            <div className="font-medium ">Call us</div>
            <div className="">+91 8887865442 , +91 9369044277</div>
          </div>
          <div className="w-full max-w-[500px] h-[70px] bg-[#E29578] rounded-3xl px-4 py-2">
            <div className="font-medium ">Email us</div>
            <div className="">paraspathology@gmail.com</div>
          </div>
          <div className="w-full max-w-[500px] min-h-[70px] h-fit bg-[#FFDDD2] rounded-3xl px-4 py-2">
            <div className="font-medium ">Find us</div>
            <div className="">
              Infront Gate no. 5 of Medanta Hospital, Lodhi Market, Sector B,
              Bansal API, Lucknow, UP, 226030
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
