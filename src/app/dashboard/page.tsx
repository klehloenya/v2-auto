"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch user data from the API
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/v1/me");
        
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
        // Redirect to login if there's an error
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [router]);
  
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/v1/logout", {
        method: "POST",
      });
      
      if (response.ok) {
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Email:</span> {user?.email}</p>
            <p><span className="font-medium">User ID:</span> {user?.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
