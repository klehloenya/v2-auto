import { NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { cookies } from 'next/headers'

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const cookieStore = await cookies()

        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
        }

        // Compare password with hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
        }

        const tokenData = {
            email: email,
            password: password,
          };
          const token = await jwt.sign(tokenData, process.env.JWT  || "logged", {
             expiresIn: "30d", //we want our user session to expire in 30 days
          });

          cookieStore.set("token", token, { httpOnly: true });

        return NextResponse.json({ message: "Login successful", user: { id: user.id, email: user.email, name: user.name }, accessToken : token }, { status: 200 });

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
    }
}
