import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
    try {
      const body = await req.json(); // Parse incoming JSON request body
  
      const { title, description, price, condition, category, images, sellerId } = body; // Extract sellerId from the request body
  
      // Validate input
      if (!title || !description || !price || !condition || !category || !images || !sellerId) {
        return new Response(
          JSON.stringify({ error: 'All fields are required.' }),
          { status: 400 }
        );
      }
  
      // Create a new part
      type Part = {
        id: string;
        title: string;
        description: string;
        price: number;
        condition: string; // Enforcing the specific condition types
        category: string;
        images: string[];
        createdAt: string;
        updatedAt: string;
        sellerId: string;
      };

      const part = await prisma.part.create({
        data: {
          title,
          description,
          price,
          condition,
          category,
          images,
          sellerId,
        },
      });
      
      const formattedPart: Part = {
        ...part,
        createdAt: part.createdAt.toISOString(), // Convert Date to string
        updatedAt: part.updatedAt.toISOString(), // Convert Date to string
      };
      
      return NextResponse.json(formattedPart);
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Internal Server Error', details: error }),
        { status: 500 }
      );
    }
}       
  