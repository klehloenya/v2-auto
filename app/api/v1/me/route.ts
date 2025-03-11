// app/api/v1/me/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";

export async function GET(request: NextRequest) {
  try {
    // Get token from cookies
    const token = cookies().get("auth_token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }
    
    // Verify token
    const decoded = verify(
      token, 
      process.env.JWT_SECRET || "fallback_secret"
    ) as { id: string };
    
    // Connect to database
    await connectToDatabase();
    
    // Find user by ID
    const user = await User.findById(decoded.id).select("-password");
    
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
    
    // Return user data
    return NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });
  } catch (error) {
    console.error("User fetch error:", error);
    return NextResponse.json(
      { message: "Unauthorized: Invalid token" },
      { status: 401 }
    );
  }
}
