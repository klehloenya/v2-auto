// components/featured-products.tsx
'use client';

import Link from "next/link";

const featuredProducts = [
  { id: "1", name: "Premium Brake Pads", price: 89.99, image: "/images/brake-pads.jpg", rating: 4.8, category: "Brakes" },
  { id: "2", name: "High-Performance Air Filter", price: 34.99, image: "/images/air-filter.jpg", rating: 4.6, category: "Engine" },
  { id: "3", name: "LED Headlight Kit", price: 129.99, image: "/images/headlights.jpg", rating: 4.9, category: "Lighting" },
];

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {featuredProducts.map((product) => (
        <Link
          href={`/part/${product.id}`}
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
