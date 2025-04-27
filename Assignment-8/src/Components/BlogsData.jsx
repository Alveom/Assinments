import React from "react";

function BlogsData({ data }) {
  console.log(data);

  return (
    <div className="mx-5">
      {data.map((blog, index) => (
        <div className="collapse collapse-arrow bg-base-100 border my-2 border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">{blog.question}</div>
          <div className="collapse-content text-sm">{blog.answer}</div>
        </div>
      ))}
    </div>
  );
}

export default BlogsData;
