// components/category-showcase.tsx
'use client';

import Link from "next/link";

const categories = [
  { id: "engine", name: "Engine Parts", icon: "🔧" },
  { id: "brakes", name: "Brake System", icon: "🛑" },
  { id: "suspension", name: "Suspension", icon: "🔩" },
];

export function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {categories.map((category) => (
        <Link
          href={`/category/${category.id}`}
          key={category.id}
          className="flex items-center p-4 bg-white rounded-lg shadow-md"
        >
          <div className="mr-4 text-3xl">{category.icon}</div>
          <div>
            <h3 className="font-bold text-lg">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
