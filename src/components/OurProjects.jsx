import React from "react";

function OurProjects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
      <p className="text-lg text-gray-700 mb-8">Explore our projects.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example project cards */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-600">Description of project 1.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-gray-600">Description of project 2.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p className="text-gray-600">Description of project 3.</p>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
