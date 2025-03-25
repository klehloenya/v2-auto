// pages/api/products.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { category } = req.query;

  try {
    const whereClause = category ? { category } : {};
    
    const products = await prisma.autoPart.findMany({
      where: whereClause,
      take: 50,
    });

    return res.status(200).json(products);
  } catch (error) {
    console.error('Products API error:', error);
    return res.status(500).json({ message: 'Error fetching products' });
  } finally {
    await prisma.$disconnect();
  }
}
