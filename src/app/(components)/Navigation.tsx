"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">AutoParts Market</h1>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className={pathname === "/" ? "font-bold underline" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/marketplace/parts" className={pathname.includes("parts") ? "font-bold underline" : ""}>
                Browse
              </Link>
            </li>
            <li>
              <Link href="/marketplace/sell" className={pathname.includes("sell") ? "font-bold underline" : ""}>
                Sell
              </Link>
            </li>
            <li>
              <Link href="/auth/login" className={pathname.includes("login") ? "font-bold underline" : ""}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
