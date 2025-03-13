import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-6 mb-12">
        <h1 className="text-3xl font-bold text-center">About Our Company</h1>
        <div className="w-20 h-1 bg-blue-600"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Quality Auto Parts For Every Vehicle</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2025, our company has been dedicated to providing high-quality auto parts at competitive prices. 
            We understand the importance of reliable parts for your vehicle's performance and safety.
          </p>
          <p className="text-gray-700 mb-4">
            Our team consists of automotive experts who carefully select each product in our catalog 
            to ensure it meets the highest standards of quality and durability.
          </p>
          <p className="text-gray-700">
            Whether you're a professional mechanic or a DIY enthusiast, we have the parts you need 
            to keep your vehicle running smoothly.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64">
            <Image 
              src="/api/placeholder/500/400" 
              alt="Company headquarters" 
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          To provide car owners with high-quality auto parts at competitive prices, 
          supported by exceptional customer service and technical expertise.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <span className="material-icons">verified</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Quality Guaranteed</h3>
            <p className="text-gray-700 text-center">
              All our products undergo strict quality control to ensure reliability and durability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <span className="material-icons">local_shipping</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Fast Shipping</h3>
            <p className="text-gray-700 text-center">
              We offer quick delivery options to get you the parts you need when you need them.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <span className="material-icons">support_agent</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Expert Support</h3>
            <p className="text-gray-700 text-center">
              Our knowledgeable team is available to help you find the right parts for your vehicle.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Find Your Parts?</h2>
        <Link href="/browse" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Browse Our Catalog
        </Link>
      </div>
    </div>
  );
}
