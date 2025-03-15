'use client';
import Link from "next/link";

// Using inline SVGs directly in the component
const categories = [
  { 
    id: "engine", 
    name: "Engine Parts", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  { 
    id: "brakes", 
    name: "Brake System", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m4.93 4.93 14.14 14.14"/>
      </svg>
    )
  },
  { 
    id: "suspension", 
    name: "Suspension", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/>
        <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/>
        <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/>
        <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/>
      </svg>
    )
  },
];

export function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {categories.map((category) => (
        <Link
          href={`/category/${category.id}`}
          key={category.id}
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="mr-4 text-gray-700">
            {category.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
