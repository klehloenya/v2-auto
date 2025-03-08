import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold mb-4">About Us</h3>
                        <p className="text-gray-600">
                            AutoParts Marketplace connects buyers and sellers of quality automotive parts.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>Email: support@autoparts.com</li>
                            <li>Phone: (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 pt-8 border-t text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} AutoParts Marketplace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
