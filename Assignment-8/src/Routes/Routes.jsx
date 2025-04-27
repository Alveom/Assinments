import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Bolgs from "../Pages/Bolgs";
import DoctorDetails from "../Pages/DoctorDetails";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "my-bookings",
        Component: MyBookings,
      },
      { path: "blogs", Component: Bolgs },
      {
        path: "doctors-details/:id",
        Component: DoctorDetails,
      },
    ],
  },
]);
