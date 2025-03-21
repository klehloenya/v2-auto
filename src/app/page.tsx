// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import BM_engine from "../images/BM_engine.jpg"
import Mercedes_Benz from "../images/Mercedes_Benz.jpg"
import Audi_suspension from "../images/Audi_suspension.jpg"
import Toyota_lights from "../images/Toyota_lights.jpg"

export default function Home() {
  // Array of products with different brands
  const products = [
    { id: 1, brand: "BMW", price: "M15,000", image: "/images/BM_engine.jpg", alt: "BMW Engine Part" },
    { id: 2, brand: "Mercedes", price: "M4000", image: "/images/Mercedes_Benz.jpg", alt: "Mercedes Part" },
    { id: 3, brand: "Audi", price: "M2,500", image: "/images/Audi_suspension.jpg", alt: "Audi Suspension" },
    { id: 4, brand: "Toyota", price: "M2,000", image: "/images/Toyota_lights.jpg", alt: "Toyota Lights" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
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

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Quality Auto Parts For Every Vehicle
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find the perfect parts for your car at competitive prices with our extensive catalog.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/browse" 
                className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                Shop Now
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-gray-200 rounded-lg h-80 w-full flex items-center justify-center">
            <span className="text-gray-500">Hero Image Placeholder</span>
          </div>
        </section>

        {/* Simple Search Bar */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search for auto parts..." 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Category Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Engine Parts Category */}
            <Link href="/category/engine" className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                E
              </div>
              <h3 className="text-xl font-semibold">Engine Parts</h3>
            </Link>
            
            {/* Brakes Category */}
            <Link href="/category/brakes" className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                B
              </div>
              <h3 className="text-xl font-semibold">Brakes</h3>
            </Link>
            
            {/* Suspension Category */}
            <Link href="/category/suspension" className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                S
              </div>
              <h3 className="text-xl font-semibold">Suspension</h3>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
              key={product.id} 
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                
                <div className="bg-gray-200 h-48 relative">
                  <Image 
                    src={product.image} 
                    alt={product.alt || product.brand} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.brand}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{product.price}</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Login/Register CTA Section */}
        <section className="bg-gray-50 rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Create an account to track orders, save favorites, and get personalized recommendations. 
            Already have an account? Log in to continue shopping.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/login" 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Register Now
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-bold text-blue-600">AutoParts Market</div>
            <div className="text-gray-500 text-sm">© 2025 AutoParts Market. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}