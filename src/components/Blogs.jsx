import React from "react";
import bgImage from "../assets/banner/deal.png";

function Blogs() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4   relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Blogs</h2>
        <p className="text-lg text-gray-300">Read our latest blogs.</p>
      </div>
    </div>
  );
}

export default Blogs;
