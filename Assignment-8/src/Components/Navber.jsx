import React from "react";
import { NavLink } from "react-router";

function Navber() {
  return (
    <div className="flex justify-between mx-10 p-4 items-center plus-jakarta-sans ">
      <div className="flex items-center">
        <img src="/logo.png" alt="" />
        <h3 className="mx-2 text-xl font-bold">Phudu</h3>
      </div>
      <div>
        <ul className="flex ">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="mx-4">
            <NavLink to={"my-bookings"}>My Bookings</NavLink>
          </li>
          <li>
            <NavLink to={"blogs"}>Blogs</NavLink>
          </li>
          <li className="mx-4">
            <NavLink to={"contact-us"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <button className="btn bg-blue-500 text-white rounded-3xl px-8 border-none">
        Emergency
      </button>
    </div>
  );
}

export default Navber;
