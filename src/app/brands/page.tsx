import Link from "next/link";
export default function BrandsPage () {
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
          </div>
  );
}