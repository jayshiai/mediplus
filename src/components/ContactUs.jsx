import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="h-screen w-full px-4 py-5">
      <div className="w-full h-[90%] flex flex-col lg:flex-row-reverse gap-4 bg-[#EDF6F9] px-4 py-5 montserrat rounded-3xl">
        <div className="text-3xl font-bold lg:hidden">Contact Us</div>
        <ContactForm />
        <div className="flex flex-col gap-4 w-full">
          <div className="text-3xl font-bold hidden lg:block">Contact Us</div>
          <div className="w-full max-w-[500px] h-[70px] bg-[#83C5BE] rounded-3xl px-4 py-2">
            <div className="font-medium ">Call us</div>
            <div className="">+91 8887865442 , +91 89571 30180</div>
          </div>
          <div className="w-full max-w-[500px] h-[70px] bg-[#E29578] rounded-3xl px-4 py-2">
            <div className="font-medium ">Email us</div>
            <div className="">medipluspathology@gmail.com</div>
          </div>
          <div className="w-full max-w-[500px] min-h-[70px] h-fit bg-[#FFDDD2] rounded-3xl px-4 py-2">
            <div className="font-medium ">Find us</div>
            <div className="">
              Mediplus Clinic, Arjunganj, Ground Floor, Bank of Baroda, Lucknow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
