// app/api/v1/parts/update-part/route.ts
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request): Promise<Response> {
  try {
    // Parse the incoming request body
    const body = await req.json();
    const { id, category } = body;

    // Validate input
    if (!id || !category) {
      return new Response(
        JSON.stringify({ error: 'Part ID and new category are required.' }),
        { status: 400 }
      );
    }

    // Check if part exists
    const partExists = await prisma.part.findUnique({
      where: { id },
    });

    if (!partExists) {
      return new Response(
        JSON.stringify({ error: 'Part not found' }),
        { status: 404 }
      );
    }

    // Update the part with the given ID and new category
    const updatedPart = await prisma.part.update({
      where: { id },
      data: { category },
    });

    // Return the updated part as JSON
    return NextResponse.json(updatedPart);
  } catch (error: unknown) {
    // Type assertion to ensure error is of type Error
    if (error instanceof Error) {
      console.error("Error updating part:", error.message); // Log error message for debugging
      return new Response(
        JSON.stringify({ error: 'Internal Server Error', details: error.message }),
        { status: 500 }
      );
    } else {
      // Handle the case where the error is not an instance of Error
      return new Response(
        JSON.stringify({ error: 'Internal Server Error', details: 'Unknown error' }),
        { status: 500 }
      );
    }
  }
}
