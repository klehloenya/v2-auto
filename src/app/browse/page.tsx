'use client';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

// Define the Part type
type Part = {
  title: string;
  category: string;
  description: string
};

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [parts, setParts] = useState<Part[]>([]); // Type the state to an array of Part objects
  const [noPartsFound, setNoPartsFound] = useState(false);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const fetchedParts = await fetchParts(searchQuery);
    setParts(fetchedParts);
    setNoPartsFound(fetchedParts.length === 0);
  };

  // Define the fetchParts function with the Part type
  const fetchParts = async (query: string): Promise<Part[]> => {
    try {
      const response = await fetch(`/api/v1/parts`);
      if (!response.ok) throw new Error('Failed to fetch parts');
      const resonseObject = await response.json()
      const allParts: Part[] = resonseObject.data;
      console.log("All Parts:", allParts)
      return query
      ? allParts.filter(part => 
          part.title.toLowerCase().includes(query.toLowerCase()) || 
          part.category.toLowerCase().includes(query.toLowerCase()) || 
          part.description.toLowerCase().includes(query.toLowerCase())
        )
      : allParts;
    } catch (error) {
      console.error('Error fetching parts:', error);
      return [];
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">AutoParts Market</span>
            <nav className="hidden md:flex space-x-6">
              <Link href="/">Home</Link>
              <Link href="/browse">Browse</Link>
              <Link href="/brands">Brands</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/auth/login">Login</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="content-container">
        <h1>Browse Parts</h1>
        <p>Explore a variety of auto parts available for sale.</p>

        {/* Search Form */}
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for parts"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>

        {/* Display No Parts Found Message */}
        {noPartsFound && <p>No parts found. Try a different search.</p>}

        {/* Render Parts List */}
        <div className="parts-list">
          {parts.length > 0 ? (
            parts.map((part, index) => (
              <div key={index} className="part-item">
                <h3>{part.title}</h3>
                <p>Category: {part.category}</p>
              </div>
            ))
          ) : (
            <p>No parts available to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}
