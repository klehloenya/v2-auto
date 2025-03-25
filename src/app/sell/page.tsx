import React from 'react';
import { Link, To, useNavigate } from 'react-router-dom';

// Helper component for category cards
const CategoryCard = (props: { to: To; icon: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => {
  return (
    <Link to={props.to} className="block">
      <div className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-md transition duration-300">
        <div className="bg-blue-100 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          {props.icon}
        </div>
        <h3 className="text-xl font-semibold">{props.title}</h3>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  
  const handleShopNow = () => {
    navigate('/browse');
  };
  
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center py-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Quality Auto Parts For Every Vehicle</h1>
          <p className="text-lg mb-6 text-gray-600">
            Find the perfect parts for your car at competitive prices with our extensive catalog.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleShopNow}
              className="bg-red-600 text-white px-6 py-3 rounded font-medium hover:bg-red-700 transition duration-300"
            >
              Shop Now
            </button>
            <Link
              to="/how-it-works"
              className="border border-gray-300 px-6 py-3 rounded font-medium hover:bg-gray-100 transition duration-300"
            >
              How It Works
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 p-4">
          <div className="bg-gray-200 rounded-lg p-4 text-center h-64 flex items-center justify-center">
            <span className="text-gray-500">Hero Image Placeholder</span>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="my-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for auto parts..."
            className="flex-grow px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-r hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard title="Engine Parts" icon="E" to="/browse/engine-parts" />
          <CategoryCard title="Brakes" icon="B" to="/browse/brakes" />
          <CategoryCard title="Suspension" icon="S" to="/browse/suspension" />
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured product placeholder */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-200 rounded-lg p-4 text-center h-40 flex items-center justify-center mb-4">
              <span className="text-gray-500">Product Image</span>
            </div>
            <h3 className="font-semibold">Brake Pads - Premium</h3>
            <p className="text-gray-600 text-sm mb-2">Compatible with most vehicles</p>
            <p className="font-bold text-lg">$49.99</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
