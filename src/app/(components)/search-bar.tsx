// components/search-bar.tsx
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-md mx-auto mt-4"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search for parts..."
          value={query}
          onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
          className="w-full py-2 px-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
}
