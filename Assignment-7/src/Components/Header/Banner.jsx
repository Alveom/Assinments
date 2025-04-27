import React from "react";
function Banner() {
  return (
    <div>
      <div className="banner_png px-5 flex-col text-left pt-35 sora text-white ">
        <h3 className="text-2xl font-bold">
          Bid on Unique Items from <br /> Around the World
        </h3>
        <p className="py-4 font-light">
          Discover rare collectibles, luxury goods, and vintage treasures in our{" "}
          <br />
          curated auctions
        </p>
        <button className="btn rounded-4xl"> Explore Auctions</button>
      </div>
    </div>
  );
}

export default Banner;
