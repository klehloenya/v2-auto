mport { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

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

// POST new part
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const price = parseFloat(formData.get('price') as string);
    const condition = formData.get('condition') as string;
    const category = formData.get('category') as string;
    const images = formData.getAll('images') as File[];

    // Upload images to your storage service (e.g., S3, Cloudinary)
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        // Implement your image upload logic here
        return 'image_url';
      })
    );

    const part = await prisma.part.create({
      data: {
        title,
        description,
        price,
        condition,
        category,
        images: imageUrls,
        sellerId: session.user.id,
      },
    });

    return NextResponse.json({ success: true, data: part }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create part listing' },
      { status: 500 }
    );
  }
}
