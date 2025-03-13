'use client';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [parts, setParts] = useState<any[]>([]); // This is where you'll store the fetched parts
  const [noPartsFound, setNoPartsFound] = useState(false);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submission (can be expanded with actual search functionality)
  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Simulating fetching parts based on search query (replace with actual API call)
    const fetchedParts = await fetchParts(searchQuery);
    
    // Update state based on the results
    setParts(fetchedParts);

    // Check if no parts were found
    setNoPartsFound(fetchedParts.length === 0);
  };

  // Simulate an API call to fetch parts based on search query (replace this with actual API logic)
  const fetchParts = (query: string) => {
    // Simulated parts list (replace with actual API logic)
    const allParts = [
      { name: 'Brake Pad', category: 'Brakes' },
      { name: 'Air Filter', category: 'Filters' },
      { name: 'Battery', category: 'Electrical' },
    ];

    if (query === '') {
      return allParts;
    }

    return allParts.filter(part => part.name.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <div className="content-container">
      <h1>Browse Parts</h1>
      <p>Explore a variety of auto parts available for sale.</p>

      {/* Search form with icon */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for parts"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">
          <FaSearch /> {/* Display the search icon */}
        </button>
      </form>

      {/* Display the message when no parts are found */}
      {noPartsFound && <p>No parts found. Try a different search.</p>}

      {/* Render the list of parts */}
      <div className="parts-list">
        {parts.length > 0 ? (
          parts.map((part, index) => (
            <div key={index} className="part-item">
              <h3>{part.name}</h3>
              <p>Category: {part.category}</p>
            </div>
          ))
        ) : (
          // This is a fallback in case the parts list is empty
          <p>No parts available to display.</p>
        )}
      </div>
    </div>
  );
}
