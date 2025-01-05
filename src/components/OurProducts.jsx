 

function OurProducts() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <p className="text-lg mb-8">Check out our products below.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example product cards */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Product 1</h3>
          <p className="text-gray-700">Description of product 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Product 2</h3>
          <p className="text-gray-700">Description of product 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Product 3</h3>
          <p className="text-gray-700">Description of product 3.</p>
        </div>
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
}

export default OurProducts;
