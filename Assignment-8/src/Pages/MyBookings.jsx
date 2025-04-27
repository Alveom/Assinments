import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BookingsDetails from "../Components/BookingsDetails";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// For the triangle-shaped bar chart
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} fill={fill} />;
};

function MyBookings() {
  const location = useLocation();
  const doctor = location.state;

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("myBookings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("myBookings", JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    if (doctor) {
      const alreadyExists = bookings.some(
        (b) => b.registration_number === doctor.registration_number
      );

      if (!alreadyExists) {
        setBookings([...bookings, doctor]);
        toast.success("Doctor booked successfully!");
      } else {
        toast.warn("You already booked this doctor.");
      }
    }
  }, [doctor]);

  const cancelAppointment = (registration_number) => {
    const updated = bookings.filter(
      (d) => d.registration_number !== registration_number
    );
    setBookings(updated);
    toast.info("Appointment cancelled.");
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#8dd1e1"];

  const chartData = bookings.map((d) => ({
    name: d.name,
    fee: d.fee,
    appointments: 1,
  }));

  return (
    <div className="plus-jakarta-sans">
      <h2 className="text-2xl font-bold text-center my-6">My Bookings</h2>

      {bookings.length === 0 && (
        <p className="text-center text-gray-400">No appointments yet.</p>
      )}
      {bookings.length > 0 && (
        <div className="bg-white p-6 rounded-xl mx-6 mt-10">
          <h3 className="text-lg font-semibold mb-4">Appointments Summary</h3>
          <BarChart width={600} height={300} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "Fee (Taka)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Bar dataKey="fee" shape={<TriangleBar />}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      )}

      {bookings.map((doc, i) => (
        <BookingsDetails
          key={i}
          name={doc.name}
          dgree={doc.education}
          fee={doc.fee}
          onCancel={() => cancelAppointment(doc.registration_number)}
        />
      ))}
    </div>
  );
}

export default MyBookings;
