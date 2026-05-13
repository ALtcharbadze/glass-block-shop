'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useCart } from "@/app/context/CartContext"
import products from '../data/products'

export default function Shop() {

  const searchParams = useSearchParams()

  const categoryFromUrl = searchParams.get('category')

 const defaultCategory =
  categoryFromUrl === 'stands'
    ? 'სადგამები'
    : categoryFromUrl === 'tables'
    ? 'მაგიდები'
    : 'ყველა'

  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  const [added, setAdded] = useState(null)

  const { addToCart } = useCart()

  const categories = [
    'ყველა',
    'მაგიდები',
    'სადგამები',
  ]

  const filtered =
    activeCategory === 'ყველა'
      ? products
      : products.filter(
          (p) => p.category === activeCategory
        )

  const handleAdd = (product) => {

    addToCart(product)

    setAdded(product.id)

    setTimeout(() => {
      setAdded(null)
    }, 1500)
  }

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

        {/* EMPTY STANDS */}

        {activeCategory === 'სადგამები' ? (

          <div className="text-center py-24">

            <h3 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">

              პროდუქტი მალე დაემატება

            </h3>

            <p className="text-gray-600 text-lg">

              სადგამების კოლექცია მალე განახლდება.

            </p>

          </div>

        ) : (

          /* PRODUCTS */

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {filtered.map((product) => (

              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="card-box hover-lift soft-shadow overflow-hidden block"
              >

                {/* IMAGE */}

                <div className="h-56 bg-gray-100 overflow-hidden">

                  <img
                    src={product.images ? product.images[0] : product.image}
                    alt={product.name}
                    className="w-full h-full object-cover image-hover"
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
                      e.preventDefault()
                      handleAdd(product)
                    }}
                    className={`button-primary rounded-xl w-full py-3 text-sm ${
                      added === product.id
                        ? 'bg-green-600 text-white'
                        : ''
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

        )}

      </div>

      {/* FOOTER */}

      <footer className="px-8 py-12 text-center text-sm text-gray-500 border-t border-gray-200 mt-20">

        © 2026 SaMa Concept Store. All rights reserved.

      </footer>

    </main>
  )
}