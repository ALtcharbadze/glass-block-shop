'use client'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cart } = useCart()

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 md:px-8 py-4 md:py-5 flex justify-between items-center">

      {/* Logo */}
      <Link
        href="/"
        className="text-xl md:text-3xl font-semibold tracking-wide text-gray-900"
      >
        SaMa <span className="font-light">Concept Store</span>
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-4 md:gap-10 text-sm md:text-base text-gray-900">
        <Link href="/">მთავარი</Link>
        <Link href="/shop">კოლექცია</Link>
        <Link href="/about">ჩვენ შესახებ</Link>
        <Link href="/contact">დაგვიკავშირდი</Link>

        {/* Cart Icon */}
        <Link href="/cart" className="relative">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}