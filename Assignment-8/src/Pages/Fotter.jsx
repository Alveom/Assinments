import React from "react";
import { NavLink } from "react-router";

function Fotter() {
  return (
    <div className="flex plus-jakarta-sans justify-center flex-col items-center bg-white">
      <div className="flex items-center py-4">
        <img src="/logo.png" alt="" />
        <h3 className="font-semibold text-lg px-2">Phudu</h3>
      </div>
      <div>
        <ul className="flex justi">
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
      <div className="flex my-5 gap-2">
        <div>
          <a href="">
            <img src="/Group1171275145.png" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img src="/Group1171275148.png" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img src="/Group1171275149.png" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img src="/twitter-logo-23.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
