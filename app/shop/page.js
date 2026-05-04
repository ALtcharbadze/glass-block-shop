'use client'
import { useState } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Glass Block Coffee Table',
    price: 349,
    category: 'Tables',
    description: 'Handcrafted coffee table made from 12 glass blocks. Stunning centerpiece for any living room.',
    image: '/table1.jpg',
  },
  {
    id: 2,
    name: 'Glass Block Pedestal - Small',
    price: 149,
    category: 'Pedestals',
    description: 'Perfect plant stand or display pedestal. Made from 6 glass blocks with wooden top.',
    image: '/padestal1.jpg',
  },
  {
    id: 3,
    name: 'Glass Block Pedestal - Large',
    price: 229,
    category: 'Pedestals',
    description: 'Tall display pedestal with LED fairy lights inside. Creates a magical warm glow.',
    image: '/padestal2.jpg',
  },
  {
    id: 4,
    name: 'Glass Block Side Table',
    price: 199,
    category: 'Tables',
    description: 'Compact side table perfect next to a sofa or bed. Made from 4 glass blocks.',
    image: '/table2.jpg',
  },
  {
    id: 5,
    name: 'LED Glow Pedestal',
    price: 279,
    category: 'Pedestals',
    description: 'Glass block pedestal with built-in warm LED lights. Perfect ambiance for any room.',
    image: '/padestal3.jpg',
  },
  {
    id: 6,
    name: 'Custom Glass Block Table',
    price: 499,
    category: 'Custom',
    description: 'Tell us your size and style — we build your dream glass block furniture piece.',
    image: '/custom1.jpg',
  },
    {
    id: 7,
    name: 'პატარა ზომის ყავის მაგიდა',
    price: 349,
    category: 'Custom',
    description: 'ჟურნალის და ყავის დეკორატიული მაგიდა.',
    image: '/Chair1.jpg',
  },
]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [added, setAdded] = useState(null)

  const categories = ['All', 'Tables', 'Pedestals', 'Custom']

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const addToCart = (product) => {
    setCart([...cart, product])
    setAdded(product.id)
    setTimeout(() => setAdded(null), 2000)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer">GLASBLOCK STUDIO</h1>
        </Link>
        <div className="flex gap-8 text-sm text-gray-600 items-center">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/shop" className="hover:text-black transition">Shop</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
          <div className="relative">
            <span className="text-black font-bold">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop</h2>
        <p className="text-gray-500 mb-10">All pieces are handcrafted and made to order. Shipping within Germany.</p>

        {/* Category Filter */}
        <div className="flex gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-widest border transition ${
                activeCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="border border-gray-100 rounded-sm hover:shadow-lg transition">
             <div className="h-56 overflow-hidden bg-gray-100">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover hover:scale-105 transition duration-300"
  />
</div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <span className="text-gray-900 font-bold">€{product.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">{product.description}</p>
                <button
                  onClick={() => addToCart(product)}
                  className={`w-full py-3 text-sm uppercase tracking-widest transition ${
                    added === product.id
                      ? 'bg-green-600 text-white'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {added === product.id ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-gray-400 border-t border-gray-100 mt-16">
        © 2025 Glasblock Studio. All rights reserved.
      </footer>
    </main>
  )
}