import CountUp from "react-countup";
import DoctorNumber from "./DoctorNumber";

const AllDoctors = () => {
  return (
    <div className=" plus-jakarta-sans my-8">
      <div className="text-center my-5">
        <h3 className="font-bold text-2xl  ">
          We Provide Best Medical Services
        </h3>
        <p className="py-4">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="flex gap-5 justify-center">
        <DoctorNumber
          number={199}
          name={"Total Doctor"}
          image={"success-doctor.png"}
        />
        <DoctorNumber
          number={467}
          name={"Total Reviews"}
          image={"success-review.png"}
        />
        <DoctorNumber
          number={1900}
          name={"Patients"}
          image={"success-patients.png"}
        />
        <DoctorNumber
          number={300}
          name={"Total Stuffs"}
          image={"success-staffs.png"}
        />
      </div>
    </div>
  );
};

export default AllDoctors;
