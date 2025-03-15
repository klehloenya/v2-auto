import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return NextResponse.json(
      { success: true, data: { id: user.id, email: user.email, name: user.name } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error},
      { status: 500 }
    );
  }
}
