// components/layout/Header.tsx
import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-purple-700">
          <Link href="/" className="hover:text-purple-900">
            AutoParts Market
          </Link>
        </h1>
        <div className="flex space-x-2">
          <Link href="/parts" className="text-purple-700 hover:text-purple-900">Browse</Link>
          <Link href="/sell" className="text-purple-700 hover:text-purple-900">Sell</Link>
          <Link href="/login" className="text-purple-700 hover:text-purple-900">Login</Link>
        </div>
      </div>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search parts..."
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded"
        />
        <button className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
