// pages/search.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <>
      <Head>
        <title>{query ? `Search results for "${query}"` : 'Search'} | Auto Parts Store</title>
      </Head>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">
          {query ? `Search results for "${query}"` : 'Search our catalog'}
        </h1>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">No products found matching "{query}"</p>
            <Link href="/catalog" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Browse all products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
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