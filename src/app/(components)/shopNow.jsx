// components/ShopNow.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ShopNow = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Find the perfect parts for your car at competitive prices</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Link href="/catalog" className="bg-red-600 text-white font-bold py-3 px-6 rounded text-center hover:bg-red-700 transition">
            Shop Now
          </Link>
          <Link href="/how-it-works" className="bg-white border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded text-center hover:bg-gray-100 transition">
            How It Works
          </Link>
        </div>
        
        <form onSubmit={handleSearch} className="mt-6">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search for auto parts..."
              className="flex-grow border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopNow;
