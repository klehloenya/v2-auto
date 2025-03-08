import { prisma } from "@/app/lib/prisma";
import { NextResponse } from 'next/server';


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      const part = await prisma.part.findUnique({
        where: { id: params.id },
        include: {
          seller: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
  
      if (!part) {
        return NextResponse.json(
          { success: false, error: 'Part not found' },
          { status: 404 }
        );
      }
  
      return NextResponse.json({ success: true, data: part });
    } catch (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch part' },
        { status: 500 }
      );
    }
  }
