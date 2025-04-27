import React from "react";
import { Link } from "react-router";

function Error() {
  return (
    <div className="flex justify-center gap-5 items-center">
      <div>
        <img
          className="w-200"
          src="/fe790089-1e5f-4de8-9404-23095485a6eb.png"
          alt=""
        />
        <Link to="/">
          <button className="btn w-full text-center mt-5 bg-blue-500 text-blue-900">
            GO Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
