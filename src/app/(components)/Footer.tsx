"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-600 mb-4">
              AutoParts Marketplace connects buyers and sellers of quality automotive parts. We're dedicated to providing the best experience for automotive enthusiasts and professionals alike.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-blue-700">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-700">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-700">Contact</Link></li>
              <li><Link href="/marketplace/parts" className="text-gray-600 hover:text-blue-700">Browse Parts</Link></li>
              <li><Link href="/marketplace/sell" className="text-gray-600 hover:text-blue-700">Sell Parts</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-700">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-blue-700">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-blue-700">Returns & Refunds</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-600 hover:text-blue-700">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-blue-700">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-700 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Auto Parts Street, Engine City, CA 12345
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-700 mr-2 flex-shrink-0" />
                <a href="mailto:support@autoparts.com" className="text-gray-600 hover:text-blue-700">
                  support@autoparts.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-700 mr-2 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-700">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="max-w-md mx-auto">
            <h3 className="font-bold text-center mb-4">Subscribe to our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {currentYear} AutoParts Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
