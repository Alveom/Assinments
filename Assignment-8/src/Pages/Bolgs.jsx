import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import BlogsData from "../Components/BlogsData";

function Bolgs() {
  const [blogsData, setBlogsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(
      "https://raw.githubusercontent.com/Alveom/api/refs/heads/main/doctor/blogs.json"
    )
      .then((res) => {
        setBlogsData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen grid place-items-center">
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        {loading ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          <BlogsData data={blogsData} />
        )}
      </Suspense>
    </div>
  );
}

export default Bolgs;
