// pages/catalog.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { PrismaClient } from '@prisma/client';

export default function Catalog({ categories, initialProducts }) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = async (category) => {
    setLoading(true);
    setSelectedCategory(category);
    
    try {
      const response = await fetch(`/api/products?category=${category === 'all' ? '' : category}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Auto Parts Catalog | Find Your Perfect Parts</title>
      </Head>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Auto Parts Catalog</h1>
        
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 space-x-2">
            <button
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleCategoryChange('all')}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">No products found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                {product.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-3 text-sm">{product.description.substring(0, 100)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                    <Link 
                      href={`/product/${product.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  
  try {
    // Get all products for initial load
    const initialProducts = await prisma.autoPart.findMany({
      take: 20,
    });
    
    // Get all unique categories
    const categoryData = await prisma.autoPart.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
    });
    
    const categories = categoryData.map(item => item.category);
    
    return {
      props: {
        initialProducts: JSON.parse(JSON.stringify(initialProducts)),
        categories: JSON.parse(JSON.stringify(categories)),
      },
    };
  } catch (error) {
    console.error('Error fetching catalog data:', error);
    return {
      props: {
        initialProducts: [],
        categories: [],
      },
    };
  } finally {
    await prisma.$disconnect();
  }
}
