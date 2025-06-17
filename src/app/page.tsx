'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';
import { fetchAllProducts } from '../apis/getProducts';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    }
    loadProducts();
  }, []);

  // Filter products by search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 max-w-md w-full"
      />

      {/* Category filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-6 p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="all" className="bg-gray-800 text-white">All Categories</option>
        <option value="electronics" className="bg-gray-800 text-white">Electronics</option>
        <option value="men's clothing" className="bg-gray-800 text-white">Men&apos;s Clothing</option>
        <option value="women's clothing" className="bg-gray-800 text-white">Women&apos;s Clothing</option>
        {/* Add your categories */}
      </select>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </main>
  );
}