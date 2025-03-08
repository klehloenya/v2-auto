"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.password) {
          setError("All fields are required.");
          return;
        }
    
        try {
          const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error("Failed to register. Please try again.");
          }
    
          router.push("/auth/login");
        } catch (error) {
          setError("Registration failed. Try again.");
        }
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 shadow-md rounded-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
    
            {error && <p className="text-red-500 text-center">{error}</p>}
    
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
    
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
    
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
              >
                Register
              </button>
            </form>
    
            <p className="text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      );
}