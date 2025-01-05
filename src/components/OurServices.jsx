import React from "react";

function OurServices() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <p className="text-lg text-gray-700 mb-8">Discover our services.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Service 1</h3>
          <p className="text-gray-600">Description of service 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Service 2</h3>
          <p className="text-gray-600">Description of service 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Service 3</h3>
          <p className="text-gray-600">Description of service 3.</p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
