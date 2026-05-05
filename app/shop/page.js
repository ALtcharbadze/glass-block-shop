'use client'
import { useState } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'მინის ბლოკის საკავა მაგიდა',
    price: 349,
    category: 'მაგიდები',
    description: 'ხელნაკეთი საკავა მაგიდა 12 მინის ბლოკისგან. შესანიშნავი ცენტრალური ნაწილი ნებისმიერი მისაღები ოთახისთვის.',
    image: '/table1.jpg',
  },
  {
    id: 2,
    name: 'მინის ბლოკის პიედესტალი - პატარა',
    price: 149,
    category: 'პიედესტალები',
    description: 'შესანიშნავი მცენარის სადგამი ან საჩვენებელი პიედესტალი. დამზადებულია 6 მინის ბლოკისგან ხის ზედაპირით.',
    image: '/padestal1.jpg',
  },
  {
    id: 3,
    name: 'მინის ბლოკის პიედესტალი - დიდი',
    price: 229,
    category: 'პიედესტალები',
    description: 'მაღალი საჩვენებელი პიედესტალი LED განათებით შიგნით. ქმნის მაგიურ თბილ განწყობას.',
    image: '/padestal2.jpg',
  },
  {
    id: 4,
    name: 'მინის ბლოკის გვერდითი მაგიდა',
    price: 199,
    category: 'მაგიდები',
    description: 'კომპაქტური გვერდითი მაგიდა, სრულყოფილია დივნის ან საწოლის გვერდით. დამზადებულია 4 მინის ბლოკისგან.',
    image: '/table2.jpg',
  },
  {
    id: 5,
    name: 'LED განათების პიედესტალი',
    price: 279,
    category: 'პიედესტალები',
    description: 'მინის ბლოკის პიედესტალი ჩაშენებული თბილი LED განათებით. სრულყოფილი განწყობა ნებისმიერი ოთახისთვის.',
    image: '/padestal3.jpg',
  },
  {
    id: 6,
    name: 'ინდივიდუალური შეკვეთა',
    price: 499,
    category: 'ინდივიდუალური',
    description: 'გვითხარით თქვენი ზომა და სტილი — ჩვენ ავაშენებთ თქვენი ოცნების მინის ბლოკის ავეჯს.',
    image: '/custom1.jpg',
  },
]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('ყველა')
  const [cart, setCart] = useState([])
  const [added, setAdded] = useState(null)
  const [showCart, setShowCart] = useState(false)

  const categories = ['ყველა', 'მაგიდები', 'პიედესტალები', 'ინდივიდუალური']

  const filtered = activeCategory === 'ყველა'
    ? products
    : products.filter(p => p.category === activeCategory)

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setAdded(product.id)
    setTimeout(() => setAdded(null), 2000)
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-40">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer">SaMa Studio</h1>
        </Link>
        <div className="flex gap-8 text-sm text-gray-600 items-center">
          <Link href="/" className="hover:text-black transition">მთავარი</Link>
          <Link href="/shop" className="hover:text-black transition">კოლექცია</Link>
          <Link href="/about" className="hover:text-black transition">ჩვენს შესახებ</Link>
          <Link href="/contact" className="hover:text-black transition">დაგვიკავშირდი</Link>

          {/* Basket Icon */}
          <button
            onClick={() => setShowCart(true)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setShowCart(false)}
          />
          <div className="w-96 bg-white h-full shadow-2xl flex flex-col">
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">თქვენი კალათა ({totalItems})</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-black transition text-2xl"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <div className="text-5xl mb-4">🛒</div>
                <p className="text-gray-500">თქვენი კალათა ცარიელია</p>
                <button
                  onClick={() => setShowCart(false)}
                  className="mt-6 border border-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
                >
                  შოპინგის გაგრძელება
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 items-center border-b border-gray-50 pb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-sm bg-gray-100"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">€{item.price} × {item.qty}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-900">€{item.price * item.qty}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-gray-400 hover:text-red-500 transition mt-1"
                        >
                          წაშლა
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-5 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">სულ</span>
                    <span className="text-xl font-bold text-gray-900">€{totalPrice}</span>
                  </div>
                  <Link href="/contact">
                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition"
                    >
                      შეკვეთა საკონტაქტო ფორმით
                    </button>
                  </Link>
                  <button
                    onClick={() => setShowCart(false)}
                    className="w-full mt-3 border border-gray-200 text-gray-600 py-3 text-sm uppercase tracking-widest hover:border-black transition"
                  >
                    შოპინგის გაგრძელება
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">კოლექცია</h2>
        <p className="text-gray-500 mb-10">ყველა ნაწარმი ხელნაკეთია და მზადდება შეკვეთით. მიწოდება საქართველოში და EU-ში.</p>

        {/* Category Filter */}
        <div className="flex gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm border transition ${
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
                  {added === product.id ? '✓ დამატებულია' : 'კალათაში დამატება'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-gray-400 border-t border-gray-100 mt-16">
        © 2025 SaMa Studio · თბილისი, საქართველო · ყველა უფლება დაცულია
      </footer>
    </main>
  )
}