import React, { Suspense } from "react";
import Data from "./Data";

function Main() {
  const data = fetch(
    "https://raw.githubusercontent.com/Alveom/api/refs/heads/main/assinment07/api.json"
  ).then((res) => res.json());

  return (
    <>
      <div className="bg-[#EBF0F5]">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Data data={data} />
        </Suspense>
      </div>
    </>
  );
}

export default Main;
