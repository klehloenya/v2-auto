"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ success: false, error: false, message: "" });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        error: true,
        message: "Please fill in all required fields."
      });
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        success: true,
        error: false,
        message: "Thank you! Your message has been sent successfully."
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setFormStatus({
        success: false,
        error: true,
        message: "There was an error sending your message. Please try again."
      });
    }
  };

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

    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-6 mb-12">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <div className="w-20 h-1 bg-blue-600"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-8">
            Have questions about our products or need assistance with your order? 
            Our team is here to help. Fill out the form or use our contact information below.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">
                <span className="material-icons">location_on</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Our Location</h3>
                <p className="text-gray-700">Holberton School Lesotho,Main North 1 Maseru Machache </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">
                <span className="material-icons">email</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-gray-700">support@autopartsmarket.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">
                <span className="material-icons">phone</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-gray-700">(+266) 5905-9954 & (+266) 6876 1648</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">
                <span className="material-icons">schedule</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Hours of Operation</h3>
                <p className="text-gray-700">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-700">Saturday: 10am - 4pm</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          {formStatus.success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {formStatus.message}
            </div>
          )}
          
          {formStatus.error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {formStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
