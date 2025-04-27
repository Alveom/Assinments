import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router";

function DoctorDetails({ rawData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const doctor =
    location.state || rawData?.find((doc) => doc.registration_number === id);

  if (!doctor) {
    return <Error />;
  }

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

  const handleBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("myBookings")) || [];
    const alreadyBooked = bookings.some(
      (doc) => doc.registration_number === doctor.registration_number
    );

    if (alreadyBooked) {
      toast.warn("Doctor already booked!");
    } else {
      const newBookings = [...bookings, doctor];
      localStorage.setItem("myBookings", JSON.stringify(newBookings));
      toast.success("Appointment booked!");
      navigate("/my-bookings");
    }
  };

  return (
    <div className="plus-jakarta-sans">
      <div className="max-w-[85%] mx-auto bg-white py-8 text-center rounded-lg">
        <h3 className="text-3xl font-semibold">Doctor’s Profile Details</h3>
        <p className="text-sm font-light py-4">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      <div className="flex justify-start gap-5 bg-white p-10 rounded-2xl mx-6 my-6">
        <div>
          <img
            className="w-60 rounded-2xl border border-gray-300"
            src={doctor.image || "https://via.placeholder.com/150"}
            alt={doctor.name || "Doctor Image"}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold my-5">{doctor.name}</h1>
          <p className="text-sm font-light mb-4">
            {doctor.education} <br /> MBBS, MD General Medicine, DNB
          </p>
          <h2 className="text-sm font-light mb-4">
            Working at <br />
            <span className="text-lg font-normal">
              TMSS Medical College & Rafatullah Community Hospital, Bogura
            </span>
          </h2>

          <p className="text-2xl font-light mb-5">
            Reg No: {doctor.registration_number}
          </p>
          <div className="flex items-center flex-wrap gap-2 text-sm font-light mb-5">
            <span className="text-lg font-bold">Availability:</span>
            {doctor.available_days.map((day, index) => (
              <div
                key={index}
                className="bg-yellow-100 text-yellow-800 border-yellow-800 border p-2 rounded-2xl text-sm"
              >
                {day}
              </div>
            ))}
          </div>
          <p>
            <span className="font-bold">Consultation Fee:</span>
            <span className="text-blue-400 mr-4">Taka : {doctor.fee}</span>
            (incl. Vat)
            <span className="text-blue-400"> Per consultation </span>
          </p>
        </div>
      </div>

      <div className="max-w-[85%] mx-auto my-5 bg-white py-8 px-5 text-center rounded-lg">
        <h3 className="font-bold">Book an Appointment</h3>
        <div className="flex justify-between items-center gap-5">
          <p>Availability</p>
          {doctor.available_days.includes(dayString) ? (
            <p className="text-green-800 bg-[#09982f33] border border-green-800 rounded p-1 text-center">
              Available Today
            </p>
          ) : (
            <p className="text-red-800 bg-[#ff050531] rounded p-1 text-center">
              Not Available Today
            </p>
          )}
        </div>
        <p className="text-sm font-light py-2 text-[#FFA000] bg-[#ffa20033] my-4 border border-[#FFA000] rounded p-1 text-center">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>

        <div className="max-w-[85%] mx-auto my-5 bg-white py-8 px-5 text-center rounded-lg">
          <h3 className="font-bold">Book an Appointment</h3>

          <button
            className="w-full btn bg-[#176AE5] text-white rounded-2xl py-2 mt-3"
            onClick={handleBooking}
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
