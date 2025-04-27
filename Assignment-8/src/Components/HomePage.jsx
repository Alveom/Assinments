import React, { Suspense, useState } from "react";
import AllDoctors from "./AllDoctors";
import Banner from "./Banner";
import ShowDoctors from "./ShowDoctors";
import axios from "axios";

const URL =
  "https://raw.githubusercontent.com/Alveom/api/main/doctor/doctorData.json";

function HomePage() {
  const [rawData, setRawData] = useState({});
  const [loading, setLoading] = useState(true);
  useState(() => {
    axios(URL)
      .then((res) => {
        setRawData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error alve fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen grid place-items-center ">
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        {loading ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          <div>
            <Banner />
            <div className="max-w-[80%] m-auto">
              <ShowDoctors rawData={rawData} />
              <AllDoctors />
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default HomePage;
