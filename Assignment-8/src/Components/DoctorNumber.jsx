import React from "react";
import CountUp from "react-countup";

function DoctorNumber({ number, name, image }) {
  return (
    <div className="w-[30%]">
      <div className=" bg-white p-4 rounded-lg">
        <img src={image} alt="" />
        <div className="flex font-bold text-6xl">
          <CountUp className="" end={number} duration={5} />
          <p>+</p>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default DoctorNumber;
