import React from "react";
import Notification from "../assets/Group 3466092.png";

function Navber() {
  return (
    <nav className="pt-2 pb-1 py-4 flex items-center text-center justify-around">
      <div>
        <h3 className="poppins text-2xl">
          <span className=" text-[#003EA4]">Auction</span>
          <span className="text-[#FFD337] font-bold">Gallery</span>
        </h3>
      </div>
      <div className="poppins ">
        <ul className="flex  justify-evenly gap-8">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Auction</a>
          </li>
          <li>
            <a href="">Catagory</a>
          </li>
          <li>
            <a href="">How to Works</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <img src={Notification} alt="" />
        </div>
        <div className="avatar">
          <div className="w-[5vh] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
