import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";


// GET all parts with filtering
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const condition = searchParams.get('condition');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    const where = {
      ...(category && { category }),
      ...(condition && { condition }),
      ...(minPrice || maxPrice) && {
        price: {
          ...(minPrice && { gte: parseFloat(minPrice) }),
          ...(maxPrice && { lte: parseFloat(maxPrice) }),
        },
      },
    };

    const parts = await prisma.part.findMany({
      where,
      include: {
        seller: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: parts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch parts' },
      { status: 500 }
    );
  }
}