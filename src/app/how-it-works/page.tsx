// app/how-it-works/page.tsx
import Link from 'next/link';

export default function HowItWorks() {
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

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">How It Works</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to our marketplace! Here's how you can buy and sell parts easily.
          </p>
          
          <section className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">For Buyers</h2>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Browse available parts using our search engine and filters.</li>
              <li>View seller information and part details before purchasing.</li>
              <li>Contact the seller if you have any questions.</li>
              <li>Securely complete your purchase and arrange delivery.</li>
            </ul>
          </section>
          
          <section className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">For Sellers</h2>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Create an account and list your parts for sale.</li>
              <li>Provide clear descriptions and images for buyers.</li>
              <li>Respond to inquiries and negotiate pricing if needed.</li>
              <li>Complete transactions securely and ship items as agreed.</li>
            </ul>
          </section>
        </div>
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