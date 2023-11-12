"use client";

import Tests from "@/components/Tests";
import Services from "@/components/Services";
import HomeComp from "@/components/HomeComp";
import ChooseUs from "@/components/ChooseUs";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <HomeComp />
      <div className="flex flex-col lg:flex-row-reverse">
        <Services />
        <Tests />
      </div>
      <ChooseUs />
      <ContactUs />
      <div className="sm:hidden fixed bottom-0 w-screen h-[10vh] px-5 pb-5 flex flex-col justify-end">
        <div className="w-full h-[7.5vh] bg-[#006D77] flex justify-center items-center text-2xl font-bold text-white font-mono rounded-2xl">
          <div>Book Appointment</div>
        </div>
      </div>
    </>
  );
}
