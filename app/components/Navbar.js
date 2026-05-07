'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { FiInstagram } from 'react-icons/fi'

export default function Navbar() {

  const { cart } = useCart()

  const totalItems = cart.reduce(
    (sum, i) => sum + i.qty,
    0
  )

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">

      <div className="px-4 md:px-8 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-900 leading-tight"
        >
          SaMa <span className="font-light">Concept Store</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-base text-gray-900">

          <Link href="/">მთავარი</Link>

          <Link href="/shop">კოლექცია</Link>

          <Link href="/about">ჩვენ შესახებ</Link>

          <Link href="/contact">დაგვიკავშირდი</Link>

          <Link href="/cart" className="relative">

            🛒

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}

          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden flex flex-col gap-6 px-6 py-6 bg-white border-t border-gray-200 text-lg">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            მთავარი
          </Link>

          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
          >
            კოლექცია
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            ჩვენ შესახებ
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            დაგვიკავშირდი
          </Link>

          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative w-fit"
          >

            🛒 კალათა

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-6 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}

          </Link>

        </div>

      )}

    </nav>
  )
}