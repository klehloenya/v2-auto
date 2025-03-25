// pages/api/search.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { query } = req.query;

  try {
    const products = await prisma.autoPart.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            category: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      take: 20,
    });

    return res.status(200).json(products);
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ message: 'Error searching for products' });
  } finally {
    await prisma.$disconnect();
  }
}
