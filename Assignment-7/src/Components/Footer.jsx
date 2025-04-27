import React from "react";

function Footer() {
  return (
    <footer>
      <div className="h-[25vh] w-full sora flex flex-col justify-center items-center">
        <h3 className=" text-2xl">
          <span className=" text-[#003EA4]">Auction</span>
          <span className="text-[#FFD337] font-bold">Gallery</span>
        </h3>
        <div className="flex gap-1">
          <p>Bit. </p>
          <p>Win. </p>
          <p>Own. </p>
        </div>
        <div>
          <ul className="flex justify-center gap-2 text-sm font-light">
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
          <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
