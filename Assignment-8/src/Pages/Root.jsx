import React from "react";
import { Outlet } from "react-router";
import Navber from "../Components/Navber";
import Fotter from "./Fotter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function Root() {
  return (
    <div className="bg-gray-200">
      <Navber />

      <Outlet />
      <ToastContainer />
      <Fotter />
    </div>
  );
}
