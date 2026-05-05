'use client'

import { useState } from 'react'
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    name: 'მინის ბლოკის საკავა მაგიდა',
    price: 349,
    category: 'მაგიდები',
    description: 'ხელნაკეთი საკავა მაგიდა 12 მინის ბლოკისგან.',
    image: '/table1.jpg',
  },
  {
    id: 2,
    name: 'მინის ბლოკის პიედესტალი - პატარა',
    price: 149,
    category: 'პიედესტალები',
    description: 'შესანიშნავი მცენარის სადგამი ხის ზედაპირით.',
    image: '/padestal1.jpg',
  },
  {
    id: 3,
    name: 'მინის ბლოკის პიედესტალი - დიდი',
    price: 229,
    category: 'პიედესტალები',
    description: 'მაღალი პიედესტალი LED განათებით შიგნით.',
    image: '/padestal2.jpg',
  },
  {
    id: 4,
    name: 'მინის ბლოკის გვერდითი მაგიდა',
    price: 199,
    category: 'მაგიდები',
    description: 'კომპაქტური გვერდითი მაგიდა 4 მინის ბლოკისგან.',
    image: '/table2.jpg',
  },
  {
    id: 5,
    name: 'LED განათების პიედესტალი',
    price: 279,
    category: 'პიედესტალები',
    description: 'მინის ბლოკის პიედესტალი ჩაშენებული LED განათებით.',
    image: '/padestal3.jpg',
  },
  {
    id: 6,
    name: 'ინდივიდუალური შეკვეთა',
    price: 499,
    category: 'ინდივიდუალური',
    description: 'გვითხარით თქვენი ზომა და სტილი — ჩვენ ავაშენებთ.',
    image: '/custom1.jpg',
  },
]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('ყველა')
  const [added, setAdded] = useState(null)

  const { addToCart } = useCart()

  const categories = ['ყველა', 'მაგიდები', 'პიედესტალები', 'ინდივიდუალური']

  const filtered =
    activeCategory === 'ყველა'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const handleAdd = (product) => {
    addToCart(product)
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <main className="min-h-screen">

      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* Title */}
        <h2 className="text-5xl font-bold text-black mb-5">კოლექცია</h2>

        <p className="text-gray-500 mb-10">
          ყველა ნაწარმი ხელნაკეთია და მზადდება შეკვეთით.
        </p>

        {/* Filters */}
        <div className="flex gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm border transition ${
                activeCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 text-gray-600 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border border-gray-100 overflow-hidden"
            >
              <div className="h-56 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-black">{product.name}</h3>
                  <span className="font-semibold text-black">€{product.price}</span>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  {product.description}
                </p>

                <button
                  onClick={() => handleAdd(product)}
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
            </div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-gray-400 border-t border-gray-100">
        © 2026 SaMa Studio. All rights reserved.
      </footer>

    </main>
  )
}