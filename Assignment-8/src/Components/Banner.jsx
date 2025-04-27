import React from "react";

function Banner() {
  return (
    <div className="bg-gradient-to-t  plus-jakarta-sans from-white to-gray-200 border-2 border-white rounded-lg text-center mx-4">
      <div>
        <h3 className="text-4xl mt-14 font-bold ">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h3>
        <p className="mt-3 font-light text-sm mx-24">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="flex items-center justify-center">
          <input
            className="bg-white border-white  rounded-2xl py-2 px-2 w-[50%] mx-2 my-5"
            type="text"
            placeholder="search"
          />
          <button className="btn bg-blue-500 text-white rounded-3xl px-8 border-none">
            Search Now
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5 gap-4">
        <img className="w-[45%]" src="banner-img-1.png" alt="" />
        <img
          className="w-[45%] object-cover h-86 rounded-2xl"
          src="pexels-thirdman-5327653.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
