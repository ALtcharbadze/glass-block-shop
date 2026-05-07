'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from "@/app/context/CartContext";
import products from '../data/products';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('ყველა');
  const [added, setAdded] = useState(null);

  const { addToCart } = useCart();

  const categories = [
    'ყველა',
    'მაგიდები',
    'პიედესტალები',
    'ინდივიდუალური',
  ];

  const filtered =
    activeCategory === 'ყველა'
      ? products
      : products.filter(
          (p) => p.category === activeCategory
        );

  const handleAdd = (product) => {
    addToCart(product);

    setAdded(product.id);

    setTimeout(() => {
      setAdded(null);
    }, 1500);
  };

  return (
    <main className="min-h-screen">

      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-black mb-5">
          კოლექცია
        </h2>

        <p className="text-gray-500 mb-10">
          ყველა ნაწარმი ხელნაკეთია და მზადდება შეკვეთით.
        </p>

        {/* FILTERS */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm border transition ${
                activeCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 text-gray-700 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {filtered.map((product) => (

            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="border border-gray-200 overflow-hidden block hover:shadow-xl transition bg-white"
            >

              {/* IMAGE */}
              <div className="h-56 bg-gray-100 overflow-hidden">
                <img
                  src={product.images ? product.images[0] : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex justify-between items-start gap-4 mb-3">

                  <h3 className="font-semibold text-black leading-snug">
                    {product.name}
                  </h3>

                  <span className="font-semibold text-black whitespace-nowrap">
                    {product.price.toFixed(2)} ლარი
                  </span>

                </div>

                <p className="text-sm text-gray-500 mb-6">
                  {product.description}
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAdd(product);
                  }}
                  className={`w-full py-3 text-sm transition ${
                    added === product.id
                      ? 'bg-green-600 text-white'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {added === product.id
                    ? '✓ დამატებულია'
                    : 'კალათაში დამატება'}
                </button>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* FOOTER */}
      <footer className="px-8 py-12 text-center text-sm text-gray-500 border-t border-gray-200 mt-20">
        © 2026 SaMa Concept Store. All rights reserved.
      </footer>

    </main>
  );
}