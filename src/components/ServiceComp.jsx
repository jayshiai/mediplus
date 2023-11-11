import React from "react";
import Image from "next/image";
const ServiceComp = ({ text }) => {
  return (
    <div className="flex gap-5 ">
      <Image src="/plus.png" height={25} width={25} alt="plus sign" />
      <div>{text}</div>
    </div>
  );
};

export default ServiceComp;
