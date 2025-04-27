import React, { useState } from "react";
import { Link } from "react-router";

const time = new Date();
const presentDay = time.getDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayString = days[presentDay];

const ShowDoctors = ({ rawData }) => {
  const [showAll, setShowAll] = useState(false);

  if (!rawData || rawData.length === 0) {
    return <p>No doctors available.</p>;
  }

  const toggleDoctors = () => {
    setShowAll((prev) => !prev);
  };

  const visibleDoctors = showAll ? rawData : rawData.slice(0, 6);

  return (
    <div className="plus-jakarta-sans my-8">
      <div className="text-center my-5">
        <h3 className="text-3xl font-semibold">Our Best Doctors</h3>
        <p className="text-sm font-light py-4">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {visibleDoctors.map((doctor, index) => (
          <div
            key={index}
            id={`id-${index}`}
            className="doctor-card bg-white p-5 rounded-lg"
          >
            <div className="w-70 h-80 overflow-hidden rounded-lg">
              <img
                className="w-full h-80"
                src={doctor.image}
                alt={doctor.name}
              />
            </div>
            <div className="flex gap-2 mt-4">
              {doctor.available_days.includes(dayString) ? (
                <p className="text-green-800 bg-[#09982f33] border-[1px] border-green-800 rounded p-1 text-center">
                  Available Today
                </p>
              ) : (
                <p className="text-red-800 bg-[#ff050531] rounded p-1 text-center">
                  Not Available Today
                </p>
              )}
              <p className="text-[#176AE5] bg-[#1769e521] border-[1px] border-[#176AE5] p-1 text-center px-5 rounded">
                {doctor.experience}
              </p>
            </div>
            <h2 className="text-2xl font-bold mt-2">{doctor.name}</h2>
            <div className="text-sm flex font-light">
              <p>{doctor.education} -</p>
              <p> --- {doctor.speciality}</p>
            </div>
            <p>Reg No: {doctor.registration_number}</p>
            <div className="flex justify-center items-center">
              <Link
                to={`/doctors-details/${doctor.registration_number}`}
                state={doctor}
              >
                <button className="border-[1px] px-26 border-[#176AE5] my-5 text-[#176AE5] rounded-2xl btn bg-[white] hover:bg-[#176AE5] hover:text-white">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {rawData.length > 6 && (
        <div className="flex justify-center items-center">
          <button
            onClick={toggleDoctors}
            className="btn px-16 text-center rounded-2xl border-[1px] text-[#176AE5] border-[#176AE5] hover:bg-[#176AE5] hover:text-white"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowDoctors;
