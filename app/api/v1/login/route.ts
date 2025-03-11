// app/api/v1/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcrypt";
import { connectToDatabase } from "../../../lib/db"; // Fixed path
import { User } from "../../../models/User"; // Fixed path
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { email, password } = await request.json();

    // Validate inputs
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = sign(
      {
        id: user._id,
        email: user.email,
        name: user.name
      },
      process.env.JWT_SECRET || "fallback_secret", // Use a secure secret in production
      { expiresIn: "7d" }
    );

    // Set the token as an HTTP-only cookie
    (await
      // Set the token as an HTTP-only cookie
      cookies()).set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    // Return success response
    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "An error occurred during login" },
      { status: 500 }
    );
  }
}